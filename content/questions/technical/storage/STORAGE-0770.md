---
id: STORAGE-0770
type: technical
question: 其他 DDL 细节
difficulty: 0
topic: []
source_type: knowledge
---

- `PURGE` 在 DROP 中跳过回收站直接删除
- `IF EXISTS` 避免因表/分区不存在而报错
- `TOUCH` 更新表的最后修改时间
- `LOAD DATA` 区分 HDFS 和本地：`LOCAL` 关键字表示本地文件

---

