---
id: FLINK-0003
type: technical
question: 实时作业修改口径，如何回刷近七天历史，避免覆盖，失败如何切回
topic: [flink, backfill, realtime]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-21-jiukun-data-dev
    company: 九坤
    position: 数据开发（一面）
    date: 2026-09-21
---

# 一句话

离线刷历史临时表，按分区隔离，校验后原子切换；保留备份表，失败可切回。

# 30 秒回答

离线把近七天按新口径刷成临时表；实时继续写最新分区，历史回刷只覆盖历史分区避免互相覆盖；切换用表别名/rename 原子完成；失败或再调整用备份表切回旧版本。

# 1 分钟回答

- 回刷：离线任务刷近七天 -> 临时表
- 隔离：实时只写当天/最新分区，回刷只写历史分区
- 切换：与实时表对账 -> 原子 rename/视图切换
- 失败切回：保留旧表（备份表），失败/再调整切回旧版本
- 版本管理：记录口径版本，支持回滚

# 追问

- 实时和回刷怎么按分区隔离？
- 原子切换具体怎么做？
- 备份表要保留多久？
