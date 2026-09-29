---
id: FLINK-0022
type: technical
question: Kafka 面试题大纲（200 题覆盖范围）
topic: [flink, kafka, outline]
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Kafka 200 题大纲，四块：基础概念、基础设计、性能优化、集群运维。

# 30 秒回答

基础（1-40）：Topic/Partition/Consumer Group、ISR、顺序性、Rebalance、幂等/Exactly-Once、压缩、日志清理、偏移提交；设计（1-30）：分区/副本、Leader 选举、MirrorMaker、SSL/SASL/ACL；优化（1-30）：批量异步压缩、零拷贝、GC、序列化；运维（1-99，实际约 15 话题）：监控/备份/扩缩容/安全/故障。

# 1 分钟回答

- 基础：Topic/Partition/Consumer Group、ISR、顺序保证与破坏、Rebalance、幂等生产者、Exactly Once、压缩算法、日志清理、offset 提交、拦截器
- 设计：分区数/副本因子、Leader 选举、跨机房 MirrorMaker、SSL/TLS+SASL+ACL、JMX/Prometheus、持久化、备份恢复、扩缩容
- 优化：批量+异步+压缩、顺序写/零拷贝/页缓存、堆外内存、GC、序列化（Avro/Protobuf）、线程池并发
- 运维：监控告警、备份恢复、扩缩容重分配、安全管理、故障诊断、版本升级、灾备

# 追问

- ISR 机制是什么？
