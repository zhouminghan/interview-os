---
id: STORAGE-0618
type: technical
question: 如何实现Clickhouse的数据脱敏？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
sources:
  - interview_id: INTERVIEW-2026-09-27-google-ai-de
    company: Google
    position: ML Data Engineer（硕 3 年社招，L4）
    date: 2026-09-27
---

# 一句话

查询时脱敏函数处理。

# 参考回答

数据脱敏在查询时用函数处理敏感字段，或建脱敏视图。权限限制敏感列。配合权限和审计。

# 追问

- 脱敏怎么做？
