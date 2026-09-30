---
id: STARROCKS-0223
type: technical
question: Doris 的 Compaction 是什么？为什么要做？
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：LSM-Tree | 多次写入产生多 RowSet | Compaction 合并提速查询 | 类似 HBase / RocksDB

Doris BE 底层类 LSM-Tree。每次导入（Stream Load / Insert）生成一个 **RowSet**（不可变数据片段）。RowSet 多了查询要扫所有再 Merge，性能下降。

**Compaction 作用**：定期把多个小 RowSet 合并成大 RowSet。

**两类**：
- **Cumulative Compaction**：合并增量小 RowSet，频繁触发，开销小
- **Base Compaction**：把累积的 Cumulative 结果和 Base RowSet 合并，频率低，开销大

**坑点**：高频小批量导入易触发 **-235 错误**（Compaction 跟不上）。生产建议**攒批写入**（Stream Load 一次几 MB~几百 MB），不要每行 INSERT。

---
