---
id: FLINK-0309
type: technical
question: FlinkSQL中如何处理状态迁移和版本升级问题？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 savepoint 迁移，注意状态结构兼容。

# 参考回答

升级作业用 savepoint 迁移状态，注意状态 schema 要兼容。改了聚合逻辑或字段，状态可能对不上，需要做状态迁移或重置。不兼容就从新起点重跑。

# 追问

- 状态不兼容怎么办？
