---
id: SPARK-0008
type: technical
question: spark-submit 提交的任务，什么情况会分成多个 Job
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

一个 action 触发一个 Job，所以有多个 action 就会拆成多个 Job；宽依赖只拆 Stage，不拆 Job。

# 30 秒回答

出现多个 action（如先 count、再 collect、再 save）时，每个 action 一个 Job。注意 shuffle 导致的是 Stage 切分，不是 Job 切分。

# 1 分钟回答

- action 例子：collect、count、take、foreach、saveAsTextFile、saveAsTable
- transformation 是懒执行，不触发 Job
- 多次调用不同 action -> 多个 Job
- 特殊：某些操作内部也可能触发额外 action

# 追问

- 哪些操作是 action？
- Job 和 Stage 的对应关系？
