---
id: STARROCKS-0202
type: technical
question: 如何使用 StarRocks 构建用户画像系统？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

标签宽表或 bitmap 存标签，支持圈选。

# 参考回答

用户画像用 StarRocks 存用户标签，可以用宽表或 bitmap 存标签集合，支持按标签组合圈选人群。bitmap 在人群圈选上特别高效。

# 追问

- bitmap 圈选为什么快？
