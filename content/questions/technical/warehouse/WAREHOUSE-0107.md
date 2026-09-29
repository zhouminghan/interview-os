---
id: WAREHOUSE-0107
type: technical
question: 数仓建模 10 道高频题
topic: [warehouse, modeling, outline]
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

数仓建模 10 道高频题：分层、维度建模、SCD、事实表类型、拉链表、建模流程、规范、去重、宽表、踩坑。

# 30 秒回答

十题分别是：分层为什么这么分、维度建模与星型/雪花/星座、SCD 处理、事实表三类、拉链表设计、完整建模流程、数仓规范、数据去重、宽表设计原则、建模踩坑与解决。

# 1 分钟回答

- 分层：ODS→DWD→DWS→ADS + DIM，减少重复、解耦、便于维护
- 维度建模：事实 + 维度，星型/雪花/星座
- SCD：Type1 覆盖 / Type2 拉链 / Type3 历史列
- 事实表：事务 / 周期快照 / 累积快照
- 拉链表：start_date + end_date + is_current
- 流程：需求 → 主题域 → 事实维度 → 分层 → 规范 → 开发上线
- 规范：命名/分层/分区/存储/质量/运维
- 去重：ODS 唯一键、DWD row_number、幂等、分区覆盖
- 宽表：按主题聚合、减少 Join，放 DWS/ADS
- 踩坑：维度不合理/未规划分区/SCD 混乱/过度设计/缺公共层

# 追问

- 十题里哪些在题库中已有独立带答案的版本？
