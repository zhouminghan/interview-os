---
id: FLINK-0268
type: technical
question: 如何在FlinkSQL中实现时间间隔(Interval)的计算？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 TIMESTAMPDIFF 算时间差。

# 参考回答

时间间隔用 TIMESTAMPDIFF(单位, 开始, 结束) 计算两个时间的差。SQL 里做时间差和区间判断常用。

# 追问

- 时间差怎么转成秒？
