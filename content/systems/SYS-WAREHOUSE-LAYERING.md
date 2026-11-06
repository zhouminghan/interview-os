---
id: SYS-WAREHOUSE-LAYERING
title: 数仓分层架构与数据流向
domain: warehouse
topic: [layering, modeling]
difficulty: 2
---

## 一句话

数仓分 ODS 贴源、DWD 明细、DWS 汇总、ADS 应用，加 DIM 维表，逐层收敛、复用、可回溯。

```diagram
type: flow
title: 分层架构
direction: LR
nodes:
  - id: ods
    label: ODS 贴源
    color: blue
  - id: dwd
    label: DWD 明细
  - id: dws
    label: DWS 汇总
  - id: ads
    label: ADS 应用
    color: green
  - id: dim
    label: DIM 维表
    shape: note
    color: orange
edges:
  - from: ods
    to: dwd
  - from: dwd
    to: dws
  - from: dws
    to: ads
  - from: dim
    to: dwd
    label: 关联
    dashed: true
  - from: dim
    to: dws
    label: 关联
    dashed: true
```

## 数据流向与职责

```diagram
type: flow
title: 每层做什么
direction: TB
nodes:
  - id: ods
    label: ODS
    note: 原样落地
  - id: dwd
    label: DWD
    note: 清洗 / 规范化
  - id: dws
    label: DWS
    note: 主题汇总 / 公共指标
  - id: ads
    label: ADS
    note: 应用宽表 / 报表
    color: green
edges:
  - from: ods
    to: dwd
  - from: dwd
    to: dws
  - from: dws
    to: ads
```

## 回答要点与追问

- 要点：逐层讲职责，强调「公共层复用 + 口径统一」，ADS 面向应用、DWS 可复用。
- 追问：为什么要分层；DWS 和 ADS 差异；指标口径怎么统一。

## 回答思路

逐层讲职责：ODS 贴源、DWD 明细、DWS 汇总、ADS 应用、DIM 维表。强调分层是为了「解耦 + 复用 + 口径统一 + 可回溯」。

## 案例

「DWS 和 ADS 最主要差异」：DWS 是公共汇总层、可被多个团队复用；ADS 面向具体应用做宽表。判断逻辑放哪层，看它是不是「公共口径」。

## 苏格拉底引导

```socratic
type: socratic
steps:
  - q: 为什么不直接从 ODS 出报表？
    hint: 原始数据干净吗、稳定吗
    point: ODS 是贴源原始数据，脏、口径乱；直接出报表会把问题放大，难以复用和回溯。
  - q: DWD 和 DWS 各自解决什么问题？
    hint: 一个是明细、一个是汇总
    point: DWD 做清洗规范化的明细层，DWS 做主题汇总和公共指标，让下游复用统一口径。
  - q: 指标口径不一致怎么办？
    hint: 谁来统一维护
    point: 把公共指标沉淀到 DWS + 指标字典 / 资产平台统一维护，下游只引用不重算。
```
