---
id: WAREHOUSE-0127
type: technical
question: 描述一次你参与的数据仓库优化经历，具体做了哪些改进措施？
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

优化就是围绕少读、少 shuffle、少倾斜做文章。

# 参考回答

有一次日报链路整体超时，我从三处入手：大表 join 小表改成 broadcast 避免 shuffle；分区裁剪加谓词下推，只扫需要的分区；热点 key 加盐打散。最后整体时长降了一半多。核心思路就是先看执行计划，找到最慢的 stage 再对症下药。

# 追问

- 怎么判断一个 stage 为什么慢？
- broadcast join 对表大小有什么要求？
