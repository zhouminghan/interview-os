---
id: ALGORITHM-0005
type: technical
question: 10 亿个整数、内存 2G，怎么找出中位数
topic: [algorithm, median, divide]
difficulty: 4
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-06-12-netease-bigdata
    company: 网易（杭州）
    position: 大数据开发工程师
    date: 2026-06-12
---

# 一句话

按值域分桶计数，先定位中位数落在哪个桶，再在桶内精算。

# 30 秒回答

整数值域有限（如 32 位），按值域分桶，先统计各桶计数找到第 5 亿个数落在哪个桶，再对桶内数据用位图或部分排序求中位数，内存可控。

# 1 分钟回答

- 分桶：按值域区间分桶，流式计数，只需 O(桶数) 内存
- 定位：累计计数找到中位数所在桶
- 精算：桶内数据量可入内存，排序或位图求中位
- 扩展：外部排序也可，但分桶更快

# 追问

- 分桶数怎么选？
- 有负数怎么处理？
