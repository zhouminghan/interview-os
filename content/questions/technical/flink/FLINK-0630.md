---
id: FLINK-0630
type: technical
question: 程序异常重启怎么办？
difficulty: 0
topic: []
source_type: knowledge
---

- 从 Checkpoint/Savepoint 恢复
- YARN 模式下自动重启（`yarn.application-attempts`）
- K8s 模式依赖 Pod 重调度
