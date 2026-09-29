---
id: ALGORITHM-0006
type: technical
question: 千万级整数小内存排序（外部排序/位图）
topic: [algorithm, external-sort]
difficulty: 3
frequency: medium
source_type: knowledge
---

# 一句话

数据量超内存用外部排序（分块排序 + 多路归并），整数可进一步用位图或桶排序。

# 30 秒回答

分块读入排序写临时文件，再多路归并；若不能外部排序，用位图（值域有限）或压缩存储。

# 追问

- 有负数怎么办？
- 多路归并用什么结构？
