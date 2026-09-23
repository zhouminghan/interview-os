---
id: SPARK-0005
type: technical
question: Application、Job、Stage 的区别
topic: [spark, execution, job, stage]
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

Application 是整个程序，Job 由 action 触发，Stage 由 shuffle 边界划分，Task 是 Stage 的最小执行单元。

# 30 秒回答

Application 对应一个 Spark 应用（一个 driver + 多个 executor）；一次 action 产生一个 Job；Job 内按宽窄依赖、shuffle 边界切分 Stage；Stage 内并行度决定 Task 数。

# 1 分钟回答

- Application：一个 spark-submit / SparkSession 对应一个应用
- Job：一个 action（collect、count、save）触发一个 Job
- Stage：Job 内部按 shuffle 切分，窄依赖合并在同一 Stage 流水线执行
- Task：Stage 里的最小执行单元，一个分区一个 task
- 层级：Application > Job > Stage > Task

# 追问

- 哪些操作是 action，哪些是 transformation？
- 宽依赖和窄依赖怎么区分？
- 一个 Job 里一定多个 Stage 吗？
