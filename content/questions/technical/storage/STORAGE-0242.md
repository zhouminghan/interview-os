---
id: STORAGE-0242
type: technical
question: HBase中的协处理器(Coprocessor)是什么？有哪些类型？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

协处理器在服务端执行自定义逻辑。

# 参考回答

协处理器类似存储过程，在 RegionServer 端跑自定义逻辑。分 Observer 和 Endpoint 两类，Observer 钩子触发，Endpoint 远程调用。用于二级索引、聚合等，但要慎用。

# 追问

- 协处理器有什么风险？
