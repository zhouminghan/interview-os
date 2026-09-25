---
id: SPARK-0021
type: technical
question: Spark UI 某个 stage 运行久、数据量大，怎么定位是哪段代码
topic: [spark, diagnose, stage]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-24-meituan-data-dev
    company: 美团
    position: 数据开发（一面）
    date: 2026-09-24
---

# 一句话

用 stage 的 description、RDD 依赖和算子名反查代码位置。

# 30 秒回答

看 stage 的 description（通常含 action 或算子名）、DAG 依赖关系、RDD 血缘，对应到代码里的 join/group by/shuffle 等算子。

# 1 分钟回答

- stage description 定位 action 类型
- DAG 看上下游算子和 shuffle
- RDD 血缘追溯算子链
- 结合 stage id 和源码对应具体代码段

# 追问

- stage description 一般长什么样？
- 多个 stage 慢怎么定位关键 stage？
