---
id: FLINK-0613
type: technical
question: 并行度和 Slot 的关系
difficulty: 0
topic: []
source_type: knowledge
---

- **并行度**：程序概念，一个算子需要多少并行实例
- **Slot**：TaskManager 资源概念，一个 Slot 可运行一个并行子任务
- **关系**：并行度 = 3 → 需要 3 个 Slot
- **优化**：无 Shuffle 的同并行度算子可 Chain 到一个 Slot

设置：`flink run -p 4` 或代码中 `env.setParallelism(4)`
