"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
let conceptPanel;
let templatePanel;
let customTemplatePanel;
class ToolsWebviewProvider {
    extensionUri;
    constructor(extensionUri) {
        this.extensionUri = extensionUri;
    }
    async resolveWebviewView(webviewView) {
        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [this.extensionUri]
        };
        // load html
        let html = await this.file2string("./html/tools/tools.html");
        let videoBtn = vscode.workspace.getConfiguration().get('matplotlib-pilot.videoButton');
        if (videoBtn) {
            html = html.replace(/<!-- videoBotton -->/g, `<button  id="video">演示视频</button>`);
        }
        webviewView.webview.html = html;
        // 监听消息
        webviewView.webview.onDidReceiveMessage(message => {
            if (message.id === "concept") {
                this.openConceptPanel();
            }
            if (message.id === "template") {
                this.openTemplatePanel();
            }
            if (message.id === "customTemplate") {
                this.openCustomTemplatePanel();
            }
            if (message.id === "video") {
                vscode.window.showInformationMessage('随后上线!可以通过`Ctrl+,`设置matplotlib-pilot.videoBotton变量关闭（重启生效）');
            }
            return;
        });
    }
    checkFileExist(fileName) {
        const workspaceFolder = vscode.workspace.workspaceFolders[0];
        const targetPath = path.join(workspaceFolder.uri.fsPath, `${fileName}.ipynb`);
        return fs.existsSync(targetPath);
    }
    async file2string(filename) {
        const filePath = path.join(this.extensionUri.fsPath, filename);
        let html = fs.readFileSync(filePath, 'utf8');
        return html;
    }
    async openConceptPanel() {
        if (conceptPanel) {
            conceptPanel.reveal(vscode.ViewColumn.One);
        }
        else {
            conceptPanel = vscode.window.createWebviewPanel('concept', '常见概念', vscode.ViewColumn.One, {});
            conceptPanel.webview.html = await this.file2string('./html/tools/concept.html');
            conceptPanel.onDidDispose(() => {
                conceptPanel = undefined;
            });
        }
    }
    async openTemplatePanel() {
        if (templatePanel) {
            templatePanel.reveal(vscode.ViewColumn.One);
        }
        else {
            templatePanel = vscode.window.createWebviewPanel('concept', '绘图模板', vscode.ViewColumn.One, {
                enableScripts: true
            });
            templatePanel.webview.html = await this.file2string('./html/tools/template.html');
            templatePanel.webview.onDidReceiveMessage(async (message) => {
                console.log(message);
                const fileName = await vscode.window.showInputBox({
                    prompt: '请输入ipynb文件名（无需后缀名）',
                    placeHolder: "demo",
                    value: "demo",
                    ignoreFocusOut: true
                });
                if (!fileName) {
                    vscode.window.showInformationMessage('取消创建。原因：未输入文件名.');
                    return;
                }
                const isFileExist = this.checkFileExist(fileName);
                if (isFileExist) {
                    vscode.window.showWarningMessage(`文件 ${fileName}.ipynb 已存在，请更换名字或先手动移除该文件`);
                    return;
                }
                const templatePath = path.join(this.extensionUri.fsPath, `./html/tools/views/template/ipynb/${message.id}.ipynb`);
                await this.generateIPYNB(fileName, templatePath);
            });
            templatePanel.onDidDispose(() => {
                conceptPanel = undefined;
            });
        }
    }
    async openCustomTemplatePanel() {
        if (customTemplatePanel) {
            customTemplatePanel.reveal(vscode.ViewColumn.One);
        }
        else {
            let cunstomTemplateHtml = vscode.workspace.getConfiguration().get('matplotlib-pilot.cunstomTemplateHtml');
            if (cunstomTemplateHtml === "") {
                vscode.window.showInformationMessage("请先在VS Code的设置界面（Ctrl+,）通过变量cunstomTemplateHtml和cunstomTemplateJson定义自定义模板网页和路径信息");
                return;
            }
            fs.readFile(cunstomTemplateHtml, 'utf8', (err, html) => {
                if (err) {
                    vscode.window.showInformationMessage(`读取文件 ${cunstomTemplateHtml} 时发生错误，${err}`);
                    return;
                }
                customTemplatePanel = vscode.window.createWebviewPanel('CustomTemplate', '自定义模板', vscode.ViewColumn.One, {
                    enableScripts: true
                });
                customTemplatePanel.webview.html = html;
                customTemplatePanel.webview.onDidReceiveMessage(async (message) => {
                    const fileName = await vscode.window.showInputBox({ prompt: '请输入ipynb文件名（无需后缀名）' });
                    if (!fileName) {
                        vscode.window.showErrorMessage('未输入文件名.');
                        return;
                    }
                    const isFileExist = this.checkFileExist(fileName);
                    if (isFileExist) {
                        vscode.window.showWarningMessage(`文件 ${fileName}.ipynb 已存在，请更换名字或先手动移除该文件`);
                        return;
                    }
                    await this.generateIPYNB(fileName, message.ipynb);
                });
                customTemplatePanel.onDidDispose(() => {
                    customTemplatePanel = undefined;
                });
            });
        }
    }
    async generateIPYNB(fileName, templatePath) {
        if (vscode.workspace.workspaceFolders === undefined || vscode.workspace.workspaceFolders.length === 0) {
            vscode.window.showErrorMessage('请先打开工作区.');
            return;
        }
        const workspaceFolder = vscode.workspace.workspaceFolders[0];
        // 读取模板文件内容
        const isFileExist = fs.existsSync(templatePath);
        if (isFileExist) {
            const templateContent = fs.readFileSync(templatePath, 'utf-8');
            // 写入新的 ipynb 文件
            const newFilePath = path.join(workspaceFolder.uri.fsPath + `/${fileName}.ipynb`);
            fs.mkdirSync(path.dirname(newFilePath), { recursive: true });
            fs.writeFileSync(newFilePath, templateContent);
            vscode.window.showInformationMessage(`${fileName}.ipynb文件在工作区路径创建成功`);
        }
        else {
            vscode.window.showErrorMessage(`模板文件${templatePath}不存在`);
        }
    }
}
exports.default = ToolsWebviewProvider;
//# sourceMappingURL=toolsWebviewProvider.js.map