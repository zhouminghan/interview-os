---
id: ALGORITHM-0004
type: technical
question: 手写单例模式（Double Check Lock），为什么加 Volatile
topic: [algorithm, singleton]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-06-12-netease-bigdata
    company: 网易（杭州）
    position: 大数据开发工程师
    date: 2026-06-12
---

# 一句话

DCL 双重检查锁，volatile 防止指令重排导致返回未初始化完成的对象。

# 代码

```java
public class Singleton {
    private static volatile Singleton instance;
    private Singleton() {}
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
```

# 为什么加 Volatile

`new Singleton()` 不是原子操作：分配内存、初始化对象、把引用赋值给 instance，可能被指令重排；volatile 禁止重排，保证 instance 指向的是已初始化完成的对象。

# 追问

- 不加 volatile 会出什么问题？
- 单例还有哪些写法？
