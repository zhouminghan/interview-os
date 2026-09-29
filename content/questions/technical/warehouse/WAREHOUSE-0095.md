---
id: WAREHOUSE-0095
type: technical
question: 数仓规范和指标开发规范怎么制定并保障落地
topic: [warehouse, governance]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-07-03-bytedance-data-dev-liangjing
    company: 字节跳动
    position: 数据开发（实习）
    date: 2026-07-03
---

# 一句话

制定靠「命名 + 分层 + 指标注册 + 接入」四类规范，落地靠平台化强制 + 审核卡点 + 定期巡检。

# 30 秒回答

制定：命名规范、分层职责、指标注册（口径/负责人/维度）、新指标接入流程。落地：把规范做成平台校验和模板，注册审核通过才上线，加定期巡检和通报，不能只靠文档。

# 1 分钟回答

- 命名规范：库表字段统一命名，人和机器都好懂
- 分层规范：各层职责、依赖方向，禁止跨层
- 指标注册：指标名/口径/负责人/维度登记到平台
- 接入规范：新指标先注册审核再开发
- 落地：平台化强制（模板 + 校验）、审核卡点、定期巡检、和绩效挂钩

# 追问

- 规范落地最难的是哪一步？
- 怎么防止规范变成没人看的文档？
