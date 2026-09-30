---
id: WAREHOUSE-0361
type: technical
question: 两个大表 Join 数据倾斜怎么优化？
difficulty: 0
topic: []
source_type: knowledge
---

**🎯 这道题的「成长价值」**：这道题的最大陷阱藏在题目里——**「两个大表」**。很多候选人（包括原参考回答）一上来就说 Broadcast Join，但 Broadcast Join 的前提是**小表能装进内存**，两个大表根本不适用。面试官一听到"Broadcast Join"就知道你在背模板，而不是在分析问题。真正的区分度在于——**能不能把优化方案按"从轻到重、先诊断再下药"的次序讲出来**。

---

**🧠 回答结构（诊断 → 分级治疗方案）**

> **第一步：确认是倾斜而非资源不足。** 看 Spark UI——如果某几个 Task 执行时间远高于中位数，或 Shuffle Read 量集中在个别 Task，基本可定位是数据倾斜。

> **第二步：根据严重程度选方案（从低侵入到高侵入）**

---

**① 增大 Shuffle 分区数（最轻、首试）**
- 原因：分区太少 → 热点 Key 被集中到少数分区，放大了倾斜
- 做法：调大 `spark.sql.shuffle.partitions`（如 200 → 2000），让每个分区数据量减少
- 适用：轻度倾斜、只是分区不够细的情况

**② Salting（打散 + 还原，中等侵入）**
- 对待 Join 的 Key 加随机后缀（salt），如 `key` → `concat(key, '_', rand(0, 9))`，将热点 Key 拆成 10 份
- 第一轮 Join 之后，再去掉后缀做第二轮聚合
- 代价：需要两轮 Join，数据膨胀一轮，但能彻底解决极端热点
- 适用：个别 Key 倾斜特别严重

**③ Spark 3 AQE Skew Join（零侵入、最优选）**
- 开启 `spark.sql.adaptive.skewJoin.enabled=true`，Spark 会自动检测倾斜分区并拆成多个小分区分别 Join
- 优点：不需要业务感知，不用改 SQL，自动处理
- 要求：Spark 3.0+，需开启 AQE

**④ 倾斜 Key 单独 Join + Union（较重侵入）**
- 如果倾斜 Key 已事先明确（如 `user_id = '-1'` 的脏数据），可以：
  - 主表：过滤掉倾斜 Key → 正常 Join
  - 倾斜表：只保留倾斜 Key 的数据 → 单独 Join（也可直接丢弃或置默认值）
  - 最后 Union 两者结果
- 适用：特定已知的脏 Key 引起倾斜

**⑤ 提前过滤 / ETL 清洗**
- 业务允许则 Join 前先过滤无效数据（如测试 ID、无效用户），减少 Shuffle 总数据量
- 如果能提前在 ETL 阶段做预聚合/预去重，也能大幅降低倾斜的基数

---

**❌ 原回答的「Broadcast Join」为什么不对？**
> Broadcast Join 的正确使用场景是：**一张表足够小，小到能装进每个 Executor 的内存**（默认阈值 10MB）。题目明确说「两个大表」，两张都装不进内存，Broadcast Join 不仅不适用，还可能把 Driver/Executor 撑爆 OOM。面试官听到 Broadcast Join 会立刻反问：「两张都是大表你怎么 broadcast？」，当场穿帮。

---

**🔀 Bonus：Shuffle Hash Join vs Sort Merge Join 的选择**
- 默认 Join 策略（Spark 3）：如果大小表 → Broadcast Hash Join（阈值 10MB）；否则 Sort Merge Join（两表都排序再归并）。
- 出现倾斜时 Sort Merge Join 成本会飙升——因为热点 Key 所在分区数据量激增，排序和磁盘溢写代价都翻倍。
- 理解这一点，才能理解为什么 AQE Skew Join 重点是优化 Sort Merge Join 的倾斜——自动拆分热点分区，让每个子分区在合理的排序压力内完成 Join。

---

**💡 面试点评**：把这题按「诊断 → 轻方案 → 重方案」的阶梯讲，同时指出 Broadcast Join 不适用于大表，面试官会认为你真正理解这些方案的适用边界，而不是背模板。**面对大表倾斜的模板回答应该是：「优先看 AQE Skew Join 能不能自动处理 → 不行再上 Salting → 最重手段是倾斜 Key 走单独链路」。**
