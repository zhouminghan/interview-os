---
id: STORAGE-0214
type: technical
question: 什么是Hive的版本兼容性？请详细说明版本兼容性的测试方法、评估标准和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

升级前测试新旧版本兼容。

# 参考回答

版本兼容性测试在测试环境跑现有 SQL 和作业，对比结果和性能。评估标准是结果一致、性能不退化。兼容性过了才升级。

# 追问

- 兼容性测什么？
