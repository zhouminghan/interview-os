---
id: STARROCKS-0176
type: technical
question: 如何从 MySQL 迁移数据到 StarRocks？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用导出工具或 CDC 同步，建对应模型导入。

# 参考回答

MySQL 迁移可以先 mysqldump 导出再导入，或实时用 CDC 同步 binlog。注意把行存思维转成列存建模，选对主键模型。

# 追问

- 从行存到列存建模要注意什么？
