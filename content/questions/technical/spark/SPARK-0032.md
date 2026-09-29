---
id: SPARK-0032
type: technical
question: Spark UI 有一个节点处理性能慢很多，怎么排查
topic: [spark, diagnose, node]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-25-xunlei-data-dev
    company: 迅雷
    position: 资深数据开发（一面）
    date: 2026-09-25
---

# 一句话

先区分数据倾斜还是单节点硬件/IO 问题，再针对性处理。

# 30 秒回答

看该节点上 task 的数据量是否异常大（倾斜），还是所有 task 都慢（硬件/IO）。看 executor 的 CPU、GC、磁盘 IO、网络；换节点重跑验证；倾斜处理热点 key，硬件问题换节点/查磁盘。

# 1 分钟回答

- 倾斜：该节点 task 数据量远大于其他
- 硬件/IO：该节点所有 task 都慢，与数据无关
- 指标：CPU、GC、磁盘 IO、网络
- 验证：换节点重跑同 stage
- 处理：倾斜加盐/拆分，硬件换节点/修盘

# 追问

- 怎么快速判断是倾斜还是硬件？
- 节点磁盘慢怎么看？
