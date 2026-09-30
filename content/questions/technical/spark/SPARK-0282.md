---
id: SPARK-0282
type: technical
question: 如何最小化 Spark 的数据传输？
difficulty: 0
topic: []
source_type: knowledge
---

通常，Spark 中的 Shuffle 操作会导致大量数据传输，可以配置 Spark Shuffle 过程以实现最佳数据传输：
- `spark.shuffle.compress`：将此配置设置为 true 以压缩 map 输出文件，减少因压缩导致的数据传输量。
- **减少 ByKey 操作的使用**：尽量减少使用 ByKey 操作以减少 Shuffle 调用。

---
