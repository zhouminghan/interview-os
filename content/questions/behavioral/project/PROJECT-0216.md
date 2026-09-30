---
id: PROJECT-0216
type: project
question: 如何优化Count Distinct？
difficulty: 0
topic: [面试宝典]
source_type: knowledge
---

**一、面试官真正想考什么？**

不是让你背定义，考的是**方法论和实操能力**：
- 你有没有成体系的方法论，不是零散的点子
- 你能否结合真实项目说明具体做法
- 你对方案的边界和取舍是否清晰

**二、回答思路**

先给方法论框架 → 分步展开核心要点 → 结合项目举例 → 补充边界和注意事项

**三、参考答案（面试标准版）**

> 控制在2分钟

Count Distinct慢的原因：**无法Map端预聚合**（必须全局去重），所有数据都要Shuffle到一个Reduce。

**优化方案：**

**方案一：两阶段聚合**
```sql
-- 原始（慢）
SELECT COUNT(DISTINCT user_id) FROM log;

-- 优化（两阶段）
SELECT COUNT(1) FROM (
    SELECT user_id FROM log GROUP BY user_id
) t;
```
第一阶段Group By可以Map端预聚合，第二阶段Count只是计数。

**方案二：多维度时拆分**
```sql
-- 原始（多个distinct走一个Reduce）
SELECT dt, COUNT(DISTINCT user_id), COUNT(DISTINCT content_id) FROM log GROUP BY dt;

-- 优化（拆成多个SQL UNION）
SELECT dt, COUNT(1) AS user_cnt, NULL FROM (SELECT dt, user_id FROM log GROUP BY dt, user_id)
UNION ALL
SELECT dt, NULL, COUNT(1) FROM (SELECT dt, content_id FROM log GROUP BY dt, content_id);
```

**方案三：近似算法**
```sql
-- 允许误差时用HyperLogLog
SELECT APPROX_COUNT_DISTINCT(user_id) FROM log;
```

**四、技术知识补充**

本题涉及的核心技术点（面试中可能被深挖）：
- **方案一：两阶段聚合**：理解其原理和适用场景，不要只记结论

**项目结合点：** 回答时主动关联QQ频道的实际场景，增强可信度。

**五、追问预判**

1. **追问：这个方案在你的项目中是怎么落地的？**
   → 结合QQ频道百亿级日志的实际场景，说明具体做法和效果。

2. **追问：如果重新设计，你会改什么？**
   → 体现反思能力：讲一个当初的取舍，现在回头看可以优化的点。

3. **追问：这个方案的边界/不适用场景是什么？**
   → 任何方案都有适用范围，说清楚什么时候不应该用这个方案。


**六、常见错误/踩坑提醒**

- ❌ 只说优化手段不说定位过程 → ✅ 先定位瓶颈（EXPLAIN/执行计划），再选方案
- ❌ 优化没有量化效果 → ✅ 必须说"从X降到Y，提升Z%"
- ❌ 把所有优化手段堆上来 → ✅ 针对具体问题选最合适的方案

**七、记忆版（20秒压缩）**

> Count Distinct慢因为无法预聚合。优化三法：两阶段聚合(GroupBy+Count)、多distinct拆分、近似算法(HLL)。

---
---
