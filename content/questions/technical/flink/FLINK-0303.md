---
id: FLINK-0303
type: technical
question: FlinkSQL中的CROSS JOIN如何使用？有哪些性能注意事项？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

CROSS JOIN 是笛卡尔积，两边每条都组合。

# 参考回答

CROSS JOIN 不做关联条件，两表每条记录都两两组合，数据量爆炸。基本只在小表或生成组合场景用，大表千万别用，会 OOM。一定要加条件改成普通 join。

# 追问

- 笛卡尔积为什么危险？
