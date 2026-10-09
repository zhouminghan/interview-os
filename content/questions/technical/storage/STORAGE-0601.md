---
id: STORAGE-0601
type: technical
question: 解释Clickhouse的元数据备份策略。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

元数据目录定期备份。

# 参考回答

元数据存本地 metadata 目录，定期备份表结构定义。配合数据备份。恢复时还原元数据和数据目录。

# 追问

- 元数据怎么备？
