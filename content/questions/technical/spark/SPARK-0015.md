---
id: SPARK-0015
type: technical
question: 确定热点 key 后，加盐打散是不是永远有效
topic: [spark, skew, salting]
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

不是永远有效。加盐只对「热点 key 可打散且能还原」的场景有效，还要选对盐数和还原方式。

# 30 秒回答

有效场景：group by / join 因热点 key 倾斜，加盐能均衡负载。不生效：非倾斜场景反而增加 shuffle；join 加盐需二次 join 还原，成本高；盐数不合适；null/默认值热点应先过滤。

# 1 分钟回答

- 生效：热点 key 明确、聚合后可还原、盐数合适
- 不生效：
  1. 倾斜根因不是热点 key
  2. join 加盐后还原成本高、可能引入新倾斜
  3. 盐数太少/太多
  4. null/默认值热点，应先过滤再算
- 本质：加盐是手段不是万能，先确认根因

# 追问

- 加盐的盐数怎么选？
- join 加盐后的还原怎么做？
