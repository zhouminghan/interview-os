---
id: STORAGE-0816
type: technical
question: 为什么 OLAP 查得快？
topic: [storage, olap, columnar]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-10-05-tencent-cdg-data-eng
    company: 腾讯 CDG
    position: 数据工程（秋招一面）
    date: 2026-10-05
---

# 一句话

OLAP 快在「少读、并行、少算」：列式存储只读需要的列，MPP 分布式并行扫，向量化执行 + 压缩减少 IO，预聚合和排序键 / 前缀索引进一步裁剪扫描范围。

# 30 秒回答

核心四点：①列式存储，查询只扫涉及的列，同列数据压缩率高，IO 大幅下降；②MPP 架构，数据分散到多节点并行聚合；③向量化执行，按批处理而不是逐行；④预聚合 + 排序键 + 分区，把大扫描变成小范围定位。所以 OLAP 适合海量数据的聚合分析，不适合高频点查。

# 1 分钟回答

- 列式存储：同列值类型一致，压缩率高，只读查询涉及的列，跳过多余列
- 分布式 MPP：数据分片到多节点，并行扫描 + 并行聚合
- 向量化执行：CPU 按批处理（SIMD），减少函数调用开销
- 预聚合：物化视图 / 聚合模型提前算好，查询直接取结果
- 排序键 + 前缀索引：按排序键快速定位范围，跳过无关数据块
- 分区裁剪：按分区键只扫相关分区

# 追问

- 为什么 OLAP 不适合高并发点查 / 频繁 UPDATE？
- 行存和列存各自的适用场景？
- 列式存储的缺点是什么？
