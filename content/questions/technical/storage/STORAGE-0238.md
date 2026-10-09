---
id: STORAGE-0238
type: technical
question: 解释HBase中的StoreFile和HFile的概念及关系。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

StoreFile 是逻辑层，底层文件是 HFile。

# 参考回答

StoreFile 是 HBase 存储层的逻辑概念，对应一个列族的数据文件，底层格式就是 HFile。MemStore flush 出来的就是 HFile，StoreFile 是对 HFile 的封装。

# 追问

- HFile 是什么格式？
