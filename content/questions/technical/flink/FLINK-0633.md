---
id: FLINK-0633
type: technical
question: 为了实现 Kafka 的 Exactly-Once 语义，你是怎么和 Flink 的 Checkpoint 机制配合的？具体配置了哪些参数？
difficulty: 0
topic: []
source_type: knowledge
---

Exactly-Once 的实现链路是 **Kafka 幂等生产 + Flink 两阶段提交（TwoPhaseCommitSinkFunction）+ Checkpoint 绑定消费位移**：

**Kafka Producer 端**：
```properties
enable.idempotence=true        # 开启幂等性
acks=all                       # 所有 ISR 副本确认
transactional.id=flink-{jobId} # 事务 ID，支持跨 Session 恢复
```

**Flink Checkpoint 配置**：
```java
env.enableCheckpointing(60000); // 1 分钟一次
env.getCheckpointConfig().setCheckpointingMode(CheckpointingMode.EXACTLY_ONCE);
env.getCheckpointConfig().setCheckpointTimeout(300000); // 5 分钟超时
env.getCheckpointConfig().setMinPauseBetweenCheckpoints(30000); // 两次 CP 间最少间隔 30s
env.getCheckpointConfig().setMaxConcurrentCheckpoints(1); // 同时只允许一个 CP
```

**配合逻辑**：
1. Flink Kafka Source 在 Checkpoint 时提交消费位移（offset commit 绑定 CP）
2. Flink Kafka Sink 在 Checkpoint 时执行事务预提交（pre-commit），CP 成功后再正式提交（commit）
3. 如果 CP 失败 → 事务回滚 → 下游 Consumer 的 `isolation.level=read_committed` 保证不会读到未提交数据

**为什么 CP 间隔设 1 分钟**：太短（如 10s）会频繁触发事务提交 + 状态快照，对 HDFS/RocksDB 有写压力；太长会导致故障恢复时重算的数据量大。1 分钟是业务延迟容忍和恢复代价之间的平衡点。

---
