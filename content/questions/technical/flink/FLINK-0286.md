---
id: FLINK-0286
type: technical
question: 如何对FlinkSQL作业进行单元测试和集成测试？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 test harness 测 UDF 和 SQL。

# 参考回答

SQL 作业测试用 MiniCluster 或 test harness，测 UDF、SQL 查询逻辑。集成测试用 MiniCluster 跑完整作业验证输出。

# 追问

- 单元测试和集成测试边界？
