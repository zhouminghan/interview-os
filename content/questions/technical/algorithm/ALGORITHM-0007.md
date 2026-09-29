---
id: ALGORITHM-0007
type: technical
question: 手写 LRU 缓存（O(1) get/put）
topic: [algorithm, lru]
difficulty: 3
frequency: high
source_type: knowledge
---

# 一句话

哈希表定位 + 双向链表维护访问顺序，O(1) 实现 get/put。

# 代码

```python
class Node:
    def __init__(self, k=0, v=0):
        self.k, self.v, self.prev, self.next = k, v, None, None

class LRUCache:
    def __init__(self, capacity):
        self.cap = capacity
        self.m = {}
        self.head, self.tail = Node(), Node()
        self.head.next, self.tail.prev = self.tail, self.head

    def _remove(self, n):
        n.prev.next, n.next.prev = n.next, n.prev

    def _add(self, n):
        n.next = self.head.next
        n.next.prev = n
        self.head.next = n
        n.prev = self.head

    def get(self, key):
        if key not in self.m: return -1
        n = self.m[key]
        self._remove(n); self._add(n)
        return n.v

    def put(self, key, value):
        if key in self.m:
            self._remove(self.m[key])
        n = Node(key, value)
        self.m[key] = n
        self._add(n)
        if len(self.m) > self.cap:
            t = self.tail.prev
            self._remove(t)
            del self.m[t.k]
```

# 追问

- 为什么用双向链表？
- 达到容量时淘汰哪个？
