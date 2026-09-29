---
id: WAREHOUSE-0057
type: technical
question: 缓慢变化维度 SCD 有哪几种处理方式
topic: [warehouse, scd]
difficulty: 3
frequency: high
source_type: knowledge
---

# 一句话

SCD 三种常见方式：Type1 覆盖、Type2 拉链/新增行、Type3 历史列。

# 30 秒回答

Type1 直接覆盖旧值、丢历史；Type2 新增一行记录变化、保留完整历史（拉链表）；Type3 加历史字段只保留上一个值。

# 1 分钟回答

- Type1：覆盖，简单但无历史
- Type2：新增行 + 生效/失效时间，保留全历史，最常用
- Type3：加「当前值 + 上一个值」列，只留一次变化
- 选择：看是否需要历史、需要多少历史、更新频率

# 追问

- 拉链表和 Type2 的关系？
- 哪种方式代价最大，为什么？
