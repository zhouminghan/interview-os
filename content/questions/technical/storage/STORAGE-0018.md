---
id: STORAGE-0018
type: technical
question: Hive 底层架构和常用优化手段
topic: [storage, hive]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-05-30-xiaohongshu-ai-data
    company: 小红书
    position: AI 数据工程师（5 轮）
    date: 2026-05-30
---

# 一句话

Hive 本质是把 SQL 翻译成执行计划丢给引擎（MR/Spark/Tez）跑；优化分 SQL 写法、表设计、倾斜处理、小文件四层。

# 30 秒回答

优化四层：SQL 写法（谓词下推、先过滤再 join、避免 select *）；表设计（分区分桶、ORC 列存）；数据倾斜（热点 key 加盐、小表 MapJoin）；小文件合并（调整 reduce 数避免碎片化）。

# 1 分钟回答

- 架构：Hive 是 SQL-on-Hadoop 引擎，SQL → 逻辑计划 → 物理计划 → 执行引擎
- SQL 写法：谓词下推、提前过滤、列裁剪
- 表设计：分区裁剪省 IO、ORC 列存 + 压缩
- 倾斜：热点 key 加盐打散、小表走 MapJoin
- 小文件：控制 reduce 数、定期 INSERT OVERWRITE 重组
- 落地到具体场景：按 dt + 一级品类双分区裁剪高频过滤，爆款笔记 join 行为表提前识别热点 key 打散

# 追问

- 谓词下推是什么意思？
- 小文件为什么会拖慢任务？
