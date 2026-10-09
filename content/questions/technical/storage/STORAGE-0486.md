---
id: STORAGE-0486
type: technical
question: 如何使用Clickhouse的窗口函数进行排名？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

row_number over 分区排序。

# 参考回答

排名用 row_number() over(partition by 字段 order by 排序)，过滤排名取前 N。rank、dense_rank 也支持。做分组 TopN。

# 追问

- 三种排名函数区别？
