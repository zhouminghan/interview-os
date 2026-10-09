---
id: STORAGE-0141
type: technical
question: 如何优化Hive的内存使用？请详细说明内存优化的各种策略和具体实现方法。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

合理分配执行和缓存内存，避免 OOM。

# 参考回答

内存优化合理分配执行内存和容器内存，避免大任务 OOM。MapJoin 小表要能放内存，执行内存要给够。配向量化和内存参数。

# 追问

- OOM 怎么排查？
