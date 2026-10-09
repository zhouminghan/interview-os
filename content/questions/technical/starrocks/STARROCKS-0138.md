---
id: STARROCKS-0138
type: technical
question: StarRocks 中的数据压缩机制是什么？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

列存配合多种编码压缩，按列类型选编码。

# 参考回答

压缩分两层：列式存储本身就好压缩，再加上按列类型选编码，比如字典编码、RLE、LZ4 和 ZSTD 压缩。同列数据相似，压缩率高，省空间也省 IO。

# 追问

- 为什么列存比行存压缩率高？
