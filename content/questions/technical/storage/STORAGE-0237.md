---
id: STORAGE-0237
type: technical
question: HBase中的MemStore是什么？它在写入流程中起什么作用？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

MemStore 是写缓存，攒够了 flush 落盘。

# 参考回答

MemStore 是每个 Region 的内存写缓存，数据先写 WAL 再写 MemStore，攒到阈值 flush 成 HFile。作用是把随机写变成顺序写，提高写入性能。

# 追问

- MemStore 满了会怎样？
