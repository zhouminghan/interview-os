---
id: SPARK-0020
type: technical
question: 怎么发现数据倾斜、定位倾斜位置
topic: [spark, skew, diagnose]
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

看 Spark UI 的 task 数据量/耗时分布，长尾 task 对应的 stage 和 key 就是倾斜位置。

# 30 秒回答

看 stage 内各 task 的 shuffle read、records、耗时，找到少数远大于其他的长尾 task；再抽样统计 key 分布，定位热点 key。

# 1 分钟回答

- UI：task metrics、耗时分布、shuffle 数据量
- 定位 stage：哪个 stage 长尾
- 定位 key：抽样统计 key 的条数分布，找热点 key
- 辅助：日志、OOM、数据抽样 SQL

# 追问

- 怎么快速统计热点 key？
- 长尾和倾斜是同一回事吗？
