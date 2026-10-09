---
id: STARROCKS-0118
type: technical
question: StarRocks 如何处理稀疏数据？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

稀疏数据靠列存天然适配，用 ARRAY、MAP 存稀疏特征。

# 参考回答

稀疏数据比如用户行为特征，大量空值，列存天然省空间。也可以用 ARRAY、MAP 类型存稀疏特征，避免建几百列。Bitmap 也能表达稀疏集合。

# 追问

- 稀疏数据为什么适合列存？
