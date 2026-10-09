---
id: STORAGE-0178
type: technical
question: 什么是Hive的元数据备份？请详细说明备份策略、备份方法和恢复流程。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

定期备份 Metastore 数据库。

# 参考回答

元数据备份就是备份 Metastore 的关系库，定期做全量加增量备份。恢复时还原数据库。元数据丢了表就查不了，备份很重要。

# 追问

- 元数据备份频率？
