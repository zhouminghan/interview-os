---
id: FLINK-0012
type: technical
question: 实时数仓的粒度和指标怎么设计
topic: [flink, realtime-warehouse]
difficulty: 3
frequency: high
source_type: knowledge
---

# 一句话

DWD 事件粒度，DWS 维度 + 时间窗口粒度，做增量 + 全量累计双链路，维度指标尽量精简。

# 30 秒回答

DWD 一条事件一行；DWS 按「维度 + 窗口」聚合，做分钟增量表和当日全量累计表两套；实时只保留核心指标（登录 UV/活跃 UV/PV），复杂指标继续走离线。

# 追问

- 为什么实时维度要做减法？
- 增量表和全量累计表各服务什么？
