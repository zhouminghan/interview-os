---
id: SYS-STARROCKS-ARCH
title: StarRocks 系统架构与查询链路
domain: starrocks
topic: [architecture, mpp, fe, be]
difficulty: 3
---

## 一句话

StarRocks 是 MPP 分析型数据库：FE 管元数据和查询计划，BE 管存储和计算，查询被拆成多个并行片段执行后汇总。

```diagram
type: flow
title: 两层架构
direction: LR
nodes:
  - id: client
    label: Client / BI
    color: blue
  - id: fe
    label: FE 前端
    note: 元数据 / SQL 解析 / 计划
  - id: be
    label: BE 后端
    note: 存储 / 计算
    color: green
edges:
  - from: client
    to: fe
    label: SQL
  - from: fe
    to: be
    label: 执行计划
```

## 组件与数据流

FE 有 leader / follower 保证高可用，负责元数据和查询计划；BE 存分桶 Tablet 并执行计算，数据按列式存储在本地磁盘或对象存储。

```diagram
type: flow
title: 组件分工
direction: LR
nodes:
  - id: fe
    label: FE
    note: leader / follower
    color: blue
  - id: meta
    label: 元数据
    note: 表 / 分区 / 副本
  - id: be
    label: BE
    note: 分桶 Tablet
  - id: disk
    label: 列式存储
    note: 本地磁盘 / 对象存储
    color: green
edges:
  - from: fe
    to: meta
    label: 读写
  - from: fe
    to: be
    label: 下发计划
  - from: be
    to: disk
    label: 读写数据
groups:
  - id: front
    label: 前端层
    nodes: [fe, meta]
  - id: back
    label: 后端层
    nodes: [be, disk]
```

## 查询执行链路

```diagram
type: seq
title: 一次查询
actors:
  - id: client
    label: Client
  - id: fe
    label: FE
  - id: be
    label: BE
messages:
  - from: client
    to: fe
    label: SQL
  - from: fe
    to: be
    label: 拆分并行片段
  - from: be
    to: fe
    label: 局部结果
  - from: fe
    to: client
    label: 汇总返回
```

## 回答要点与追问

- 要点：先讲两层（FE / BE），再讲 MPP 并行执行，最后讲数据流（Tablet 列式存储 + 向量化执行）。
- 追问：存算分离和存算一体区别；主键模型更新流程；Pipeline 执行模型是什么。

## 回答思路

先分层（FE / BE），再说 MPP（并行片段），最后说数据流（Tablet 列式 + 向量化执行）。用「一条 SQL 进来怎么跑」串起来。

## 案例

「StarRocks 和 Doris 区别」「为什么选 StarRocks 不选 ClickHouse」这类题：先讲架构（FE/BE + MPP），再落到选型——宽表多表 Join、高并发点查和实时更新场景 StarRocks 更顺手。

## 苏格拉底引导

```socratic
type: socratic
steps:
  - q: 一条 SQL 进来，为什么不能只在一台机器上跑？
    hint: 想想 TB 级数据单机能不能扛
    point: 数据量大，单机算不完；MPP 把查询拆成并行片段，分散到多台 BE 同时算。
  - q: FE 挂了会不会影响查询？怎么保证高可用？
    hint: leader / follower 谁负责什么
    point: FE 有 leader / follower，leader 写、follower 读，leader 挂了会重新选主，查询不中断。
  - q: 为什么 BE 存的是列式数据？
    hint: 分析查询通常只扫几列
    point: 列式存储只读需要的列，配合压缩和向量化，减少 IO、加快聚合。
```
