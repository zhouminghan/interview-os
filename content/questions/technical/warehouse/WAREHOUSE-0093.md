---
id: WAREHOUSE-0093
type: technical
question: 设计一个简易的数据血缘工具
topic: [warehouse, lineage]
difficulty: 3
frequency: low
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-05-30-xiaohongshu-ai-data
    company: 小红书
    position: AI 数据工程师（5 轮）
    date: 2026-05-30
---

# 一句话

核心四步：采集（解析 SQL 抽输入输出表三元组）→ 构建（组有向图）→ 存储（表级 MySQL / 字段级图库）→ 接入（调度提交时实时解析 + 定期全量扫描）。

# 30 秒回答

扫调度平台所有 SQL 解析出「输入表 → 输出表」三元组，再解析执行日志补动态 SQL；三元组组成表级有向图，字段级需要 SQL AST（ANTLR/Calcite）；表级存 MySQL 够用，字段级量大上图库；调度提交时实时解析 + 定期全量扫描兜底。

# 1 分钟回答

- 采集：SQL 静态解析 + 执行日志动态补充
- 构建：三元组组有向图，字段级要 AST 解析
- 存储：表级 MySQL，字段级图数据库
- 接入：调度提交实时解析 + 定期全量扫描
- 价值：新版数据集上线前评估影响面、模型效果差沿血缘反查上游、合规审计、成本归因、Schema 变更影响分析

# 追问

- 字段级血缘的难点在哪？
- 血缘准确率怎么保证？
