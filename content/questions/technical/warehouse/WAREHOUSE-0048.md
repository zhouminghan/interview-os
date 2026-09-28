---
id: WAREHOUSE-0048
type: technical
question: 数仓出现脏数据，一般排查思路是什么
topic: [warehouse, data-quality, diagnose]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-26-sunwoda-data-dev
    company: 欣旺达
    position: 数据开发（秋招）
    date: 2026-09-26
---

# 一句话

先定位脏数据范围和特征，再沿血缘回溯找源头，修复后重跑补数并校验。

# 30 秒回答

定位脏数据范围（分区/时间/维度/特征）-> 沿血缘回溯上游任务或源系统 -> 定位根因（代码 bug、口径变更、源数据问题）-> 修复 -> 重跑/补数 -> 校验 -> 通知下游。

# 1 分钟回答

1. 定位：脏数据出现在哪、什么特征
2. 回溯：沿血缘找上游
3. 根因：代码 bug、口径、源数据、数据倾斜
4. 修复 + 重跑/补数
5. 校验 + 通知下游 + 复盘

# 追问

- 怎么快速定位脏数据来源？
- 补数怎么做才不覆盖正确数据？
