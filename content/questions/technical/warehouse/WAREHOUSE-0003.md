---
id: WAREHOUSE-0003
type: technical
question: DWD 层一般做哪些清洗操作
topic: [warehouse, dwd, etl]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-18-bytedance-douyin
    company: 字节跳动
    position: 大数据开发（实习）
    date: 2026-09-18
---

# 一句话

DWD 的清洗是把 ODS 的原始数据加工成统一、可信、可用的明细数据。

# 30 秒回答

常见操作：空值处理、脏数据过滤、去重、字段标准化（枚举映射、单位统一）、类型转换、格式/编码/时区统一、非法值校验、脱敏、补全维度字段、加分区。

# 1 分钟回答

- 空值与非法值：过滤或填充默认值
- 去重：按业务主键去重
- 标准化：枚举映射、金额单位、时间格式、编码统一
- 类型转换：字符串转数值/时间
- 维度补全：关联维度表补齐字段
- 脱敏：手机号、身份证等敏感字段
- 分区：按业务日期分区落地

# 追问

- 为什么清洗放 DWD 不放 ODS？
- 重复数据怎么判定？
- 金额、时间字段分别怎么处理？
