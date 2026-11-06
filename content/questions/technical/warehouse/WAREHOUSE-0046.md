---
id: WAREHOUSE-0046
type: technical
question: 说说数仓分层架构
topic: [warehouse, layering]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-26-sunwoda-data-dev
    company: 欣旺达
    position: 数据开发（秋招）
    date: 2026-09-26
---

# 一句话

数仓通常分 ODS 贴源、DWD 明细、DWS 汇总、ADS 应用，再加 DIM 维表。

# 30 秒回答

ODS 原样落地，DWD 清洗成明细，DWS 按主题汇总公共指标，ADS 面向应用做宽表，DIM 存维度。分层解耦、复用、可回溯。

# 1 分钟回答

- ODS：贴源、原样落地
- DWD：清洗、规范化、明细
- DWS：主题汇总、公共指标
- ADS：应用宽表
- DIM：维表
- 原则：职责清晰、逐层收敛、公共层复用

```diagram
type: flow
title: 数仓分层与数据流向
direction: LR
nodes:
  - id: ods
    label: ODS 贴源
    note: 原样落地
    color: blue
  - id: dwd
    label: DWD 明细
    note: 清洗 / 规范化
  - id: dws
    label: DWS 汇总
    note: 公共指标
  - id: ads
    label: ADS 应用
    note: 宽表 / 报表
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
    label: 关联维度
    dashed: true
  - from: dim
    to: dws
    label: 关联维度
    dashed: true
```

# 追问

- 每层做什么、不做什么？
- 为什么要分层？
