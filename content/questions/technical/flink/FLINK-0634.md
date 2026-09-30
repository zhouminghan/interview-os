---
id: FLINK-0634
type: technical
question: 互动模块的 Kafka Topic 消息积压时，你怎么排查？是消费速度不够还是生产突发增长？怎么解决？
difficulty: 0
topic: []
source_type: knowledge
---

排查三步走：

**第一步：看 Lag 趋势**。通过 Prometheus 拉取 `kafka_consumergroup_lag` 指标。如果 Lag 是瞬间跳升（尖刺），大概率是生产端突发；如果是缓慢上升（斜坡），大概率是消费端处理不过来。

**第二步：对比 Producer Rate 和 Consumer Rate**。
- 生产端：看 Kafka Broker 的 `MessagesInPerSec` 指标
- 消费端：看 Flink 的 `numRecordsInPerSecond` 指标
- 如果 Producer Rate 正常但 Consumer Rate 下降 → 消费端瓶颈
- 如果 Producer Rate 突增 → 生产端异常（比如业务活动上线、日志打印异常）

**第三步：定位消费端瓶颈位置**。Flink Web UI 看反压（backpressure）：
- Source 有反压 → 下游 Operator 处理慢
- 某个 Operator 红色 → 该算子是瓶颈（比如维表 JOIN 慢、状态操作重）
- Sink 红色 → 下游写入慢（比如 Iceberg 小文件合并阻塞了写入）

**解决方案**：
- 消费不够：增加 Flink 并行度（需同步确认 Kafka 分区数 ≥ 并行度）、优化慢算子
- 生产突发：短期增加消费端资源快速消化积压；长期排查生产端为什么突增，是否需要限流

---
