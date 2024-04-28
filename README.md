# chinese-text-labeler

用中文输出：
1. 数据输入界面：
- 功能：
- 允许用户输入待标注的文本数据。
- 提供文本预处理选项，如去除停用词、词干提取等。

 2. 类别标签管理界面：
- 功能：
- 展示已有的类别标签以及其相关信息。
- 允许用户添加、修改或删除类别标签。

 3. 相关度判断界面：
- 功能：
- 实现文本与类别标签的相关度判断。
- 显示文本与每个类别标签的相关度得分。

 4. 单一类别文本分类界面：
- 功能：
- 将文本划分到最相关的单一类别中。
- 展示文本被分类到的类别标签。

 5. 多标签划分界面：
- 功能：
- 实现文本可被划分到多个相关类别的功能。
- 允许用户查看文本与每个类别标签的相关度得分并选择多个标签。

 6. 标签标注管理界面：
- 功能：
- 提供已标注文本的管理功能，包括查看、编辑和删除操作。
- 支持将标注结果保存为数据集文件。


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/chinese-text-labeler.git
cd chinese-text-labeler
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
