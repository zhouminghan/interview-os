---
id: SPARK-0338
type: technical
question: 大数据场景下OOM（内存溢出）怎么处理？
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：Driver端OOM | Executor端OOM | 通用方案 | 排查思路
> **来源面经**：字节-数开一面-20260422 Q8

OOM 分 Driver 端和 Executor 端，处理方式不同。

**Driver 端 OOM**：通常因为 `collect()` 把大数据集拉到 Driver、广播变量太大、或者 DAG 过于复杂。处理方案：**避免 collect()**——用 `take(N)` 或直接写文件替代；**增加 Driver 内存**（`--driver-memory`）；**减少广播变量大小**——大表不适合广播，改用普通 JOIN。

**Executor 端 OOM**：最常见，原因包括单个 Partition 数据量过大、数据倾斜导致某些 Task 处理数据远超其他 Task、缓存数据占用过多内存。处理方案：**增加 Executor 内存**（`--executor-memory`）；**增加分区数**（`repartition` 或调大 `spark.sql.shuffle.partitions`）让数据分散；**处理数据倾斜**（key 加盐、两阶段聚合）；**及时 unpersist** 不再使用的缓存数据；**使用 MEMORY_AND_DISK** 存储级别替代纯内存缓存。

**通用方案**：**避免笛卡尔积 JOIN**——两张大表不加 JOIN 条件会产生天量数据；**提前过滤**——WHERE 条件尽早下推，减少参与计算的数据量；**分批处理**——超大数据集按日期或 ID 范围分批跑，每批独立处理。

排查思路：看 Spark UI 的 Stage 页面 → 找到失败的 Task → 看该 Task 处理的数据量和内存使用 → 确定是数据倾斜还是整体内存不足 → 针对性处理。

> 💡 **专家补充**：
> - **90% 的 Executor OOM 都和数据倾斜有关**——不是整体内存不够，而是某几个 Task 分到了远超平均量的数据。看 Spark UI 的 Task Duration 分布，如果最慢的 Task 耗时是中位数的 10 倍以上，基本就是倾斜
> - **`spark.sql.adaptive.enabled=true`（AQE）能自动处理大部分 OOM 场景**——自动调整分区数、自动处理倾斜 JOIN。Spark 3.x 强烈建议开启
> - **生产环境建议对 Executor 内存设置 overhead**（`spark.executor.memoryOverhead`），一般设为 Executor 内存的 10%~20%，预留给堆外内存（序列化、网络缓冲等），避免因堆外内存不足导致的 OOM

---
