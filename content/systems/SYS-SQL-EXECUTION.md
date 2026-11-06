---
id: SYS-SQL-EXECUTION
title: SQL 执行顺序与查询计划
domain: sql
topic: [execution, explain]
difficulty: 2
---

## 一句话

SQL 按 FROM → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT 执行。

```diagram
type: flow
title: 执行顺序
direction: LR
nodes:
  - id: from
    label: FROM / JOIN
    color: blue
  - id: where
    label: WHERE
  - id: group
    label: GROUP BY
  - id: having
    label: HAVING
  - id: select
    label: SELECT
  - id: order
    label: ORDER BY
  - id: limit
    label: LIMIT
edges:
  - from: from
    to: where
  - from: where
    to: group
  - from: group
    to: having
  - from: having
    to: select
  - from: select
    to: order
  - from: order
    to: limit
```

## 查询计划与执行

```diagram
type: flow
title: 解析到执行
direction: TB
nodes:
  - id: sql
    label: SQL
  - id: parse
    label: 解析 AST
  - id: opt
    label: 优化器
    note: 谓词下推 / 列裁剪 / Join 重排
  - id: plan
    label: 执行计划
    note: map / reduce 数
    color: green
edges:
  - from: sql
    to: parse
  - from: parse
    to: opt
  - from: opt
    to: plan
```

## 回答要点与追问

- 要点：背顺序 + 说清 where / having 时机 + explain 看什么。
- 追问：where 和 having 区别；select 别名能不能在 where 用；explain 主要看哪些指标。

## 回答思路

先背执行顺序，再讲清两个时机（WHERE 分组前过滤行、HAVING 分组后过滤组），最后说 explain 看什么（map / reduce 数、数据倾斜、join 策略）。

## 案例

「select 别名能在 where 用吗」：不能。WHERE 执行在 SELECT 之前，别名还没生成；ORDER BY 可以用，因为它靠后。

## 苏格拉底引导

```socratic
type: socratic
steps:
  - q: WHERE 能用到 SELECT 里的别名吗？
    hint: 想想别名在哪一步才生成
    point: 不能。WHERE 在 SELECT 之前执行，别名还没被计算出来。
  - q: HAVING 和 WHERE 差在哪？
    hint: 一个在分组前、一个在分组后
    point: WHERE 过滤行（分组前），HAVING 过滤组（分组后，可作用于聚合结果）。
  - q: explain 主要看什么？
    hint: 慢在哪
    point: 看 map / reduce 数、是否有数据倾斜、join 策略、是否全表扫描。
```
