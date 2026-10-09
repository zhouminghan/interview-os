---
id: STARROCKS-0144
type: technical
question: StarRocks 中的异步物化视图是什么？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

异步物化视图后台刷新，不阻塞写入。

# 参考回答

异步物化视图是后台定时或触发刷新，不跟写入同步，避免拖慢导入。适合对实时性要求不极端的预聚合场景。同步物化视图则写入时一起更新。

# 追问

- 同步和异步物化视图怎么选？
