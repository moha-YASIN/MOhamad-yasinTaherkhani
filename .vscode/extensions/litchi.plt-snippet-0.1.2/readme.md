# Matplotlib Pilot Chinese

[![Version](https://img.shields.io/visual-studio-marketplace/v/litchi.plt-snippet?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=litchi.plt-snippet)
[![Downloads](https://img.shields.io/visual-studio-marketplace/d/litchi.plt-snippet?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=litchi.plt-snippet)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/litchi.plt-snippet?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=litchi.plt-snippet)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/litchi.plt-snippet?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=litchi.plt-snippet)

Matplotlib Pilot 是一个提供 matplotlib 代码片段的软件，旨在平缓 matplotlib 的学习曲线，分享和管理绘图模板，提高绘图效率。

**从 0.1.0 开始正式发行，但仍然出于活跃开发阶段，如果您遇到使用问题可以在插件页面将插件回退到之前的版本**

**中文版本更新较为活跃，For the English version, please go to [Matplotlib Pilot](https://marketplace.visualstudio.com/items?itemName=litchi.matplotlib-pilot).**

**强烈推荐将此插件配置主视图的右侧（拖拽图标向页面右侧即可），避免侧边栏的反复切换**

![usage](https://github.com/wuyao1997/Matplotlib-Pilot-Chinese/raw/HEAD/media/readme_image/MPC_usage.gif)

## 功能和特点

1. 侧边栏内提供 Matplotlib 的常用绘图 API，单击就会将相应代码片段插入编辑器光标处
2. 用户可以便利的修改侧边栏，包括：编辑代码片段、增删按钮
3. 侧边栏的`颜色选择器`可以自由选择合适的颜色，选择完成后自动复制颜色字符串
4. `常见概念`按钮可以本地查看 Matplotlib 中`color`、`marker`、`linestyle`、`cmap`等属性
5. `绘图模板`按钮可以打开模板浏览器，期内提供了使用频率较高的一些绘图模板`notebook`文件，并在未来会不断升级
6. `自定义模板`按钮可以在配置后管理用户自定义的`notebook`模板文件，并且不局限于`Matplotlib`脚本
7. 并且可以轻松切换原生侧边栏和自定义侧边栏视图

## 安装依赖

matplotlib 是一个用于数据可视化的 Python 包，使用前确保已安装：

```sh
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple matplotlib
```

推荐在`ipynb`文件中使用此插件，
在 VS Code 中新建后缀为`.ipynb`的文件后将自动推荐`Jupyter`插件，视网络情况可能需要手动安装`ipykernel`

```sh
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple ipykernel
```

同时保证 `VS Code` 版本高于 `1.72.0`。

## 功能设置

### 修改侧边栏视图及其代码片段

自版本 0.0.33 开始，用户可以通过点击按钮轻松自定义侧边栏代码片段按钮，
例如修改字体按钮对应的代码片段内容，使其匹配当前本地环境；
又如不喜欢默认的绘制风格，那么可以新建一个按钮，并填充自己需要的代码。

设置过程如下：

1. 如下图，在侧边栏的最低端设置了两个按钮和一个切换开关。

![sidebar manage](https://github.com/wuyao1997/Matplotlib-Pilot-Chinese/raw/HEAD/media/readme_image/sidebar_manage.png)

- 在未配置自定义侧边栏**notebook**文件或找不到时，点击`自定义按钮`将调起文件保存对话框，请将文件保存到稳定路径中（路径名变化或者文件重命名后将导致配置失效，需要重新配置），保存后将自动配置好`Matplotlib Pilot Chinese: Custom SideBar Notebook Path`变量。
- 在配置好侧边栏**notebook**文件路径后，再次点击`自定义按钮`时，将会打开本地配置的**notebook**文件，此时用户可以参考下图**notebook**文件

![template_note](https://github.com/wuyao1997/Matplotlib-Pilot-Chinese/raw/HEAD/media/readme_image/template_note.png)

2. 点击`刷新`按钮将会根据刚才定义的**notebook**文件生成侧边栏视图网页，为了等待视图网页生成，约 1s 后才会更新侧边栏视图

3. 如果侧边栏视图异常（这可能是未按照符合要求格式编写的**notebook**文件导致的），可以按`F1`调出`VS Code`内的命令面板，输入`MPC: reset sidebar`重置插件所有配置项，这个命令不会删除自定义文件，因此是安全的

![modify](https://github.com/wuyao1997/Matplotlib-Pilot-Chinese/raw/HEAD/media/readme_image/reset.png)

4. 默认的侧边栏采用原生视图，如果想要插件打开时就是自定义视图，可以按`Ctrl+,`打开`VS Code`设置页面，在页面最上方的搜索栏中键入`Matplotlib Pilot Chinese`找到`Matplotlib Pilot Chinese: Custom Side Bar`，勾选即可

### 自定义模板

本插件提供自定义绘图任务模板功能，用户可以将自己常用的绘图脚本制作成`notebook`文件（后缀名为`ipynb`），然后通过下述流程便可以通过`自定义模板`按钮调出模板浏览界面并使用相应模板来创建新任务。
事实上这也不局限于`Matplotlib`任务脚本，用户也可以添加其它自己常用的脚本，例如数据滤波、拟合等。

1. 首先用户需要准备好自己的`ipynb`文件和相应的封面图片，其中封面图片建议长宽比近似为 1:1，同时图片尺寸建议控制在 100kB 以下；然后编写一个如下格式的`html`文件，然后只需要修改`<div class="container">`中的内容，主要参数含义如下：

> - `h2`中的汉字: 本组若干个脚本的标题，建议将功能相近的脚本添加到同一组中
> - `img`元素中的`src`内容：指向封面图片的相对路径，相对 html 文件的路径
> - `id`值：建议给一个独一无二的编号，可以为`组名`+`数字或含义`
> - `data-ipynbpath`的值：绘图脚本的绝对路径
> - `button`元素中的字符：按钮上将体现的文字，建议为脚本的功能描述，字数尽量简短些，不要超过 12 个汉字

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>自定义模板</title>
  </head>
  <body>
    <div class="container">
      <h2>第一组</h2>
      <div class="box">
        <img src="https://github.com/wuyao1997/Matplotlib-Pilot-Chinese/raw/HEAD/cover/a.png" alt="item-a" />
        <button
          id="a"
          data-ipynbpath="D:\vscode_plugin\plt-snippet\customTemplate\notebook\a.ipynb"
        >
          item-a
        </button>
      </div>
      <div class="box">
        <img src="https://github.com/wuyao1997/Matplotlib-Pilot-Chinese/raw/HEAD/cover/b.png" alt="item-b" />
        <button
          id="b"
          data-ipynbpath="D:\vscode_plugin\plt-snippet\customTemplate\notebook\b.ipynb"
        >
          item-b
        </button>
      </div>
      <h2>第二组</h2>
      <div class="box">
        <img src="https://github.com/wuyao1997/Matplotlib-Pilot-Chinese/raw/HEAD/cover/c.png" alt="item-c" />
        <button
          id="c"
          data-ipynbpath="D:\vscode_plugin\plt-snippet\customTemplate\notebook\c.ipynb"
        >
          item-c
        </button>
      </div>
      <div class="box">
        <img src="https://github.com/wuyao1997/Matplotlib-Pilot-Chinese/raw/HEAD/cover/a.png" alt="item-d" />
        <button
          id="d"
          data-ipynbpath="D:\vscode_plugin\plt-snippet\customTemplate\notebook\d.ipynb"
        >
          item-d
        </button>
      </div>
    </div>
  </body>
</html>
```

2. 编写完成后，在 VS Code 中按`F1`键调出命令面板，然后输入`MPC: define custom template`后会显示相应命令，点击后会调出文件选择对话框，选择上面编写的`html`文件便会进入模板`HTML`制作，根据模板的数量不同等待时间也不同，通常会瞬间完成。制作过程中不会检测`notebook`文件是否存在，但会读取封面文件，如果读取失败那么会使用默认的封面进行替代并在`VS Code`内弹窗提示。

3. 这一步通常是自动完成的，模板制作完成后，在 VS Code 中使用快捷键`Ctrl + ,`调出设置界面，在左侧目录选择选择扩展然后定位到`Matplotlib Pilot Chinese`，在`Custom Template HTML`一项中填写上面制作的模板`HTML`路径，例如：`D:\path\to\customTemplate.html`。

### 内置命令

- `MPC: refresh sidebar`命令，该命令可以从默认 notebook 文件刷新侧边栏
- `MPC: modify sidebar`命令，调出默认侧面板视图对应的 notebook 文件，
  用户直接修改此文件并保存后，调用`MPC: refresh sidebar`命令，
  重新加载插件时即可使用修改后的侧边栏视图
- `MPC: reset sidebar`命令，重置关于侧边栏的配置项，当自定义内容发生错误时，可以使用此命令退回，这个命令不会删除自定义文件
- `MPC: define custom template`命令，将用户指定的网页转换为可以嵌入自定义模板视图的网页，并将转换后的文件自动配置到配置项 `Custom Template Html`
- `MPC: load txt data`命令，调起文件对话框，选择要读取的文本文件，确认后自动粘贴代码片段
- `MPC: load numpy data`命令，调起文件对话框，选择要读取的`NumPy`文件，确认后自动粘贴代码片段

## 关于我们

<a href="https://space.bilibili.com/3546387249629871" target="_blank"><img src="https://www.bilibili.com/favicon.ico" alt="哔哩哔哩" width="auto" height="20pt"></a> [matplotlib 制图师](https://space.bilibili.com/3546387249629871)

<a href="https://marketplace.visualstudio.com/items?itemName=litchi.plt-snippet" target="_blank"><img src="https://code.visualstudio.com/favicon.ico" alt="VS Code logo" width="auto" height="20pt"></a> 开发的 VS Code 插件 [Matplotlib Pilot (Chinese)](https://marketplace.visualstudio.com/items?itemName=litchi.plt-snippet)

<a href="https://mp.weixin.qq.com/s/K8EqXk0j5XuHXMVb9Mc4Hw" target="_blank"><img src="https://open.weixin.qq.com/zh_CN/htmledition/res/assets/res-design-download/icon48_appwx_logo.png" alt="wechat logo" width="auto" height="20pt"></a> 微信公众号 [matplotlib 制图师](https://mp.weixin.qq.com/s/K8EqXk0j5XuHXMVb9Mc4Hw)

学习笔记 [matplotlib 在线手册](https://www.wolai.com/matplotlib/uecbhR3MHhaZkK55za779h)
