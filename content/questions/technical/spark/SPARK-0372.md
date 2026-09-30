---
id: SPARK-0372
type: technical
question: 什么是广播变量（Broadcast Variable）？
difficulty: 0
topic: []
source_type: knowledge
---

广播变量允许将较大的只读变量（如查找表）缓存到每个工作节点内存，避免每次任务都序列化传输。常用于 Map Join 等场景。
