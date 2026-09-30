---
id: STORAGE-0646
type: technical
question: Hive 中严格模式（strict mode）的作用？
difficulty: 0
topic: []
source_type: knowledge
---

在 Hive 中使用严格模式来避免在查询中对表执行全表扫描。对于非常大的表，这非常有用。可以使用 `set hive.mapred.mode=strict` 命令将 Hive 置于严格模式。在此模式中，任何需要全表扫描的查询都会向用户抛出错误。严格模式是 Hive 中提高性能并避免因全表扫描导致意外延迟的有用选项。

---
