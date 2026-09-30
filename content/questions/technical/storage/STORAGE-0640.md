---
id: STORAGE-0640
type: technical
question: 如何在 Hive 查询结果中显示表头行？
difficulty: 0
topic: []
source_type: knowledge
---

Hive 提供了一个属性 `hive.cli.print.header` 来设置是否打印表头行的配置，如下所示：

```sql
hive> set hive.cli.print.header=true;
```

---
