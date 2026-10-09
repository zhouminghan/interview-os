---
id: FLINK-0349
type: technical
question: 解释SQL Client的会话管理功能及使用方法。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

一个会话保持状态和临时表。

# 参考回答

SQL Client 会话是交互式执行环境，会话内注册的临时表和函数在会话期间有效。可以切 catalog、切库，会话结束临时对象失效。

# 追问

- 会话和作业什么关系？
