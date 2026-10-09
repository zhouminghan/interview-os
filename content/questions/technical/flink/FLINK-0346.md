---
id: FLINK-0346
type: technical
question: 如何处理FlinkSQL作业升级和状态迁移问题？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 savepoint 迁移，注意状态兼容。

# 参考回答

升级用 savepoint 迁移状态，注意状态 schema 和算子逻辑兼容。不兼容要做状态迁移或从新起点重跑。升级前读版本说明。

# 追问

- 状态不兼容怎么处理？
