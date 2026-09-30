---
id: FLINK-0656
type: technical
question: 如果面试官问"这个项目最大的技术挑战是什么"，你怎么回答？
difficulty: 0
topic: []
source_type: knowledge
---

最大的技术挑战是 **在严格的 Exactly-Once 语义下，同时满足分钟级延迟和 10 万+ QPS 的吞吐要求**。

这两个目标天然矛盾：
- Exactly-Once 需要 Checkpoint + 事务提交 → 引入额外延迟和开销
- 高吞吐需要大批量写入 + 减少 flush 频率 → 牺牲延迟
- 分钟级延迟要求快速 commit → 频繁 flush → 产生大量小文件 → 查询性能劣化

我的解法是 **分层解耦**：
1. Flink 层只负责 DWD 清洗写入，CP 间隔 1 分钟 → 保证数据快速落湖
2. 小文件问题通过异步 Compaction 解决（不影响写入路径）
3. 指标聚合下沉到 Spark 分钟级任务 → Flink 不需要维护大状态
4. Redis 做热点缓存 → 查询不直接打 Iceberg，避免小文件影响查询

这套架构让三个矛盾目标得到了平衡：Exactly-Once ✅ + 10 分钟内延迟 ✅ + 10 万 QPS ✅ + 查询性能可接受 ✅。

---

> 📋 问题设计覆盖五大模块：Kafka 架构与接入（Q1-Q4）、Flink 实时计算（Q5-Q10）、Iceberg 实时数据湖（Q11-Q14）、离线层与一体化架构（Q15-Q17）、数据质量与推荐支撑（Q18-Q25）。每道问题围绕"怎么做的"+"为什么这么做"+"效果量化"+"边界情况"展开。
