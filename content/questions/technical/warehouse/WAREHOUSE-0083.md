---
id: WAREHOUSE-0083
type: technical
question: 数仓任务 Code Review 看哪些点
topic: [warehouse, code-review]
difficulty: 3
frequency: medium
source_type: knowledge
---

# 一句话

看命名规范、口径、复用、性能、数据质量和权责。

# 30 秒回答

Review 点：分层/命名规范、指标口径是否复用公共层、SQL 性能（分区裁剪/倾斜）、数据质量校验、是否有 Owner 和评审记录。

# 追问

- 权责问题怎么落地？
- 复用怎么在 review 时校验？
