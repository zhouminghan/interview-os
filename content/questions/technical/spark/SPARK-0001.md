---
id: SPARK-0001
type: technical
question: 你在工作里做的 SparkSQL 优化有哪些
topic: [spark, sql, tuning]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-14-bytedance-cn-transaction-ads
    company: 字节跳动
    position: 大数据开发（校招）
    date: 2026-09-14
---

# 回答思路

1. 开口先说优化不是背参数，而是先看物理计划和数据分布，定位扫描量、Shuffle 量、倾斜或重复计算。
2. 接着按一个真实瓶颈选手段：读得多做裁剪，Join 代价高改连接策略，热点 key 拆开聚合，最后才调资源和并行度。
3. 然后讲验证口径：对比执行计划、输入/Shuffle 字节、spill、长尾 task、耗时和结果一致性。
4. 项目结合只给表达顺序：用一条确认过的 SQL、当时实际做的改动和真实前后指标收口，没有亲历的项或数字不补。

# 一句话

SparkSQL 优化是先从执行计划与数据分布找出扫描、Shuffle 或倾斜瓶颈，再选对应改写和资源调整，最后用指标验证收益。

# 30 秒回答

我会先说优化不是把参数清单背一遍。先看执行计划，确认读了多少分区、Join 是否带来大 Shuffle、有没有少数 task 明显拖尾，再决定动作。比如把能下推的过滤和分区裁剪做足，小维表走广播，热点 key 拆成两阶段聚合，最后才看 Shuffle 分区数和缓存是否合适。改完还要用实际指标确认收益，而不是只说「调过了」。

# 1 分钟回答

第一，先定位瓶颈：从物理计划看文件扫描、Join 策略、聚合位置和各 Stage 耗时；倾斜通常表现为少数 task 的 Shuffle read 或运行时间远高于其他 task，不能只凭 SQL 外观猜。第二，按瓶颈选动作：读得多就做分区/列裁剪并治理小文件，Join 代价高就先过滤、让小表广播或让 AQE 动态改策略，热点 key 用加盐两阶段聚合或 skew join，只有结果确实被多次复用时才缓存。第三，验证并接到真实项目：改动前后对比输入字节、Shuffle 读写、spill、最长 task 和总耗时，同时确认结果一致；项目讲述按「一条真实 SQL 的原计划 → 当时确认的瓶颈 → 实际改动 → 前后指标」展开，没有确认过的优化和指标就不写进答案。

# 追问

- 数据倾斜怎么定位和处理？回答要点：按 Stage 比较 task 的 Shuffle read、耗时和 key 频次，再对热点或 NULL key 用加盐两阶段聚合、skew join 或单独处理；单纯提高并行度拆不开同一个热点 key。
- AQE 会做哪些优化？回答要点：运行时可合并过小的 Shuffle 分区、把符合代价条件的 sort-merge join 改为广播 join、拆分倾斜分区，但仍依赖统计信息和合理的初始配置。
- 什么时候适合 broadcast join？回答要点：一侧经过滤和列裁剪后足够小、能被广播且 Join 类型允许时使用；还应检查广播阈值和 executor 内存，避免把小表估算错误变成内存压力。
