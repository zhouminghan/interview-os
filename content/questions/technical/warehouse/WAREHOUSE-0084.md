---
id: WAREHOUSE-0084
type: technical
question: 数仓跨主题合并怎么做
topic: [warehouse, modeling]
difficulty: 4
frequency: medium
source_type: knowledge
---

# 一句话

用 DIM 层做桥梁、粒度对齐后合并，不直接 JOIN 事实表。

# 30 秒回答

跨主题合并（如流量域行为 + 用户域属性）：两边先在 DWS 按「用户+天」聚合对齐粒度，再用 DIM 用户属性 JOIN，避免事实表直接 JOIN。

# 追问

- 为什么不用事实表直接 JOIN？
- 粒度不一致怎么办？
