---
id: SPARK-0339
type: technical
question: Gateway（大数据集群跳板机）常用命令？
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：HDFS操作 | Spark提交 | YARN管理 | Hive查询
> **来源面经**：字节-数开一面-20260422 Q12

日常在 Gateway 上常用的命令分四类：

**HDFS 文件操作**：
```bash
hdfs dfs -ls /path/to/dir           # 查看目录
hdfs dfs -cat /path/to/file         # 查看文件内容
hdfs dfs -get /hdfs/path /local/    # 下载到本地
hdfs dfs -put /local/file /hdfs/    # 上传到HDFS
hdfs dfs -du -s -h /path/           # 查看目录大小
hdfs dfs -rm -r /path/to/dir        # 删除目录
hdfs dfs -mkdir -p /path/to/dir     # 创建目录
```

**Spark 任务提交**：
```bash
spark-submit \
  --master yarn \
  --deploy-mode cluster \
  --executor-memory 4g \
  --num-executors 10 \
  --executor-cores 2 \
  my_job.py
```

**YARN 应用管理**：
```bash
yarn application -list              # 查看运行中的应用
yarn application -status app_id     # 查看应用状态
yarn application -kill app_id       # 杀掉应用
yarn logs -applicationId app_id     # 查看应用日志
```

**Hive/Beeline 查询**：
```bash
hive -e "SELECT count(*) FROM db.table"    # 执行单条SQL
hive -f script.sql                          # 执行SQL文件
beeline -u "jdbc:hive2://host:port"        # 连接HiveServer2
```

> 💡 **专家补充**：
> - **`hdfs dfs -du -s -h` 是排查存储问题的常用命令**——快速定位哪个目录占用空间最大。生产环境中数据量增长经常导致存储告警，这个命令是第一反应
> - **`yarn application -kill` 要谨慎使用**——确认是自己的任务再 kill，生产集群上误杀别人的任务是事故。建议先用 `-status` 确认
> - **实际工作中更多是通过平台提交任务**，直接在 Gateway 手动操作主要用于临时排查和调试。日常开发建议用调度平台管理任务

---
