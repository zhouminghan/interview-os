---
id: STARROCKS-0014
type: technical
question: Doris / StarRocks 的 rollup 和预聚合有什么区别
topic: [starrocks, rollup]
difficulty: 3
frequency: low
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-04-12-bytedance-agent-data-1
    company: 字节跳动
    position: AI Agent 方向数据开发（一面）
    date: 2026-04-12
---

# 一句话

rollup 是按不同维度组合预计算的物化结构，预聚合是把明细提前按维度汇总；rollup 是预聚合的一种实现方式。

# 30 秒回答

rollup 针对基表的不同维度组合建物化表，查询命中 rollup 直接读汇总结果，免去实时聚合。预聚合是更泛的概念（提前算好汇总），rollup、物化视图、聚合模型都属于预聚合手段。

# 1 分钟回答

- rollup：StarRocks/Doris 的物化 rollup 索引，按维度组合预汇总
- 预聚合：泛指提前聚合，包括聚合模型、物化视图、rollup
- 关系：rollup 是预聚合的具体实现，物化视图是更通用的预聚合
- 除了新建 rollup，还可调分桶、建物化视图、用聚合模型、优化查询

# 追问

- rollup 和物化视图有什么区别？
- 新建 rollup 的代价是什么？
