---
id: WAREHOUSE-0285
type: technical
question: 变更数据模型后如何验证？
difficulty: 0
topic: []
source_type: knowledge
---

- 每一层做行数和键唯一性检查
- 总量与源系统对账
- 对已知实体做抽样和下钻检查
- 关键业务指标的回归测试

这能捕捉到连接重复或迟到数据缺失等隐蔽问题。

---

