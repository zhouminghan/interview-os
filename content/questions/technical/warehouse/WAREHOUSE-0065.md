---
id: WAREHOUSE-0065
type: technical
question: 指标覆盖率如何衡量
topic: [warehouse, metrics]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2025-03-24-jd-data-dev
    company: 京东
    position: 数据开发
    date: 2025-03-24
---

# 一句话

指标覆盖率 = 已注册的标准化指标数 / 业务实际需求指标总数。

# 30 秒回答

统计已注册标准化指标数量，除以业务方实际需要的指标总数；新需求先查指标平台是否已有，能复用不新建，覆盖率高说明指标体系建设好。

# 1 分钟回答

- 分子：已注册标准化指标
- 分母：业务实际需求指标
- 口径：注册的是聚合后标准指标，不是原始明细
- 价值：衡量指标体系完备度，驱动复用

# 追问

- 覆盖率低说明什么？
- 怎么推动指标注册？
