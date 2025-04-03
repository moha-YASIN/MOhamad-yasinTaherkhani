# numpy-pilot README

**目前还是预览版，各种接口可能随时会变化，如果最新版有使用问题请在插件页面将插件回退到之前的版本！**

numpy-pilot是一个旨在帮助 NumPy 初学者掌握常用数组相关操作函数的项目，
点击侧边栏的按钮会在编辑窗口当前位置生成相应函数调用代码。
推荐用户将此插件置于辅助侧边栏（右侧的侧边栏），
这样在浏览API函数时可以避免来回切换文件浏览视图。

## Requirements

NumPy 是一个用于数组操作的Python包，使用前确保已安装：
```sh
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple numpy
```


此插件即可直接在Python脚本中使用，也可以在notebook文件(`ipynb`)中使用，
在 VS Code 中新建后缀为`.ipynb`的文件后将自动推荐相关插件，
视网络情况可能需要手动安装`ipykernel`
```sh
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple ipykernel
```

同时保证 `VS Code` 版本高于 `1.72.0`。

