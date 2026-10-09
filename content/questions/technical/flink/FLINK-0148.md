---
id: FLINK-0148
type: technical
question: Flink中的依赖冲突如何解决？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 shade 或排除冲突依赖，统一版本。

# 参考回答

依赖冲突靠 maven shade 插件重定位，或排除冲突的依赖，统一版本。常见是 Hadoop、Guava 这些版本冲突，看 NoSuchMethodError 定位。

# 追问

- shade 插件怎么用？
