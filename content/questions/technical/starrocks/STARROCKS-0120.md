---
id: STARROCKS-0120
type: technical
question: 如何在 StarRocks 中进行预测分析？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

StarRocks 本身不做预测，主要输出特征给模型。

# 参考回答

预测分析不是 StarRocks 的主场，它负责快速产出特征和训练数据，预测靠模型服务。可以算移动平均这类简单时序统计，但复杂预测交给算法。

# 追问

- 预测链路里 StarRocks 在哪一环？
