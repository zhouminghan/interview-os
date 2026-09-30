---
id: SPARK-0341
type: technical
question: Spark Shuffle 的演进史？各代各自的优缺点？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：快手-大数据开发实习一面-20260512 Q15

Spark Shuffle 经历了四个主要阶段，按版本演进顺序：

**第一代：Hash Shuffle（Spark 1.2 之前默认）**
- 实现：每个 Map Task 给每个 Reduce Task 生成一个独立文件，**文件数 = M × R**（M 个 Map × R 个 Reduce）。
- 优点：实现简单、不需要排序、小数据量场景性能不错。
- 缺点：**文件数爆炸**——1000 × 1000 = 100 万个文件，磁盘 IO 和文件句柄都爆了。

**第二代：Consolidate Hash Shuffle（优化版）**
- 实现：同一个 Executor 上的多个 Map Task 共享同一组输出文件，**文件数 = E × R**。
- 优点：文件数大幅减少。
- 缺点：还有上限问题，Reduce 多时仍会爆。

**第三代：Sort Shuffle（Spark 1.2+ 默认）**
- 实现：每个 Map Task 只生成 1 个数据文件 + 1 个索引文件，按 partition id 排序后写入，Reduce 通过索引拿对应分区数据。**文件数 = 2 × M**，与 Reduce 数无关。
- 优点：**文件数稳定**、对大规模 shuffle 友好、内存压力小（边写边 spill）。
- 缺点：必须排序（哪怕业务不需要），有一定排序开销。

**第四代：Tungsten Sort Shuffle（Spark 1.5+）**
- 实现：在 Sort Shuffle 基础上引入 Tungsten 项目优化——**堆外内存**管理、**二进制数据格式**直接处理（避免 Java 对象反序列化）、缓存行友好的内存布局。
- 优点：**性能再上一个台阶**，CPU 和内存效率显著提升。
- 缺点：限制条件多（分区数 < 16M、聚合时不需要 map 端聚合等），不满足条件 fallback 到 Sort Shuffle。

**演进核心思路**：
- 文件数：从「M × R」→「E × R」→「2M」→ 不变（持续可控）；
- 内存使用：从堆内 → 堆外 + 二进制（Tungsten）；
- 排序策略：从无序 → 强制排序 → 优化路径排序。

Spark 2.x 之后基本是 Sort Shuffle + Tungsten 这套，Hash Shuffle 已被移除。

> 💡 **专家补充**：
> - **Shuffle 演进的主线是"对抗规模"**——单机时代不在乎文件数，集群规模上来后小文件成为致命问题，Sort Shuffle 用"文件合并 + 索引寻址"彻底解决
> - **Tungsten 是 Spark 2.0 的核心革新**——把 Spark 从"基于 JVM 对象的处理"改造成"基于二进制内存的处理"，直接绕开 GC、绕开反序列化，单 Task 性能提升 50%+
> - **AQE（Adaptive Query Execution）是下一代优化方向**——Spark 3.0+ 在运行时根据实际数据分布动态调整 Shuffle 分区数、自动合并小分区、自动倾斜处理，进一步榨取性能

---
