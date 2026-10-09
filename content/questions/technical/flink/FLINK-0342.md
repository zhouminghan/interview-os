---
id: FLINK-0342
type: technical
question: 如何实现FlinkSQL作业的灰度发布和版本管理？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 savepoint 迁移，双跑对比灰度。

# 参考回答

灰度发布用 savepoint 从旧版本迁移状态到新版本，先小流量或双跑对比结果，确认一致再全量切。版本管理靠 savepoint 和作业版本号。

# 追问

- 双跑怎么对比？
