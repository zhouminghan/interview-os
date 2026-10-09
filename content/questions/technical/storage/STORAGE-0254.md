---
id: STORAGE-0254
type: technical
question: HBase的Master和RegionServer的启动流程是怎样的？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

先起 ZK，再起 Master，RegionServer 注册。

# 参考回答

启动流程：先起 ZooKeeper，Master 启动后向 ZK 注册，RegionServer 启动后也注册，从 Meta 表加载 Region。Master 负责元数据和 Region 分配。

# 追问

- ZK 挂了会怎样？
