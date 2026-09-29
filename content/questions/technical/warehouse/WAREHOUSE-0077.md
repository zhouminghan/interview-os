---
id: WAREHOUSE-0077
type: technical
question: 事实标签和规则标签的区别
topic: [warehouse, tag]
difficulty: 3
frequency: medium
source_type: knowledge
---

# 一句话

事实标签是客观发生的属性（如性别、年龄），规则标签是由规则计算得到的（如高价值用户）。

# 30 秒回答

事实标签直接来自用户事实/属性，不依赖复杂规则；规则标签通过阈值或逻辑判定（如近 30 天消费 > 1000 为高价值用户）。

# 追问

- 规则标签的规则怎么维护？
- 标签值域溢出（算出来是 2，值域 -1~1）怎么办？
