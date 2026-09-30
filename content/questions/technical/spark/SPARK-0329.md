---
id: SPARK-0329
type: technical
question: Binlog 机制？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：字节-国际化数据开发-20250303 Q10

MySQL Server 层二进制日志。用途：主从复制、数据恢复、CDC（Canal 解析 Binlog → Kafka → Flink → 数仓 ODS）。三种格式：STATEMENT（空间小不安全）、ROW（最安全空间大）、MIXED。ROW 最常用。

---
