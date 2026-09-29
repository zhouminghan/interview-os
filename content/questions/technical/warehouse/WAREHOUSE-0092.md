---
id: WAREHOUSE-0092
type: technical
question: 分布式任务如何保证数据一致性和幂等
topic: [warehouse, idempotency]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-05-30-xiaohongshu-ai-data
    company: 小红书
    position: AI 数据工程师（5 轮）
    date: 2026-05-30
---

# 一句话

幂等就是「同样的输入跑 N 次和跑 1 次结果一致」；离线靠覆盖写 + 去重 + 分区独立，样本场景还要版本化 + 标注结果独立存储。

# 30 秒回答

四件事：INSERT OVERWRITE 替代 INSERT INTO（每次覆盖不追加）、业务主键去重（ROW_NUMBER 取最新）、分区独立性（重跑某天只影响那天）、输入快照化（上游分区完成不再变）。

# 1 分钟回答

- 覆盖写：INSERT OVERWRITE 保证同分区重跑结果一致
- 主键去重：ROW_NUMBER 取最新，避免重复累加
- 分区独立：重跑某天只覆盖那天增量分区
- 样本特殊：同一版本号永远对应同一份数据，重跑字节级一致
- 标注结果独立存储：标注是人工动作不可重复，下游从标注层重跑而非重新标注
- 训练任务天然不幂等（随机 shuffle），但样本层和特征层必须幂等

# 追问

- 上游数据修了，下游怎么联动重跑？
- Flink Exactly-Once 和离线幂等是一回事吗？
