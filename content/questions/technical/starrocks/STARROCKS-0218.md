---
id: STARROCKS-0218
type: technical
question: Doris 的 rollup 是什么？和物化视图、预聚合分别什么关系？⭐⭐⭐
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：rollup=Base 表的维度上卷 | 物化视图=更通用预计算 | 预聚合=Aggregate 模型写入合并 | 三者层级不同
> **来源**：字节-AI Agent数据开发一面-20260412 Q2/Q3

字节面试官**反复问**这题，必须讲清三者层级：

### 1. 预聚合（Pre-aggregation）
**Aggregate 模型表的写入行为**——数据进库时按 Key 自动合并。
- 作用层：数据组织层 / 存储层
- 触发时机：数据写入时
- 效果：底层数据条数本身就少

### 2. Rollup（上卷表 / 二级表）
基于 Aggregate 模型 Base 表，按更粗维度组合预生成的"二级表"。本质是物化视图的特例（按维度上卷）。
- 作用层：查询加速层
- 触发时机：查询时优化器自动判断命中
- 限制：1.0 时代只支持 Aggregate 模型；新版逐步放开

举例：Base 表 `(dt, channel_id, content_type, pv SUM, uv BITMAP_UNION)`，建 rollup `(dt, channel_id, pv SUM, uv BITMAP_UNION)`。查询只按 `dt+channel_id` 聚合时优化器自动走 rollup，IO 少。

### 3. Materialized View（物化视图）
更通用的预计算手段（0.12+ 引入，2.0+ 大幅增强异步物化视图）：
- 不要求 Base 表是 Aggregate 模型
- 可以做带 Filter / JOIN / 表达式的复杂加工
- 异步物化视图甚至可以跨表

**Rollup 是物化视图的子集**，只做"按维度上卷的同构聚合"。

### 三者类比

| 层级 | 概念 | 类比 |
|---|---|---|
| 数据组织 | 预聚合（Aggregate 模型） | 进货时按 SKU 合并库存 |
| 查询加速 | Rollup | 在库存基础上按品类做汇总 |
| 查询加速（更通用） | 物化视图 | 在库存基础上做任意预算报表 |

**叠加使用**：Aggregate 模型（写入聚合）+ rollup / 物化视图（查询命中），三层联动。

---
