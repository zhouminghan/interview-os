---
id: STORAGE-0298
type: technical
question: HBase的Region合并过程是怎样的？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

相邻小 Region 合成一个。

# 参考回答

Region 合并把相邻的两个小 Region 合并成一个，减少 Region 数量。合并时合并元数据和数据文件，短暂不可用。适合删数据后 Region 变小。

# 追问

- 合并和分裂相反吗？
