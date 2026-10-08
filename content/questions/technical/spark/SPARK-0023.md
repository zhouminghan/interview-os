---
id: SPARK-0023
type: technical
question: Spark OOM/慢任务怎么排查，热点 key 数据倾斜怎么解决
topic: [spark, oom, skew]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-26-xpeng-data-dev
    company: 小鹏
    position: 数据开发（27 届秋招一面）
    date: 2026-09-26
  - interview_id: INTERVIEW-2026-09-28-bytedance-fandouyin-liangjing
    company: 字节跳动
    position: 数据开发（泛抖音，校招一面凉经）
    date: 2026-09-28
---

# 一句话

OOM/慢任务先看日志和 UI 定位 driver/executor、倾斜、shuffle、缓存，倾斜用加盐/热点拆分/AQE 解决。

# 30 秒回答

排查：看日志区分 driver/executor OOM，看 UI 定位慢 task 和 shuffle 数据量、缓存和广播过大。倾斜：热点 key 加盐两阶段聚合、热点拆分、AQE skew join。

# 1 分钟回答

- OOM：driver（collect/广播过大）、executor（倾斜/缓存/内存不足）
- 慢任务：UI 定位慢 stage/task、shuffle 数据量、GC、spill
- 倾斜：加盐、热点拆分、增加并行度、AQE skew join
- 定位：抽样统计热点 key 分布

# 追问

- driver OOM 常见原因？
- AQE skew join 原理？
