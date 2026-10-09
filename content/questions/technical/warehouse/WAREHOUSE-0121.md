---
id: WAREHOUSE-0121
type: technical
question: 描述一次你在数据仓库项目中遇到的难题，以及你是如何解决的。
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

常见难题是数据倾斜、口径不一致、上游延迟，解决靠先定位根因再对症下药。

# 参考回答

印象比较深的一次是某个任务突然从半小时跑到三小时，排查发现是热点 key 数据倾斜，少数 task 一直跑不完。我的做法是先看 Spark UI 定位到倾斜的 stage，再对热点 key 加盐打散、做两阶段聚合，最后把时长压回正常。这种题的关键是先定位再动手，别上来就瞎调参数。

# 追问

- 怎么判断是数据倾斜还是节点硬件问题？
- 加盐打散后怎么再聚合回来？
