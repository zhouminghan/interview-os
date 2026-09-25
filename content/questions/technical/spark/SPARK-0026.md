---
id: SPARK-0026
type: technical
question: 热点 userID 是怎么形成的，自然流量还是脏数据/黑产
topic: [spark, skew, hotspot]
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

热点 userID 可能来自自然流量（爆款/大 V）、脏数据（null/默认值）或黑产刷量，需要结合特征识别。

# 30 秒回答

自然流量：爆款内容、大 V 账号带来真实热点；脏数据：null、默认 userID 聚集；黑产：机器人账号刷量。通过数据分布、行为特征、黑产库识别。

# 1 分钟回答

- 自然流量：真实热门，需正常处理
- 脏数据：null/默认值，应过滤或单独处理
- 黑产：机器刷量，需风控识别、剔除
- 识别：数据分布、行为模式、设备/IP 聚集、黑产库

# 追问

- 怎么区分黑产和真实热点？
- 脏数据热点怎么处理？
