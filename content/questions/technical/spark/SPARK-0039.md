---
id: SPARK-0039
type: technical
question: Spark 运行报错该怎么做检测
topic: [spark, error, debug]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-06-09-meituan-jijing
    company: 美团
    position: 大数据开发（一面）
    date: 2026-06-09
---

# 一句话

先看日志栈定位失败 Stage 和 Task，再看 Spark UI / 日志里的 executor、shuffle、内存信息，最后用窄化复现 + 参数调优兜底。

# 30 秒回答

报错检测顺序：driver 日志找异常栈 → 确认是语法/资源/数据问题 → Spark UI 看失败 Stage 和 Task 分布 → executor 日志看 OOM、shuffle 失败、数据倾斜。常见手段：加分区、调内存、broadcast 小表、处理热点 key。

# 1 分钟回答

- 第一步看 driver 日志：语法错、字段缺失、权限、文件不存在都在这里
- 第二步看 Spark UI：失败 Stage 的 Task 是均匀慢还是个别慢，判断倾斜还是资源
- 第三步看 executor 日志：OOM（堆/堆外）、shuffle 拉取失败、磁盘不足
- 第四步定位数据：用 SQL 按 key count 找热点、看输入数据量是否异常
- 定位后处理：加盐打散、调 shuffle partition、增大 executor 内存、小表 broadcast

# 追问

- 怎么区分是数据倾斜还是资源不够？
- Spark UI 里哪个页面最能定位问题？
