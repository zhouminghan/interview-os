---
id: STORAGE-0030
type: technical
question: 解释一下Hive的三种运行模式。请详细说明每种模式的特点、适用场景、配置方法和性能差异。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

本地、单机、远程 Metastore 三种模式。

# 参考回答

三种模式：内嵌模式元数据存本地 derby，适合测试；本地模式 Metastore 和 Hive 同机；远程模式 Metastore 独立服务，生产最常用，多客户端共享。

# 追问

- 生产为什么用远程 Metastore？
