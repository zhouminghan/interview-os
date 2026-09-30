---
id: FLINK-0576
type: technical
question: Flink 写 Iceberg 的模式和小文件问题？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：腾讯-数据工程-20260415（引申自实时数仓项目）

Append 模式，每次 Checkpoint 触发一次 Iceberg Commit。Checkpoint 间隔几分钟 + 并行度 20 → 每天几千小文件。

解法：Iceberg Compaction 每小时自动合并 + 调整 Checkpoint 间隔 3-5 分钟 + 分区裁剪。效果：Spark 读 DWD 从 3 分钟降到 40 秒。

---
