---
id: STARROCKS-0037
type: technical
question: StarRocks 的窗口函数如何使用？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

窗口函数按分区排序做行间计算，写法跟标准 SQL 一致。

# 参考回答

StarRocks 支持标准窗口函数，像 row_number、rank、lag、lead、sum over 这些，按 partition by 分组、order by 排序后做行间计算。典型用法是分组 TopN、累计值、环比。

# 追问

- rank 和 dense_rank 的区别？
