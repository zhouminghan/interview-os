---
id: ALGORITHM-0001
type: technical
question: 构建链表并完成链表排序
topic: [algorithm, linked-list, merge-sort]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-09-bytedance-data-dev
    company: 字节跳动
    position: 数据开发（秋招）
    date: 2026-09-09
---

# 一句话

链表排序首选归并排序：O(n log n) 稳定，且无需额外数组空间，适合链表结构。

# 思路

- 用快慢指针找中点，把链表从中间断开
- 递归排序左右两半
- 合并两个有序链表
- 哨兵节点简化合并

# 代码

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def merge(a, b):
    dummy = ListNode()
    cur = dummy
    while a and b:
        if a.val <= b.val:
            cur.next, a = a, a.next
        else:
            cur.next, b = b, b.next
        cur = cur.next
    cur.next = a or b
    return dummy.next

def sortList(head):
    if not head or not head.next:
        return head
    slow = fast = head
    prev = None
    while fast and fast.next:
        prev = slow
        slow = slow.next
        fast = fast.next.next
    prev.next = None
    left = sortList(head)
    right = sortList(slow)
    return merge(left, right)
```

# 追问

- 为什么用归并而不是快排？
- 快慢指针找中点要注意什么？
- 复杂度和稳定性？
