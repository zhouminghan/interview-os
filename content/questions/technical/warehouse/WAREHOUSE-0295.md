---
id: WAREHOUSE-0295
type: technical
question: Spark 如何判断 OOM 及解决 OOM
difficulty: 0
topic: [SHEIN]
source_type: knowledge
---

**判断**：
- Driver OOM：`collect()` 数据过大、广播变量过大
- Executor OOM：Shuffle 数据倾斜、内存分配不足

**解决**：
- 提高 `spark.executor.memory`
- 减少 `spark.sql.shuffle.partitions`
- 数据倾斜处理：加盐打散 / 两阶段聚合
- 避免 `collect()` 全量数据到 Driver
- 调大 `spark.memory.offHeap.size` 使用堆外内存
