---
id: FLINK-0607
type: technical
question: Flink 有哪些部署方式？
difficulty: 0
topic: []
source_type: knowledge
---

- **Local**：本地单 JVM 测试
- **Standalone**：Flink 自带集群
- **YARN**：Hadoop YARN 上运行（生产常用）
  - **Per-Job**：每个作业独立申请资源（推荐）
  - **Session**：预先申请资源，共享集群
- **Kubernetes**：云原生部署
