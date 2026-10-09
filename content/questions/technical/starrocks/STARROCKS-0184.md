---
id: STARROCKS-0184
type: technical
question: 如何处理 StarRocks 数据迁移中的数据类型转换？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

注意类型映射、精度、时间格式和字符集。

# 参考回答

迁移时数据类型要映射好，重点注意数值精度、时间时区、字符集、null 处理。不匹配会导致导入失败或精度丢失，迁移前要列对列表。

# 追问

- 精度丢失最常见在哪？
