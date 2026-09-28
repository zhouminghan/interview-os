---
id: ALGORITHM-0003
type: technical
question: 搜索旋转排序数组（二分查找）
topic: [algorithm, binary-search]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-25-kuaishou-ai-data
    company: 快手
    position: Data Agent 研发 / AI 数据系统研发（社招）
    date: 2026-09-25
---

# 思路

旋转数组一分为二，至少一半有序；判断 target 在哪个有序段，缩小范围。

# 代码

```python
def search(nums, target):
    l, r = 0, len(nums) - 1
    while l <= r:
        m = (l + r) // 2
        if nums[m] == target:
            return m
        if nums[l] <= nums[m]:      # 左半有序
            if nums[l] <= target < nums[m]:
                r = m - 1
            else:
                l = m + 1
        else:                        # 右半有序
            if nums[m] < target <= nums[r]:
                l = m + 1
            else:
                r = m - 1
    return -1
```

# 追问

- 有重复元素时怎么做？
- 复杂度是多少？
