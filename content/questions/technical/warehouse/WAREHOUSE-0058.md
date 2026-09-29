---
id: WAREHOUSE-0058
type: technical
question: MOLAP、ROLAP、HOLAP 的区别，多维分析有哪些操作
topic: [warehouse, olap]
difficulty: 3
frequency: medium
source_type: knowledge
---

# 一句话

MOLAP 预计算 Cube（快、占空间），ROLAP 关系库实时查（灵活、慢），HOLAP 混合两者。

# 30 秒回答

MOLAP 把结果预计算成 Cube，查询快但空间大、更新慢；ROLAP 直接查关系库，灵活但慢；HOLAP 明细放关系库、聚合放 Cube。多维操作：钻取、上卷、切片、切块、旋转。

# 1 分钟回答

- MOLAP：预计算，快、空间大、刷新成本高
- ROLAP：实时查关系库，灵活、可扩展、查询慢
- HOLAP：混合，明细 ROLAP + 聚合 MOLAP
- 操作：钻取（下钻）、上卷、切片、切块、旋转

# 追问

- 预计算和实时查询怎么权衡？
- 钻取和上卷是一对互逆操作吗？
