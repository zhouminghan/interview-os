---
id: STORAGE-0312
type: technical
question: HBase的Region观察者实现原理是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Observer 钩子嵌入操作前后。

# 参考回答

RegionObserver 是协处理器，把钩子嵌入 get、put、scan 等操作前后，执行自定义逻辑。用于二级索引、审计、权限校验这些。

# 追问

- Observer 有什么坑？
