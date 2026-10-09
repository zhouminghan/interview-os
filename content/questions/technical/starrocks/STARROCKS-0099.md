---
id: STARROCKS-0099
type: technical
question: StarRocks FE 节点宕机如何恢复？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

follower 自动选主，恢复后重新加入，必要时恢复元数据。

# 参考回答

FE 多副本时，leader 挂了 follower 会自动选主，服务不断。宕机节点恢复后重新加入同步。如果是元数据损坏，用备份的元数据恢复。

# 追问

- leader 和 follower 怎么选举？
