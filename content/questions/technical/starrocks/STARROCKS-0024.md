---
id: STARROCKS-0024
type: technical
question: StarRocks 的查询引擎有什么特点？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

向量化执行、CBO 优化器、谓词下推、物化视图。

# 参考回答

查询引擎特点就是向量化执行，按批处理而不是逐行；CBO 基于成本选最优执行计划；还有谓词下推、分区裁剪、物化视图加速。这些加起来让它聚合查询特别快。

# 追问

- 向量化执行为什么快？
