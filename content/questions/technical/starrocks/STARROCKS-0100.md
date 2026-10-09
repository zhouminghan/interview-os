---
id: STARROCKS-0100
type: technical
question: StarRocks BE 节点宕机如何恢复？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

副本自动顶上，节点恢复后自动补数据。

# 参考回答

BE 挂了，查询走其他副本不影响。恢复后 BE 重新加入集群，会自动补齐缺失的副本数据。前提是副本数够，否则要先修节点。

# 追问

- 副本数不够怎么办？
