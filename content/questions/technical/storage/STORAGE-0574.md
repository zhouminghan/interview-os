---
id: STORAGE-0574
type: technical
question: 如何进行Clickhouse的性能基准测试？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用真实负载测吞吐延迟。

# 参考回答

基准测试用真实或模拟负载，测查询吞吐和 P99 延迟。clickhouse-benchmark 工具或自建压测。对比优化前后。

# 追问

- 基准怎么测？
