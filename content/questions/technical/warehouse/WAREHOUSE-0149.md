---
id: WAREHOUSE-0149
type: technical
question: 数仓为什么要分层，常见的分层方式有哪些？
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分层是为了解耦、复用和隔离影响，常见 ODS、DWD、DWS、ADS 四层。

# 参考回答

分层的好处是各层职责清晰：ODS 贴源存原始、DWD 做明细清洗、DWS 做汇总、ADS 面向应用。这样上游变动不影响下游，中间结果能复用，也方便排查。缺点是链路变长、有冗余，但利大于弊。

# 追问

- 各层分别解决什么问题？
- 分层太多会有什么坏处？
