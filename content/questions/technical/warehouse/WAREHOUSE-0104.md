---
id: WAREHOUSE-0104
type: technical
question: 存量表和新表的规范治理怎么推进
topic: [warehouse, governance]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-07-15-qizhidao-data-dev
    company: 企知道
    position: 数据开发（一面）
    date: 2026-07-15
---

# 一句话

存量表「保持不动 + 标注主题域共识」，新表「平台强制规范」，边开发边治理，不强行回改老表。

# 30 秒回答

存量老表下游依赖多，强改风险大，保持不动、只记录它属于哪个主题域；新表由数据中台强制选业务域/主题域并拼命名前后缀，严格执行。这样逐步收敛，不搞一次性的推倒重来。

# 1 分钟回答

- 存量：保持不动，大家共识它归属哪个主题域
- 新表：平台强制命名 + 域归属，落地规范
- 原因：改老表会牵连大量下游，收益低风险高
- 原则：边开发边治理，不专项推倒重来
- 平台化：建表时强制选域，自动拼前后缀

# 追问

- 为什么不能强改存量表？
- 平台化强制怎么落地？
