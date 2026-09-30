---
id: SPARK-0385
type: technical
question: Spark 3.x 快速调优模板
difficulty: 0
topic: []
source_type: knowledge
---

```sql
-- AQE
SET spark.sql.adaptive.enabled = true;
SET spark.sql.adaptive.skewJoin.enabled = true;
SET spark.sql.adaptive.advisoryPartitionSizeInBytes = 128m;

-- Shuffle
SET spark.sql.shuffle.partitions = 2000;

-- Broadcast
SET spark.sql.autoBroadcastJoinThreshold = 50m;

-- 内存
SET spark.driver.memory = 4g;
SET spark.executor.memory = 4g;
SET spark.executor.cores = 2;

-- 引擎
SET hive.execute.engine = spark;
SET hive.spark.failed.retry = false;

-- 读取分块
SET mapreduce.input.fileinputformat.split.maxsize = 134217728;
```
