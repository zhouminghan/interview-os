---
id: STORAGE-0194
type: technical
question: 什么是Hive的依赖管理？请详细说明依赖管理的方法、工具和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

依赖包统一管理，避免冲突。

# 参考回答

依赖管理统一 UDF 和连接器的 jar 包，避免版本冲突。用构建工具打包，统一上传。依赖变更要测试。

# 追问

- 依赖冲突怎么处理？
