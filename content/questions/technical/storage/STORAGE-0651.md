---
id: STORAGE-0651
type: technical
question: 什么是 Hive 中的 ObjectInspector？
difficulty: 0
topic: []
source_type: knowledge
---

ObjectInspector 在 Hive 中用于查看复杂对象的内部结构。这是一个由 `StandardListObjectInspector`、`StandardMapObjectInspector`、`StandardSetObjectInspector` 等类实现的接口。ObjectInspector 的主要用途是在 SerDe 包中进行序列化和反序列化。必须确保 Object 类的 `hashCode()` 和 `equals()` 方法也适用于 ObjectInspector。

---
