---
id: WAREHOUSE-0088
type: technical
question: 怎么识别一个主题域的主体
topic: [warehouse, modeling]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-05-12-kuaishou-bigdata-intern
    company: 快手
    position: 大数据开发（实习）
    date: 2026-05-12
---

# 一句话

主体是该主题域所有事实表围绕展开的核心业务实体，看「所有事实表关联的核心实体是什么」即可。

# 30 秒回答

交易域的主体是订单，围绕订单有下单、支付、退款、发货等过程；内容域的主体是帖子/内容。识别的关键是看这个域里所有事实表共同关联的那个核心实体，它也是星型模型中心事实表。

# 1 分钟回答

- 判断依据：域内所有事实表都以哪个实体为核心粒度展开
- 电商交易域：订单（下单/支付/退款/发货都围绕订单）
- 内容域：帖子/内容（发布/审核/曝光/点击/互动都围绕帖子）
- 主体对应星型模型中心事实表，围绕主体设计事实表粒度

# 追问

- 主体和事实表粒度是什么关系？
- 一个域可能有两个主体吗？
