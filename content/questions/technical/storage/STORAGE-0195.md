---
id: STORAGE-0195
type: technical
question: 如何管理Hive的依赖包？请详细说明依赖包的管理方法、更新策略和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

依赖包统一版本，更新走流程。

# 参考回答

依赖包集中管理版本，更新前测试兼容性。避免多个版本混用。UDF 的 jar 统一上传目录，命名规范。

# 追问

- 依赖包怎么组织？
