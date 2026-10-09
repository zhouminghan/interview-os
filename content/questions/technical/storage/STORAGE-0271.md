---
id: STORAGE-0271
type: technical
question: 什么是HBase的读写路径？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

写经 WAL 和 MemStore，读经 BlockCache 和 HFile。

# 参考回答

写入路径：先写 WAL，再写 MemStore，攒够 flush 成 HFile。读取路径：先查 BlockCache，再查 MemStore，最后查 HFile，合并结果返回。

# 追问

- 读先查哪个？
