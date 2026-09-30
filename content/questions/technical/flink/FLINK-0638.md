---
id: FLINK-0638
type: technical
question: 处理用户行为数据时，Flink 遇到数据倾斜了吗？怎么解决的？
difficulty: 0
topic: []
source_type: knowledge
---

遇到过。典型场景：按 `channel_id` KeyBy 做聚合时，热门频道（几百万用户）的数据量是冷门频道的 1000 倍以上，导致某几个 subtask 严重过载。

**解决方案——两阶段聚合（Local + Global）**：

```
阶段一（Local 聚合）：
- KeyBy(channel_id + random_suffix)  // 加随机前缀打散
- Window(5min)
- 局部 SUM

阶段二（Global 聚合）：
- KeyBy(channel_id)  // 去掉随机前缀
- Window(5min)
- 全局 SUM
```

具体实现：
1. 给 channel_id 后面拼接 `_0` ~ `_9` 的随机后缀（10 份打散）
2. 第一阶段每份独立做 5 分钟窗口聚合 → 每个 channel_id 产出 10 条局部结果
3. 第二阶段再按原始 channel_id 聚合 → 得到最终结果

**效果**：热门频道的单 subtask 处理量从 200 万/min 降到 20 万/min，反压消除。

---
