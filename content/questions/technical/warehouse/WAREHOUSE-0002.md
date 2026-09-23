---
id: WAREHOUSE-0002
type: technical
question: 数仓每一层的含义是什么
topic: [warehouse, ods, dwd, dws, ads]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-18-bytedance-douyin
    company: 字节跳动
    position: 大数据开发（实习）
    date: 2026-09-18
---

# 一句话

数仓通常分 ODS 贴源层、DWD 明细层、DWS 汇总层、ADS 应用层，必要时再加 DIM 维表层。

# 30 秒回答

- ODS：贴源层，原始数据尽量保持原样落地，带分区
- DWD：明细层，做清洗、规范化、去重、字段标准化
- DWS：汇总层，按主题做轻度汇总，生成 1d/7d/30d 等周期指标
- ADS：应用层，面向具体报表和场景的宽表结果
- DIM：维表层，存放维度属性

# 1 分钟回答

分层核心是「解耦 + 复用 + 可回溯」：ODS 保留最原始事实，DWD 把原始数据加工成统一、可信的明细，DWS 预计算常用指标避免重复计算，ADS 直接对接应用。层与层之间数据量通常逐层收敛，但 ADS 面向应用可能会做宽表化。

# 追问

- DWS 和 ADS 的边界怎么划？
- 为什么 DWD 不做太强的聚合？
- 层与层之间的数据量变化趋势？
