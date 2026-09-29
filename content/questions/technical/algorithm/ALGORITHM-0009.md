---
id: ALGORITHM-0009
type: technical
question: 和为 k 的连续子数组个数
topic: [algorithm, prefix-sum, hash]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-07-11-xiaohongshu-ai-data-dev
    company: 小红书
    position: AI 数据开发（4 轮）
    date: 2026-07-11
---

# 一句话

前缀和 + 哈希表：`sum[i] - sum[j] = k` 等价于找前缀和 `sum[i]-k` 出现的次数。

# 30 秒回答

遍历数组累计前缀和 cur，每到一个位置查哈希表里 `cur - k` 出现过几次，累加进答案，再把当前前缀和记入哈希表。O(n) 时间、O(n) 空间。

# 1 分钟回答

```python
def subarraySum(nums, k):
    cnt = {0: 1}
    cur = ans = 0
    for x in nums:
        cur += x
        ans += cnt.get(cur - k, 0)
        cnt[cur] = cnt.get(cur, 0) + 1
    return ans
```

- 核心：连续子数组和 = 两个前缀和之差
- 初始化 `{0: 1}` 处理从下标 0 开始的子数组
- 复杂度：O(n) 时间，O(n) 空间

# 追问

- 为什么初始化 cnt[0]=1？
- 如果要求返回所有子数组而不是个数，怎么改？
