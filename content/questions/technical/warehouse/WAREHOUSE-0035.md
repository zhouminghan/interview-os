---
id: WAREHOUSE-0035
type: technical
question: 既要需求快速上线，又要控制存储，如何平衡
topic: [warehouse, architecture, tradeoff]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-24-shopee-data-dev
    company: 虾皮
    position: 数据开发（二面）
    date: 2026-09-24
---

# 一句话

用分层、分区、冷热分层和公共复用，在时效和存储之间找平衡。

# 30 秒回答

按数据冷热分层、TTL 清理过期分区、压缩格式、公共汇总层复用、物化视图预计算，热数据保留细粒度、冷数据归档压缩，兼顾时效和成本。

# 1 分钟回答

- 时效：公共层复用、汇总预计算、减少重复加工
- 存储：列式压缩、分区裁剪、TTL、冷热分层
- 平衡：热数据细粒度、冷数据归档；按访问频率分级
- 治理：下线无用表、去重、压缩格式

# 追问

- 冷热分层怎么做？
- 汇总层怎么帮到时效和存储？
