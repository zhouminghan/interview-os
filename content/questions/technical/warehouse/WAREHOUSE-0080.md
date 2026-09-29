---
id: WAREHOUSE-0080
type: technical
question: 数仓总线矩阵是什么，业务过程体现在哪
topic: [warehouse, modeling]
difficulty: 3
frequency: medium
source_type: knowledge
---

# 一句话

总线矩阵行是业务过程、列是公共维度，交叉点标记该业务过程是否需要该维度。

# 30 秒回答

业务过程体现在 DWD 层（每个业务过程一张明细表），公共维度体现在 DIM 层；矩阵帮助建模前想清维度和业务过程的关联。

# 追问

- 总线矩阵和一致性维度什么关系？
- 新增业务过程怎么更新矩阵？
