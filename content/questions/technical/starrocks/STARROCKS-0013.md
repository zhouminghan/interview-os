---
id: STARROCKS-0013
type: technical
question: StarRocks 和 Doris 有什么区别
topic: [starrocks, doris]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-06-30-fliggy-data-dev
    company: 飞猪
    position: 数据开发 / 大数据（4 轮）
    date: 2026-06-30
---

# 一句话

两者同源于 Doris/百度 Palo 技术路线，都是 MPP 分析型数据库；StarRocks 侧重极致查询性能和向量化，Doris 侧重生态完善和易用。

# 30 秒回答

StarRocks 由 Doris 早期团队分叉而来，架构相似（FE/BE、向量化、MPP），StarRocks 在向量化执行、物化视图、湖仓分析上更激进；Doris 社区生态更成熟、云原生和多源融合更完善。选型看性能需求和团队生态。

# 1 分钟回答

- 同源：都继承 Doris 的 MPP + 向量化 + FE/BE 架构
- StarRocks：查询性能、物化视图、存算分离推进快
- Doris：生态完善、易用、多源融合好
- 分区分桶：都支持 Range/List 分区 + Hash 分桶，选高频过滤列分区、高基数列分桶
- 选型：性能敏感选 StarRocks，生态/易用选 Doris

# 追问

- 分区列和分桶列怎么选？
- 两者在大宽表场景表现如何？
