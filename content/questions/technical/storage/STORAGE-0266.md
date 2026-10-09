---
id: STORAGE-0266
type: technical
question: HBase中的同步复制和异步复制有什么区别？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

同步等副本确认，异步不等。

# 参考回答

同步复制写入等副本确认，一致性强但延迟高；异步复制不等副本，延迟低但可能丢数据。灾备多用异步，强一致场景用同步。

# 追问

- 复制怎么选？
