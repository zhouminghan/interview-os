---
id: SPARK-0038
type: technical
question: Spark SQL 的 Catalyst 优化器做了什么
topic: [spark, catalyst]
difficulty: 3
frequency: medium
source_type: knowledge
---

# 一句话

Catalyst 把 SQL 解析成逻辑计划，做规则优化后转成物理计划。

# 30 秒回答

解析 AST → 逻辑计划 → 规则优化（谓词下推、列裁剪、常量折叠）→ 物理计划（join 策略选择）→ 生成代码。

# 追问

- 谓词下推是什么？
- RBO 和 CBO 区别？
