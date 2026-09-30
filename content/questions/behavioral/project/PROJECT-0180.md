---
id: PROJECT-0180
type: project
question: 你认为这个项目最大的技术难点是什么？
difficulty: 0
topic: [面试宝典]
source_type: knowledge
---

**一、面试官真正想考什么？**

不是要你说"数据量大"，而是考：
- 你对"难"的定义是否有深度
- 你是否真正经历过技术决策的纠结
- 你的问题分析和解决能力

**二、回答思路**

选一个有深度的难点 → 说清楚为什么难 → 解决方案 → 效果

**三、参考答案（面试标准版）**

> 控制在2分钟

我认为最大的技术难点是**数据接入层的动态分流设计**。

**为什么难：**

手Q公共日志是一个统一的Kafka Topic，包含了QQ频道、QQ群、QQ空间等多个业务的数据。我们需要从中实时拆分出频道业务数据，问题在于：
1. 业务标识不固定——新页面上线、旧页面下线是常态
2. 不能每次业务变化就重新发布Flink任务（有状态的流任务重启代价很大）
3. 需要分流规则热更新

**解决方案：Flink广播流 + 配置化维表**

```text
MySQL维表（page_id → 业务枚举）
    ↓ CDC推送
Kafka配置Topic
    ↓
Flink Broadcast State
    ↓
主流数据匹配分流 → 频道Topic / QQ群Topic / ...
```

核心设计：
- 维表变更通过CDC推到Kafka，Flink消费后更新BroadcastState
- 主流数据匹配时从State读最新映射
- **新增页面只改MySQL，不动Flink代码**

**效果：** 业务新增页面从"提需求→改代码→测试→上线"（2-3天）缩短到"改配置→自动生效"（分钟级）。

**四、技术知识补充**

BroadcastState核心API：
```java
// 广播流处理
public class DynamicRouter extends BroadcastProcessFunction<LogEvent, ConfigEvent, LogEvent> {
    @Override
    public void processElement(LogEvent event, ReadOnlyContext ctx, Collector<LogEvent> out) {
        ReadOnlyBroadcastState<String, String> state = ctx.getBroadcastState(configDesc);
        String bizType = state.get(event.getPageId());
        // 按业务类型分流
    }
    
    @Override
    public void processBroadcastElement(ConfigEvent config, Context ctx, Collector<LogEvent> out) {
        BroadcastState<String, String> state = ctx.getBroadcastState(configDesc);
        state.put(config.getPageId(), config.getBizType());
    }
}
```

**五、追问预判**

1. **追问：如果维表更新延迟怎么办？**
   → 两层保障：① 维表CDC延迟通常在秒级，可接受 ② 对未匹配到的数据走默认分流（旁路缓存），后续补录。

2. **追问：状态很大会不会有问题？**
   → 维表规模有限（数百条page_id映射），BroadcastState很小。主要状态压力在主流数据的窗口聚合上，用RocksDB StateBackend。

3. **追问：除了这个难点还有什么？**
   → 另一个难点是DWD层建模时如何平衡标准化和查询效率。频道维度变化快不能退化，但不退化又影响下游查询性能。最终方案是在DWS层统一做维度关联，用空间换时间。

**六、常见错误/踩坑提醒**

- ❌ 「最大难点是数据量大」 → ✅ 数据量大不是难点，如何架构设计才是
- ❌ 只说难点不说解决方案 → ✅ 必须有完整的"问题→方案→效果"链路

**七、记忆版（30秒压缩）**

> 最大难点：手Q统一日志需要动态分流到各业务，且业务变化频繁。方案：Flink BroadcastState + MySQL维表CDC，实现配置热更新，新增页面分钟级生效，不重启Flink任务。

---
