---
id: FLINK-0581
type: technical
question: 实时数仓架构怎么搭？（实际项目经验）
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：京东JDY-一面-20260415 Q11、字节-大数据开发-20260414 Q34

实时数仓 MVP 架构：Flink DataStream 消费 Kafka → 实时清洗写入 Iceberg DWD 表 → DWS/ADS 用 Spark 做 10 分钟级微批聚合。

核心设计：按 Topic 拆分消费、广播流做配置驱动的动态分流、分钟级调度链路。个人角色：实时和离线数据一致性验证（差异率控制在 1% 以内）+ 离线部分需求全面承接。

---
