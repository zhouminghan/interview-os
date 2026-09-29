---
id: SPARK-0042
type: technical
question: Spark 分区器有哪些
topic: [spark, partitioner]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-03-10-bytedance-data-intern-1
    company: 字节跳动
    position: 数据开发（实习，一面）
    date: 2026-03-10
---

# 一句话

主要有 HashPartitioner（按 key 哈希）和 RangePartitioner（按 key 范围），也可自定义。

# 30 秒回答

HashPartitioner 用 key.hashCode 取模分到各分区；RangePartitioner 先采样确定边界，再按 key 范围分区，保证全局有序。sortByKey 用 Range，reduceByKey/groupByKey 用 Hash。

# 1 分钟回答

- HashPartitioner：默认，hash 取模，key 相同同分区，但易热点倾斜
- RangePartitioner：采样定边界，数据按范围分布，配合排序
- 自定义 Partitioner：按业务 key 控制分区，常用于减少倾斜、数据局部性
- 触发场景：宽依赖算子（reduceByKey/groupByKey/join）

# 追问

- HashPartitioner 为什么会倾斜？
- 什么时候需要自定义分区器？
