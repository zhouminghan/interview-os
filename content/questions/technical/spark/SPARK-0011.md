---
id: SPARK-0011
type: technical
question: Spark 执行过程 map/shuffle/reduce 做什么，group by + count distinct 的 SQL 执行过程
topic: [spark, execution, shuffle, sql]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-21-pdd-data-dev
    company: 拼多多
    position: 数据开发（社招）
    date: 2026-09-21
---

# 一句话

map 做局部计算，shuffle 按 key 分区传输，reduce 做聚合输出；`group by city_id + count(distinct user_id)` 就是按 city_id 分区后对 user_id 去重计数。

# 30 秒回答

map 端读数据、解析、过滤、投影，可做 map 端预聚合；shuffle 把相同 key 分到同一分区；reduce 端按 key 聚合。该 SQL 按 city_id shuffle，reduce 端对每个 city 的 user_id 去重计数。

# 1 分钟回答

```sql
SELECT city_id, COUNT(DISTINCT user_id)
FROM t
GROUP BY city_id;
```

执行过程：

1. map：读表，解析出 (city_id, user_id)，可先对 (city_id, user_id) 做 map 端预聚合去重
2. shuffle：按 city_id 分区，把相同 city_id 的数据发到同一 reducer
3. reduce：对每个 city_id 的 user_id 做 distinct 去重再计数
4. 输出：每个 city_id 一条 (city_id, count)

- count(distinct) 的去重可能分两阶段：map 端部分去重，reduce 端最终去重
- 输出是 key-value：map 输出 (city_id, user_id)，shuffle 后 reduce 输出 (city_id, count)

```diagram
type: flow
title: Spark map / shuffle / reduce
direction: TB
nodes:
  - id: read
    label: 读表解析
    note: (city_id, user_id)
  - id: map
    label: Map 局部计算
    note: 预聚合去重
  - id: shuffle
    label: Shuffle 按 key 分区
    note: city_id
  - id: reduce
    label: Reduce 聚合
    note: count(distinct user_id)
  - id: out
    label: 输出 (city_id, count)
    color: green
edges:
  - from: read
    to: map
  - from: map
    to: shuffle
  - from: shuffle
    to: reduce
  - from: reduce
    to: out
```

# 追问

- count(distinct) 为什么慢，怎么优化？
- map 端预聚合（combiner）怎么工作？
- shuffle 落盘在哪里？
