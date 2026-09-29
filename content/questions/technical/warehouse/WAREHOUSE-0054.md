---
id: WAREHOUSE-0054
type: technical
question: Kimball 和 Inmon 两种数仓方法论的对比
topic: [warehouse, modeling, methodology]
difficulty: 3
frequency: medium
source_type: knowledge
---

# 一句话

Kimball 自下而上、维度建模（星型、面向业务过程）；Inmon 自上而下、3NF 规范化（企业级数据仓库）。

# 30 秒回答

Kimball 从业务过程和维度建模出发，交付快、易理解；Inmon 先建规范化的企业数据仓库（3NF），再建数据集市，一致性强但周期长。

# 1 分钟回答

- Kimball：自下而上，维度建模，星型模型，面向业务过程
- Inmon：自上而下，先 3NF 企业仓，再派生数据集市
- Kimball 优点：快、易用、查询简单；缺点：一致性和扩展性弱
- Inmon 优点：规范、一致、可扩展；缺点：建设周期长、成本高

# 追问

- 你项目用的是哪种，为什么？
- 为什么多数互联网数仓倾向维度建模？
