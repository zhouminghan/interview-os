---
id: STARROCKS-0127
type: technical
question: StarRocks 的存储引擎设计理念是什么？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

列存、压缩、索引、分桶，为快速扫描设计。

# 参考回答

存储引擎设计核心是面向分析：列式存储减少 IO、编码压缩省空间、前缀索引和 Bitmap 加速过滤、分桶保证分布式。一切都是为了让扫描和聚合更快。

# 追问

- 为什么分析引擎都选列存？
