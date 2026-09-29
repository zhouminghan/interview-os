---
id: SPARK-0044
type: technical
question: AQE 自适应查询执行是什么
topic: [spark, aqe]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-06-23-tencent-kuaishou-zhenti
    company: 腾讯 / 快手
    position: 数据开发（一面真题）
    date: 2026-06-23
---

# 一句话

AQE 是 Spark 3.x 的运行时优化：根据 shuffle 中间结果的真实统计，动态合并分区、切换 Join 策略、优化倾斜 Join。

# 30 秒回答

AQE 在 shuffle 结束后拿到真实数据量，运行时做三件事：合并过小分区、把小表广播切换成 Broadcast Join、检测倾斜分区并拆分。比静态优化器更贴近真实数据分布。

# 1 分钟回答

- 动态合并分区：shuffle 后分区太小就合并，减少 task 数
- 动态切换 Join：发现某侧很小，运行时转 Broadcast Join
- 优化倾斜 Join：检测倾斜分区自动拆分
- 前提：`spark.sql.adaptive.enabled=true`（3.x 默认开）
- 价值：不用人工猜数据量，运行时自适应

# 追问

- AQE 和静态优化器的区别？
- AQE 能完全替代人工加盐吗？
