---
id: STARROCKS-0025
type: technical
question: StarRocks 的数据更新机制是怎样的？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

主键模型按主键覆盖，更新模型支持部分列更新，底层靠 Tablet 和版本。

# 参考回答

StarRocks 的更新主要靠主键模型和更新模型，按主键 upsert，新数据覆盖旧数据；底层用 Tablet 加多版本机制，更新是写入新版本再后台 Compaction 合并。明细模型则不做合并，原样保留。

# 追问

- Compaction 是什么？
