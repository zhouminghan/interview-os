---
id: WAREHOUSE-0068
type: technical
question: 多个业务系统同一字段编码不一致，数仓怎么统一
topic: [warehouse, standardization]
difficulty: 2
frequency: high
source_type: knowledge
---

# 一句话

用映射表 / 字典编码在 DWD 清洗时统一枚举值。

# 30 秒回答

例如性别 F/M 和男/女，在 DWD 层用映射表转成统一字典编码，保证下游口径一致。

# 追问

- 映射表放哪一层维护？
- 新增编码值怎么处理？
