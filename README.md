# 工科博士作品集

简约明亮的中文个人网站，适合直接发布到 GitHub Pages。包含 13 个静态页面：个人主页、项目列表、4 个项目详情、文章列表、2 篇文章、笔记列表和 3 篇笔记。

所有姓名、机构、项目、文章与笔记均为占位或示例。框图仅用于说明结构，不代表真实硬件、实测数据、已发表论文或完成的研究成果。

## 本地查看

双击 `index.html` 即可浏览，页面之间使用相对链接，不需要安装依赖或运行构建命令。

若电脑已安装 Python，也可以在此文件夹中运行 `python -m http.server 4173`，然后打开 `http://localhost:4173/`。

## 发布到 GitHub Pages

1. 创建公开仓库，名称填写 `你的GitHub用户名.github.io`，其中用户名使用账号用户名的小写形式。
2. 在仓库选择 **Add file → Upload files**。
3. 上传本文件夹里面的内容：`index.html`、`assets`、`projects`、`articles`、`notes`、`.nojekyll` 和 `README.md`。不要只上传 ZIP 压缩包，也不要把 `personal-site` 文件夹整体套在仓库最外层；仓库顶层应直接看得到 `index.html`。若仓库已有 README，可以使用这份替换。
4. 点击 **Commit changes** 保存文件。
5. 进入 **Settings → Pages**，在 **Source** 选择 **Deploy from a branch**，分支选择 `main`，目录选择 `/(root)`，点击 **Save**。
6. 等待发布完成，再点击 Pages 页面中的 **Visit site**。你的主页地址为 `https://你的GitHub用户名.github.io/`。

如果电脑默认隐藏 `.nojekyll`，可在 GitHub 仓库中用 **Add file → Create new file** 新建同名文件。这个网站没有依赖 Jekyll 的语法，也没有以下划线开头的资源目录。

官方说明：https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## 替换为你的资料

- **姓名：**在所有 `.html` 文件中将 `你的名字` 替换为你的姓名。浏览器标题、顶部导航和页脚也使用这个名字。
- **个人简介、研究方向、机构、邮箱：**编辑 `index.html` 中 `id="about"` 的区域。
- **公开联系链接：**填入真实公开邮箱后，可使用 `<a href="mailto:你的邮箱">你的邮箱</a>`；学术或代码主页用真实 URL 替换文字。模板没有假邮箱或空的联系按钮。
- **网站颜色与排版：**编辑 `assets/engineering.css`，其中 `--blue` 是主色。
- **项目：**内容位于 `projects/*.html`。首页展示前两个示例，所有项目位于 `projects/index.html`。
- **文章：**内容位于 `articles/*.html`，列表在 `articles/index.html`，首页还有最新文章入口。
- **笔记：**内容位于 `notes/*.html`，列表在 `notes/index.html`，首页还有笔记入口。

请先替换示例，再删除对应的“示例项目／文章／笔记”标记和说明。只删除你已经替换完成的条目提示。

## 新增内容

新增文章或笔记时，复制同目录的一篇详情页，使用不带空格的英文文件名，修改 `<title>`、描述、日期、标题和正文，然后在对应列表页添加链接。需要出现在首页时，也要更新 `index.html` 中的入口。它们是静态页面，列表不会自动从文件夹生成。

新增项目时，复制一个项目详情页，并在 `projects/index.html` 添加卡片。硬件卡片使用 `data-category="hardware"`，软件卡片使用 `data-category="software"`。筛选数量会由脚本重新计算；页面中的默认数量文字也应一并修改。项目详情中的架构图可以用真实图片替换，将图片放进 `assets` 并使用 `../assets/图片文件名` 引用。

## 文件说明

```text
index.html                  首页与个人简介
assets/engineering.css      统一样式与手机适配
assets/site.js              项目分类筛选
projects/index.html         项目列表
projects/*.html             硬件、软件项目详情
articles/index.html         文章列表
articles/*.html             文章正文
notes/index.html            笔记列表
notes/*.html                笔记正文
.nojekyll                   GitHub Pages 静态发布标记
```

页面不使用外部字体或图片服务；手机、平板与桌面共用同一套响应式布局。没有数据库、账号系统或在线编辑后台；内容通过更新网页文件维护。仓库创建与 Pages 发布需要在你的 GitHub 账号完成。
