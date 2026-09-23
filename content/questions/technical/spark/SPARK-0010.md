---
id: SPARK-0010
type: technical
question: 数据倾斜如何定位，两张大表 join 倾斜怎么处理
topic: [spark, skew, join]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-21-pdd-data-dev
    company: 拼多多
    position: 数据开发（社招）
    date: 2026-09-21
---

# 一句话

倾斜定位看「单个 task 处理的数据量和耗时是否远大于其他 task」；两张大表 join 的核心是拆热点 key 单独处理或加盐打散。

# 30 秒回答

通过 Spark UI / 日志看 stage 长尾、task 数据量和耗时分布、OOM 定位热点 key。常见场景：group by 热点 key、两张大表 join 热点 key、distinct。处理：热点 key 拆开单独 join 再 union、加随机前缀打散、开启 AQE skew join、增加并行度。

# 1 分钟回答

- 定位：Spark UI task metrics、shuffle 数据量、日志、抽样统计 key 分布
- 常见场景：null/默认值热点、大商户/大 V、两张大表 join、group by、distinct
- 两张大表 join 倾斜：
  1. 识别热点 key
  2. 热点 key 单独 join + 非热点正常 join，再 union
  3. 热点 key 加随机前缀打散 join，再二次 join 还原
  4. 先过滤/压缩降低数据量
  5. 开启 AQE skew join
  6. 增加并行度、两阶段聚合

# 追问

- 怎么快速找到热点 key？
- 加盐后怎么还原？
- AQE skew join 的原理？
