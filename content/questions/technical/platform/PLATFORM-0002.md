---
id: PLATFORM-0002
type: technical
question: 如果让你设计一个低代码平台，你会怎么设计
topic: [platform, low-code, design]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-25-xunlei-data-dev
    company: 迅雷
    position: 资深数据开发（一面）
    date: 2026-09-25
---

# 一句话

低代码平台核心是「元数据驱动 + 组件化 + 可视化配置 + 编排执行 + 可观测」。

# 30 秒回答

分层设计：配置层（可视化界面）、元数据层（组件/任务定义）、执行层（解析配置、调度执行）、监控层（状态、日志、告警）；组件化和模板复用。

# 1 分钟回答

- 元数据驱动：一切配置存元数据，前端渲染
- 组件化：算子/节点可复用、可组合
- 可视化：拖拽编排、表单配置
- 执行：解析元数据生成任务、调度执行
- 可观测：日志、状态、告警、血缘
- 权限与版本管理

# 追问

- 元数据怎么设计才灵活？
- 低代码平台和普通调度系统区别？
