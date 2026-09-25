---
id: SPARK-0025
type: technical
question: 任务提速 50% 的核心改动是什么，链路整体还是单个任务
topic: [spark, performance]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-26-xpeng-data-dev
    company: 小鹏
    position: 数据开发（27 届秋招一面）
    date: 2026-09-26
---

# 一句话

提速常靠减少 shuffle、广播小表、治理倾斜、优化格式和并行度，要区分是单任务还是链路整体优化。

# 30 秒回答

核心改动：小表 broadcast、治理数据倾斜、列裁剪、谓词下推、合理并行度、列式+压缩、缓存复用、小文件治理。判断是单任务还是链路整体看瓶颈在哪个环节。

# 1 分钟回答

- 减少 shuffle：broadcast、join 顺序
- 倾斜治理：加盐、热点拆分
- 存储：Parquet/ORC + 压缩、小文件治理
- 调参：并行度、AQE、内存
- 链路：端到端各环节耗时占比定位

# 追问

- 怎么判断该优化单个任务还是整条链路？
- 提速 50% 的改动你怎么验证？
