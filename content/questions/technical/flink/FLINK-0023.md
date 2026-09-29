---
id: FLINK-0023
type: technical
question: Flink 的 join 类型（regular / interval / window / lookup）
topic: [flink, join]
difficulty: 3
frequency: medium
source_type: knowledge
---

# 一句话

四种：Regular Join（双流状态连接）、Interval Join（时间区间）、Window Join（窗口内）、Lookup Join（维表实时查询）。

# 30 秒回答

Regular Join 双流都建状态、可无限增长；Interval Join 按时间区间关联；Window Join 在滚动/滑动窗口内关联；Lookup Join 事实流去查外部维表（HBase/Redis/MySQL），解决维表变更和维度补全。

# 1 分钟回答

- Regular Join：双流 join，都需状态，要设 TTL 防状态膨胀
- Interval Join：`A.t between B.t - x and B.t + y`，限时间区间
- Window Join：在窗口范围内 join，窗口结束才出结果
- Lookup Join：事实流 join 外部维表，按 key 实时查询，适合维表变更频繁场景
- 盲区提示：只答 window/interval 漏了 lookup join，是常见扣分点

# 追问

- Lookup Join 和 Regular Join 的适用场景怎么分？
