---
id: WAREHOUSE-0075
type: technical
question: 画像表的增量合并如何实现
topic: [warehouse, profile]
difficulty: 3
frequency: medium
source_type: knowledge
---

# 一句话

用 FULL OUTER JOIN 把当日增量与昨日全量合并，COALESCE 取最新值，INSERT OVERWRITE 回写当天分区。

# 30 秒回答

增量与昨日快照 FULL OUTER JOIN，按主键 COALESCE 取新值，写回当天分区产出一份最新全量画像。

# 追问

- 为什么用 FULL OUTER JOIN？
- 拉链表和画像增量合并区别？
