---
id: STORAGE-0630
type: technical
question: 什么是 Hive 中的 SerDe？
difficulty: 0
topic: []
source_type: knowledge
---

SerDe 是 Serializer/Deserializer（序列化器/反序列化器）的简称。在 Hive 中，SerDe 用于输入/输出接口。任何通信都必须对数据进行序列化和反序列化。

通过 SerDe，Hive 可以以自定义格式读取表中的数据并将其写入 HDFS。也可以实现自定义 SerDe 来处理自己的数据格式。在 map 和 reduce 期间，Hive 可以使用 `LazyBinarySerDe` 和 `BinarySortableSerDe` 的序列化方法。还可以使用 `ObjectInspector`，让一个 SerDe 序列化由另一个 SerDe 创建的对象。

---
