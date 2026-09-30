---
id: SPARK-0342
type: technical
question: UDF/UDAF/UDTF 的底层原理和性能注意点？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：快手-大数据开发实习一面-20260512 Q16

**Hive/Spark 中 UDF 分三种**：
- **UDF（一进一出）**：输入一行输出一行（解析 JSON 取字段、自定义脱敏）；
- **UDAF（多进一出）**：输入多行输出一行（自定义聚合、位图去重）；
- **UDTF（一进多出）**：输入一行输出多行（explode 数组展开）。

**底层原理**：

1. **注册机制**：UDF 实现一个继承自 Hive UDF 接口（或 Spark 的 UserDefinedFunction）的类，**打包成 jar**，通过 `ADD JAR` 加载到执行环境，再用 `CREATE TEMPORARY FUNCTION` 注册。Spark 还支持代码内直接注册 lambda。

2. **执行机制**：SQL 解析时，UDF 调用被识别成一个**特殊算子节点**，执行时为每行数据反射调用 evaluate 方法。

3. **性能要点**：
   - UDF **打破了向量化执行**——内置函数可以走列式批处理，UDF 通常逐行调用，性能比内置差很多。**能用内置函数就别写 UDF**；
   - UDF 内部如果有**重对象创建**（每行 new 一个 Pattern），会成性能瓶颈，要用 transient 字段缓存；
   - UDAF 的 **merge 函数**要写正确，否则在 shuffle 后聚合阶段结果会错；
   - Spark 的 **Pandas UDF（向量化 UDF）**用 Arrow 在 JVM 和 Python 之间高效传数据，性能比普通 Python UDF 快几倍。

**实战原则**：**优先内置函数 → 内置不够用 SQL 拼 → 拼不出再写 UDF**。UDF 写完一定要 review 性能，避免成为慢任务的根源。

> 💡 **专家补充**：
> - **UDF 是"逃生通道"不是"首选方案"**——SQL 能表达的逻辑就别写 UDF，UDF 是给真正特殊逻辑（复杂解析、自定义算法）准备的兜底机制
> - **UDF 的两大杀手**：内存（重对象不缓存）和反序列化（JVM 对象边界跨越）。写 UDF 必须做 profile，否则线上很可能成慢任务的元凶
> - **现代引擎对 UDF 的优化方向**：Spark Pandas UDF（向量化）、Doris 的 SQL UDF（不出引擎）、Presto 的 LambdaExpression（语法糖代替 UDF）。趋势是**让用户少写 UDF**，用更高级的语法表达



---
