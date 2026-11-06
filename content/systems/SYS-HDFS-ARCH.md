---
id: SYS-HDFS-ARCH
title: HDFS 架构与读写流程
domain: hdfs
topic: [architecture, namenode, datanode]
difficulty: 3
---

## 一句话

HDFS 是主从架构：NameNode 管元数据，DataNode 存数据块，客户端直接跟 DataNode 读写。

```diagram
type: flow
title: HDFS 架构
direction: LR
nodes:
  - id: client
    label: Client
    color: blue
  - id: nn
    label: NameNode
    note: 元数据 / 目录树
  - id: dn
    label: DataNode
    note: 数据块
    color: green
edges:
  - from: client
    to: nn
    label: 元数据请求
  - from: client
    to: dn
    label: 数据读写
  - from: nn
    to: dn
    label: 心跳 / 块汇报
    dashed: true
```

## 数据流

文件被切成 128MB 数据块，每块默认 3 副本分布在不同 DataNode；NameNode 只存元数据，不存数据。

```diagram
type: flow
title: 分块与副本
direction: TB
nodes:
  - id: file
    label: 大文件
    color: blue
  - id: block
    label: Block 128MB
    note: 逻辑分块
  - id: replica
    label: 3 副本
    note: 跨机架分布
    color: green
edges:
  - from: file
    to: block
  - from: block
    to: replica
```

## 读写 SOP

```diagram
type: seq
title: 写流程
actors:
  - id: client
    label: Client
  - id: nn
    label: NameNode
  - id: dn
    label: DataNode
messages:
  - from: client
    to: nn
    label: 创建文件请求
  - from: nn
    to: client
    label: 返回 DN 列表
  - from: client
    to: dn
    label: 写数据块
  - from: dn
    to: client
    label: 确认写入
```

## 回答思路

先讲主从（NameNode / DataNode），再讲分块与副本，最后讲读写流程：客户端先问 NN 拿元数据，再直接和 DN 传数据。

## 案例

「小文件问题」：大量小文件会撑爆 NameNode 元数据，因为每个文件都占一条元数据记录；用合并小文件、SequenceFile 或 HBase 缓解。

## 苏格拉底引导

```socratic
type: socratic
steps:
  - q: 客户端读文件，数据是从 NameNode 流出的吗？
    hint: NameNode 存不存数据
    point: 不是。NameNode 只给元数据和 DN 列表，客户端直接找 DataNode 读数据块。
  - q: 为什么一个块要存多份副本？
    hint: 机器挂了怎么办
    point: 副本提供容错；一台 DataNode 挂了，其他副本还能继续提供数据。
  - q: 大量小文件有什么问题？
    hint: 元数据会不会被撑大
    point: 每个文件都要在 NameNode 占元数据，小文件多了元数据爆炸，内存和查询都变慢。
```
