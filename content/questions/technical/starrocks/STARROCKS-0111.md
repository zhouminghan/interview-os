---
id: STARROCKS-0111
type: technical
question: 星型模型在 StarRocks 中如何实现？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

事实表做明细或聚合，维度表做主键模型或维度表。

# 参考回答

StarRocks 里星型就是一张事实表加多张维度表，事实表用明细或聚合模型，维度表用主键模型。查询时事实表 join 维度表，维度表通常很小可以 broadcast。

# 追问

- 维度表为什么一般很小？
