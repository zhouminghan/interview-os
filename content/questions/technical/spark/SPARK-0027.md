---
id: SPARK-0027
type: technical
question: 多个国家都出现流量热点，该怎么处理
topic: [spark, skew, multi-hotspot]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-26-xpeng-data-dev
    company: 小鹏
    position: 数据开发（27 届秋招一面）
    date: 2026-09-26
---

# 一句话

多热点用加盐打散或热点拆分，也可用 AQE skew join 自动处理。

# 30 秒回答

对多个热点 key 分别加盐打散后聚合，或把热点 key 拆分单独处理再 union，开启 AQE skew join 自动识别多热点；热点过多时考虑过滤或降级。

# 1 分钟回答

- 加盐：多个热点 key 统一加随机前缀打散
- 拆分：热点单独处理 + 非热点正常处理，再 union
- AQE：自动识别 skew join
- 极端：热点过多可能是脏数据，先过滤

# 追问

- 多热点加盐和单热点加盐区别？
- AQE 怎么自动处理多热点？
