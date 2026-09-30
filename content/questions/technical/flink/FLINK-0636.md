---
id: FLINK-0636
type: technical
question: 你用 Flink 做的实时分流逻辑具体是怎样的？基于 MySQL 维表 + 广播流实现自动分流，能展开讲讲吗？
difficulty: 0
topic: []
source_type: knowledge
---

分流的背景：频道日志是统一的一条 Kafka Topic 进来的原始日志，包含几十种事件类型（发帖、评论、点赞、浏览等），需要按事件类型分发到不同的下游 DWD 表。

**传统做法（痛点）**：在 Flink 代码里硬编码 `if event_type == 'like' then output to sinkA`，每次新增事件类型都要改代码、重新发布任务。

**我的方案——MySQL 维表 + Flink 广播流**：

1. **MySQL 维表**存储分流规则：`(event_type, target_topic, target_table, enabled)`
2. **定时轮询**：一个独立的 Source 每 5 分钟从 MySQL 拉取最新分流规则
3. **广播流**：将分流规则广播到所有 Flink 并行实例
4. **主流处理**：每条日志进来后，从广播状态中查找该 event_type 对应的 target，路由到对应的 Side Output

```java
// 伪代码
BroadcastStream<Rule> ruleStream = ruleSource.broadcast(ruleStateDesc);
DataStream<Log> mainStream = kafkaSource;

mainStream.connect(ruleStream)
    .process(new BroadcastProcessFunction<Log, Rule, Log>() {
        @Override
        public void processElement(Log log, ReadOnlyContext ctx, Collector<Log> out) {
            Rule rule = ctx.getBroadcastState(ruleStateDesc).get(log.getEventType());
            if (rule != null && rule.isEnabled()) {
                ctx.output(rule.getOutputTag(), log);
            }
        }
        @Override
        public void processBroadcastElement(Rule rule, Context ctx, Collector<Log> out) {
            ctx.getBroadcastState(ruleStateDesc).put(rule.getEventType(), rule);
        }
    });
```

**优势**：
- 新增事件类型只需在 MySQL 里加一行配置，5 分钟内自动生效，无需重启任务
- 支持页面化管理（配了一个简单的管理界面让产品自己添加新事件类型）
- 规则支持 enabled/disabled，可以动态下线某个分流而不影响其他

---
