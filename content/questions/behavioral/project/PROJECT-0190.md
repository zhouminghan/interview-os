---
id: PROJECT-0190
type: project
question: DWD层如何设计？
difficulty: 0
topic: [面试宝典]
source_type: knowledge
---

**一、面试官真正想考什么？**

考你是否有实际建模能力，能否把抽象设计落地。

**二、回答思路**

设计原则 → 建表方法 → 结合项目

**三、参考答案（面试标准版）**

> 控制在2分钟

DWD层设计围绕一个核心目标：**按业务过程建事实表，确保明细粒度、标准统一**。

**三步设计法：**

1. **确定业务过程**：梳理有哪些核心动作（曝光、点击、发布、互动等），每个动作建一张事实表
2. **确定粒度**：一行代表一次什么行为（如"一次曝光"/"一次点击"），粒度是表最核心的属性
3. **确定度量和维度**：度量是数值型事实（时长、次数），维度是描述性字段（用户ID、频道ID、时间）

**设计原则：**
- 字段标准化（时间统一格式、枚举统一编码）
- 去重逻辑在此完成（保证下游数据唯一性）
- 分区策略：按天分区（dt），大表按业务再拆二级分区

**结合QQ频道：** 频道是社交业务，维度变化快，所以DWD层保持事实和维度分离，不做过度退化。关联放到DWS完成。

**四、技术知识补充**

DWD建表示例：
```sql
CREATE TABLE dwd_channel_exposure_di (
    log_id          STRING    COMMENT '日志唯一标识',
    user_id         BIGINT    COMMENT '用户ID',
    channel_id      BIGINT    COMMENT '频道ID',
    content_id      STRING    COMMENT '内容ID',
    page_id         STRING    COMMENT '页面标识',
    expose_time     BIGINT    COMMENT '曝光时间戳',
    duration_ms     INT       COMMENT '曝光时长毫秒',
    platform        STRING    COMMENT '平台(ios/android)',
    app_version     STRING    COMMENT 'APP版本号'
) PARTITIONED BY (dt STRING)
STORED AS ORC;
```

**五、追问预判**

1. **追问：什么时候做维度退化？** → 维度稳定且查询频繁时可退化（如商品类目）。维度变化快时不退化（如用户标签）。
2. **追问：如何确定粒度？** → 找业务最细动作。曝光事实=一次曝光，不能是"一天的曝光汇总"，那是DWS的事。

**六、常见错误/踩坑提醒**

- ❌ DWD里做汇总 → ✅ DWD是明细层，一行=一次行为
- ❌ 不确定粒度就开始建表 → ✅ 粒度是第一个要确定的事

**七、记忆版（20秒压缩）**

> DWD设计三步：确定业务过程→确定粒度（一行=一次行为）→确定度量和维度。核心是标准化明细，不做汇总。

---

---


---
