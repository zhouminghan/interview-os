---
id: STORAGE-0210
type: technical
question: 什么是Hive的缩容方案？请详细说明缩容方案的设计方法、实施步骤和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

迁移数据后下线节点。

# 参考回答

缩容先把要下线节点的数据迁移走，再安全下线节点。计算资源缩容要先停相关任务。缩容比扩容要小心，别丢数据。

# 追问

- 缩容怎么不丢数据？
