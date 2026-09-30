---
id: PROJECT-0314
type: project
question: 如何治理HDFS小文件？
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

三类方案：

**预防（写入时）：**
- 控制输出文件数量（DISTRIBUTE BY/设置reducer数）
- 文件合并参数（hive.merge.mapfiles=true）

**治理（已有小文件）：**
- 定时合并任务（INSERT OVERWRITE重写分区）
- HAR归档（Hadoop Archive，多小文件打包）
- Compaction（Iceberg/Hudi自带合并机制）

**根源解决：**
- 限制动态分区数量
- 实时写入用Iceberg的Compaction
- 控制每次写入的最小文件大小

**四、技术知识补充**

**项目结合点：** 回答时主动关联QQ频道的实际场景，增强可信度。

**五、追问预判**

1. **追问：Hive和Spark SQL有什么区别？→ Hive底层是MR（慢），Spark SQL底层是DAG（快），但Hive MetaStore两者共用。**

2. **追问：治理最难推的是什么？→ 历史表下线。下游依赖不清楚时谁都不敢动，需要先建血缘再评估。**

3. **追问：这个方案在你的项目中是怎么落地的？**
   → 结合QQ频道百亿级日志的实际场景，说明具体做法和效果。


**六、常见错误/踩坑提醒**

- ❌ 背诵原理不联系实际 → ✅ 说清楚这个原理在你日常工作中哪里用到
- ❌ 只知道用不知道为什么 → ✅ 理解原理才能在出问题时快速定位
- ❌ 把Hadoop等同于MapReduce → ✅ Hadoop生态包括HDFS/YARN/MR，现在主要用HDFS+YARN

**七、记忆版（15秒压缩）**

> 预防(merge参数/控制文件数)→治理(重写合并/HAR/Compaction)→根源(限分区/Iceberg合并)。

---
---
