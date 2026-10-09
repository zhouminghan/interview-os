---
id: FLINK-0344
type: technical
question: 如何优化FlinkSQL作业的启动时间？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

减少状态加载和资源申请时间。

# 参考回答

启动慢主要是状态加载和资源申请。用增量 checkpoint、本地恢复减少状态读取，减少大状态初始化。初始化开销大的逻辑移到运行后。

# 追问

- 本地恢复是什么？
