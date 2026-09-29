---
interview_id: INTERVIEW-2026-04-22-disheng-7-blocks
company: 涤生大数据
business: AI 大数据开发
position: AI 大数据开发面试 7 大板块
date: 2026-04-22
round: 参考
---

# 面经记录（原始）

1. SQL：窗口函数（ROW_NUMBER/RANK/LAG/LEAD）、连续登录 N 天、GROUP BY+HAVING、行列互转、多表 JOIN、NULL 陷阱（追问：窗口函数在 WHERE 之前还是之后执行）
2. 数仓建模分层：ODS/DWD/DWS/ADS、星型/雪花、维度建模四步法、SCD、拉链表、原子/派生/复合指标
3. 数据倾斜：本质原因、Map/Reduce 端倾斜、解决方案、大表 JOIN 热点 key、加盐、参数调优
4. 计算引擎：MapReduce 流程、Hive 执行计划、分区表 vs 分桶表、小文件、RDD/DataFrame/Dataset、Spark Shuffle、宽窄依赖、Stage 划分、Catalyst、Event Time vs Processing Time、Watermark、Checkpoint、Exactly-Once、State 类型和 TTL、Flink SQL vs DataStream
5. 任务调度与性能优化：任务依赖、数据延迟到达、失败告警重试、SLA、慢任务排查
6. 数据质量与治理：完整性/准确性/一致性/时效性、指标口径、数据血缘、元数据、监控告警
7. AI + 大数据：RAG、向量数据库、AI 数据链路 vs 传统数仓、Embedding、Prompt Engineering、Agent 原理
