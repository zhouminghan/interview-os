---
id: SYS-SPARK-SHUFFLE
title: Spark Shuffle 与执行过程
domain: spark
topic: [shuffle, execution, mapreduce]
difficulty: 3
---

## 一句话

Spark 的 map 做局部计算、shuffle 按 key 重分区、reduce 聚合输出；shuffle 是性能瓶颈。

```diagram
type: flow
title: 三阶段
direction: TB
nodes:
  - id: map
    label: Map 局部计算
    color: blue
  - id: shuffle
    label: Shuffle 按 key 分区
    color: orange
  - id: reduce
    label: Reduce 聚合
    color: green
edges:
  - from: map
    to: shuffle
    label: 写分区
  - from: shuffle
    to: reduce
    label: 拉取合并
```

## Shuffle 数据流

Map 端按 key 分区、排序并溢写落盘，Reduce 端拉取对应分区再做归并。

```diagram
type: flow
title: Shuffle 写与读
direction: LR
nodes:
  - id: mapw
    label: Map 端写
    note: 按 key 分区排序落盘
  - id: disk
    label: 本地磁盘 / 文件
    note: 溢写合并
  - id: reducef
    label: Reduce 端拉取
    note: fetch + merge
    color: green
edges:
  - from: mapw
    to: disk
    label: 写
  - from: disk
    to: reducef
    label: 拉取
```

## 回答要点与追问

- 要点：map 写分区 → shuffle 传输 → reduce 合并；group by + count distinct 可两阶段去重。
- 追问：shuffle 为什么慢；怎么避免/优化；map 端预聚合是什么。

## 回答思路

三段式：map 局部计算 → shuffle 按 key 重分区 → reduce 聚合输出。重点落在 shuffle 为什么是瓶颈：磁盘 IO + 网络传输 + 数据倾斜。

## 案例

「group by + count(distinct) 怎么执行」：先说按 city_id shuffle，再说 user_id 去重可两阶段——map 端部分去重、reduce 端最终去重，降低 shuffle 数据量。

## 苏格拉底引导

```socratic
type: socratic
steps:
  - q: map 端和 reduce 端分别负责什么？
    hint: 一个局部、一个全局
    point: map 端读数据做局部计算，reduce 端按 key 聚合出最终结果。
  - q: 为什么 shuffle 是性能瓶颈？
    hint: 中间结果要经过哪里
    point: 要按 key 落盘、跨节点传输、再读回合并，磁盘 IO + 网络都重。
  - q: 怎么减少 shuffle 的数据量？
    hint: 能不能先在本地先算一部分
    point: map 端预聚合 / 部分去重、减少 key 数量、避免全量重分区。
```
