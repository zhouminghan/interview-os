---
id: SPARK-0043
type: technical
question: 数据均匀仍然出现倾斜的原因
topic: [spark, skew]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-04-22-bytedance-data-dev-0422
    company: 字节跳动
    position: 数据开发工程师（一面）
    date: 2026-04-22
---

# 一句话

数据量均匀但倾斜，通常是某个 key 的 value 巨大、task 数量/资源不均、shuffle 分区算法问题或个别 executor 异常慢。

# 30 秒回答

可能原因：key 数量均匀但某个 key 的单条 value 特别大；分区数过少或 executor 资源不均；shuffle 分区函数导致部分分区热点；GC、磁盘、网络等单点性能问题。逐一用 Spark UI 看 task 数据量、shuffle read、GC time 排除。

# 1 分钟回答

- key 分布均匀但 value 大小不均
- 分区数少，少量 task 扛大部分数据
- executor 资源不均或个别节点慢（硬件/网络/GC）
- shuffle 分区算法局部热点
- 排查：Spark UI 看 task 耗时/数据量/GC，区分倾斜 vs 节点慢

# 追问

- 怎么区分是数据倾斜还是节点慢？
- value 大小不均怎么处理？
