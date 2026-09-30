---
id: STORAGE-0779
type: technical
question: JOIN 优化
difficulty: 0
topic: []
source_type: knowledge
---

**大表和小表**：小表放右侧，Hive 将右侧表加载到内存

**JOIN 时 OOM 解决方案**：
- 将大表拆分
- 使用 Map Join（`/*+ MAPJOIN(small_table) */`）
- 增加 MapReduce 内存

**避免笛卡尔积**：确保 JOIN 有 ON 条件（严格模式下禁止）
