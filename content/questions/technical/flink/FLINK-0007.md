---
id: FLINK-0007
type: technical
question: 实时统计亿级用户点击流的精准 UV 去重怎么做
topic: [flink, uv, bloomfilter]
difficulty: 4
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-06-12-netease-bigdata
    company: 网易（杭州）
    position: 大数据开发工程师
    date: 2026-06-12
---

# 一句话

用 BloomFilter 预筛 + 精确去重（State/Redis）分层，兼顾内存和准确率。

# 30 秒回答

布隆过滤器快速判断「是否见过」，疑似新用户再做精确去重（State 或 Redis Set）；超大规模可用 HyperLogLog 近似，或分桶 State（RocksDB）扛住亿级。

# 1 分钟回答

- 预筛：BloomFilter 过滤已见 user_id，降低精确层压力
- 精确：State（RocksDB）或 Redis Set 去重
- 近似：HLL 可容忍误差时用，空间极小
- 分桶：按 user_id hash 分桶 State，避免单 key 倾斜
- Redis 扛不住时：用 Flink 状态 + 分桶 + RocksDB 落盘

# 追问

- BloomFilter 有误判，怎么保证精准？
- HyperLogLog 误差大概多少？
