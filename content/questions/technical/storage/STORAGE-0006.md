---
id: STORAGE-0006
type: technical
question: ADS 表订单/退款修订，key 如何设计；分区分桶区别
topic: [storage, doris, key, partition]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-21-jiukun-data-dev
    company: 九坤
    position: 数据开发（一面）
    date: 2026-09-21
---

# 一句话

key 要保证同一订单的更新落在同一分桶，便于聚合/覆盖；分区按维度裁剪，分桶按 hash 分布。

# 30 秒回答

订单/退款修订场景，用订单号做主键/分桶键，保证同订单同桶合并覆盖。分区按时间/地域等裁剪，分桶在分区内 hash 分布决定并行度。

# 1 分钟回答

- key 设计：订单号做主键（Unique/主键模型），退款修订按同 key 覆盖
- 分区：按时间/地域水平切分，用于裁剪和生命周期管理，粒度粗
- 分桶：分区内按 hash 分桶（Tablet），决定数据分布和聚合粒度
- 区别：分区是逻辑裁剪，分桶是物理分布/并行度；先分区后分桶

# 追问

- Doris 主键模型和聚合模型区别？
- 分桶数怎么定？
- 分区和分桶各影响什么？
