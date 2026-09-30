---
id: SPARK-0386
type: technical
question: 常见 OOM 场景排查
difficulty: 0
topic: []
source_type: knowledge
---

| 场景 | 症状 | 解决方案 |
|------|------|---------|
| Driver OOM | `collect()` 拉取大量数据 | 避免全量 collect，用 `take(N)` 或写文件 |
| Executor OOM | 单 task 数据量过大 | 增大 `executor.memory`、调大 `shuffle.partitions` |
| 数据倾斜 OOM | 少数 task 极慢/OOM | 开启 AQE skewJoin、加盐、拆分热点 key |
| Broadcast OOM | 广播表太大 | 降低 `autoBroadcastJoinThreshold` 或设 `-1` |
| GROUPING SETS OOM | Expand 算子翻倍 | 手动改写 UNION ALL |
