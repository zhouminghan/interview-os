---
id: SPARK-0047
type: technical
question: Spark与Hadoop MapReduce相比有哪些优势？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Spark 内存计算、DAG 复用、API 丰富，比 MR 快很多。

# 参考回答

相比 MapReduce，Spark 把中间结果放内存而不是反复写磁盘，DAG 能复用中间结果，还支持交互式查询。所以迭代计算和复杂流水线快得多，一般快几倍到几十倍。

# 追问

- 迭代计算为什么 MR 慢？
