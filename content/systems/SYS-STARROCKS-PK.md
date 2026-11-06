---
id: SYS-STARROCKS-PK
title: StarRocks 主键模型与更新
domain: starrocks
topic: [primary-key, update, delete]
difficulty: 3
---

## 一句话

主键模型按主键唯一，更新走「标记删除旧版本 + 写入新版本」，后台 compaction 再合并旧数据。

```diagram
type: flow
title: 更新语义
direction: LR
nodes:
  - id: write
    label: 新数据写入
    color: blue
  - id: old
    label: 标记删除旧版本
    color: orange
  - id: new
    label: 写入新版本
    color: green
edges:
  - from: write
    to: old
  - from: write
    to: new
```

## 更新数据流

写入时先查主键索引定位旧版本，把它标记删除，再写新版本；查询按主键只读最新版本，旧版本由 compaction 后台清理。

```diagram
type: flow
title: 更新数据流
direction: TB
nodes:
  - id: import
    label: 导入 / 写入
    color: blue
  - id: index
    label: 主键索引查找
    note: 定位旧版本
  - id: del
    label: 标记删除旧版本
    color: orange
  - id: put
    label: 写入新版本
    color: green
  - id: compact
    label: Compaction 合并
    note: 物理清理
edges:
  - from: import
    to: index
  - from: index
    to: del
  - from: del
    to: put
  - from: put
    to: compact
    label: 后台
    dashed: true
```

## 更新 SOP

```diagram
type: seq
title: 一次 Upsert
actors:
  - id: app
    label: 导入端
  - id: be
    label: BE
  - id: idx
    label: 主键索引
messages:
  - from: app
    to: be
    label: 写入数据
  - from: be
    to: idx
    label: 查主键
  - from: idx
    to: be
    label: 返回旧版本位置
  - from: be
    to: app
    label: 标记删除 + 写新版本完成
```

## 回答思路

先讲主键模型是「按主键唯一」，再讲更新是「标记删除 + 新版本写入」，最后讲 compaction 后台合并、查询读最新版本，因此适合频繁 upsert。

## 案例

「实时更新的订单状态」「拉链表」：主键模型适合按主键高频 upsert；拉链表若只要最新状态，也可以直接主键模型覆盖，省去闭链开链逻辑。

## 苏格拉底引导

```socratic
type: socratic
steps:
  - q: 主键模型怎么保证一个主键只有一条「当前有效」数据？
    hint: 新数据来了旧数据怎么办
    point: 按主键定位旧版本并标记删除，再写新版本；查询只读最新版本。
  - q: 为什么标记删除后不立刻物理删除？
    hint: 频繁删会不会代价高
    point: 频繁物理删除代价高；用标记删除，后台 compaction 再批量合并清理。
  - q: 主键模型和明细模型怎么选？
    hint: 要不要按主键更新
    point: 要按主键 upsert / 删除就主键模型；只追加明细、不做更新就明细模型。
```
