---
id: FLINK-0099
type: technical
question: 如何在CEP中实现模式的动态更新？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用动态模式或每次匹配时重新构建。

# 参考回答

CEP 模式动态更新比较麻烦，可以每次匹配时从配置重新构建 pattern，或用第三方动态规则方案。原生 CEP 模式编译后不好改。

# 追问

- 动态规则一般怎么实现？
