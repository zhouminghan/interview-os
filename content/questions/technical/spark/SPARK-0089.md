---
id: SPARK-0089
type: technical
question: RDD的shuffle过程是怎样的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

map 端按 key 分区写盘，reduce 端拉取聚合。

# 参考回答

shuffle 时 map 端把数据按 key 分桶写盘并排序，reduce 端拉取自己分区的数据做聚合。中间大量磁盘 IO 和网络传输，是性能杀手。

# 追问

- shuffle 落盘为什么不可避免？
