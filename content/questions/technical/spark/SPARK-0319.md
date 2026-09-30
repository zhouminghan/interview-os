---
id: SPARK-0319
type: technical
question: Hive 内部表和外部表的区别？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：腾讯-数据工程-20260415 Q4

内部表（Managed Table）Hive 管元数据+数据文件，drop 都删。外部表（External Table）Hive 只管元数据，drop 只删元数据，HDFS 数据还在。

实际使用：ODS 层用外部表（原始数据不能删），DWD 往上用内部表（可以重跑重建）。

---
