---
id: WAREHOUSE-0091
type: technical
question: AI 专属数仓分层和传统数仓有什么差异
topic: [warehouse, ai-data]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-05-30-xiaohongshu-ai-data
    company: 小红书
    position: AI 数据工程师（5 轮）
    date: 2026-05-30
---

# 一句话

核心差异是消费方从「BI 报表」变成「模型」，所以会多出样本层、特征层、向量层、模型指标层。

# 30 秒回答

传统数仓 ODS/DWD/DWS/ADS 面向报表；AI 数仓下游是模型，多了样本层（训练/验证/测试严格隔离 + 版本）、特征层（离线/在线特征对齐）、向量层（Embedding 存向量库）、模型指标层（AUC/CTR 替代 ADS）。

# 1 分钟回答

- 样本层：训练/验证/测试隔离，带版本号
- 特征层：离线特征和线上特征口径对齐，防穿越
- 向量层：内容 Embedding 进向量库，不进 Hive
- 模型指标层：统计 AUC、CTR 等效果指标，替代传统 ADS
- 粒度差异：传统 DWS 多做天粒度宽表，AI 常要事件级明细（序列建模、负采样都要原始事件流）

# 追问

- 特征层和 DWS 有什么区别？
- 为什么 AI 场景要事件级明细？
