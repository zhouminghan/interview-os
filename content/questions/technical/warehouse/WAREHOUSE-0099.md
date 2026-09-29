---
id: WAREHOUSE-0099
type: technical
question: 用户画像怎么构建
topic: [warehouse, user-profile]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-05-20-meituan-data-dev1
    company: 美团
    position: 数据开发（社招，一面）
    date: 2026-05-20
---

# 一句话

从基础属性、行为、偏好三层构建标签，分事实标签（可统计）和规则/模型标签（需计算），增量合并更新。

# 30 秒回答

基础属性（人口统计）→ 行为标签（近 N 天行为聚合，如消费频次/客单价）→ 偏好标签（品类/价格偏好）。事实标签直接统计，规则标签按阈值，模型标签靠预测。画像表按天增量合并。

# 1 分钟回答

- 三层：基础属性 + 行为标签 + 偏好标签
- 标签类型：事实标签（统计可得）、规则标签（阈值/条件）、模型标签（预测）
- 维度：人口、消费、活跃、偏好、生命周期
- 更新：画像表按天增量合并（新标签覆盖旧值，保留历史）
- 用途：运营分层、精准营销、个性化推荐

# 追问

- 事实标签和规则标签的区别？
- 画像增量合并怎么做？
