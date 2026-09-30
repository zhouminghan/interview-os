---
id: PROJECT-0345
type: project
question: Shell常用数据处理命令
difficulty: 0
topic: [面试宝典]
source_type: knowledge
---

**一、面试官真正想考什么？**

不是让你背定义，考的是**实操经验和问题解决能力**：
- 你是否有真实的动手经验
- 你能否讲清楚具体的做法和效果
- 你对这个问题的理解深度

**二、回答思路**

先给结论 → 展开核心要点（不超过3个）→ 结合项目经验 → 适用边界

**三、参考答案（面试标准版）**

数据开发常用Shell命令：

```bash
# 文件查看
head -n 100 file.csv      # 看前100行
tail -f log.txt           # 实时跟踪日志
wc -l file.csv            # 统计行数

# 文本处理
awk -F'\t' '{print $1,$3}' file  # 提取第1和第3列
grep -c "ERROR" log.txt          # 统计错误数
sed 's/old/new/g' file           # 全局替换
sort | uniq -c | sort -rn        # 统计频率排序

# 数据分析
cut -d'\t' -f1 file | sort | uniq -c | sort -rn | head  # Top N统计

# HDFS操作
hdfs dfs -ls /path/              # 查看目录
hdfs dfs -du -s -h /path/       # 查看大小
hdfs dfs -cat /path/file | head  # 查看内容
hdfs dfs -count /path/           # 统计文件数
```

**四、技术知识补充**

**项目结合点：** 回答时主动关联QQ频道的实际场景，增强可信度。

**五、追问预判**

1. **追问：AI生成的SQL出错了谁负责？→ 人负责。AI辅助生成，人Review确认，最终质量由人把关。**

2. **追问：这个方案在你的项目中是怎么落地的？**
   → 结合QQ频道百亿级日志的实际场景，说明具体做法和效果。

3. **追问：如果重新设计，你会改什么？**
   → 体现反思能力：讲一个当初的取舍，现在回头看可以优化的点。


**六、常见错误/踩坑提醒**

- ❌ 死背八股不联系大数据 → ✅ 说清楚JVM/线程池和Spark/Flink的关系
- ❌ 只知道API不知道原理 → ✅ 面试要说清楚为什么这么设计
- ❌ 不提实际应用场景 → ✅ 结合Spark Executor内存模型/GC调优来讲

**七、记忆版（15秒压缩）**

> 常用：awk(列处理)+grep(过滤)+sort|uniq(去重统计)+wc(计数)+head/tail(查看)。HDFS：ls/du/cat/count。
---

---
