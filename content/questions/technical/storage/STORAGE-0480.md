---
id: STORAGE-0480
type: technical
question: 如何批量导入数据到Clickhouse？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

INSERT SELECT 或 clickhouse-client 批量导入。

# 参考回答

批量导入用 INSERT SELECT 从文件或外部表导入，或用 clickhouse-client 的批量命令。大批量一次导入，避免频繁小写入。

# 追问

- 批量导入多大合适？
