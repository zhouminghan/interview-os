---
id: FLINK-0355
type: technical
question: 解释Flink版本升级中可能遇到的兼容性问题及解决方案。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

API、状态、配置的兼容性问题。

# 参考回答

版本升级会碰到 API 变化、状态序列化不兼容、配置参数改名、连接器版本变化。解决靠读升级说明、用 savepoint 迁移、状态不兼容就重跑或做迁移。

# 追问

- 状态不兼容怎么办？
