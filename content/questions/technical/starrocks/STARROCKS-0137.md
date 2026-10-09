---
id: STARROCKS-0137
type: technical
question: StarRocks 如何实现数据一致性？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

多副本加版本快照，查询读一致版本。

# 参考回答

一致性靠副本同步和版本快照实现，导入提交生成版本号，查询读某个确定版本，不会看到写一半的数据。副本不一致会触发修复。

# 追问

- 版本快照怎么保证不读到中间态？
