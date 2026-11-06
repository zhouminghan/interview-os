---
id: SYS-FLINK-WATERMARK
title: Flink 水位线与窗口
domain: flink
topic: [watermark, window, event-time]
difficulty: 3
---

## 一句话

Watermark 标记事件时间进度，告诉窗口「这个时间之前的数据都到了」，用来触发窗口计算。

```diagram
type: flow
title: Watermark 工作机制
direction: LR
nodes:
  - id: src
    label: 事件流
    note: 带事件时间
    color: blue
  - id: wm
    label: 生成 Watermark
    note: 周期 / 标点
  - id: win
    label: 窗口触发计算
    note: watermark ≥ 窗口结束
    color: green
edges:
  - from: src
    to: wm
  - from: wm
    to: win
```

## 架构与数据流

Watermark 从 source 注入，随数据流一起传播；多输入算子取所有上游 Watermark 的最小值，保证不乱序触发窗口。

```diagram
type: flow
title: 多流 Watermark 合并
direction: TB
nodes:
  - id: a
    label: 上游 A
    note: watermark=10
  - id: b
    label: 上游 B
    note: watermark=8
  - id: min
    label: 取最小值
    note: watermark=8
    color: green
edges:
  - from: a
    to: min
  - from: b
    to: min
```

## 迟到处理 SOP

窗口被 Watermark 触发后，晚到的数据先看 allowedLateness，超时再走侧输出流兜底。

```diagram
type: flow
title: 迟到数据处理
direction: LR
nodes:
  - id: late
    label: 迟到数据
    color: orange
  - id: allow
    label: allowedLateness
    note: 允许延迟，窗口重算
  - id: side
    label: 侧输出流
    note: 兜底收集
    color: red
edges:
  - from: late
    to: allow
  - from: allow
    to: side
    label: 超时
```

## 回答思路

先讲 Watermark 是什么（事件时间进度标记），再讲怎么生成和传播（取多上游最小值），最后讲迟到怎么兜底（allowedLateness + 侧输出）。

## 案例

Kafka 多分区消费时，各分区进度不同，要取最慢分区的 Watermark，否则窗口会提前触发、算错结果。

## 苏格拉底引导

```socratic
type: socratic
steps:
  - q: 事件时间下，怎么知道一个窗口的数据到齐了？
    hint: 需要一个「时间进度」的标记
    point: 用 Watermark 标记事件时间进度，Watermark 越过窗口结束时间就触发计算。
  - q: 多个上游并行度不同，算子的 Watermark 取谁？
    hint: 快了会怎样
    point: 取所有上游的最小值，避免快流先到导致窗口提前触发。
  - q: 窗口触发后，晚到的数据怎么办？
    hint: 两层兜底
    point: 先看 allowedLateness 是否允许迟到并重算；超时了进侧输出流兜底。
```
