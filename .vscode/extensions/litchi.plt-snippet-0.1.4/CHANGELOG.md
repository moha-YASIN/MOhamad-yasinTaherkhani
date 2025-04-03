# Change Log

**目前还是预览版**

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]

### Added

- 布局调整
- 引入 path,patch,collection 等概念
- 引入更多数据格式加载


## [0.1.4]

### Added
- 侧边栏底部增加了对一些工具站点的访问链接

## [0.1.3]

### Fixed
- 修复了侧边栏模板页未打包的问题

## [0.1.2]

### Added

- 常见概念中添加 箭头 和 文本框 概念
- 改善概念页面观感

## [0.1.1]

### Changed

- 微调 logo 边框

## [0.1.0]

### Changed

- 修改 README

## [0.1.0-rc]

### Changed

- 变更 logo，避免侵权风险
- 代码重构

## [0.0.36]

### Changed

- 移除 logo 中的 matplotlib 徽标，避免侵权风险

## [0.0.35]

### Changed

- 现在的概念工具页可以折叠，并且适配了 VS Code 的主题
- 侧边栏按钮对应的代码片段进行了修改
- 模板中引入了外部参考链接，可以一键直达详情帮助页面

### Fixed

- 修复了绘图模板不适配 VS Code 主题的问题

## [0.0.34]

### Changed

- templates.html 的制作被转移到单独的[项目](https://github.com/wuyao1997/Matplotlib-Template-Dashboard)中

### Fixed

- 修复打开常见概念等面板视图后，切换到其他视图再切换回来，视图会被重置回顶部的问题

## [0.0.33]

### Added

- 添加图形化修改和刷新侧边栏的功能
- 添加配置项`customSideBarNotebookPath`用于配置自定义侧边栏 notebook 文件路径
- 添加配置项`customSideBarHtmlPath`用于配置自定义侧边栏 html 文件路径
- 添加配置项`customSideBar`用于配置首选侧边栏为原生还是自定义

### Changed

- 侧边栏 logo 修改，避免[logo 版权](https://numfocus.org/trademark-guidelines)问题

### Fixed

- 修复软件更新时，用户修改的代码片段未被保留的问题

## [0.0.32]

### Changed

- 修改`display name`为`Matplotlib Pilot (Chinese)`

## [0.0.31]

### Changed

- README 图片引用

### Removed

- 移除`plt-snippet.ipynb2html`命令，不再需要该命令

## [0.0.30]

### Changed

- 用户可以更加方便的自定义模板
- 常见概念中添加了绘图样式
- 优化代码组织结构

## [0.0.29]

### Added

- `常见概念`网页中引入`hatch`概念，帮助用户快速查看**阴影样式**

## [0.0.28]

### Added

- 添加使用自定义侧边栏部分的 README

## [0.0.27]

### Added

- 新增`plt-snippet.ipynb2html`命令，该命令可以将一个 notebook 文件转化为侧边栏 html 文件
- 新增`plt-snippet.refreshSideviewHtml`命令，该命令可以从默认 notebook 文件刷新侧边栏
- 新增`plt-snippet.modifySideview`命令，调出默认侧面板视图对应的 notebook 文件，
  用户直接修改此文件并保存后，调用`plt-snippet.refreshSideviewHtml`命令，
  重新加载插件时即可使用修改后的侧边栏视图

## [0.0.26]

### Removed

- 删除字体配置相关代码

## [0.0.25]

### Changed

- 侧边栏生成方式改变为根据 notebook 文件生成，而不需要手动编辑

### Fixed

- 修正图例代码片段

## [0.0.24]

### Fixed

- 修正颜色选择器选择颜色后，颜色字符串不随之变化的问题，并且将颜色字符串自动推送到剪贴板

## [0.0.23]

### Added

- 增加自定义模板功能，插件可以自己制作“自定义模板”而不需要依赖外部工具，并完善 README 模板生成部分

### Changed

- 重构绘图模板部分代码
- 修正了自定义模板的参数拼写：`Cunstom Template HTML` -> `Custom Template HTML`

## [0.0.22]

### Added

- 添加 keywords

### Changed

- 修改 logo 和 icon

## [0.0.21]

### Added

- 为代码片段增加注释，可以配置变量`plt-snippet.commentWhenClick`和`plt-snippet.commentWhenDoubleClick`设置单击、双击时使用带注释的或者不带注释的代码片段

  0.0.20: 增加绘图类型，迁移更新日志

  0.0.19: 调整按钮和颜色选择布局，鼠标悬停在按钮上时会显示提示信息

  0.0.18: 增加模板和按钮

  0.0.17: 调整 CSS，增加 3D、多图方面的模板，调整按钮功能，添加插件教程按钮

  0.0.16: 增加模板

  0.0.15: 修复打开本地网页时重复打开多个网页的 bug

  0.0.14: 增加自定义模板功能

  0.0.13: 增加模板

  0.0.12: 完善网页视图制作流程，避免手动粘贴工作，增加案例，修改 css 使按钮符合 VS Code 主题

  0.0.11: 增加了模板生成的原型，修复了未打开编辑器时网页不能正常打开的 bug

  0.0.10: 增加`颜色、标识符、线型`本地网页内容

  0.0.9: 修改了视图，常用网页的打开方式，为增加新功能提供基础，下一步将重点增强功能，视图美化的工作将置后。
