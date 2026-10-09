---
id: STARROCKS-0041
type: technical
question: StarRocks 的 JOIN 策略有哪些？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

有 Broadcast Join、Shuffle Join、Bucket Shuffle Join、Colocate Join。

# 参考回答

StarRocks 支持多种 join：小表广播 join、大表 shuffle join、还有 bucket shuffle join 和 colocate join，后两者利用分桶减少数据传输。优化器会按表大小和分桶自动选策略。

# 追问

- Colocate Join 的前提是什么？
