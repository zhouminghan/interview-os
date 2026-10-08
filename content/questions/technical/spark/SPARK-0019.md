---
id: SPARK-0019
type: technical
question: 识别到数据倾斜后，加盐处理怎么做、如何缓解
topic: [spark, skew, salting]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-24-meituan-data-dev
    company: 美团
    position: 数据开发（一面）
    date: 2026-09-24
  - interview_id: INTERVIEW-2026-09-28-bytedance-fandouyin-liangjing
    company: 字节跳动
    position: 数据开发（泛抖音，校招一面凉经）
    date: 2026-09-28
---

# 一句话

加盐是给热点 key 加随机前缀打散，再做两阶段聚合或 join 还原。

# 30 秒回答

group by：key 加随机前缀 -> 局部聚合 -> 去前缀二次聚合。join：热点 key 加盐打散 join -> 二次 join 还原。核心是把热点 key 分到多个 task 均衡负载。

# 1 分钟回答

- 定位热点 key 后加随机前缀（盐值范围）
- group by 两阶段聚合：加盐聚合 + 还原
- join 两阶段 join：加盐 join + 二次 join 还原
- 注意盐数、还原正确性、新增 shuffle 成本

# 追问

- 盐数怎么选？
- join 加盐还原怎么做？
