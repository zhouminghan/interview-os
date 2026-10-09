---
id: FLINK-0478
type: technical
question: 请详细解释Kafka的压缩优化策略，包括压缩算法选择、压缩级别设置等，以及如何评估压缩效果。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

选 lz4/zstd，按 CPU 和带宽权衡。

# 参考回答

压缩算法 lz4、zstd 比较常用，压缩率高但费 CPU。带宽瓶颈用高压缩，CPU 紧张用轻压缩。评估看压缩比和吞吐变化。

# 追问

- 压缩率怎么评估？
