---
id: STORAGE-0422
type: technical
question: 分享一个HBase的数据迁移工具开发案例。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

封装快照和 BulkLoad 做迁移。

# 参考回答

迁移工具封装快照导出和 BulkLoad 导入，批量并行迁移，带校验和重试。支持增量迁移。比手工逐条迁移快且可靠。

# 追问

- 工具做了什么？
