---
id: STORAGE-0397
type: technical
question: 在生产环境中如何进行HBase的容灾备份？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

跨集群复制加快照备份。

# 参考回答

容灾备份用 Replication 跨集群同步，加定期快照备份。主集群故障切灾备。定期演练恢复，验证备份可用。

# 追问

- 灾备切换怎么做？
