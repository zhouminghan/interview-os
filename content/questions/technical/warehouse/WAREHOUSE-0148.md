---
id: WAREHOUSE-0148
type: technical
question: 描述一次你如何通过数据仓库实现数据可视化展示的经历。
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

数仓出 ADS 结果表，直接对接 BI 或大屏做可视化。

# 参考回答

我一般把指标加工到 ADS 层，产出结果表，然后接 BI 工具或大屏，比如 FineBI、DataV、Tableau 这类，直接查表出图。关键是上游口径要稳，下游可视化才不会错。

# 追问

- 可视化和数仓分层怎么衔接？
- ADS 层结果表怎么设计？
