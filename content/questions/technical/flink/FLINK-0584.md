---
id: FLINK-0584
type: technical
question: State 调优怎么做？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：腾讯-数据工程-20260415（引申自实时数仓项目）

配置：`managed.fraction` 提高到 0.4 提升 RocksDB 读写性能。数据结构：只存精简数据（PB 序列化）、避免 MapState 存大集合、加 Guava Cache 减少 State 访问。

判断标准：arthas trace 读写耗时。参考值：Redis ~3ms、RocksDB ~0.3ms。

---
