---
id: FLINK-0313
type: technical
question: 什么是FlinkSQL中的MiniBatch处理模式？如何配置和使用？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

把一批数据攒起来一起处理，减少状态访问。

# 参考回答

MiniBatch 是把流数据攒成小批次一起处理，减少状态读写次数，提高吞吐。但会加一点延迟。适合高吞吐、可容忍小延迟的聚合场景，配置开启并设 batch 大小。

# 追问

- MiniBatch 会带来什么代价？
