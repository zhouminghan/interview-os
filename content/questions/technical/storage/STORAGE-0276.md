---
id: STORAGE-0276
type: technical
question: HBase的写入流程是怎样的？请详细解释。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

写 WAL 再写 MemStore，攒够 flush。

# 参考回答

写入流程：客户端定位 Region，数据先写 WAL 保证不丢，再写 MemStore，MemStore 攒到阈值 flush 成 HFile。返回写成功。

# 追问

- 为什么先写 WAL？
