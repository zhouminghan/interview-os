---
id: SPARK-0312
type: technical
question: Shuffle 机制的本质和演进？（高频⭐⭐⭐）
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：腾讯-数据工程-20260415 Q10、美团-大数据开发-20260415 Q7、字节-国际化数据开发-20250303 Q5

Shuffle 本质：数据按 key hash 跨节点重新分布，涉及磁盘 IO + 网络 IO，是性能瓶颈。

**MR Shuffle**：Map 端 → 环形缓冲区（100MB，80%阈值溢写）→ 按 partition 排序 → 合并有序文件 → Reduce 端拉取 → 合并排序 → Reduce 处理。

**Spark Shuffle**：经历 Hash Shuffle → Sort-Based Shuffle 演进。Sort-Based 每个 Map Task 只生成一个数据文件+一个索引文件，解决小文件过多问题。

> 💡 **专家补充**（大数据架构师视角，面试中视情况展开）
>
> - **Shuffle 是分布式计算的"必要之恶"**：只要涉及按 key 重新分发数据（JOIN、GROUP BY），就必须 Shuffle。优化的方向不是消除 Shuffle，而是减少 Shuffle 的数据量（提前过滤、MapJoin 避免 Shuffle）和降低 Shuffle 的 IO 开销（压缩、合并小文件）
> - **MR 环形缓冲区的设计很精妙**：用一个环形内存区域同时做"写入"和"排序溢写"，80% 阈值是为了避免写满后阻塞。这个设计思想影响了后续很多流处理框架的缓冲区设计
> - **Spark AQE（Adaptive Query Execution）是 Shuffle 优化的里程碑**：运行时根据实际数据量动态调整 partition 数，自动合并小 partition、拆分大 partition，大幅减少人工调参的工作量

---
