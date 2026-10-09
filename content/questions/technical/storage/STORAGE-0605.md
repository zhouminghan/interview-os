---
id: STORAGE-0605
type: technical
question: Clickhouse的大数据量导入最佳实践是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

批量导入，分区分批。

# 参考回答

大数据导入用 INSERT SELECT 或 clickhouse-client 批量，按分区分批导入。控制每批大小，避免小写入。导入后合并。

# 追问

- 大数据怎么导入？
