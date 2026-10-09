---
id: STARROCKS-0089
type: technical
question: StarRocks 日志系统是怎样的？如何查看和分析日志？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分 FE、BE 日志，定位问题看对应节点日志和错误栈。

# 参考回答

StarRocks 日志分 FE 和 BE 两类，FE 日志看元数据和查询入口，BE 日志看执行和存储。排查时按时间和请求 ID 关联，找 error 和异常堆栈。

# 追问

- FE 日志和 BE 日志分别记什么？
