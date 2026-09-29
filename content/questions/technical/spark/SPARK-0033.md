---
id: SPARK-0033
type: technical
question: Spark 和 Flink 的核心区别，分别适配什么场景
topic: [spark, flink]
difficulty: 2
frequency: high
source_type: knowledge
---

# 一句话

Spark 是批处理引擎（微批），Flink 是真正的流处理引擎（低延迟、事件驱动）。

# 30 秒回答

Spark 用微批 DAG，适合离线批处理；Flink 以流为核心，低延迟、有状态，适合实时计算。游戏实时对局数据选 Flink，历史玩家行为数据选 Spark。

# 1 分钟回答

- Spark：批处理、微批、吞吐高、延迟秒级
- Flink：流处理、事件驱动、毫秒级、有状态
- 选型：实时对局/监控用 Flink，历史离线分析用 Spark

# 追问

- Spark Streaming 和 Flink 区别？
- 为什么实时对局用 Flink？
