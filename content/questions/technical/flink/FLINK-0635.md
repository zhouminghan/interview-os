---
id: FLINK-0635
type: technical
question: Kafka Producer 端做了哪些优化？
difficulty: 0
topic: []
source_type: knowledge
---

| 参数 | 设置值 | 原因 |
|------|--------|------|
| `batch.size` | 64KB | 比默认 16KB 大，减少网络请求次数 |
| `linger.ms` | 5ms | 等待凑批时间，5ms 对实时场景可接受 |
| `compression.type` | lz4 | 高吞吐场景首选，压缩/解压 CPU 开销低 |
| `buffer.memory` | 64MB | 大于默认 32MB，防止突发流量时 Producer 阻塞 |
| `acks` | all | 配合 Exactly-Once，保证数据不丢 |
| `retries` | 2147483647 | 开启幂等后设为最大值，不重复且不丢 |
| `max.in.flight.requests.per.connection` | 5 | 开启幂等后可设 ≤ 5，兼顾吞吐和有序性 |

为什么选 LZ4 不选 Snappy/Gzip：
- Gzip 压缩比最高但 CPU 开销大，实时场景不适合
- Snappy 和 LZ4 压缩比接近，但 LZ4 解压速度更快（消费端友好）
- 频道日志消息体中 JSON 重复字段多，LZ4 已经能拿到 2-3x 压缩比

---

## 二、Flink 实时计算
