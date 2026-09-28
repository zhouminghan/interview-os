---
id: SPARK-0030
type: technical
question: 你有没有处理过数据倾斜，怎么处理
topic: [spark, skew]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-26-sunwoda-data-dev
    company: 欣旺达
    position: 数据开发（秋招）
    date: 2026-09-26
---

# 一句话

倾斜处理先定位热点 key，再用加盐、热点拆分、AQE 等手段均衡负载。

# 30 秒回答

定位热点 key 后：加盐两阶段聚合、热点拆分单独处理、AQE skew join、过滤脏数据、增加并行度。

# 1 分钟回答

- 定位：UI/抽样找热点 key
- group by：加盐两阶段聚合
- join：热点拆分 / 两阶段加盐 join
- 通用：AQE skew join、过滤脏数据、调并行度

# 追问

- 你实际遇到过的倾斜案例？
- 加盐后怎么还原？
