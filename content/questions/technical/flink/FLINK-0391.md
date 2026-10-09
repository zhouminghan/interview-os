---
id: FLINK-0391
type: technical
question: 解释一个实际案例：如何优化FlinkSQL长时间运行作业的性能？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

控制状态、防内存泄漏、定期清理。

# 参考回答

长期运行作业要注意状态别无限增长、内存别泄漏、checkpoint 稳定。配状态 TTL、监控状态和 GC、定期检查。长期跑的状态治理是关键。

# 追问

- 长期运行最怕什么？
