---
id: WAREHOUSE-0175
type: technical
question: 如何在分析模型中防止重复计数？
difficulty: 0
topic: []
source_type: knowledge
---

防止重复计数的方法：
- 强制执行正确的粒度
- 使用正确的连接键（多对一）
- 避免没有桥接表的多对多连接
- 定义指标规则（sum vs distinct count vs 最新值）
- 用对账查询进行测试

---
