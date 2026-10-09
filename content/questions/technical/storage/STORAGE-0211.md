---
id: STORAGE-0211
type: technical
question: 如何缩容Hive集群？请详细说明集群缩容的步骤、配置方法和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

先迁移数据，再下线节点。

# 参考回答

缩容先 decommission 节点，让 HDFS 把数据复制到其他节点，再下线。确认数据完整后移除。缩容要分步做，验证每步。

# 追问

- decommission 是什么？
