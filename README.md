# koa-template

## 开发环境(Environment)

- Node: 14.20.0

## 目录结构(Structure)

```
├─.vscode # vscode配置文件
├─public # 静态资源文件
├─src # 项目代码文件
|  ├─api # 接口文件
|  ├─assets # 资源文件
|  ├─component # 组件
|  ├─App.css # 首页样式
|  ├─App.jsx # 首页
|  ├─index.less # 全局样式
|  └─main.jsx # 入口文件
├─config.json # 本地配置文件
├─index.html # 入口文件
└─vite.config.js # vite配置文件
```

## 代码提交规范(Commit Message Standard)

提交commit时遵循以下规范:

- feat：提交新功能
- fix：修复了bug
- docs：只修改了文档
- style：调整代码格式，未修改代码逻辑（比如修改空格、格式化、缺少分号等）
- refactor：代码重构，既没修复bug也没有添加新功能
- perf：性能优化，提高性能的代码更改
- test：添加或修改代码测试
- chore：对构建流程或辅助工具和依赖库（如文档生成等）的更改
- revert: 回滚

## 待做事项(TODO)

- [ ] 完成UI基础部分
- [x] 添加redux
- [x] 调整布局