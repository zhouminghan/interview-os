---
id: STORAGE-0207
type: technical
question: 如何实现Hive的容灾？请详细说明容灾实现的步骤、配置方法和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

异地同步数据加元数据备份。

# 参考回答

容灾实现：用 distcp 或同步工具把数据同步到灾备集群，元数据定期备份。故障时在灾备集群恢复服务。定期演练切换。

# 追问

- 灾备切换多久？
