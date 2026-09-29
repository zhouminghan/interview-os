---
id: SPARK-0040
type: technical
question: Spark 不同版本时期的 shuffle 演进及各自优缺点
topic: [spark, shuffle]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-05-12-kuaishou-bigdata-intern
    company: 快手
    position: 大数据开发（实习）
    date: 2026-05-12
---

# 一句话

Spark shuffle 从 Hash（文件爆炸）演进到 Consolidate Hash（减少文件）、再演进到 Sort（文件数稳定）和 Tungsten Sort（堆外 + 二进制加速）。

# 30 秒回答

四代：Hash Shuffle（M×R 文件爆炸）→ Consolidate Hash（同 executor 共享文件，E×R）→ Sort Shuffle（每 task 1 数据文件 + 1 索引，2×M）→ Tungsten Sort（堆外内存 + 二进制，性能再提升）。2.x 后默认 Sort + Tungsten。

# 1 分钟回答

- Hash Shuffle：每个 map 给每个 reduce 建文件，文件数 M×R，小任务快但大任务文件爆炸
- Consolidate Hash：同 executor 多 map 共享一组文件，文件数 E×R，缓解但仍有上限
- Sort Shuffle：每 task 只写 1 数据 + 1 索引文件，按 partition 排序，文件数稳定为 2×M，代价是强制排序
- Tungsten Sort：堆外内存、二进制数据、缓存友好布局，性能最优，但有限制条件，不满足会 fallback 到 Sort
- 核心思路：从「文件数爆炸」到「文件数可控」，从「JVM 堆内」到「堆外 + 二进制」

# 追问

- Sort Shuffle 为什么必须排序？
- Tungsten 在什么情况下会 fallback？
