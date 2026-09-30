---
id: STARROCKS-0219
type: technical
question: 除了新建 rollup，Doris 还有哪些查询优化方法？⭐⭐⭐
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：物化视图 | 分区分桶 | 前缀索引 | Bitmap/HLL | Colocate Join | 倒排索引 | Runtime Filter | 参数调优
> **来源**：字节-AI Agent数据开发一面-20260412 Q2

按收益从高到低：

### 1. 物化视图（同上）

### 2. 分区 + 分桶设计
- **分区（Partition）**：按业务维度（一般日期）做范围分区，查询时分区裁剪
- **分桶（Bucket / Tablet）**：分区内按 Hash 字段切成 N 个 Tablet，**直接决定数据并行度**
- **分桶字段**：高基数 + 常做 JOIN/聚合（如 `user_id`），避免热点
- **分桶数**：每个 Tablet 建议 1~10GB，太多文件多、太少并行度低

### 3. 前缀索引（Prefix Index）
Doris 存储按 Key 列**前 36 字节**自动排序，相当于一个稀疏索引。
- **优化**：高频过滤字段排在 Key 列前面（且类型尽量短）
- **限制**：VARCHAR 列只算 20 字节
- 等值 / 范围查询命中前缀索引时性能极高

### 4. Bitmap / HLL 预聚合（去重计数加速）
- **BITMAP**：精确去重（如 UV），底层 Roaring Bitmap，**只能用整数 ID**（字符串需 `bitmap_dict` 映射）
- **HLL**：近似去重（误差 ~1.6%），不限类型且空间小
- 配合 Aggregate 模型，UV 查询从分钟级降到秒级

### 5. Colocate Join（同位 JOIN）
经常 JOIN 的两张表按**相同 Hash 字段 + 相同分桶数**分桶，加入同一个 Colocate Group。JOIN 时 Tablet 在同一个 BE 上，**本地 JOIN，零 Shuffle**。
- 限制：分桶字段、分桶数、Colocate Group 必须严格一致
- 常用于事实表 JOIN 大维度表

### 6. 倒排索引（Inverted Index，2.0+）
文本检索 / 多值列等值查询 / 范围查询加速。`LIKE '%xxx%'`、`array_contains` 等场景大幅加速。

### 7. Runtime Filter（运行时过滤）
JOIN 执行时，小表先扫一遍生成过滤条件（IN List / Bloom Filter），下推到大表 Scan 阶段。**Doris 默认开启**，是 Broadcast 之外的另一道防线。

### 8. 参数 / Session 调优
- `parallel_fragment_exec_instance_num`：单 Fragment 并发数
- `exec_mem_limit`：单查询内存上限
- `enable_pipeline_engine`：2.0+ pipeline 执行引擎，向量化更彻底

### 9. SQL 写法层面（通用）
- 谓词下推（OUTER JOIN 时注意 ON / WHERE 语义）
- 分区裁剪生效（必须显式 `WHERE dt >= ...`）
- 列裁剪只 SELECT 需要的列
- 避免 `COUNT(DISTINCT)`，改 `bitmap_count` / `approx_count_distinct`

---
