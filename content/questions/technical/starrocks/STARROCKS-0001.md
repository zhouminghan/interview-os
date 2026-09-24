---
id: STARROCKS-0001
type: technical
question: 你怎么做数据查询优化
topic: [starrocks, query-optimization]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-23-anker-data
    company: 安克创新
    position: 数据岗（一面）
    date: 2026-09-23
---

# 一句话

查询优化分「建模优化 + SQL 优化 + 资源调优」三层。

# 30 秒回答

建表时合理分区分桶、设排序键、选合适数据模型、建物化视图和索引；SQL 用谓词下推、列裁剪、调 join 顺序；执行层看 Profile 定位慢算子，调并行度和资源。

# 1 分钟回答

- 建模：分区裁剪、分桶均匀、排序键贴近查询、物化视图、Bitmap/Bloom Filter 索引
- SQL：谓词下推、列裁剪、避免 select *、join 重排序
- 执行：向量化、CBO 优化器、并行度、缓存
- 定位：Profile / 执行计划找慢算子

# 追问

- 物化视图怎么加速查询？
- 排序键对查询有什么影响？
