---
id: STORAGE-0772
type: technical
question: Hive 配置的优先级顺序
difficulty: 0
topic: []
source_type: knowledge
---

1. `SET` 命令（最高优先级）
2. `-hiveconf` 命令行参数
3. `hive-site.xml`
4. `hive-default.xml`
5. `hadoop-site.xml`（最低优先级）
