---
id: STORAGE-0410
type: technical
question: 分享一个HBase的性能基准测试案例。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

测吞吐和延迟，对比优化前后。

# 参考回答

基准测试用固定数据量测读写吞吐和 P99 延迟，作为基线。优化后再测对比。PerformanceEvaluation 工具测点查和扫描。

# 追问

- 基准怎么建？
