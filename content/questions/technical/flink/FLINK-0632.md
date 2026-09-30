---
id: FLINK-0632
type: technical
question: 你主导 Kafka Topic 拆分时，是按内容/互动/用户行为这些业务模块拆分的吗？每个 Topic 的分区数是怎么确定的？怎么匹配峰值 10 万+ QPS 的接入需求？
difficulty: 0
topic: []
source_type: knowledge
---

是的，Topic 按频道业务功能模块拆分——内容流（帖子/视频发布）、互动流（点赞/评论/分享）、用户行为流（浏览/停留/搜索）。这样做的好处：

1. **下游消费隔离**：不同 Flink 任务只订阅自己关心的 Topic，减少无效数据消费。
2. **独立扩缩容**：互动流在活动期间 QPS 暴涨，可以单独扩分区，不影响内容流。

分区数确定的方法论：

- **基准公式**：`分区数 ≥ 目标吞吐 / 单分区写入上限`。单分区经测试写入能力约 5000 msg/s（消息体 1KB 左右），互动 Topic 峰值 4 万 QPS → 至少 8 个分区。考虑 1.5x 冗余 → 12 个分区。
- **对齐 Flink 并行度**：Flink Source 的并行度最好等于分区数，所以分区数同时要是 TaskManager Slot 的整数倍，方便资源利用。
- **预留增长空间**：按半年增长预估，分区数按 2x 当前需求设置，后续扩分区需要重分配 Consumer，代价较大，前期多留比后期加方便。

匹配 10 万+ QPS：
- 三个 Topic 各自承担 3-4 万 QPS，分区总数约 36 个
- Producer 端使用 `batch.size=64KB` + `linger.ms=5ms` 提升批量效率
- 压缩方式选 LZ4（CPU 开销低，吞吐优先）
- Broker 层面：page cache 预热 + SSD 磁盘 + 增加网络线程数

---
