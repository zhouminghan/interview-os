---
id: FLINK-0353
type: technical
question: 解释FlinkSQL中的异常链路跟踪及问题定位方法。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看日志、异常堆栈、执行图定位问题算子。

# 参考回答

异常定位看日志和异常堆栈，找到出错的算子，结合执行图和指标分析。是数据问题、资源问题还是代码问题，分别处理。日志要能关联到具体 task。

# 追问

- 怎么快速定位出错算子？
