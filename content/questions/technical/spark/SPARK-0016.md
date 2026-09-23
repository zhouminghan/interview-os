---
id: SPARK-0016
type: technical
question: join 和 group by 倾斜，处理方式有什么差异
topic: [spark, skew, join, group-by]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-21-jiukun-data-dev
    company: 九坤
    position: 数据开发（一面）
    date: 2026-09-21
---

# 一句话

group by 倾斜可两阶段聚合，join 倾斜更复杂，需要拆热点 key 或两阶段加盐 join。

# 30 秒回答

group by 只聚合一侧，可 map 端预聚合 + 加盐二次聚合还原；join 要两侧关联，加盐后需二次 join 还原，shuffle 更多，常优先小表广播或拆热点 key。

# 1 分钟回答

- group by：两阶段聚合、combiner、加盐聚合再还原
- join：热点 key 拆分单独 join 再 union、两阶段加盐 join、小表 broadcast
- 差异：join 还原成本更高，需保证两侧 join 键对应
- 共同点：都是打散热点 key 均衡负载

# 追问

- join 加盐为什么要两阶段？
- group by 的 combiner 有什么用？
