---
id: SPARK-0017
type: technical
question: salt 加盐、broadcast 广播 join、hash join 区别；广播时内存是谁的内存
topic: [spark, join, broadcast, salting]
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

Hash Join 按 key shuffle 后关联，Broadcast Join 把小表广播到内存避免 shuffle，加盐是处理倾斜的两阶段 join。

# 30 秒回答

- Hash Join：按 join key shuffle 到同分区再关联，有 shuffle
- Broadcast Join：小表广播到各 executor 内存，map 端 join，无 shuffle，适合小表
- 加盐：热点 key 加随机前缀打散再 join，二次 join 还原，处理倾斜
- 广播内存：广播变量存在 executor 的存储内存，不是 driver 内存

# 1 分钟回答

- broadcast 条件：小表小于 spark.sql.autoBroadcastJoinThreshold（默认 10MB）
- 广播对象存 executor storage 内存，可跨 task 复用
- 加盐是倾斜优化手段，会增加两阶段 shuffle
- 三者可组合：小表可广播则不倾斜，大表倾斜才考虑加盐

# 追问

- broadcast join 对内存有什么要求？
- Sort Merge Join 和 Hash Join 区别？
- 广播变量能存磁盘吗？
