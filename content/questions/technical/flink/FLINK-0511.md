---
id: FLINK-0511
type: technical
question: Flink 遇到程序异常重启怎么办？
difficulty: 0
topic: []
source_type: knowledge
---

Flink 有一些重启策略，只要 Checkpoint 完成了，就可以做到至少一次（At Least Once）语义。当然，它可能不精确，但某些组件可以做到精确一次。重启策略一般设置为**固定延迟重启策略**。重启不会删除 Checkpoint。通常，公司设置的重启次数是 4 次。如果停了，会发送钉钉告警，启动时从 Checkpoint 恢复。

---
