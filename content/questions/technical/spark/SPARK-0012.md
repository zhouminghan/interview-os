---
id: SPARK-0012
type: technical
question: 任务变慢：数据量增 15%，少数 task 慢，平均 CPU 40%，如何排查
topic: [spark, tuning, diagnose]
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

先看是数据倾斜还是资源/IO 瓶颈：平均 CPU 低 + 少数 task 慢，大概率是倾斜长尾。

# 30 秒回答

看 Spark UI 的 task 耗时和数据量分布：少数 task 数据量/耗时远大于其他就是倾斜；再结合 executor 日志、GC、spill、磁盘 IO 排除单节点问题。

# 1 分钟回答

1. 看 stage/task metrics：耗时、shuffle read、records
2. 定位慢 task 对应哪些 key/分区
3. 判断数据倾斜：数据量和耗时高度集中
4. 排除硬件/IO：executor 日志、GC、磁盘 IO、节点状态
5. 平均 CPU 40% 说明资源没吃满，倾斜或 IO 等待可能性大

# 追问

- task 慢但 CPU 不高，还可能是什么原因？
- 怎么快速定位热点 key？
