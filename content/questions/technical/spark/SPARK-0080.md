---
id: SPARK-0080
type: technical
question: 解释RDD的惰性求值机制。
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

转换只记录不执行，行动才触发计算。

# 参考回答

惰性求值就是 map、filter 这些转换只构建血缘关系，不立刻算，等遇到 count、collect 这类行动才真正执行。好处是能做全局优化，减少不必要计算。

# 追问

- 惰性求值带来什么优化？
