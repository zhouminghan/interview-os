---
id: PROJECT-0248
type: project
question: Spark任务如何定位问题？
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

**Spark UI三步定位法：**

1. **Jobs页面** → 找失败/耗时长的Job
2. **Stages页面** → 定位瓶颈Stage（看Duration/Shuffle数据量/Task分布）
3. **Tasks页面** → 看具体Task：
   - 所有Task均慢 → 数据量大/资源不足
   - 个别Task极慢 → 数据倾斜
   - GC Time占比高 → 内存不足
   - Spill列有值 → 内存不够导致落盘

**常见问题速查：**
```text
OOM → 加内存 or 减少单Task数据量(加分区数)
倾斜 → AQE or Salting or Broadcast
慢 → 减少Shuffle(Broadcast/预聚合) or 加资源
```

**四、技术知识补充**

**项目结合点：** 回答时主动关联QQ频道的实际场景，增强可信度。

**五、追问预判**

1. **追问：Spark任务OOM怎么排查？→ 看Executor GC Time/Shuffle Spill/Driver Log，定位是堆内还是堆外。**

2. **追问：这个方案在你的项目中是怎么落地的？**
   → 结合QQ频道百亿级日志的实际场景，说明具体做法和效果。

3. **追问：如果重新设计，你会改什么？**
   → 体现反思能力：讲一个当初的取舍，现在回头看可以优化的点。


**六、常见错误/踩坑提醒**

- ❌ 直接说调参数 → ✅ 先通过Spark UI定位问题类型，再针对性优化
- ❌ 不区分倾斜类型 → ✅ Join倾斜/聚合倾斜/分区不均方案不同
- ❌ 忽略全链路影响 → ✅ 优化一个环节可能影响下游（如增加分区→小文件）

**七、记忆版（20秒压缩）**

> Spark UI三步：Job→Stage→Task。关注：Duration分布、Shuffle大小、GC Time、Spill。全慢=量大，个别慢=倾斜，GC高=内存不足。

---
---
