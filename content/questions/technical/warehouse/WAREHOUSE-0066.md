---
id: WAREHOUSE-0066
type: technical
question: 数仓宽表怎么设计，维度冗余有什么取舍
topic: [warehouse, wide-table]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2025-03-24-jd-data-dev
    company: 京东
    position: 数据开发
    date: 2025-03-24
---

# 一句话

宽表把常用维度冗余进事实表，减少 join、提升查询，代价是存储冗余和一致性维护成本。

# 30 秒回答

把事实数据（DWD 明细）和维度数据（DIM 属性）join 成一张宽表，下游直接查、少 join；缺点是存储冗余、维度变更要同步。

# 1 分钟回答

- 结构：事实 + 维度冗余
- 优点：少 join、查询快、下游易用
- 缺点：冗余存储、一致性维护、宽表膨胀
- 优化：处理 join 倾斜、热点 key 打散、大任务拆分

# 追问

- 宽表和星型模型什么关系？
- 宽表太宽怎么办？
