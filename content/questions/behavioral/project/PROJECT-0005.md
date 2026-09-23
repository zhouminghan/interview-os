---
id: PROJECT-0005
type: project
question: 知识库爬取 wiki，如果 wiki 更新了你怎么处理
topic: [project, crawler, incremental-update]
difficulty: 2
frequency: medium
source_type: ai_generated
needs_personal_input: true
sources:
  - interview_id: INTERVIEW-2026-09-14-bytedance-cn-transaction-ads
    company: 字节跳动
    position: 大数据开发（校招）
    date: 2026-09-14
---

# 回答框架

- 增量更新：定时任务，对比版本号/更新时间/变更 API，只拉变化条目
- 版本对比：记录上次抓取时间，diff 检测新增/修改/删除
- 更新策略：覆盖或保留历史版本，做版本管理
- 失效处理：删除项标记失效，关联内容同步更新
- 质量与去重：变更后的内容重新校验、去重、索引更新

# 待补充（真实经历）

> 说明你实际用的是 wiki API 的哪些能力（recent changes、版本号等），以及具体更新链路。
