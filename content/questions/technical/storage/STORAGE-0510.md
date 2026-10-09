---
id: STORAGE-0510
type: technical
question: Clickhouse的BITMAP函数有哪些应用？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Bitmap 做去重和交并集。

# 参考回答

Bitmap 函数用于大基数去重、交并集计算，比如 bitmapAnd、bitmapOr。适合用户圈选、去重统计。比 count distinct 高效。

# 追问

- Bitmap 适合什么？
