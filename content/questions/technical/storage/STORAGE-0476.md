---
id: STORAGE-0476
type: technical
question: 写出创建带有TTL的Clickhouse表的SQL语句。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

建表时加 TTL 子句。

# 参考回答

建表时用 TTL 子句设数据过期，比如 TTL 时间列加 INTERVAL 30 DAY。到期自动删除。也可设列级 TTL。

# 追问

- TTL 语法？
