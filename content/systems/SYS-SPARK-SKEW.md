---
id: SYS-SPARK-SKEW
title: Spark 数据倾斜
domain: spark
topic: [skew, join, shuffle]
difficulty: 3
---

## 一句话

数据倾斜是某个 key 的数据量远大于其他 key，导致少数 task 长期满载、拖慢整个作业。

```diagram
type: flow
title: 倾斜怎么发生
direction: LR
nodes:
  - id: data
    label: 数据按 key 分区
    color: blue
  - id: hot
    label: 热点 key
    note: 一个 task 特别慢
    color: red
  - id: other
    label: 其他 key
    note: 很快跑完
    color: green
edges:
  - from: data
    to: hot
  - from: data
    to: other
```

## 定位与数据流

看 Stage 里各 task 的耗时和输入数据量：少数 task 输入量、耗时远大于均值就是倾斜；再结合 key 分布定位热点 key。

```diagram
type: flow
title: 定位流程
direction: TB
nodes:
  - id: ui
    label: Spark UI
    note: Stage / task 耗时
  - id: skew
    label: 定位热点 task
    color: orange
  - id: key
    label: 分析 key 分布
    note: 找出热点 key
    color: red
edges:
  - from: ui
    to: skew
  - from: skew
    to: key
```

## 处理 SOP

```diagram
type: flow
title: 常见解法
direction: TB
nodes:
  - id: salt
    label: 加盐打散
    note: 大表 key + 随机后缀
  - id: broadcast
    label: 广播小表
    note: 免 shuffle
  - id: agg
    label: 两阶段聚合
    note: 局部聚合再全局聚合
    color: green
edges:
  - from: salt
    to: agg
    label: 可选
  - from: broadcast
    to: agg
    label: 可选
```

## 回答思路

先说现象（少数 task 慢），再说定位（看 UI 耗时和输入量、key 分布），最后给解法：加盐打散、广播小表、两阶段聚合，按 join / group by 场景选。

## 案例

两张大表 join 倾斜：对倾斜 key 加随机前缀打散，另一侧小表相应扩倍；group by 倾斜用两阶段聚合，先局部预聚合再全局聚合。

## 苏格拉底引导

```socratic
type: socratic
steps:
  - q: 怎么判断作业慢是数据倾斜造成的？
    hint: 看 task 之间差异
    point: 看 Stage 里各 task 耗时和输入量，少数 task 远超均值就是倾斜。
  - q: join 时一侧是小表，怎么彻底避免 shuffle？
    hint: 把谁放到每个 executor
    point: 把小表广播到所有 executor，map 端 join，免掉 shuffle。
  - q: group by 热点 key 怎么打散？
    hint: 先局部、再全局
    point: 两阶段聚合：先加随机前缀做局部聚合，再去掉前缀做全局聚合。
```
