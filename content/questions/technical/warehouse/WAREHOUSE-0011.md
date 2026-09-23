---
id: WAREHOUSE-0011
type: technical
question: 口径变更迭代的完整流程是什么
topic: [warehouse, metrics, governance]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-21-pdd-data-dev
    company: 拼多多
    position: 数据开发（社招）
    date: 2026-09-21
---

# 一句话

口径变更要走「提出 -> 评审 -> 定义 -> 开发 -> 对账 -> 上线 -> 通知 -> 监控」的闭环。

# 30 秒回答

业务提出变更 -> 口径评审 -> 更新指标字典 -> 开发测试 -> 新旧口径对账 -> 灰度上线 -> 通知下游 -> 上线后持续监控。

# 1 分钟回答

1. 提出：业务/数分/数开提需求
2. 评审：确认影响面、口径定义、回滚方案
3. 定义：更新指标字典、资产平台
4. 开发：改模型/任务
5. 测试对账：新旧口径比对
6. 上线：灰度、通知下游
7. 监控：上线后持续观察指标波动和下游一致性
8. 复盘：记录变更、沉淀口径

# 追问

- 口径变更怎么评估下游影响？
- 新旧口径对账怎么做？
- 上线后要监控哪些东西？
