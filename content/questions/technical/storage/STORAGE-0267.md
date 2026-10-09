---
id: STORAGE-0267
type: technical
question: 什么是HBase的Region观察者模式？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Observer 协处理器在操作前后触发。

# 参考回答

RegionObserver 是协处理器的观察者模式，在 get、put、delete 等操作前后触发钩子。用于二级索引、权限、审计这些横切逻辑。

# 追问

- Observer 有什么风险？
