---
id: FLINK-0315
type: technical
question: 解释FlinkSQL中的LocalGlobal优化及其工作原理。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

先本地预聚合再全局聚合，减少 shuffle。

# 参考回答

LocalGlobal 优化在 shuffle 前先做一次本地聚合，把数据量减下来再全局聚合，减少网络传输和倾斜。适合 group by 聚合，能大幅提升吞吐。

# 追问

- LocalGlobal 和两阶段聚合关系？
