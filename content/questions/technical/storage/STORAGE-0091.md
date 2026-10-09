---
id: STORAGE-0091
type: technical
question: 什么是Hive的JOIN操作？请详细说明各种JOIN类型（INNER JOIN、LEFT JOIN、RIGHT JOIN、FULL JOIN）的区别和使用场景。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

内连接取交集，外连接保留某一边全部。

# 参考回答

INNER JOIN 只取两边都匹配的；LEFT JOIN 保留左表全部，右表没匹配填 null；RIGHT 反之；FULL JOIN 两边都保留。按业务要保留哪边数据选。

# 追问

- 外连接数据量会变大吗？
