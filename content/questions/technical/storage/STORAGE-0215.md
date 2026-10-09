---
id: STORAGE-0215
type: technical
question: 如何保证Hive的版本兼容？请详细说明版本兼容性保证的方法、测试步骤和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

测试环境全量回归再升级。

# 参考回答

保证兼容先测试环境回归现有任务，对比结果，再灰度生产。发现不兼容就调整或回滚。升级前读 release note。

# 追问

- 回归测什么？
