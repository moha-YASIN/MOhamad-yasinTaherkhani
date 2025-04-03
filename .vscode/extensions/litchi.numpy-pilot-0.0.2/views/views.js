const vscode = acquireVsCodeApi();
let isDoubleClickProcessing = false;

const buttons = document.querySelectorAll('button');

// 假设buttons是一个包含你想要添加事件监听器的按钮元素的数组
buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        if (!isDoubleClickProcessing) {
            // 设置标志，等待可能的双击
            isDoubleClickProcessing = true;
            setTimeout(() => {
                if (isDoubleClickProcessing) {
                    // 如果没有发生双击，则处理单击事件
                    vscode.postMessage({
                        "id": this.id,
                        "snippets": this.dataset.snippets,
                        "event": "click"
                    });
                    isDoubleClickProcessing = false;
                }
            }, 200); // 双击检测时间阈值
        } else {
            // 处理双击事件
            vscode.postMessage({
                "id": this.id,
                "snippets": this.dataset.snippets,
                "event": "doubleClick"
            });
            isDoubleClickProcessing = false;
        }
    });
});

