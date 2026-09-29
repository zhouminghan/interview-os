---
id: SYSTEM-0008
type: technical
question: RTA 场景千亿请求、百万 QPS、毫秒级响应怎么设计
topic: [system, high-concurrency]
difficulty: 3
frequency: low
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-06-30-fliggy-data-dev
    company: 飞猪
    position: 数据开发 / 大数据（4 轮）
    date: 2026-06-30
---

# 一句话

分层缓存 + 本地内存 + 异步旁路 + 削峰限流，把核心竞价路径压到纯内存毫秒级，重逻辑异步化。

# 30 秒回答

核心路径：请求 → 网关 → 本地缓存/内存特征 → 规则/模型打分 → 返回，全程内存不落库；特征走特征平台预加载，重逻辑异步旁路；靠分层缓存（本地/Redis/远程）、限流降级、多级缓冲削峰扛住百万 QPS。

# 1 分钟回答

- 核心链路纯内存：特征本地化 + 模型轻量，毫秒级返回
- 分层缓存：本地缓存 → Redis → 远程服务，热点数据前置
- 异步旁路：竞价决策同步，日志/归因异步落
- 削峰限流：网关限流、降级兜底、缓冲吸收突发
- 一致性：特征用快照，定期同步，牺牲一点实时性换性能

# 追问

- 特征本地化和一致性怎么权衡？
- 百万 QPS 的限流怎么做？
