---
id: LAKEHOUSE-0005
type: technical
question: Copy-on-Write 的概念
topic: [lakehouse, cow]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-24-meituan-data-dev
    company: 美团
    position: 数据开发（一面）
    date: 2026-09-24
---

# 一句话

COW 更新时复制旧文件、写入新文件、原子切换，读快写慢，适合读多写少。

# 30 秒回答

更新时把受影响的数据文件复制成新文件，写入新数据后原子切换元数据指向新文件。读放大低、写放大高，适合读多写少场景。

# 1 分钟回答

- COW：写时复制，每次更新重写整个文件
- 优点：读性能好、文件整洁
- 缺点：写放大、延迟高
- 对比 MOR：增量日志写快、读慢，需 compaction
- Hudi 中 COW 是读优化表

# 追问

- COW 和 MOR 各适合什么负载？
- 写放大会带来什么问题？
