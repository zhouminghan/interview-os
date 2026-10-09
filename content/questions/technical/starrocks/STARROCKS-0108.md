---
id: STARROCKS-0108
type: technical
question: StarRocks 中的聚合表如何设计？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

聚合表在建表时指定维度列和聚合函数，写入即预聚合。

# 参考回答

聚合模型在建表时把列分成维度列和指标列，指标列指定 sum、max 这类聚合函数，相同维度写入时自动合并。适合明细不用保留、只要汇总的场景。

# 追问

- 聚合模型会丢明细，怎么权衡？
