---
id: SPARK-0009
type: technical
question: 什么情况不会拆分成多个 Job
topic: [spark, job, action]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-09-bytedance-data-dev
    company: 字节跳动
    position: 数据开发（秋招）
    date: 2026-09-09
---

# 一句话

整个应用只有一个 action 时通常只有一个 Job；只有 transformation 不触发 action 时根本不会产生 Job。

# 30 秒回答

只做一次 action（比如只 save 一次），即使内部有多个 Stage，也只算一个 Job。纯 transformation 链是懒执行，不会产生 Job。

# 1 分钟回答

- 单 action：一次 saveAsTextFile / collect，对应一个 Job
- 无 action：只有 map/filter/join 等 transformation，不会执行、不产生 Job
- 复用缓存：cache 命中可减少重复计算，但 Job 数仍由 action 数决定

# 追问

- transformation 和 action 的本质区别？
- cache 对 Job 数量有影响吗？
