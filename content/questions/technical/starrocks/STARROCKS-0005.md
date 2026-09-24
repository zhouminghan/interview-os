---
id: STARROCKS-0005
type: technical
question: 主键模型的数据更新流程
topic: [starrocks, primary-key, upsert]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-23-anker-data
    company: 安克创新
    position: 数据岗（一面）
    date: 2026-09-23
---

# 一句话

主键模型写入时先查主键索引定位行，命中则 upsert 更新，未命中则插入。

# 30 秒回答

按主键 hash 分桶 -> 查主键索引（Primary Index）-> 命中更新（upsert）、未命中插入 -> 写内存表 -> flush 持久化；支持 delete 谓词（墓碑）。

# 1 分钟回答

- 定位：按主键 hash 到分桶，查主键索引
- upsert：命中更新，未命中插入
- 删除：delete 谓词 + 墓碑标记
- 持久化：内存表 flush 到磁盘，批量合并
- 保证：同主键只保留最新版本

# 追问

- 主键索引存在哪里？
- 更新是实时可见吗？
