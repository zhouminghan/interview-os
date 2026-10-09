---
id: STARROCKS-0093
type: technical
question: StarRocks 的节点失效如何处理？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

靠副本自动容错，节点恢复后自动补数据。

# 参考回答

BE 节点失效后，查询会自动走其他副本，不中断。节点恢复后会自动补缺失的副本。FE 失效则靠 follower 选主。只要副本数够，单点故障不影响服务。

# 追问

- 副本数不够时节点挂了会怎样？
