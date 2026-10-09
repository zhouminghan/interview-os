---
id: WAREHOUSE-0144
type: technical
question: 描述一次你如何应对数据仓库扩展性问题的经历。
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

扩展性靠分层解耦、分区设计和可水平扩容的存储计算。

# 参考回答

数据涨了以后，我会在建模时就预留分区，按天分区方便扩容和裁剪；存储计算分离，计算资源不够就加节点；分层设计让上游变更不影响下游。核心是别把架构写死，留出扩展的余地。

# 追问

- 存算分离对扩展性有什么好处？
- 分区设计时怎么留余量？
