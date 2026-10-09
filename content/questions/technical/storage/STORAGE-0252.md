---
id: STORAGE-0252
type: technical
question: HBase中的Delete标记是什么？它是如何工作的？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

删除是打墓碑标记，compact 时才真删。

# 参考回答

HBase 删除不是立刻删数据，而是打一个删除标记，读的时候过滤掉，Major Compaction 时才真正清理。所以删了还能在一定时间恢复。

# 追问

- 删除后能恢复吗？
