---
id: STORAGE-0111
type: technical
question: Hive中的自定义函数如何实现？请详细说明UDF、UDAF、UDTF的开发流程和注意事项。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

UDF 标量、UDAF 聚合、UDTF 表生成三类。

# 参考回答

自定义函数分 UDF、UDAF、UDTF，写 Java 类实现接口，打 jar 包后 add jar 加 create function 注册。注意类型和序列化，内置能搞定就别自定义。

# 追问

- 三类函数怎么选？
