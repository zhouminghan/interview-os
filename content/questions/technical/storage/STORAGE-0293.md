---
id: STORAGE-0293
type: technical
question: 详细描述HBase的启动流程。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

先 ZK，再 Master 和 RegionServer。

# 参考回答

启动流程：先起 ZooKeeper，Master 启动并选主，RegionServer 启动后向 ZK 注册，从 Meta 表加载 Region。全部就绪后对外服务。

# 追问

- 启动顺序重要吗？
