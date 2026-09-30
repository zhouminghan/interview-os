---
id: STORAGE-0729
type: technical
question: 如何减少 ISR 中的振荡（频繁变更）？
difficulty: 0
topic: []
source_type: knowledge
---

- **优化网络配置**：确保 broker 之间的网络连接稳定且具有足够的带宽。网络问题会导致 follower 落后并从 ISR 中掉出。

- **调整副本滞后配置**：Kafka 允许配置诸如 `replica.lag.time.max.ms` 之类的参数，该参数定义了一个副本在被认为不同步之前可以落后 leader 多长时间。调整此值可以通过允许副本有更多或更少的时间来赶上，从而帮助管理 ISR 振荡。

- **监控并适当扩展资源**：确保所有 broker 具有足够的资源（CPU、内存、磁盘 I/O）来处理其工作负载。过载的 broker 可能难以跟上，导致副本从 ISR 中掉出。

- **为复制流量使用专用网络**：如果可能，为复制流量使用专用网络。这可以帮助防止复制流量受到其他网络负载的影响。

---
