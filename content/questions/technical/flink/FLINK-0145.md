---
id: FLINK-0145
type: technical
question: 如何进行Flink作业的单元测试？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用测试框架测 UDF 和算子逻辑。

# 参考回答

单元测试用 Flink 的 test harness 或 JUnit，测 UDF、ProcessFunction 的逻辑，模拟输入验证输出。状态逻辑用 KeyedProcessFunction 测试工具。

# 追问

- test harness 怎么用？
