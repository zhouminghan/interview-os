---
id: SPARK-0013
type: technical
question: 增加并行度、executor 数量翻倍，总是有效吗
topic: [spark, tuning, parallelism]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-21-jiukun-data-dev
    company: 九坤
    position: 数据开发（一面）
    date: 2026-09-21
---

# 一句话

不是。并行度要匹配数据量和资源，先定位瓶颈再调。

# 30 秒回答

有效前提是任务确实受并行度限制。数据倾斜、小数据量、小文件、shuffle 开销增大时，加并行度或 executor 不一定有效，甚至更慢。

# 1 分钟回答

- 有效：分区少、资源没吃满、任务受并行度限制
- 无效/负面：数据倾斜（热点 key 仍集中）、小数据量（调度开销大）、小文件（task 过多）、shuffle 开销增加、资源竞争和 GC
- executor 翻倍：可能增加调度、GC、网络开销

# 追问

- 怎么判断并行度是否合理？
- 倾斜时加并行度为什么没用？
