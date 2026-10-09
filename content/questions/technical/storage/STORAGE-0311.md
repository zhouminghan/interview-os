---
id: STORAGE-0311
type: technical
question: 解释HBase的压缩算法实现机制。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

列族配压缩，写 HFile 时压缩。

# 参考回答

压缩在列族配置，写 HFile 时按算法压缩数据块。读时解压。Snappy、LZ4 快，GZIP 压缩高。压缩省 IO 和存储，费 CPU。

# 追问

- 压缩在哪发生？
