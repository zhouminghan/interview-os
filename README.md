# Interview OS

个人面试知识库与训练系统。以真实面经为输入，沉淀为结构化 QA，再用随机测试和表达训练把知识变成面试能力。

## 定位

不是「面经收藏夹」，而是：

面经 -> AI 结构化 -> QA / 知识沉淀 -> 主动训练 -> 薄弱点反馈 -> 再复习

## 三类内容

- Technical QA：有标准答案的技术题（正确性 + 表达 + 追问 + 项目结合）
- Behavioral / HR：重表达、立场与信息组织的开放题
- Negotiation：谈薪与谈判筹码

## 使用

完全本地化、零构建，离线可用：

```bash
# 生成前端数据
python3 scripts/build.py

# 本地预览（任选其一）
python3 -m http.server 8000
# 或直接用浏览器打开 web/index.html
```

页面：总览 / 问题库 / 面经 / 随机训练 / 能力画像。训练记录保存在浏览器 LocalStorage。

## 目录与规范

见 [AGENTS.md](AGENTS.md)。

## 状态

v1：内容 Schema + AGENTS.md + 静态站点（可视化展示 + 随机训练 + 能力画像）已可用。
