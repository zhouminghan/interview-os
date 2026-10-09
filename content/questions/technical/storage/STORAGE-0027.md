---
id: STORAGE-0027
type: technical
question: Hive的架构包含哪些主要组件？请详细描述每个组件的作用、工作原理以及它们之间的交互关系。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

客户端、Driver、Metastore、执行引擎组成。

# 参考回答

Hive 架构分客户端提交 SQL、Driver 编译优化、Metastore 存元数据、执行引擎跑 MapReduce 或 Spark。SQL 经过解析、优化、生成执行计划，再提交到集群执行。

# 追问

- Metastore 的作用？
