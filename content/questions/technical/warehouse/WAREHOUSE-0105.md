---
id: WAREHOUSE-0105
type: technical
question: DWS 大宽表的时效风险怎么权衡
topic: [warehouse, wide-table]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-07-15-qizhidao-data-dev
    company: 企知道
    position: 数据开发（一面）
    date: 2026-07-15
---

# 一句话

大宽表要等所有主题域上游跑完才产出，时效差；权衡是核心指标走细粒度主题域保时效，但代价是口径要维护多处。

# 30 秒回答

大宽表依赖多个主题域，任一上游延迟都会拖慢整张表，若下游接核心指标会放大延迟。折中：核心指标从细粒度主题域出，不都依赖大宽表；但这样同一指标口径要在大宽表和主题域两处维护，需权衡时效和口径一致性。

# 1 分钟回答

- 风险：宽表要等所有上游依赖跑完，链路越长延迟越严重
- 影响：下游接核心指标时，一处延迟全线拖延
- 折中 1：核心指标走细粒度主题域，牺牲一点复用换时效
- 折中 2：宽表依赖公共 DWS 维度层而非 DWD，数据量小、口径统一
- 本质：时效 vs 口径一致性，按业务取舍

# 追问

- 为什么宽表会放大上游延迟？
- 两处维护口径怎么保持一致？
