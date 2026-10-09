---
id: STARROCKS-0084
type: technical
question: StarRocks 中的 Compaction 是什么？如何调优？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Compaction 后台合并小版本，减少文件数和读放大。

# 参考回答

Compaction 是把导入产生的小版本文件后台合并成大文件，减少文件数量和读放大。调优主要是控制并发和触发时机，避免影响前台查询。高峰期可以限制 Compaction 资源。

# 追问

- 版本太多会导致什么问题？
