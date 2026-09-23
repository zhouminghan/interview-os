window.OS_DATA = {
  "generatedAt": "2026-09-23T16:31:23+08:00",
  "stats": {
    "questions": 42,
    "interviews": 3,
    "technical": 33,
    "project": 9,
    "domains": {
      "spark": 9,
      "hdfs": 1,
      "storage": 2,
      "network": 4,
      "algorithm": 1,
      "llm": 3,
      "warehouse": 8,
      "sql": 5,
      "project": 9
    }
  },
  "domains": {
    "spark": {
      "label": "Spark",
      "type": "technical"
    },
    "hdfs": {
      "label": "HDFS",
      "type": "technical"
    },
    "storage": {
      "label": "存储引擎",
      "type": "technical"
    },
    "network": {
      "label": "网络",
      "type": "technical"
    },
    "algorithm": {
      "label": "算法",
      "type": "technical"
    },
    "llm": {
      "label": "大模型",
      "type": "technical"
    },
    "warehouse": {
      "label": "数仓",
      "type": "technical"
    },
    "sql": {
      "label": "SQL",
      "type": "technical"
    },
    "project": {
      "label": "项目 / 行为",
      "type": "project"
    }
  },
  "questions": [
    {
      "id": "SPARK-0001",
      "type": "technical",
      "question": "你在工作里做的 SparkSQL 优化有哪些",
      "topic": [
        "spark",
        "sql",
        "tuning"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-14-bytedance-cn-transaction-ads",
          "company": "字节跳动",
          "position": "大数据开发（校招）",
          "date": "2026-09-14"
        }
      ],
      "domain": "spark",
      "body_html": "<h2>一句话</h2>\n<p>围绕「少读、少 shuffle、少倾斜、少 UDF」展开，核心是用广播、分区裁剪、缓存和调参降低数据量与 shuffle 开销。</p>\n<h2>30 秒回答</h2>\n<p>数据倾斜处理、小表 broadcast join、分区裁剪与列裁剪、谓词下推、复用数据 cache/persist、合理设置 shuffle 分区数、避免 count(distinct) 和低效 UDF、用 Parquet/ORC 列式存储。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>join 优化：小表 broadcast、调整 join 顺序、避免笛卡尔积</li>\n<li>倾斜优化：两阶段聚合、加盐、skew join、AQE skew join</li>\n<li>裁剪：分区裁剪、列裁剪、谓词下推</li>\n<li>缓存：复用 DataFrame 用 cache/persist，选合适存储级别</li>\n<li>调参：shuffle 分区数、executor 内存/核数、spill 阈值</li>\n<li>写法：优先内置函数，避免 count(distinct)，必要时用 group by 去重</li>\n<li>存储：Parquet/ORC、合理分区，减少小文件</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>数据倾斜具体怎么处理？</li>\n<li>AQE 会做哪些优化？</li>\n<li>什么时候适合 broadcast join？</li>\n</ul>"
    },
    {
      "id": "SPARK-0002",
      "type": "technical",
      "question": "大表 left join 小表和大表 right join 小表，都能用 MapJoin 吗",
      "topic": [
        "spark",
        "hive",
        "mapjoin",
        "join"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-14-bytedance-cn-transaction-ads",
          "company": "字节跳动",
          "position": "大数据开发（校招）",
          "date": "2026-09-14"
        }
      ],
      "domain": "spark",
      "body_html": "<h2>一句话</h2>\n<p>都能。MapJoin 的本质是把小表广播到 map 端内存做哈希关联，与 outer join 保留哪侧无关，只要被广播的是小表即可。</p>\n<h2>30 秒回答</h2>\n<p>MapJoin 是把小表加载到内存哈希表，map 阶段直接关联、避免 shuffle。left join 右表是小表可以广播；right join 小表仍在右侧、同样可以广播，所以两种都能用 mapjoin。full outer join 不能。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>left join：大表（左）保留全部，小表（右）广播，可 mapjoin</li>\n<li>right join：大表（左）right join 小表（右），保留小表（右）全部，但小表仍在右侧，广播小表即可</li>\n<li>本质：广播对象是「小表」，join 方向只决定保留哪侧、不匹配填 null</li>\n<li>限制：full outer join 两侧都可能保留，不能只广播一侧，通常不走 mapjoin</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>full outer join 为什么不能 MapJoin？</li>\n<li>MapJoin 对表大小有什么限制？</li>\n<li>大表 join 大表怎么办？</li>\n</ul>"
    },
    {
      "id": "SPARK-0003",
      "type": "technical",
      "question": "MapJoin 和 Broadcast Join 的区别是什么",
      "topic": [
        "spark",
        "hive",
        "mapjoin",
        "broadcast"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-14-bytedance-cn-transaction-ads",
          "company": "字节跳动",
          "position": "大数据开发（校招）",
          "date": "2026-09-14"
        }
      ],
      "domain": "spark",
      "body_html": "<h2>一句话</h2>\n<p>本质是同一思想（小表广播 + map 端 join）在不同引擎里的实现与叫法：MapJoin 是 Hive 的机制，Broadcast Join 是 Spark 的机制。</p>\n<h2>30 秒回答</h2>\n<p>MapJoin 是 Hive 把小表加载到 map 端内存哈希表完成 join；Broadcast Join 是 Spark 用 broadcast 变量把小表分发到 executor 内存，在 task 端做 join。两者都避免 shuffle，只是引擎和实现不同。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>MapJoin（Hive）：由 hive.auto.convert.join 控制，阈值 hive.mapjoin.smalltable.filesize</li>\n<li>Broadcast Join（Spark）：由 spark.sql.autoBroadcastJoinThreshold（默认 10MB）控制</li>\n<li>Spark 用 TorrentBroadcast 分块分发小表，可跨 task/job 复用</li>\n<li>共同点：小表广播、map/task 端关联、避免 shuffle</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>Spark 的 autoBroadcastJoinThreshold 默认是多少？</li>\n<li>broadcast 变量可以跨 job 复用吗？</li>\n<li>表大小刚好超过阈值时怎么办？</li>\n</ul>"
    },
    {
      "id": "SPARK-0004",
      "type": "technical",
      "question": "广播后的变量是存储在内存吗，与 MapJoin 有什么区别",
      "topic": [
        "spark",
        "broadcast",
        "mapjoin"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-14-bytedance-cn-transaction-ads",
          "company": "字节跳动",
          "position": "大数据开发（校招）",
          "date": "2026-09-14"
        }
      ],
      "domain": "spark",
      "body_html": "<h2>一句话</h2>\n<p>广播变量默认放在 executor 内存中（可配置内存+磁盘），由 TorrentBroadcast 分块分发；MapJoin 则是把整张小表在 map 端做成内存哈希表。</p>\n<h2>30 秒回答</h2>\n<p>Spark 的 broadcast 变量分发到各 executor，默认以内存为主、必要时可溢写磁盘，各 task 反序列化使用。MapJoin 是 Hive 在 map 端一次性构建内存哈希表。二者实现不同，思想一致。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>broadcast：序列化后分块（TorrentBroadcast），存 executor 内存，可跨多个 action 复用，支持自定义广播变量</li>\n<li>MapJoin：Hive 把小表加载到 map 内存做哈希表，通常一次 join 使用</li>\n<li>区别：存储/分发机制不同、是否可复用不同、参数控制不同</li>\n<li>联系：都是「小表广播 + map 端关联」避免 shuffle</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>broadcast 变量什么时候会落盘？</li>\n<li>广播变量需要手动 unpersist 吗？</li>\n<li>Spark Broadcast Join 内部用的是 broadcast 变量吗？</li>\n</ul>"
    },
    {
      "id": "SPARK-0005",
      "type": "technical",
      "question": "Application、Job、Stage 的区别",
      "topic": [
        "spark",
        "execution",
        "job",
        "stage"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-09-bytedance-data-dev",
          "company": "字节跳动",
          "position": "数据开发（秋招）",
          "date": "2026-09-09"
        }
      ],
      "domain": "spark",
      "body_html": "<h2>一句话</h2>\n<p>Application 是整个程序，Job 由 action 触发，Stage 由 shuffle 边界划分，Task 是 Stage 的最小执行单元。</p>\n<h2>30 秒回答</h2>\n<p>Application 对应一个 Spark 应用（一个 driver + 多个 executor）；一次 action 产生一个 Job；Job 内按宽窄依赖、shuffle 边界切分 Stage；Stage 内并行度决定 Task 数。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>Application：一个 spark-submit / SparkSession 对应一个应用</li>\n<li>Job：一个 action（collect、count、save）触发一个 Job</li>\n<li>Stage：Job 内部按 shuffle 切分，窄依赖合并在同一 Stage 流水线执行</li>\n<li>Task：Stage 里的最小执行单元，一个分区一个 task</li>\n<li>层级：Application &gt; Job &gt; Stage &gt; Task</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>哪些操作是 action，哪些是 transformation？</li>\n<li>宽依赖和窄依赖怎么区分？</li>\n<li>一个 Job 里一定多个 Stage 吗？</li>\n</ul>"
    },
    {
      "id": "SPARK-0006",
      "type": "technical",
      "question": "什么是 spark-submit",
      "topic": [
        "spark",
        "submit"
      ],
      "difficulty": 1,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-09-bytedance-data-dev",
          "company": "字节跳动",
          "position": "数据开发（秋招）",
          "date": "2026-09-09"
        }
      ],
      "domain": "spark",
      "body_html": "<h2>一句话</h2>\n<p>spark-submit 是提交 Spark 应用到集群的命令行脚本，负责上传依赖、指定资源和参数、启动 driver。</p>\n<h2>30 秒回答</h2>\n<p>通过 spark-submit 指定主类、master、运行模式、executor 资源等，把 jar 和依赖提交到集群，启动 driver 后申请 executor 执行任务。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>常用参数：--class 主类、--master 集群地址、--deploy-mode 部署模式、--executor-memory、--num-executors、--conf</li>\n<li>作用：打包提交应用、传递参数、管理资源申请</li>\n<li>与 spark-shell 区别：spark-shell 是交互式，spark-submit 提交编译好的应用</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>client 模式和 cluster 模式区别？</li>\n<li>--conf 都能配哪些参数？</li>\n</ul>"
    },
    {
      "id": "SPARK-0007",
      "type": "technical",
      "question": "怎么提交 Spark 任务",
      "topic": [
        "spark",
        "submit",
        "workflow"
      ],
      "difficulty": 1,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-09-bytedance-data-dev",
          "company": "字节跳动",
          "position": "数据开发（秋招）",
          "date": "2026-09-09"
        }
      ],
      "domain": "spark",
      "body_html": "<h2>一句话</h2>\n<p>用 spark-submit 把编译好的 jar 连同资源和参数提交到集群，由 driver 申请 executor 执行。</p>\n<h2>30 秒回答</h2>\n<p>打包应用 -&gt; spark-submit 指定主类、master、资源 -&gt; driver 启动 -&gt; 申请 executor -&gt; 执行 action 触发 Job -&gt; 完成后释放资源。</p>\n<h2>1 分钟回答</h2>\n<pre><code class=\"language-text\">spark-submit \\\n  --class com.example.Main \\\n  --master yarn \\\n  --deploy-mode cluster \\\n  --executor-memory 4g \\\n  --num-executors 10 \\\n  app.jar arg1 arg2</code></pre>\n<ul>\n<li>本地开发可用 spark-shell 交互式运行</li>\n<li>生产常配合 Airflow / 调度平台 / 数据平台一键提交</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>master 可以填哪些值（local、yarn、k8s）？</li>\n<li>cluster 模式下 driver 跑在哪？</li>\n</ul>"
    },
    {
      "id": "SPARK-0008",
      "type": "technical",
      "question": "spark-submit 提交的任务，什么情况会分成多个 Job",
      "topic": [
        "spark",
        "job",
        "action"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-09-bytedance-data-dev",
          "company": "字节跳动",
          "position": "数据开发（秋招）",
          "date": "2026-09-09"
        }
      ],
      "domain": "spark",
      "body_html": "<h2>一句话</h2>\n<p>一个 action 触发一个 Job，所以有多个 action 就会拆成多个 Job；宽依赖只拆 Stage，不拆 Job。</p>\n<h2>30 秒回答</h2>\n<p>出现多个 action（如先 count、再 collect、再 save）时，每个 action 一个 Job。注意 shuffle 导致的是 Stage 切分，不是 Job 切分。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>action 例子：collect、count、take、foreach、saveAsTextFile、saveAsTable</li>\n<li>transformation 是懒执行，不触发 Job</li>\n<li>多次调用不同 action -&gt; 多个 Job</li>\n<li>特殊：某些操作内部也可能触发额外 action</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>哪些操作是 action？</li>\n<li>Job 和 Stage 的对应关系？</li>\n</ul>"
    },
    {
      "id": "SPARK-0009",
      "type": "technical",
      "question": "什么情况不会拆分成多个 Job",
      "topic": [
        "spark",
        "job",
        "action"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-09-bytedance-data-dev",
          "company": "字节跳动",
          "position": "数据开发（秋招）",
          "date": "2026-09-09"
        }
      ],
      "domain": "spark",
      "body_html": "<h2>一句话</h2>\n<p>整个应用只有一个 action 时通常只有一个 Job；只有 transformation 不触发 action 时根本不会产生 Job。</p>\n<h2>30 秒回答</h2>\n<p>只做一次 action（比如只 save 一次），即使内部有多个 Stage，也只算一个 Job。纯 transformation 链是懒执行，不会产生 Job。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>单 action：一次 saveAsTextFile / collect，对应一个 Job</li>\n<li>无 action：只有 map/filter/join 等 transformation，不会执行、不产生 Job</li>\n<li>复用缓存：cache 命中可减少重复计算，但 Job 数仍由 action 数决定</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>transformation 和 action 的本质区别？</li>\n<li>cache 对 Job 数量有影响吗？</li>\n</ul>"
    },
    {
      "id": "HDFS-0001",
      "type": "technical",
      "question": "HDFS 客户端读写数据的执行流程",
      "topic": [
        "hdfs",
        "namenode",
        "datanode",
        "read-write"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-09-bytedance-data-dev",
          "company": "字节跳动",
          "position": "数据开发（秋招）",
          "date": "2026-09-09"
        }
      ],
      "domain": "hdfs",
      "body_html": "<h2>一句话</h2>\n<p>NameNode 管元数据和文件到 block 的映射，DataNode 存实际数据；客户端读写都先问 NameNode 要 DataNode 位置，再和 DataNode 传数据。</p>\n<h2>30 秒回答</h2>\n<p>写：请求 NameNode 创建文件 -&gt; 返回 DataNode 列表 -&gt; 按 block 写入第一个 DataNode -&gt; 管道式复制到副本 -&gt; 完成确认，NameNode 更新元数据。 读：请求 NameNode 拿 block 位置 -&gt; 返回就近排序的 DataNode -&gt; 逐个 block 读取。</p>\n<h2>1 分钟回答</h2>\n<p>写流程：</p>\n<ol>\n<li>client 向 NameNode 发创建请求，检查权限/配额</li>\n<li>NameNode 返回 DataNode 列表（按副本策略）</li>\n<li>client 写第一个 DataNode，DataNode 间 pipeline 复制到其余副本</li>\n<li>每个 block 写完发确认，最后一个 block 写完关文件，NameNode 更新元数据</li>\n</ol>\n<p>读流程：</p>\n<ol>\n<li>client 向 NameNode 请求文件元数据</li>\n<li>NameNode 返回 block 位置，按网络距离排序</li>\n<li>client 就近从 DataNode 读每个 block</li>\n<li>读完所有 block 返回</li>\n</ol>\n<h2>追问</h2>\n<ul>\n<li>副本默认几个，副本放置策略？</li>\n<li>NameNode 宕机会怎样，HA 怎么解决？</li>\n<li>block 默认多大，为什么是 128MB？</li>\n</ul>"
    },
    {
      "id": "STORAGE-0001",
      "type": "technical",
      "question": "对存储引擎了解哪些（MySQL / OLAP / ClickHouse / Doris）",
      "topic": [
        "storage",
        "olap",
        "oltp"
      ],
      "difficulty": 2,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-09-bytedance-data-dev",
          "company": "字节跳动",
          "position": "数据开发（秋招）",
          "date": "2026-09-09"
        }
      ],
      "domain": "storage",
      "body_html": "<h2>一句话</h2>\n<p>按场景分：OLTP 用行存（MySQL/InnoDB），OLAP 用列存（ClickHouse/Doris），核心区别在存储结构、执行模型和优化目标。</p>\n<h2>30 秒回答</h2>\n<ul>\n<li>MySQL/InnoDB：行存、B+ 树、事务 ACID，适合高频点查和事务</li>\n<li>ClickHouse：列存、MergeTree 族、向量化执行，适合海量聚合分析</li>\n<li>Doris：MPP 架构、向量化、三种数据模型，适合实时/离线分析</li>\n</ul>\n<h2>1 分钟回答</h2>\n<ul>\n<li>行存：整行连续存储，适合点查、更新、事务，OLTP</li>\n<li>列存：按列存储，压缩好、聚合只读相关列，OLAP</li>\n<li>ClickHouse：单机性能强、写入快，适合大宽表聚合</li>\n<li>Doris：兼容 MySQL 协议、分布式 MPP，适合多维分析和实时报表</li>\n<li>选择：看是事务型还是分析型负载</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>行存和列存各自优缺点？</li>\n<li>Doris 的三种数据模型？</li>\n<li>ClickHouse 的 MergeTree 为什么快？</li>\n</ul>"
    },
    {
      "id": "STORAGE-0002",
      "type": "technical",
      "question": "InnoDB 怎么存储数据",
      "topic": [
        "storage",
        "innodb",
        "btree"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-09-bytedance-data-dev",
          "company": "字节跳动",
          "position": "数据开发（秋招）",
          "date": "2026-09-09"
        }
      ],
      "domain": "storage",
      "body_html": "<h2>一句话</h2>\n<p>InnoDB 以页为单位存储，数据按主键聚簇组织成 B+ 树，二级索引叶子存主键。</p>\n<h2>30 秒回答</h2>\n<p>数据以页（默认 16KB）为单位存到磁盘，主键索引是聚簇索引（B+ 树叶子存整行），二级索引叶子存主键再回表；同时用 redo log、undo log、binlog 保证一致性和恢复。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>页结构：File Header、Page Header、Infimum/Supremum、User Records、Free Space、Page Directory、File Trailer</li>\n<li>聚簇索引：按主键顺序存储，叶子节点含完整行</li>\n<li>二级索引：叶子存主键，查非索引列需回表</li>\n<li>日志：redo（崩溃恢复）、undo（回滚/MVCC）、binlog（主从复制）</li>\n<li>MVCC：多版本链 + ReadView 实现可重复读</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>什么是回表，怎么避免？</li>\n<li>聚簇索引和非聚簇索引区别？</li>\n<li>为什么建议自增主键？</li>\n</ul>"
    },
    {
      "id": "NETWORK-0001",
      "type": "technical",
      "question": "TCP 和 UDP 的区别",
      "topic": [
        "network",
        "tcp",
        "udp"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-09-bytedance-data-dev",
          "company": "字节跳动",
          "position": "数据开发（秋招）",
          "date": "2026-09-09"
        }
      ],
      "domain": "network",
      "body_html": "<h2>一句话</h2>\n<p>TCP 面向连接、可靠、有序、开销大；UDP 无连接、不可靠、无序、开销小。</p>\n<h2>30 秒回答</h2>\n<p>TCP 三次握手建立连接，靠确认、重传、序号、流量/拥塞控制保证可靠和顺序；UDP 直接发包，尽力而为，可能丢包、乱序，但头部小、速度快。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>连接：TCP 面向连接，UDP 无连接</li>\n<li>可靠性：TCP 可靠，UDP 不可靠</li>\n<li>顺序：TCP 有序字节流，UDP 无序报文</li>\n<li>头部：TCP 20 字节，UDP 8 字节</li>\n<li>场景：TCP 用于文件、网页、邮件；UDP 用于视频、语音、游戏、DNS</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>三次握手四次挥手过程？</li>\n<li>TCP 为什么可靠？</li>\n<li>为什么视频直播常用 UDP？</li>\n</ul>"
    },
    {
      "id": "NETWORK-0002",
      "type": "technical",
      "question": "TCP 拥塞控制了解吗",
      "topic": [
        "network",
        "tcp",
        "congestion-control"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-09-bytedance-data-dev",
          "company": "字节跳动",
          "position": "数据开发（秋招）",
          "date": "2026-09-09"
        }
      ],
      "domain": "network",
      "body_html": "<h2>一句话</h2>\n<p>拥塞控制靠拥塞窗口 cwnd 动态调整，包括慢启动、拥塞避免、快重传、快恢复四个阶段。</p>\n<h2>30 秒回答</h2>\n<p>慢启动指数增长到阈值 ssthresh，之后拥塞避免线性增长；收到 3 个重复 ACK 触发快重传、快恢复；超时重传则重新进入慢启动。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>慢启动：cwnd 从 1 指数增长</li>\n<li>拥塞避免：达到 ssthresh 后线性增长</li>\n<li>快重传：收到 3 个重复 ACK 立即重传</li>\n<li>快恢复：快重传后 cwnd 减半，进入拥塞避免而不是慢启动</li>\n<li>超时：超时重传后 cwnd 归 1，重新慢启动</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>流量控制和拥塞控制的区别？</li>\n<li>ssthresh 是怎么变化的？</li>\n</ul>"
    },
    {
      "id": "NETWORK-0003",
      "type": "technical",
      "question": "哪些协议基于 TCP",
      "topic": [
        "network",
        "tcp",
        "protocols"
      ],
      "difficulty": 1,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-09-bytedance-data-dev",
          "company": "字节跳动",
          "position": "数据开发（秋招）",
          "date": "2026-09-09"
        }
      ],
      "domain": "network",
      "body_html": "<h2>一句话</h2>\n<p>需要可靠传输的应用层协议大多基于 TCP，如 HTTP/HTTPS、FTP、SMTP、SSH、MySQL。</p>\n<h2>30 秒回答</h2>\n<p>HTTP/HTTPS、FTP、SMTP、POP3、IMAP、SSH、Telnet、MySQL、Redis（默认 TCP）等都基于 TCP。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>Web：HTTP、HTTPS</li>\n<li>邮件：SMTP、POP3、IMAP</li>\n<li>文件：FTP</li>\n<li>远程：SSH、Telnet</li>\n<li>数据库：MySQL、PostgreSQL</li>\n<li>原因：TCP 提供可靠字节流，上层协议专注业务语义</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>哪些协议基于 UDP（DNS、DHCP、QUIC）？</li>\n<li>HTTPS 和 HTTP 的区别？</li>\n</ul>"
    },
    {
      "id": "NETWORK-0004",
      "type": "technical",
      "question": "UDP 属于哪一层",
      "topic": [
        "network",
        "udp",
        "osi"
      ],
      "difficulty": 1,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-09-bytedance-data-dev",
          "company": "字节跳动",
          "position": "数据开发（秋招）",
          "date": "2026-09-09"
        }
      ],
      "domain": "network",
      "body_html": "<h2>一句话</h2>\n<p>UDP 属于传输层（OSI 第四层，TCP/IP 模型的传输层）。</p>\n<h2>30 秒回答</h2>\n<p>UDP 和 TCP 一样位于传输层，负责端到端的通信；IP 在网络层，HTTP/DNS 等在应用层。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>OSI 七层：应用、表示、会话、传输、网络、数据链路、物理</li>\n<li>TCP/IP 四层：应用、传输、网络、网络接口</li>\n<li>UDP 位于传输层，提供端口复用的无连接数据报服务</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>TCP/IP 模型各层分别有哪些协议？</li>\n<li>端口号在传输层的作用？</li>\n</ul>"
    },
    {
      "id": "ALGORITHM-0001",
      "type": "technical",
      "question": "构建链表并完成链表排序",
      "topic": [
        "algorithm",
        "linked-list",
        "merge-sort"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-09-bytedance-data-dev",
          "company": "字节跳动",
          "position": "数据开发（秋招）",
          "date": "2026-09-09"
        }
      ],
      "domain": "algorithm",
      "body_html": "<h2>一句话</h2>\n<p>链表排序首选归并排序：O(n log n) 稳定，且无需额外数组空间，适合链表结构。</p>\n<h2>思路</h2>\n<ul>\n<li>用快慢指针找中点，把链表从中间断开</li>\n<li>递归排序左右两半</li>\n<li>合并两个有序链表</li>\n<li>哨兵节点简化合并</li>\n</ul>\n<h2>代码</h2>\n<pre><code class=\"language-python\">class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef merge(a, b):\n    dummy = ListNode()\n    cur = dummy\n    while a and b:\n        if a.val &lt;= b.val:\n            cur.next, a = a, a.next\n        else:\n            cur.next, b = b, b.next\n        cur = cur.next\n    cur.next = a or b\n    return dummy.next\n\ndef sortList(head):\n    if not head or not head.next:\n        return head\n    slow = fast = head\n    prev = None\n    while fast and fast.next:\n        prev = slow\n        slow = slow.next\n        fast = fast.next.next\n    prev.next = None\n    left = sortList(head)\n    right = sortList(slow)\n    return merge(left, right)</code></pre>\n<h2>追问</h2>\n<ul>\n<li>为什么用归并而不是快排？</li>\n<li>快慢指针找中点要注意什么？</li>\n<li>复杂度和稳定性？</li>\n</ul>"
    },
    {
      "id": "LLM-0001",
      "type": "technical",
      "question": "大模型怎么调用工具（LLM Agent）",
      "topic": [
        "llm",
        "agent",
        "function-calling"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-09-bytedance-data-dev",
          "company": "字节跳动",
          "position": "数据开发（秋招）",
          "date": "2026-09-09"
        }
      ],
      "domain": "llm",
      "body_html": "<h2>一句话</h2>\n<p>通过 Function Calling / Tool Use：模型输出结构化的工具调用（函数名 + 参数 JSON），应用执行工具后把结果回传，模型再生成最终回答。</p>\n<h2>30 秒回答</h2>\n<p>把可用工具以 name/description/parameters 描述传给模型，模型判断是否需要调用并返回 tool_call，应用执行函数，把结果作为新消息 role=tool 回填，循环直到模型输出最终答案。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>输入：messages + tools 定义</li>\n<li>模型决策：返回 finish_reason=tool_calls 和 tool_calls 列表</li>\n<li>执行：应用按函数名和参数调用真实工具</li>\n<li>回填：结果以 tool 消息加入 messages</li>\n<li>循环：直到模型返回 stop 或不再调用</li>\n<li>范式：ReAct（推理 + 行动）循环</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>ReAct 是什么？</li>\n<li>工具调用失败怎么处理？</li>\n<li>多轮工具调用怎么循环？</li>\n</ul>"
    },
    {
      "id": "LLM-0002",
      "type": "technical",
      "question": "云端接口的 messages、tools 参数，框架如何控制工具调用",
      "topic": [
        "llm",
        "agent",
        "tool-calling"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-09-bytedance-data-dev",
          "company": "字节跳动",
          "position": "数据开发（秋招）",
          "date": "2026-09-09"
        }
      ],
      "domain": "llm",
      "body_html": "<h2>一句话</h2>\n<p>tools 参数告诉模型有哪些工具，messages 承载对话上下文；框架解析模型返回的 tool_calls、执行工具、把结果回填并继续请求。</p>\n<h2>30 秒回答</h2>\n<p>请求里 messages 是完整对话，tools 是工具 JSON Schema（name/description/parameters）。模型返回 tool_calls 后，框架执行对应函数，把结果以 role=tool 追加进 messages，再次调用模型，直到 stop。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>tools 参数：描述工具能力、参数类型，模型据此决定调用</li>\n<li>messages：system/user/assistant/tool 四类角色</li>\n<li>tool_choice：可 auto / none / 指定工具，控制是否强制调用</li>\n<li>框架循环：解析 tool_call -&gt; 执行 -&gt; 回填 -&gt; 再请求 -&gt; 直到 stop</li>\n<li>代表：OpenAI SDK、LangChain、Agent 框架</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>tool_choice 有几种取值？</li>\n<li>tool 消息和 assistant 消息怎么交替？</li>\n<li>并发调用多个工具怎么处理？</li>\n</ul>"
    },
    {
      "id": "LLM-0003",
      "type": "technical",
      "question": "工具描述是框架封装，大模型本身如何识别、触发工具调用",
      "topic": [
        "llm",
        "agent",
        "function-calling"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-09-bytedance-data-dev",
          "company": "字节跳动",
          "position": "数据开发（秋招）",
          "date": "2026-09-09"
        }
      ],
      "domain": "llm",
      "body_html": "<h2>一句话</h2>\n<p>大模型通过 tools 参数里的 JSON Schema（name/description/parameters）理解工具能力，在推理时生成符合格式的 tool_call，实际执行由框架完成。</p>\n<h2>30 秒回答</h2>\n<p>框架只是把工具打包成 schema 传给模型；模型在训练/对齐阶段学过 function calling 的输出格式，根据工具描述判断何时用哪个工具、填什么参数，输出结构化的 tool_calls。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>模型看到的是工具描述和参数 schema，不是工具实现</li>\n<li>description 决定模型何时选该工具、怎么填参数</li>\n<li>模型输出被约束成 tool_call 格式（函数名 + JSON 参数）</li>\n<li>模型本身不执行工具，只负责「决定调用」，执行和回填由框架负责</li>\n<li>本质：把工具能力注入提示词，让模型学会「何时、用哪个、传什么」</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>工具描述写得不好会怎样？</li>\n<li>模型幻觉调用不存在的工具怎么办？</li>\n<li>参数校验由谁负责？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0001",
      "type": "technical",
      "question": "谈谈你对数据分析和数据开发的理解",
      "topic": [
        "warehouse",
        "data-engineering",
        "data-analysis"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-18-bytedance-douyin",
          "company": "字节跳动",
          "position": "大数据开发（实习）",
          "date": "2026-09-18"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>数据分析面向业务回答「是什么、为什么、怎么办」，数据开发面向工程保证「数据稳定、准确、高效可用」，两者靠数仓和指标口径衔接。</p>\n<h2>30 秒回答</h2>\n<p>数据分析关注业务问题：指标拆解、趋势归因、取数、可视化、实验解读、给出业务建议；数据开发关注数据链路：采集、建模、ETL、调度、质量、性能、元数据与血缘。数据开发为分析提供可信的数据底座，分析结论反过来校验模型和口径。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>数据分析：需求理解、指标体系、SQL 取数、报表与可视化、AB 实验解读、业务建议</li>\n<li>数据开发：数仓分层建模、ETL/调度、数据质量、性能优化、元数据/血缘、指标字典落地</li>\n<li>协作点：统一指标口径、需求评审、口径文档化</li>\n<li>核心区别：分析是「用数据回答业务问题」，开发是「让数据可靠可用」</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>数仓为什么要分层？</li>\n<li>指标口径不一致怎么处理？</li>\n<li>你们数仓是怎么分层的？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0002",
      "type": "technical",
      "question": "数仓每一层的含义是什么",
      "topic": [
        "warehouse",
        "ods",
        "dwd",
        "dws",
        "ads"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-18-bytedance-douyin",
          "company": "字节跳动",
          "position": "大数据开发（实习）",
          "date": "2026-09-18"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>数仓通常分 ODS 贴源层、DWD 明细层、DWS 汇总层、ADS 应用层，必要时再加 DIM 维表层。</p>\n<h2>30 秒回答</h2>\n<ul>\n<li>ODS：贴源层，原始数据尽量保持原样落地，带分区</li>\n<li>DWD：明细层，做清洗、规范化、去重、字段标准化</li>\n<li>DWS：汇总层，按主题做轻度汇总，生成 1d/7d/30d 等周期指标</li>\n<li>ADS：应用层，面向具体报表和场景的宽表结果</li>\n<li>DIM：维表层，存放维度属性</li>\n</ul>\n<h2>1 分钟回答</h2>\n<p>分层核心是「解耦 + 复用 + 可回溯」：ODS 保留最原始事实，DWD 把原始数据加工成统一、可信的明细，DWS 预计算常用指标避免重复计算，ADS 直接对接应用。层与层之间数据量通常逐层收敛，但 ADS 面向应用可能会做宽表化。</p>\n<h2>追问</h2>\n<ul>\n<li>DWS 和 ADS 的边界怎么划？</li>\n<li>为什么 DWD 不做太强的聚合？</li>\n<li>层与层之间的数据量变化趋势？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0003",
      "type": "technical",
      "question": "DWD 层一般做哪些清洗操作",
      "topic": [
        "warehouse",
        "dwd",
        "etl"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-18-bytedance-douyin",
          "company": "字节跳动",
          "position": "大数据开发（实习）",
          "date": "2026-09-18"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>DWD 的清洗是把 ODS 的原始数据加工成统一、可信、可用的明细数据。</p>\n<h2>30 秒回答</h2>\n<p>常见操作：空值处理、脏数据过滤、去重、字段标准化（枚举映射、单位统一）、类型转换、格式/编码/时区统一、非法值校验、脱敏、补全维度字段、加分区。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>空值与非法值：过滤或填充默认值</li>\n<li>去重：按业务主键去重</li>\n<li>标准化：枚举映射、金额单位、时间格式、编码统一</li>\n<li>类型转换：字符串转数值/时间</li>\n<li>维度补全：关联维度表补齐字段</li>\n<li>脱敏：手机号、身份证等敏感字段</li>\n<li>分区：按业务日期分区落地</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>为什么清洗放 DWD 不放 ODS？</li>\n<li>重复数据怎么判定？</li>\n<li>金额、时间字段分别怎么处理？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0004",
      "type": "technical",
      "question": "事实表和维度表的区别",
      "topic": [
        "warehouse",
        "modeling",
        "fact",
        "dimension"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-18-bytedance-douyin",
          "company": "字节跳动",
          "position": "大数据开发（实习）",
          "date": "2026-09-18"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>事实表记录业务过程的「事实」，有可度量的数值且会持续增长；维度表描述业务对象的「属性」，相对稳定、数据量小。</p>\n<h2>30 秒回答</h2>\n<p>事实表：订单金额、商品数量等度量值，通常大且增长快，关联多个维度外键。 维度表：用户、商品、时间、地区等描述信息，用于过滤和分组，相对小且变化慢。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>事实表：可加总度量、外键指向维度、通常做分区、数据量大</li>\n<li>维度表：描述性属性、缓慢变化、数据量小</li>\n<li>关系：事实表通过维度外键关联维度表，形成星型/雪花模型</li>\n<li>举例：订单事实表 + 用户/商品/时间维度表</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>什么是缓慢变化维度 SCD？</li>\n<li>什么是退化维度？</li>\n<li>事实表有哪些分类（事务/周期快照/累积快照）？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0005",
      "type": "technical",
      "question": "什么是星型模型，有什么优缺点",
      "topic": [
        "warehouse",
        "modeling",
        "star-schema"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-18-bytedance-douyin",
          "company": "字节跳动",
          "position": "大数据开发（实习）",
          "date": "2026-09-18"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>星型模型是中间一张事实表、周围一圈维度表直接相连的结构，维表不规范化、允许冗余。</p>\n<h2>30 秒回答</h2>\n<p>星型模型以事实表为中心，维度表围绕其展开，查询时 join 层数少、结构简单、性能好，是数仓最常用的模型；代价是维度数据冗余，一致性维护成本高。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>优点：查询简单、join 少、易理解、性能好、适合 OLAP</li>\n<li>缺点：维度冗余、存储稍大、更新维度时需同步多处</li>\n<li>与雪花模型对比：雪花模型把维表进一步规范化，减少冗余但 join 变多、查询变复杂；数仓普遍优先星型</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>星型模型和雪花模型怎么选？</li>\n<li>为什么数仓多用星型而不是雪花？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0006",
      "type": "technical",
      "question": "拉链表是什么，怎么实现",
      "topic": [
        "warehouse",
        "modeling",
        "zip",
        "slowly-changing-dimension"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-18-bytedance-douyin",
          "company": "字节跳动",
          "position": "大数据开发（实习）",
          "date": "2026-09-18"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>拉链表用 start_date/end_date 加当前标记记录维度状态的历史变化，既有历史又省空间。</p>\n<h2>30 秒回答</h2>\n<p>每条记录带生效开始时间和结束时间，当前有效记录 end_date 用 9999-12-31 表示；状态变化时关闭旧记录、插入新记录，从而保留完整历史。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>核心字段：start_date、end_date、is_current</li>\n<li>更新：关链（旧记录 end_date 置为变更前一天）+ 开链（插入新记录，start_date 为变更当天，end_date 9999-12-31）</li>\n<li>作用：解决缓慢变化维度既要历史快照、又不想全量冗余的矛盾</li>\n<li>查询：当前状态 where end_date = '9999-12-31'；历史状态用日期落在 [start_date, end_date] 区间</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>拉链表和 SCD 是什么关系？</li>\n<li>为什么用 9999-12-31 表示当前有效？</li>\n<li>拉链表有什么缺点？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0007",
      "type": "technical",
      "question": "DWS 层一般怎么命名，举例说明",
      "topic": [
        "warehouse",
        "dws",
        "naming"
      ],
      "difficulty": 2,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-18-bytedance-douyin",
          "company": "字节跳动",
          "position": "大数据开发（实习）",
          "date": "2026-09-18"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>DWS 命名通常体现「主题域 + 业务过程 + 粒度 + 统计周期」，方便按域和周期检索。</p>\n<h2>30 秒回答</h2>\n<p>常见规范：<code>dws_主题域_业务过程_粒度_周期</code>，例如 <code>dws_trade_user_order_1d</code>（交易域-用户-订单-1天）、<code>dws_user_behavior_1d</code>。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>主题域：trade、user、content 等</li>\n<li>业务过程：下单、支付、曝光、点击等</li>\n<li>粒度：user、item、category、region 等</li>\n<li>周期：1d、7d、30d、td（累计至今）</li>\n<li>举例：<code>dws_trade_user_pay_1d</code>、<code>dws_content_item_expose_7d</code></li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>DWS 粒度怎么选？</li>\n<li>为什么要分 1d/7d/30d 多个周期？</li>\n<li>DWS 和 ADS 的边界在哪里？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0008",
      "type": "technical",
      "question": "说一说你的数据模型设计，如何把需求转化为数仓语言",
      "topic": [
        "warehouse",
        "modeling",
        "metrics"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-14-bytedance-cn-transaction-ads",
          "company": "字节跳动",
          "position": "大数据开发（校招）",
          "date": "2026-09-14"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>需求 -&gt; 指标体系 -&gt; 数仓分层/建模，核心是把业务口径翻译成「指标 + 维度 + 粒度 + 周期」。</p>\n<h2>30 秒回答</h2>\n<p>先和业务对齐口径、维度、粒度、周期和指标定义，拆成原子/派生指标，再按 ODS→DWD→DWS→ADS 分层落地，用维度建模组织事实表和维度表。</p>\n<h2>1 分钟回答</h2>\n<ol>\n<li>需求澄清：口径、维度、粒度、统计周期、指标公式</li>\n<li>指标拆解：原子指标 -&gt; 派生指标 -&gt; 复合指标</li>\n<li>分层建模：ODS 贴源 -&gt; DWD 清洗明细 -&gt; DWS 汇总 -&gt; ADS 应用</li>\n<li>维度建模：主题域、事实表/维度表、星型模型、缓慢变化维度</li>\n<li>落地规范：命名、数据质量、口径文档、元数据与血缘</li>\n</ol>\n<p>举例：需求「看各品类近 7 日 GMV」-&gt; 指标 GMV、维度 品类、粒度 品类+日、周期 7 日 -&gt; 落到 DWS。</p>\n<h2>追问</h2>\n<ul>\n<li>原子指标、派生指标、复合指标怎么区分？</li>\n<li>缓慢变化维度怎么处理？</li>\n<li>口径不一致怎么治理？</li>\n</ul>"
    },
    {
      "id": "SQL-0001",
      "type": "technical",
      "question": "写 SQL 时需要注意什么",
      "topic": [
        "sql",
        "tuning",
        "best-practice"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-18-bytedance-douyin",
          "company": "字节跳动",
          "position": "大数据开发（实习）",
          "date": "2026-09-18"
        }
      ],
      "domain": "sql",
      "body_html": "<h2>一句话</h2>\n<p>写 SQL 要同时关注「结果正确」和「执行高效」：口径、NULL、去重、分区裁剪、join 策略、数据倾斜。</p>\n<h2>30 秒回答</h2>\n<p>注意分区裁剪、避免 select *、过滤前置、join 时小表广播或调序、注意 NULL 和类型一致、避免 count(distinct) 大开销、留意数据倾斜和单 key 长尾。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>正确性：过滤条件位置、NULL 处理、去重、类型一致、口径一致</li>\n<li>性能：分区裁剪、谓词下推、列裁剪、join 顺序、小表 broadcast、减少 shuffle</li>\n<li>常见坑：count(distinct) 开销大、数据倾斜、笛卡尔积、大字段扫描</li>\n<li>习惯：先看执行计划，再看耗时和 shuffle 量</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>explain 执行计划怎么看？</li>\n<li>什么情况会导致数据倾斜？</li>\n<li>count(distinct) 和 group by 去重哪个快？</li>\n</ul>"
    },
    {
      "id": "SQL-0002",
      "type": "technical",
      "question": "查找用户单笔最大金额的订单信息，写两种方法",
      "topic": [
        "sql",
        "window-function",
        "group-by"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-18-bytedance-douyin",
          "company": "字节跳动",
          "position": "大数据开发（实习）",
          "date": "2026-09-18"
        }
      ],
      "domain": "sql",
      "body_html": "<h2>方法一：窗口函数</h2>\n<pre><code class=\"language-sql\">SELECT user_id, order_id, amount\nFROM (\n  SELECT user_id, order_id, amount,\n         ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY amount DESC) AS rn\n  FROM orders\n) t\nWHERE rn = 1;</code></pre>\n<h2>方法二：子查询 + JOIN</h2>\n<pre><code class=\"language-sql\">SELECT o.user_id, o.order_id, o.amount\nFROM orders o\nJOIN (\n  SELECT user_id, MAX(amount) AS max_amount\n  FROM orders\n  GROUP BY user_id\n) t\nON o.user_id = t.user_id AND o.amount = t.max_amount;</code></pre>\n<h2>注意</h2>\n<ul>\n<li>并列最大值：<code>ROW_NUMBER</code> 只留一条，<code>RANK</code>/<code>DENSE_RANK</code> 会保留并列，按业务需要选择</li>\n<li>方法二在存在并列最大值时可能返回多条</li>\n<li>单用户订单量巨大时要注意数据倾斜</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>有并列最大金额怎么办？</li>\n<li>ROW_NUMBER / RANK / DENSE_RANK 的区别？</li>\n<li>两种方法各自的优劣和适用场景？</li>\n</ul>"
    },
    {
      "id": "SQL-0003",
      "type": "technical",
      "question": "如果一个用户的数据量很大，如何优化",
      "topic": [
        "sql",
        "skew",
        "tuning"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-18-bytedance-douyin",
          "company": "字节跳动",
          "position": "大数据开发（实习）",
          "date": "2026-09-18"
        }
      ],
      "domain": "sql",
      "body_html": "<h2>一句话</h2>\n<p>这是数据倾斜，核心是把集中的大 key 打散或提前聚合，让任务负载均衡。</p>\n<h2>30 秒回答</h2>\n<p>用两阶段聚合（加随机前缀再聚合）、过滤无效数据、开启倾斜优化参数（Hive skew join、Spark AQE skew join）、把大 key 拆分或单独处理、增加并行度。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>两阶段聚合：group by 时给 key 加随机前缀先局部聚合，再按原 key 二次聚合</li>\n<li>过滤：提前过滤无效或异常数据，降低单 key 量级</li>\n<li>join 倾斜：小表 broadcast、大表加盐、拆分热点 key 分别 join 再 union</li>\n<li>参数：Hive <code>hive.optimize.skewjoin</code>、Spark <code>spark.sql.adaptive.skewJoin.enabled</code></li>\n<li>并行度：增加 reduce/task 数，避免单分区过载</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>为什么会发生数据倾斜？</li>\n<li>加盐之后怎么还原真实 key？</li>\n<li>AQE skew join 的原理是什么？</li>\n</ul>"
    },
    {
      "id": "SQL-0004",
      "type": "technical",
      "question": "单个用户数据量很大时会出现什么问题",
      "topic": [
        "sql",
        "skew"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-18-bytedance-douyin",
          "company": "字节跳动",
          "position": "大数据开发（实习）",
          "date": "2026-09-18"
        }
      ],
      "domain": "sql",
      "body_html": "<h2>一句话</h2>\n<p>会出现数据倾斜：少数大 key 让个别 task/reducer 负载过重，形成长尾。</p>\n<h2>30 秒回答</h2>\n<p>单 key 数据量过大时，group by 或 join 会把大量数据分到同一个 task，导致该任务耗时远超其他任务、内存溢出 OOM、任务卡住甚至失败。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>负载不均：个别 reducer 处理量是其他的几十倍</li>\n<li>长尾：整体任务被最慢的那个 task 拖住</li>\n<li>OOM：单 task 内存装不下大 key 数据</li>\n<li>资源浪费：其他 task 早已空闲，集群利用率低</li>\n<li>与 SQL-0003 呼应：这是优化要解决的根因</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>数据倾斜在 group by 和 join 里的表现有何不同？</li>\n<li>如何判断是不是数据倾斜？</li>\n<li>和大表 join 小表的数据倾斜是同一回事吗？</li>\n</ul>"
    },
    {
      "id": "SQL-0005",
      "type": "technical",
      "question": "长表相邻两行相加，变式带权重后两数相加",
      "topic": [
        "sql",
        "window-function",
        "lead"
      ],
      "difficulty": 2,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-14-bytedance-cn-transaction-ads",
          "company": "字节跳动",
          "position": "大数据开发（校招）",
          "date": "2026-09-14"
        }
      ],
      "domain": "sql",
      "body_html": "<h2>题目理解</h2>\n<p>长表（多行序列）中把「当前行」与「下一行」的数值相加，可用窗口函数 LEAD 取下一行；变式是给两数加不同权重后再相加。</p>\n<h2>基础写法</h2>\n<pre><code class=\"language-sql\">SELECT id, val,\n       val + LEAD(val) OVER (ORDER BY seq) AS pair_sum\nFROM t;</code></pre>\n<h2>权重变式</h2>\n<pre><code class=\"language-sql\">SELECT id, val,\n       val * w1 + LEAD(val) OVER (ORDER BY seq) * w2 AS weighted_sum\nFROM t;</code></pre>\n<h2>注意</h2>\n<ul>\n<li>LEAD 取下一行，LAG 取上一行，末行没有下一行时 LEAD 为 NULL，需要 NVL/COALESCE 处理</li>\n<li>权重为常数时直接乘；若每行权重不同，需要先关联或再套一层窗口</li>\n<li>若「下一列」指宽表相邻两列，则直接 col1 + col2 即可，先确认表结构</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>LEAD/LAG 在分组场景怎么写（加 PARTITION BY）？</li>\n<li>末行的 NULL 怎么处理？</li>\n<li>窗口函数和自连接各有什么优劣？</li>\n</ul>"
    },
    {
      "id": "PROJECT-0001",
      "type": "project",
      "question": "你实习搭建的看板有哪些指标",
      "topic": [
        "project",
        "dashboard",
        "metrics"
      ],
      "difficulty": 2,
      "frequency": "medium",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-18-bytedance-douyin",
          "company": "字节跳动",
          "position": "大数据开发（实习）",
          "date": "2026-09-18"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<p>按「业务主题 -&gt; 核心指标 -&gt; 维度 -&gt; 周期」组织。</p>\n<p>常见看板指标类型：</p>\n<ul>\n<li>流量：曝光量、点击量、CTR、UV、PV</li>\n<li>用户：新增、活跃、留存、转化</li>\n<li>交易：GMV、订单量、支付金额、客单价</li>\n<li>质量：数据时效、任务成功率</li>\n</ul>\n<h2>待补充（真实经历）</h2>\n<blockquote>这一题必须基于你自己的实习看板回答。请补充：业务域是什么、具体有哪些指标、口径如何定义、当时怎么落地和验收。</blockquote>"
    },
    {
      "id": "PROJECT-0002",
      "type": "project",
      "question": "你日常使用 AI 吗，有没有用 AI 做过 demo",
      "topic": [
        "project",
        "ai",
        "tooling"
      ],
      "difficulty": 1,
      "frequency": "medium",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-18-bytedance-douyin",
          "company": "字节跳动",
          "position": "大数据开发（实习）",
          "date": "2026-09-18"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<p>诚实说明使用频率和工具，再举一个具体 demo，突出「提效」和「落地结果」。</p>\n<ul>\n<li>使用场景：写 SQL、解释执行计划、调试报错、总结文档</li>\n<li>demo 示例方向：用 AI 辅助生成 SQL / 做数据分析 agent / 自动解析口径</li>\n<li>表达结构：场景 -&gt; 做了什么 -&gt; 解决了什么 -&gt; 有什么产出</li>\n</ul>\n<h2>待补充（真实经历）</h2>\n<blockquote>请补充你实际用过的工具、真实场景和一个具体的 demo，避免空泛。</blockquote>"
    },
    {
      "id": "PROJECT-0003",
      "type": "project",
      "question": "谈一谈你做的大模型项目",
      "topic": [
        "project",
        "llm",
        "ai"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-14-bytedance-cn-transaction-ads",
          "company": "字节跳动",
          "position": "大数据开发（校招）",
          "date": "2026-09-14"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<p>按「背景 -&gt; 目标 -&gt; 方案 -&gt; 我的职责 -&gt; 结果 -&gt; 难点」组织。</p>\n<ul>\n<li>背景与目标：解决什么问题</li>\n<li>技术方案：模型选择、数据、RAG / 微调 / Agent</li>\n<li>我的职责：负责哪部分（数据、链路、评测、工程）</li>\n<li>结果：指标提升或业务价值</li>\n<li>难点与复盘：遇到什么坑、怎么解决</li>\n</ul>\n<h2>待补充（真实经历）</h2>\n<blockquote>需要你补充自己真实做过的大模型项目，不要泛泛而谈。</blockquote>"
    },
    {
      "id": "PROJECT-0004",
      "type": "project",
      "question": "你考虑过用户角色吗，设计上有区分吗",
      "topic": [
        "project",
        "user-role",
        "design"
      ],
      "difficulty": 2,
      "frequency": "medium",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-14-bytedance-cn-transaction-ads",
          "company": "字节跳动",
          "position": "大数据开发（校招）",
          "date": "2026-09-14"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<ul>\n<li>先明确产品目标用户是谁，角色是「身份」还是「画像/属性」</li>\n<li>用户角色：按权限、场景、阶段区分（如访客/会员/运营/管理员）</li>\n<li>画像属性：年龄、性别、偏好，用于推荐和内容差异化，但要避免敏感信息</li>\n<li>设计落地：角色影响权限、流程、界面；属性影响推荐和内容</li>\n<li>面试考察点：你是否想过「给谁用、不同人有什么不同需求」</li>\n</ul>\n<h2>待补充（真实经历）</h2>\n<blockquote>结合你自己产品，说明有没有做角色/人群区分，怎么做的，理由是什么。</blockquote>"
    },
    {
      "id": "PROJECT-0005",
      "type": "project",
      "question": "知识库爬取 wiki，如果 wiki 更新了你怎么处理",
      "topic": [
        "project",
        "crawler",
        "incremental-update"
      ],
      "difficulty": 2,
      "frequency": "medium",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-14-bytedance-cn-transaction-ads",
          "company": "字节跳动",
          "position": "大数据开发（校招）",
          "date": "2026-09-14"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<ul>\n<li>增量更新：定时任务，对比版本号/更新时间/变更 API，只拉变化条目</li>\n<li>版本对比：记录上次抓取时间，diff 检测新增/修改/删除</li>\n<li>更新策略：覆盖或保留历史版本，做版本管理</li>\n<li>失效处理：删除项标记失效，关联内容同步更新</li>\n<li>质量与去重：变更后的内容重新校验、去重、索引更新</li>\n</ul>\n<h2>待补充（真实经历）</h2>\n<blockquote>说明你实际用的是 wiki API 的哪些能力（recent changes、版本号等），以及具体更新链路。</blockquote>"
    },
    {
      "id": "PROJECT-0006",
      "type": "project",
      "question": "AI 应用如何落地，在企业里如何运用（反问）",
      "topic": [
        "project",
        "ai",
        "enterprise"
      ],
      "difficulty": 2,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-14-bytedance-cn-transaction-ads",
          "company": "字节跳动",
          "position": "大数据开发（校招）",
          "date": "2026-09-14"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<ul>\n<li>落地路径：场景识别 -&gt; 数据准备 -&gt; 模型/Agent -&gt; 工程接入 -&gt; 评测 -&gt; 上线迭代</li>\n<li>企业场景：客服、知识库问答、代码助手、数据分析、营销内容、风控</li>\n<li>关键约束：效果、成本、合规、数据安全、可评估性</li>\n<li>常见形态：RAG、微调、Agent、API 接入</li>\n<li>作为反问：可结合面试官公司业务问「贵团队目前 AI 落地到什么阶段、主要用在大数据哪一环」</li>\n</ul>\n<h2>注意</h2>\n<p>这是反问，重点不是背答案，而是展示你对 AI 落地的理解，并顺势了解对方团队。</p>"
    },
    {
      "id": "PROJECT-0007",
      "type": "project",
      "question": "请介绍你的实习与项目经历",
      "topic": [
        "project",
        "resume",
        "star"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-09-bytedance-data-dev",
          "company": "字节跳动",
          "position": "数据开发（秋招）",
          "date": "2026-09-09"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<p>用 STAR 结构，选 1-2 个最有代表性的项目讲透：</p>\n<ul>\n<li>背景 S：业务场景、要解决什么问题</li>\n<li>任务 T：你的目标、量化指标</li>\n<li>行动 A：技术方案、你的具体职责、遇到什么难点怎么解决</li>\n<li>结果 R：效果、指标提升、业务价值</li>\n</ul>\n<p>原则：先总后分、突出个人贡献、提前准备追问点（数据量、倾斜、优化、口径）。</p>\n<h2>待补充（真实经历）</h2>\n<blockquote>按你真实实习和项目写，重点突出数据链路、建模、优化等与岗位相关的部分。</blockquote>"
    },
    {
      "id": "PROJECT-0008",
      "type": "project",
      "question": "介绍你的部门和实习近况",
      "topic": [
        "project",
        "internship",
        "context"
      ],
      "difficulty": 1,
      "frequency": "high",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-09-bytedance-data-dev",
          "company": "字节跳动",
          "position": "数据开发（秋招）",
          "date": "2026-09-09"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<ul>\n<li>部门做什么：业务方向、数据规模、团队分工</li>\n<li>你的位置：负责哪一块，上下游是谁</li>\n<li>近况：最近在做的事、进度、遇到的挑战</li>\n<li>表达：简洁、有条理，让面试官快速理解你所在环境</li>\n</ul>\n<h2>待补充（真实经历）</h2>\n<blockquote>补充你实习部门的具体业务和你的实际工作内容。</blockquote>"
    },
    {
      "id": "PROJECT-0009",
      "type": "project",
      "question": "你有什么想问我的吗（反问）",
      "topic": [
        "project",
        "reverse-question"
      ],
      "difficulty": 1,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-09-bytedance-data-dev",
          "company": "字节跳动",
          "position": "数据开发（秋招）",
          "date": "2026-09-09"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<p>反问不是走过场，选能展示你关心「业务 + 成长」的问题：</p>\n<ul>\n<li>团队目前的数据规模、技术栈和主要挑战</li>\n<li>这个岗位的日常工作、前三个月最看重什么</li>\n<li>业务方向：数据开发主要服务哪类业务场景</li>\n<li>培养：新人成长路径、技术氛围</li>\n</ul>\n<p>避免：只问薪资福利、问官网能查到的基础信息。</p>\n<h2>注意</h2>\n<p>反问要结合前面的沟通，别机械背模板。</p>"
    }
  ],
  "interviews": [
    {
      "interview_id": "INTERVIEW-2026-09-18-bytedance-douyin",
      "company": "字节跳动",
      "business": "泛抖音",
      "position": "大数据开发（实习）",
      "date": "2026-09-18",
      "words": 153,
      "round": "未注明",
      "body_html": "<h2>面经记录（原始）</h2>\n<ol>\n<li>数据分析和数据开发理解</li>\n<li>数仓每层的含义</li>\n<li>dwd 层做了哪些清洗的操作</li>\n<li>事实表和维度表</li>\n<li>星型模型，拉链表</li>\n<li>dws 层怎么命名，举例</li>\n<li>实习搭建的看板有哪些指标</li>\n<li>日常使用 ai 吗，场景有没有用 ai 做 demo</li>\n<li>使用需要注意什么 sql</li>\n<li>查找用户单笔最大金额订单信息</li>\n<li>两种方法</li>\n<li>如果一个用户数据量很大，如何优化</li>\n<li>单个用户数据量很大会出现什么问题</li>\n</ol>\n<blockquote>备注：实习面，非社招。原始记录只保留问题，不含当时答案。</blockquote>"
    },
    {
      "interview_id": "INTERVIEW-2026-09-14-bytedance-cn-transaction-ads",
      "company": "字节跳动",
      "business": "中国交易与广告",
      "position": "大数据开发（校招）",
      "date": "2026-09-14",
      "source": "小红书",
      "words": 346,
      "round": "校招",
      "body_html": "<h2>面经记录（原始）</h2>\n<p>自我介绍</p>\n<ol>\n<li>说一说你在工作里做的 SparkSQL 优化</li>\n<li>根据 mapjoin 的原理，如果大表 left join 小表和大表 right join 小表，都可以用 mapjoin 吗</li>\n<li>你觉得 mapjoin 和 broadcast join 的区别是什么</li>\n<li>你说 broadcast 是广播变量，那么广播后的变量是存储在内存吗，那么与 mapjoin 有什么区别</li>\n<li>说一说你的数据模型设计，你是如何将需求转化为数仓语言的</li>\n<li>你懂存储长表，后续会用 Python 做数据处理（由此引出 SQL 题目）SQL：长表下一列中的两数相加（变式：添加权重后两数相加）</li>\n<li>谈一谈你做过的大模型项目吧</li>\n<li>你考虑过用户角色这一块吗，比如男生、女生或者小孩，你有在设计上区分吗</li>\n<li>你的知识库是爬取的 wiki 百科，那么如果 wiki 更新了你是怎么做的</li>\n</ol>\n<p>（想不起来了，问了好多）</p>\n<p>反问：AI 应用如何落地，在企业是如何运用的</p>\n<blockquote>备注：校招面，来源小红书。原始记录只保留问题，不含当时答案。</blockquote>"
    },
    {
      "interview_id": "INTERVIEW-2026-09-09-bytedance-data-dev",
      "company": "字节跳动",
      "business": "数据开发",
      "position": "数据开发（秋招）",
      "date": "2026-09-09",
      "round": "复活赛",
      "body_html": "<h2>面经记录（原始）</h2>\n<blockquote>热乎的复活赛凉经，核心是四个问题 + 一个手撕链表。</blockquote>\n<h3>原文</h3>\n<ul>\n<li>Spark 怎么执行任务</li>\n<li>HDFS 读写原理</li>\n<li>TCP 和 UDP 的区别</li>\n<li>LLM 怎么调用工具</li>\n<li>手撕链表（追问细，没答上来）</li>\n</ul>\n<h3>面试题</h3>\n<h4>自我介绍 / 实习经历</h4>\n<ol>\n<li>请介绍你的实习与项目经历</li>\n<li>介绍部门，实习近况</li>\n</ol>\n<h4>Spark</h4>\n<ol>\n<li>Application、Job、Stage 的区别</li>\n<li>什么是 spark-submit？</li>\n<li>怎么提交 Spark 任务？</li>\n<li>spark-submit 提交任务，什么情况会分成多个 Job？</li>\n<li>什么情况不会拆分成多个 Job？</li>\n</ol>\n<h4>HDFS</h4>\n<ol>\n<li>介绍 HDFS 客户端读写服务的执行流程</li>\n</ol>\n<h4>存储引擎</h4>\n<ol>\n<li>对存储引擎了解哪些？（MySQL / OLAP / ClickHouse / Doris）</li>\n<li>InnoDB 怎么存储数据？</li>\n</ol>\n<h4>TCP / UDP</h4>\n<ol>\n<li>TCP 和 UDP 的区别</li>\n<li>TCP 拥塞控制了解吗？</li>\n<li>哪些协议基于 TCP？</li>\n<li>UDP 属于哪一层？</li>\n</ol>\n<h4>手撕算法</h4>\n<ol>\n<li>构建链表，并完成链表排序</li>\n</ol>\n<h4>LLM / Agent / Tool Calling</h4>\n<ol>\n<li>介绍大模型怎么调用工具（LLM Agent）</li>\n<li>云端接口 messages、tools 参数，框架如何控制工具调用？</li>\n<li>工具描述是框架封装，大模型本身如何识别、触发工具调用？</li>\n</ol>\n<h4>反问</h4>\n<ol>\n<li>你有什么想问我的吗？</li>\n</ol>\n<blockquote>备注：秋招复活赛，字节数据开发。</blockquote>"
    }
  ]
};
