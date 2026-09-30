---
id: SPARK-0313
type: technical
question: Spark Shuffle 详细过程（Map端/Reduce端）？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：京东JDY-二面-20260415 Q15

Spark Shuffle 分两个阶段：

**Map 端（Shuffle Write）**：每个 Task 把输出数据按照目标分区的 key 做 Hash 分组，写入内存缓冲区，超过阈值溢写到本地磁盘文件。最终每个 Map Task 产出一个索引文件（记录各分区数据位置）和一个数据文件。

**Reduce 端（Shuffle Read）**：下游 Stage 的 Task 通过网络从上游各个 Map Task 拉取属于自己分区的数据，拉取后做排序合并。如果是 SortMergeJoin，两边排好序后做归并匹配。

整个过程涉及磁盘 IO（溢写和读取）+ 网络 IO（跨节点传输）+ 序列化反序列化，是性能瓶颈。

---
