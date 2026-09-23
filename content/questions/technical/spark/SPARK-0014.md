---
id: SPARK-0014
type: technical
question: 如何区分数据倾斜、节点硬件慢、IO 问题
topic: [spark, skew, diagnose]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-21-jiukun-data-dev
    company: 九坤
    position: 数据开发（一面）
    date: 2026-09-21
---

# 一句话

倾斜是「少数 task 数据量/耗时异常高」，硬件/IO 是「某节点上所有 task 都慢或整体 IO 高」。

# 30 秒回答

倾斜看 task 数据量和耗时是否集中在特定 key；硬件慢看 executor 上所有 task 都慢、磁盘/网络/GC 指标异常；可通过换节点重跑验证。

# 1 分钟回答

- 倾斜：同一 stage 少数 task 处理数据量和耗时远超其他，换节点重跑仍同样 key 慢
- 硬件慢：某 executor 所有 task 都慢，与数据内容无关，随机分布
- IO：整体 IO 高、磁盘队列长，可看 executor 日志和系统指标
- 排查：Spark UI task metrics、shuffle 分布、executor 日志、磁盘/网络/GC

# 追问

- 怎么用重跑来区分？
- 倾斜在 UI 上最明显的特征是什么？
