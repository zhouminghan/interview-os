window.OS_DATA = {
  "generatedAt": "2026-09-26T01:18:10+08:00",
  "stats": {
    "questions": 146,
    "interviews": 9,
    "technical": 118,
    "project": 28,
    "domains": {
      "spark": 22,
      "hdfs": 1,
      "storage": 8,
      "lakehouse": 5,
      "starrocks": 9,
      "flink": 4,
      "network": 4,
      "algorithm": 2,
      "llm": 20,
      "warehouse": 37,
      "sql": 6,
      "project": 28
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
    "lakehouse": {
      "label": "数据湖",
      "type": "technical"
    },
    "starrocks": {
      "label": "StarRocks",
      "type": "technical"
    },
    "flink": {
      "label": "Flink",
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
      "id": "SPARK-0010",
      "type": "technical",
      "question": "数据倾斜如何定位，两张大表 join 倾斜怎么处理",
      "topic": [
        "spark",
        "skew",
        "join"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-pdd-data-dev",
          "company": "拼多多",
          "position": "数据开发（社招）",
          "date": "2026-09-21"
        }
      ],
      "domain": "spark",
      "body_html": "<h2>一句话</h2>\n<p>倾斜定位看「单个 task 处理的数据量和耗时是否远大于其他 task」；两张大表 join 的核心是拆热点 key 单独处理或加盐打散。</p>\n<h2>30 秒回答</h2>\n<p>通过 Spark UI / 日志看 stage 长尾、task 数据量和耗时分布、OOM 定位热点 key。常见场景：group by 热点 key、两张大表 join 热点 key、distinct。处理：热点 key 拆开单独 join 再 union、加随机前缀打散、开启 AQE skew join、增加并行度。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>定位：Spark UI task metrics、shuffle 数据量、日志、抽样统计 key 分布</li>\n<li>常见场景：null/默认值热点、大商户/大 V、两张大表 join、group by、distinct</li>\n<li>两张大表 join 倾斜：</li>\n<ol>\n<li>识别热点 key</li>\n<li>热点 key 单独 join + 非热点正常 join，再 union</li>\n<li>热点 key 加随机前缀打散 join，再二次 join 还原</li>\n<li>先过滤/压缩降低数据量</li>\n<li>开启 AQE skew join</li>\n<li>增加并行度、两阶段聚合</li>\n</ol>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>怎么快速找到热点 key？</li>\n<li>加盐后怎么还原？</li>\n<li>AQE skew join 的原理？</li>\n</ul>"
    },
    {
      "id": "SPARK-0011",
      "type": "technical",
      "question": "Spark 执行过程 map/shuffle/reduce 做什么，group by + count distinct 的 SQL 执行过程",
      "topic": [
        "spark",
        "execution",
        "shuffle",
        "sql"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-pdd-data-dev",
          "company": "拼多多",
          "position": "数据开发（社招）",
          "date": "2026-09-21"
        }
      ],
      "domain": "spark",
      "body_html": "<h2>一句话</h2>\n<p>map 做局部计算，shuffle 按 key 分区传输，reduce 做聚合输出；<code>group by city_id + count(distinct user_id)</code> 就是按 city_id 分区后对 user_id 去重计数。</p>\n<h2>30 秒回答</h2>\n<p>map 端读数据、解析、过滤、投影，可做 map 端预聚合；shuffle 把相同 key 分到同一分区；reduce 端按 key 聚合。该 SQL 按 city_id shuffle，reduce 端对每个 city 的 user_id 去重计数。</p>\n<h2>1 分钟回答</h2>\n<pre><code class=\"language-sql\">SELECT city_id, COUNT(DISTINCT user_id)\nFROM t\nGROUP BY city_id;</code></pre>\n<p>执行过程：</p>\n<ol>\n<li>map：读表，解析出 (city_id, user_id)，可先对 (city_id, user_id) 做 map 端预聚合去重</li>\n<li>shuffle：按 city_id 分区，把相同 city_id 的数据发到同一 reducer</li>\n<li>reduce：对每个 city_id 的 user_id 做 distinct 去重再计数</li>\n<li>输出：每个 city_id 一条 (city_id, count)</li>\n</ol>\n<ul>\n<li>count(distinct) 的去重可能分两阶段：map 端部分去重，reduce 端最终去重</li>\n<li>输出是 key-value：map 输出 (city_id, user_id)，shuffle 后 reduce 输出 (city_id, count)</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>count(distinct) 为什么慢，怎么优化？</li>\n<li>map 端预聚合（combiner）怎么工作？</li>\n<li>shuffle 落盘在哪里？</li>\n</ul>"
    },
    {
      "id": "SPARK-0012",
      "type": "technical",
      "question": "任务变慢：数据量增 15%，少数 task 慢，平均 CPU 40%，如何排查",
      "topic": [
        "spark",
        "tuning",
        "diagnose"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-jiukun-data-dev",
          "company": "九坤",
          "position": "数据开发（一面）",
          "date": "2026-09-21"
        }
      ],
      "domain": "spark",
      "body_html": "<h2>一句话</h2>\n<p>先看是数据倾斜还是资源/IO 瓶颈：平均 CPU 低 + 少数 task 慢，大概率是倾斜长尾。</p>\n<h2>30 秒回答</h2>\n<p>看 Spark UI 的 task 耗时和数据量分布：少数 task 数据量/耗时远大于其他就是倾斜；再结合 executor 日志、GC、spill、磁盘 IO 排除单节点问题。</p>\n<h2>1 分钟回答</h2>\n<ol>\n<li>看 stage/task metrics：耗时、shuffle read、records</li>\n<li>定位慢 task 对应哪些 key/分区</li>\n<li>判断数据倾斜：数据量和耗时高度集中</li>\n<li>排除硬件/IO：executor 日志、GC、磁盘 IO、节点状态</li>\n<li>平均 CPU 40% 说明资源没吃满，倾斜或 IO 等待可能性大</li>\n</ol>\n<h2>追问</h2>\n<ul>\n<li>task 慢但 CPU 不高，还可能是什么原因？</li>\n<li>怎么快速定位热点 key？</li>\n</ul>"
    },
    {
      "id": "SPARK-0013",
      "type": "technical",
      "question": "增加并行度、executor 数量翻倍，总是有效吗",
      "topic": [
        "spark",
        "tuning",
        "parallelism"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-jiukun-data-dev",
          "company": "九坤",
          "position": "数据开发（一面）",
          "date": "2026-09-21"
        }
      ],
      "domain": "spark",
      "body_html": "<h2>一句话</h2>\n<p>不是。并行度要匹配数据量和资源，先定位瓶颈再调。</p>\n<h2>30 秒回答</h2>\n<p>有效前提是任务确实受并行度限制。数据倾斜、小数据量、小文件、shuffle 开销增大时，加并行度或 executor 不一定有效，甚至更慢。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>有效：分区少、资源没吃满、任务受并行度限制</li>\n<li>无效/负面：数据倾斜（热点 key 仍集中）、小数据量（调度开销大）、小文件（task 过多）、shuffle 开销增加、资源竞争和 GC</li>\n<li>executor 翻倍：可能增加调度、GC、网络开销</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>怎么判断并行度是否合理？</li>\n<li>倾斜时加并行度为什么没用？</li>\n</ul>"
    },
    {
      "id": "SPARK-0014",
      "type": "technical",
      "question": "如何区分数据倾斜、节点硬件慢、IO 问题",
      "topic": [
        "spark",
        "skew",
        "diagnose"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-jiukun-data-dev",
          "company": "九坤",
          "position": "数据开发（一面）",
          "date": "2026-09-21"
        }
      ],
      "domain": "spark",
      "body_html": "<h2>一句话</h2>\n<p>倾斜是「少数 task 数据量/耗时异常高」，硬件/IO 是「某节点上所有 task 都慢或整体 IO 高」。</p>\n<h2>30 秒回答</h2>\n<p>倾斜看 task 数据量和耗时是否集中在特定 key；硬件慢看 executor 上所有 task 都慢、磁盘/网络/GC 指标异常；可通过换节点重跑验证。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>倾斜：同一 stage 少数 task 处理数据量和耗时远超其他，换节点重跑仍同样 key 慢</li>\n<li>硬件慢：某 executor 所有 task 都慢，与数据内容无关，随机分布</li>\n<li>IO：整体 IO 高、磁盘队列长，可看 executor 日志和系统指标</li>\n<li>排查：Spark UI task metrics、shuffle 分布、executor 日志、磁盘/网络/GC</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>怎么用重跑来区分？</li>\n<li>倾斜在 UI 上最明显的特征是什么？</li>\n</ul>"
    },
    {
      "id": "SPARK-0015",
      "type": "technical",
      "question": "确定热点 key 后，加盐打散是不是永远有效",
      "topic": [
        "spark",
        "skew",
        "salting"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-jiukun-data-dev",
          "company": "九坤",
          "position": "数据开发（一面）",
          "date": "2026-09-21"
        }
      ],
      "domain": "spark",
      "body_html": "<h2>一句话</h2>\n<p>不是永远有效。加盐只对「热点 key 可打散且能还原」的场景有效，还要选对盐数和还原方式。</p>\n<h2>30 秒回答</h2>\n<p>有效场景：group by / join 因热点 key 倾斜，加盐能均衡负载。不生效：非倾斜场景反而增加 shuffle；join 加盐需二次 join 还原，成本高；盐数不合适；null/默认值热点应先过滤。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>生效：热点 key 明确、聚合后可还原、盐数合适</li>\n<li>不生效：</li>\n<ol>\n<li>倾斜根因不是热点 key</li>\n<li>join 加盐后还原成本高、可能引入新倾斜</li>\n<li>盐数太少/太多</li>\n<li>null/默认值热点，应先过滤再算</li>\n<ul>\n<li>本质：加盐是手段不是万能，先确认根因</li>\n</ul>\n</ol>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>加盐的盐数怎么选？</li>\n<li>join 加盐后的还原怎么做？</li>\n</ul>"
    },
    {
      "id": "SPARK-0016",
      "type": "technical",
      "question": "join 和 group by 倾斜，处理方式有什么差异",
      "topic": [
        "spark",
        "skew",
        "join",
        "group-by"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-jiukun-data-dev",
          "company": "九坤",
          "position": "数据开发（一面）",
          "date": "2026-09-21"
        }
      ],
      "domain": "spark",
      "body_html": "<h2>一句话</h2>\n<p>group by 倾斜可两阶段聚合，join 倾斜更复杂，需要拆热点 key 或两阶段加盐 join。</p>\n<h2>30 秒回答</h2>\n<p>group by 只聚合一侧，可 map 端预聚合 + 加盐二次聚合还原；join 要两侧关联，加盐后需二次 join 还原，shuffle 更多，常优先小表广播或拆热点 key。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>group by：两阶段聚合、combiner、加盐聚合再还原</li>\n<li>join：热点 key 拆分单独 join 再 union、两阶段加盐 join、小表 broadcast</li>\n<li>差异：join 还原成本更高，需保证两侧 join 键对应</li>\n<li>共同点：都是打散热点 key 均衡负载</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>join 加盐为什么要两阶段？</li>\n<li>group by 的 combiner 有什么用？</li>\n</ul>"
    },
    {
      "id": "SPARK-0017",
      "type": "technical",
      "question": "salt 加盐、broadcast 广播 join、hash join 区别；广播时内存是谁的内存",
      "topic": [
        "spark",
        "join",
        "broadcast",
        "salting"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-jiukun-data-dev",
          "company": "九坤",
          "position": "数据开发（一面）",
          "date": "2026-09-21"
        }
      ],
      "domain": "spark",
      "body_html": "<h2>一句话</h2>\n<p>Hash Join 按 key shuffle 后关联，Broadcast Join 把小表广播到内存避免 shuffle，加盐是处理倾斜的两阶段 join。</p>\n<h2>30 秒回答</h2>\n<ul>\n<li>Hash Join：按 join key shuffle 到同分区再关联，有 shuffle</li>\n<li>Broadcast Join：小表广播到各 executor 内存，map 端 join，无 shuffle，适合小表</li>\n<li>加盐：热点 key 加随机前缀打散再 join，二次 join 还原，处理倾斜</li>\n<li>广播内存：广播变量存在 executor 的存储内存，不是 driver 内存</li>\n</ul>\n<h2>1 分钟回答</h2>\n<ul>\n<li>broadcast 条件：小表小于 spark.sql.autoBroadcastJoinThreshold（默认 10MB）</li>\n<li>广播对象存 executor storage 内存，可跨 task 复用</li>\n<li>加盐是倾斜优化手段，会增加两阶段 shuffle</li>\n<li>三者可组合：小表可广播则不倾斜，大表倾斜才考虑加盐</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>broadcast join 对内存有什么要求？</li>\n<li>Sort Merge Join 和 Hash Join 区别？</li>\n<li>广播变量能存磁盘吗？</li>\n</ul>"
    },
    {
      "id": "SPARK-0018",
      "type": "technical",
      "question": "链路性能优化是做什么",
      "topic": [
        "spark",
        "pipeline",
        "performance"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-08-27-alibaba-data-dev",
          "company": "阿里巴巴",
          "position": "数据开发（一面）",
          "date": "2026-08-27"
        }
      ],
      "domain": "spark",
      "body_html": "<h2>一句话</h2>\n<p>链路性能优化是从采集、传输、计算、存储到查询的全链路找瓶颈并逐一优化。</p>\n<h2>30 秒回答</h2>\n<p>采集/传输限流、批量、压缩；计算层 Spark/Flink 调优（并行度、倾斜、join、缓存）；存储用列式、合理分区、小文件治理；调度减少等待、并行执行。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>采集/传输：批量、压缩、异步、限流</li>\n<li>计算：并行度、数据倾斜、join 策略、缓存、资源调优、SQL 优化</li>\n<li>存储：Parquet/ORC、分区、小文件合并、冷热分层</li>\n<li>调度：任务依赖、并行调度、减少等待</li>\n<li>监控：端到端耗时、各环节占比，定位瓶颈</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>怎么定位链路瓶颈在哪一段？</li>\n<li>端到端延迟由哪几部分组成？</li>\n</ul>"
    },
    {
      "id": "SPARK-0019",
      "type": "technical",
      "question": "识别到数据倾斜后，加盐处理怎么做、如何缓解",
      "topic": [
        "spark",
        "skew",
        "salting"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "spark",
      "body_html": "<h2>一句话</h2>\n<p>加盐是给热点 key 加随机前缀打散，再做两阶段聚合或 join 还原。</p>\n<h2>30 秒回答</h2>\n<p>group by：key 加随机前缀 -&gt; 局部聚合 -&gt; 去前缀二次聚合。join：热点 key 加盐打散 join -&gt; 二次 join 还原。核心是把热点 key 分到多个 task 均衡负载。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>定位热点 key 后加随机前缀（盐值范围）</li>\n<li>group by 两阶段聚合：加盐聚合 + 还原</li>\n<li>join 两阶段 join：加盐 join + 二次 join 还原</li>\n<li>注意盐数、还原正确性、新增 shuffle 成本</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>盐数怎么选？</li>\n<li>join 加盐还原怎么做？</li>\n</ul>"
    },
    {
      "id": "SPARK-0020",
      "type": "technical",
      "question": "怎么发现数据倾斜、定位倾斜位置",
      "topic": [
        "spark",
        "skew",
        "diagnose"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "spark",
      "body_html": "<h2>一句话</h2>\n<p>看 Spark UI 的 task 数据量/耗时分布，长尾 task 对应的 stage 和 key 就是倾斜位置。</p>\n<h2>30 秒回答</h2>\n<p>看 stage 内各 task 的 shuffle read、records、耗时，找到少数远大于其他的长尾 task；再抽样统计 key 分布，定位热点 key。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>UI：task metrics、耗时分布、shuffle 数据量</li>\n<li>定位 stage：哪个 stage 长尾</li>\n<li>定位 key：抽样统计 key 的条数分布，找热点 key</li>\n<li>辅助：日志、OOM、数据抽样 SQL</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>怎么快速统计热点 key？</li>\n<li>长尾和倾斜是同一回事吗？</li>\n</ul>"
    },
    {
      "id": "SPARK-0021",
      "type": "technical",
      "question": "Spark UI 某个 stage 运行久、数据量大，怎么定位是哪段代码",
      "topic": [
        "spark",
        "diagnose",
        "stage"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "spark",
      "body_html": "<h2>一句话</h2>\n<p>用 stage 的 description、RDD 依赖和算子名反查代码位置。</p>\n<h2>30 秒回答</h2>\n<p>看 stage 的 description（通常含 action 或算子名）、DAG 依赖关系、RDD 血缘，对应到代码里的 join/group by/shuffle 等算子。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>stage description 定位 action 类型</li>\n<li>DAG 看上下游算子和 shuffle</li>\n<li>RDD 血缘追溯算子链</li>\n<li>结合 stage id 和源码对应具体代码段</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>stage description 一般长什么样？</li>\n<li>多个 stage 慢怎么定位关键 stage？</li>\n</ul>"
    },
    {
      "id": "SPARK-0022",
      "type": "technical",
      "question": "除数据倾斜外，还做过哪些性能优化",
      "topic": [
        "spark",
        "performance"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "spark",
      "body_html": "<h2>一句话</h2>\n<p>并行度、broadcast、缓存、裁剪、存储格式、小文件、调参、GC 等都是倾斜之外常用优化。</p>\n<h2>30 秒回答</h2>\n<p>调整并行度、小表 broadcast、缓存复用、分区/列裁剪、谓词下推、避免低效 UDF、用 Parquet/ORC、治理小文件、AQE 调参、GC 和资源优化。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>并行度：shuffle 分区数匹配数据量</li>\n<li>join：小表 broadcast、join 顺序</li>\n<li>缓存：复用 DataFrame cache/persist</li>\n<li>裁剪：分区/列裁剪、谓词下推</li>\n<li>存储：列式、合理分区、小文件合并</li>\n<li>调参：AQE、内存、GC、spill</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>你实际做过的优化里效果最明显的是哪个？</li>\n<li>AQE 帮你解决了什么？</li>\n</ul>"
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
      "id": "STORAGE-0003",
      "type": "technical",
      "question": "小文件问题是什么，如何治理，治理前后效果",
      "topic": [
        "storage",
        "small-files",
        "governance"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-pdd-data-dev",
          "company": "拼多多",
          "position": "数据开发（社招）",
          "date": "2026-09-21"
        }
      ],
      "domain": "storage",
      "body_html": "<h2>一句话</h2>\n<p>小文件会让 NameNode 元数据膨胀、task 数过多、查询变慢；治理靠源头合并 + 存量合并。</p>\n<h2>30 秒回答</h2>\n<p>危害：NameNode 压力大、task 多、读取开销大、性能下降。治理：合理设置 shuffle 分区数、coalesce/repartition 合并写入、动态分区限制、存量小文件合并任务、合并参数。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>产生原因：频繁小批量写、动态分区、shuffle 分区过多、高并发写</li>\n<li>源头治理：合理 shuffle 分区数、合并写入、限制动态分区数</li>\n<li>存量治理：小文件合并任务、按分区合并、Hive concatenate</li>\n<li>参数：spark.sql.shuffle.partitions、AQE 合并分区</li>\n<li>效果：NameNode 压力下降、task 数减少、查询延迟下降、存储利用率提升</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>小文件多大算小？</li>\n<li>coalesce 和 repartition 区别？</li>\n<li>合并小文件会影响数据正确性吗？</li>\n</ul>"
    },
    {
      "id": "STORAGE-0004",
      "type": "technical",
      "question": "存储治理项目怎么做，治理后有什么效果",
      "topic": [
        "storage",
        "governance"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-pdd-data-dev",
          "company": "拼多多",
          "position": "数据开发（社招）",
          "date": "2026-09-21"
        }
      ],
      "domain": "storage",
      "body_html": "<h2>一句话</h2>\n<p>存储治理围绕「生命周期 + 冷热分层 + 压缩 + 小文件 + 清理无用数据」做，目标是降成本、提性能。</p>\n<h2>30 秒回答</h2>\n<p>手段：TTL 分区清理、冷热分层、压缩格式（Parquet/ORC）、小文件合并、无用表/临时表清理、重复数据治理、分区策略优化。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>生命周期：按保留策略自动清理过期分区</li>\n<li>冷热分层：热数据高性能介质，冷数据低频/归档</li>\n<li>压缩：列式存储 + 压缩编码，减少体积</li>\n<li>小文件：合并，降低 NameNode 压力</li>\n<li>清理：下线无用表、临时表、重复数据</li>\n<li>效果：存储成本下降、查询性能提升、元数据压力降低、任务更稳定（按实际项目量化）</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>冷热分层怎么自动做？</li>\n<li>压缩格式怎么选？</li>\n<li>怎么评估治理收益？</li>\n</ul>"
    },
    {
      "id": "STORAGE-0005",
      "type": "technical",
      "question": "Doris 频繁写入导致查询延迟高，晚上停写恢复，原因是什么",
      "topic": [
        "storage",
        "doris",
        "compaction"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-jiukun-data-dev",
          "company": "九坤",
          "position": "数据开发（一面）",
          "date": "2026-09-21"
        }
      ],
      "domain": "storage",
      "body_html": "<h2>一句话</h2>\n<p>频繁小批量写入会产生大量版本/小文件，compaction 跟不上，查询要合并很多版本，延迟升高。</p>\n<h2>30 秒回答</h2>\n<p>写入过频导致 version 和文件碎片堆积，compaction 追不上，查询时合并成本高、延迟大。晚上停写后 compaction 消化完，查询恢复。改成每分钟一批会明显改善，但不一定立刻变快。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>原因：高频小批写入 -&gt; 大量 version + compaction 积压 + 写入与 compaction 争抢 CPU/IO</li>\n<li>追问：改成每分钟一批，查询会变快，但不一定「立刻」，需要等历史积压的 compaction 消化</li>\n<li>说明：瓶颈是写入频率太高，不是单次写入量</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>怎么判断是 compaction 的问题？</li>\n<li>Doris 怎么减少写入频率、加大攒批？</li>\n<li>compaction 可以调哪些参数？</li>\n</ul>"
    },
    {
      "id": "STORAGE-0006",
      "type": "technical",
      "question": "ADS 表订单/退款修订，key 如何设计；分区分桶区别",
      "topic": [
        "storage",
        "doris",
        "key",
        "partition"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-jiukun-data-dev",
          "company": "九坤",
          "position": "数据开发（一面）",
          "date": "2026-09-21"
        }
      ],
      "domain": "storage",
      "body_html": "<h2>一句话</h2>\n<p>key 要保证同一订单的更新落在同一分桶，便于聚合/覆盖；分区按维度裁剪，分桶按 hash 分布。</p>\n<h2>30 秒回答</h2>\n<p>订单/退款修订场景，用订单号做主键/分桶键，保证同订单同桶合并覆盖。分区按时间/地域等裁剪，分桶在分区内 hash 分布决定并行度。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>key 设计：订单号做主键（Unique/主键模型），退款修订按同 key 覆盖</li>\n<li>分区：按时间/地域水平切分，用于裁剪和生命周期管理，粒度粗</li>\n<li>分桶：分区内按 hash 分桶（Tablet），决定数据分布和聚合粒度</li>\n<li>区别：分区是逻辑裁剪，分桶是物理分布/并行度；先分区后分桶</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>Doris 主键模型和聚合模型区别？</li>\n<li>分桶数怎么定？</li>\n<li>分区和分桶各影响什么？</li>\n</ul>"
    },
    {
      "id": "STORAGE-0007",
      "type": "technical",
      "question": "LSM-Tree 大概是什么",
      "topic": [
        "storage",
        "lsm-tree"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "storage",
      "body_html": "<h2>一句话</h2>\n<p>LSM-Tree 把写先落内存和 WAL，再批量刷成有序 SSTable，后台 compaction 合并，换写性能。</p>\n<h2>30 秒回答</h2>\n<p>写入先到内存 memtable 和 WAL，memtable 满了刷成有序的 SSTable；读要查 memtable 和多层 SSTable；后台 compaction 合并减少文件数。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>写：内存 memtable + WAL（顺序写）</li>\n<li>flush：memtable 满刷成 SSTable</li>\n<li>读：查 memtable + SSTable，可能用布隆过滤器</li>\n<li>compaction：合并 SSTable、去旧版本</li>\n<li>特点：写放大、读放大，适合写多读少</li>\n<li>代表：RocksDB、HBase、LevelDB</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>LSM-Tree 和 B+ 树区别？</li>\n<li>compaction 有哪些策略？</li>\n</ul>"
    },
    {
      "id": "STORAGE-0008",
      "type": "technical",
      "question": "数据库索引了解吗",
      "topic": [
        "storage",
        "index"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "storage",
      "body_html": "<h2>一句话</h2>\n<p>索引是加速查询的数据结构，常见 B+ 树、Hash、位图、全文索引。</p>\n<h2>30 秒回答</h2>\n<p>B+ 树适合范围查询，Hash 适合等值查询，位图适合低基数列；聚簇索引叶子存整行，非聚簇索引叶子存主键需回表。索引加速查询但占空间、影响写入。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>B+ 树：范围、有序，最常用</li>\n<li>Hash：等值查询快，不支持范围</li>\n<li>位图：低基数、多条件</li>\n<li>聚簇/非聚簇：是否按索引顺序存整行</li>\n<li>代价：存储、写放大、维护成本</li>\n<li>优化：覆盖索引避免回表、最左前缀</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>什么是回表，怎么避免？</li>\n<li>联合索引的最左前缀原则？</li>\n</ul>"
    },
    {
      "id": "LAKEHOUSE-0001",
      "type": "technical",
      "question": "Hudi 有实际使用吗，Hudi 是什么",
      "topic": [
        "lakehouse",
        "hudi"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "lakehouse",
      "body_html": "<h2>一句话</h2>\n<p>Hudi 是开放的数据湖表格式，在数据湖上提供 upsert、增量读、时间旅行和事务能力。</p>\n<h2>30 秒回答</h2>\n<p>Hudi 提供表格式 + 元数据 + 索引，支持 upsert、增量读取、时间旅行；核心概念有 Timeline、File Groups、File Slices，表类型分 COW 和 MOR。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>能力：upsert、增量读、时间旅行、schema 演进</li>\n<li>结构：Timeline（提交日志）、File Group、File Slice</li>\n<li>表类型：COW（读优化）、MOR（写优化）</li>\n<li>场景：MySQL binlog 同步、近实时 upsert、流式入湖</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>COW 和 MOR 区别？</li>\n<li>Hudi 的 Timeline 是什么？</li>\n</ul>"
    },
    {
      "id": "LAKEHOUSE-0002",
      "type": "technical",
      "question": "介绍一下 Iceberg",
      "topic": [
        "lakehouse",
        "iceberg"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "lakehouse",
      "body_html": "<h2>一句话</h2>\n<p>Iceberg 是开放表格式，在数据湖上提供 ACID、快照、时间旅行、schema/分区演进。</p>\n<h2>30 秒回答</h2>\n<p>Iceberg 定义数据文件和元数据的组织方式，提供事务、快照隔离、时间旅行、schema 演进、分区演进，元数据分层管理（metadata -&gt; manifest list -&gt; manifest -&gt; data files）。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>能力：ACID、快照、时间旅行、schema/分区演进、隐藏分区</li>\n<li>元数据：metadata.json、manifest list、manifest、data files</li>\n<li>优势：避免目录扫描、分区变更不重刷数据</li>\n<li>多引擎：Spark、Flink、Trino 等共享</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>Iceberg 和 Hive 表本质区别？</li>\n<li>分区演进为什么重要？</li>\n</ul>"
    },
    {
      "id": "LAKEHOUSE-0003",
      "type": "technical",
      "question": "Iceberg 的组成、元数据结构了解多少",
      "topic": [
        "lakehouse",
        "iceberg",
        "metadata"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "lakehouse",
      "body_html": "<h2>一句话</h2>\n<p>Iceberg 元数据分层：metadata.json -&gt; manifest list -&gt; manifest file -&gt; data files，外加 snapshot 和 catalog。</p>\n<h2>30 秒回答</h2>\n<p>数据文件之上是 manifest（记录文件级元数据），manifest 之上是 manifest list，最上层 metadata.json 记录表 schema、分区、快照；catalog 指向当前 metadata.json。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>data files：实际数据文件</li>\n<li>manifest file：文件级元数据、统计信息</li>\n<li>manifest list：一组 manifest 的索引</li>\n<li>metadata.json：schema、分区、快照列表、当前快照</li>\n<li>snapshot：某一时刻的表状态</li>\n<li>catalog：定位当前 metadata.json</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>为什么要分层元数据？</li>\n<li>snapshot 怎么支持时间旅行？</li>\n</ul>"
    },
    {
      "id": "LAKEHOUSE-0004",
      "type": "technical",
      "question": "Iceberg 解决了传统 Hive 的哪些问题，还有哪些没覆盖",
      "topic": [
        "lakehouse",
        "iceberg",
        "hive"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "lakehouse",
      "body_html": "<h2>一句话</h2>\n<p>Iceberg 解决 Hive 的分区演进、schema 演进、ACID/快照、文件级元数据；但不覆盖计算引擎、compaction 治理、并发锁等。</p>\n<h2>30 秒回答</h2>\n<p>解决：分区演进不重刷、schema 演进、ACID/快照/时间旅行、隐藏分区、文件级元数据避免目录扫描。没覆盖：本身不是计算引擎，compaction 治理、写并发锁、行级更新仍要额外机制。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>解决：分区演进、schema 演进、快照隔离、时间旅行、文件级元数据</li>\n<li>没覆盖：计算引擎（需 Spark/Flink）、小文件/compaction 治理、多写并发锁、性能调优</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>Hive 分区演进为什么痛苦？</li>\n<li>Iceberg 的 compaction 谁来做？</li>\n</ul>"
    },
    {
      "id": "LAKEHOUSE-0005",
      "type": "technical",
      "question": "Copy-on-Write 的概念",
      "topic": [
        "lakehouse",
        "cow"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "lakehouse",
      "body_html": "<h2>一句话</h2>\n<p>COW 更新时复制旧文件、写入新文件、原子切换，读快写慢，适合读多写少。</p>\n<h2>30 秒回答</h2>\n<p>更新时把受影响的数据文件复制成新文件，写入新数据后原子切换元数据指向新文件。读放大低、写放大高，适合读多写少场景。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>COW：写时复制，每次更新重写整个文件</li>\n<li>优点：读性能好、文件整洁</li>\n<li>缺点：写放大、延迟高</li>\n<li>对比 MOR：增量日志写快、读慢，需 compaction</li>\n<li>Hudi 中 COW 是读优化表</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>COW 和 MOR 各适合什么负载？</li>\n<li>写放大会带来什么问题？</li>\n</ul>"
    },
    {
      "id": "STARROCKS-0001",
      "type": "technical",
      "question": "你怎么做数据查询优化",
      "topic": [
        "starrocks",
        "query-optimization"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-23-anker-data",
          "company": "安克创新",
          "position": "数据岗（一面）",
          "date": "2026-09-23"
        }
      ],
      "domain": "starrocks",
      "body_html": "<h2>一句话</h2>\n<p>查询优化分「建模优化 + SQL 优化 + 资源调优」三层。</p>\n<h2>30 秒回答</h2>\n<p>建表时合理分区分桶、设排序键、选合适数据模型、建物化视图和索引；SQL 用谓词下推、列裁剪、调 join 顺序；执行层看 Profile 定位慢算子，调并行度和资源。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>建模：分区裁剪、分桶均匀、排序键贴近查询、物化视图、Bitmap/Bloom Filter 索引</li>\n<li>SQL：谓词下推、列裁剪、避免 select *、join 重排序</li>\n<li>执行：向量化、CBO 优化器、并行度、缓存</li>\n<li>定位：Profile / 执行计划找慢算子</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>物化视图怎么加速查询？</li>\n<li>排序键对查询有什么影响？</li>\n</ul>"
    },
    {
      "id": "STARROCKS-0002",
      "type": "technical",
      "question": "分区分桶排序键怎么设置",
      "topic": [
        "starrocks",
        "table-design"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-23-anker-data",
          "company": "安克创新",
          "position": "数据岗（一面）",
          "date": "2026-09-23"
        }
      ],
      "domain": "starrocks",
      "body_html": "<h2>一句话</h2>\n<p>分区管裁剪，分桶管分布，排序键管查询和前缀索引。</p>\n<h2>30 秒回答</h2>\n<p>分区按时间/范围切分用于裁剪和生命周期；分桶按高基数列 hash 分布保证均匀和并行；排序键选高频过滤/排序/聚合的前缀列，决定前缀索引。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>分区：按时间（日/月）或范围，分区键选高频过滤的时间维度</li>\n<li>分桶：按高基数列（订单号/用户 ID）hash，桶数按数据量、BE 数、副本权衡</li>\n<li>排序键：选常用 where/order by/group by 的前缀列，顺序按查询频率和基数</li>\n<li>原则：能裁剪、分布均匀、贴近查询</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>分桶数怎么定？</li>\n<li>排序键太长会怎样？</li>\n</ul>"
    },
    {
      "id": "STARROCKS-0003",
      "type": "technical",
      "question": "StarRocks 有哪些数据模型",
      "topic": [
        "starrocks",
        "data-model"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-23-anker-data",
          "company": "安克创新",
          "position": "数据岗（一面）",
          "date": "2026-09-23"
        }
      ],
      "domain": "starrocks",
      "body_html": "<h2>一句话</h2>\n<p>StarRocks 主要有明细、聚合、更新、主键四种模型，核心区别在去重/聚合/更新语义。</p>\n<h2>30 秒回答</h2>\n<p>明细模型保留全部明细；聚合模型按 key 预聚合；更新模型保证 key 唯一、后写覆盖；主键模型支持 delete/update 实时更新。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>明细模型（Duplicate Key）：保留每条明细，无去重</li>\n<li>聚合模型（Aggregate Key）：按 key 预聚合（sum/max/min/replace）</li>\n<li>更新模型（Unique Key）：key 唯一，后写覆盖先写</li>\n<li>主键模型（Primary Key）：支持实时更新和删除，基于主键索引</li>\n<li>选择：看是否去重、聚合、更新</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>主键模型和更新模型有什么区别？</li>\n<li>聚合模型适合什么场景？</li>\n</ul>"
    },
    {
      "id": "STARROCKS-0004",
      "type": "technical",
      "question": "主键模型和明细模型的使用场景",
      "topic": [
        "starrocks",
        "data-model"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-23-anker-data",
          "company": "安克创新",
          "position": "数据岗（一面）",
          "date": "2026-09-23"
        }
      ],
      "domain": "starrocks",
      "body_html": "<h2>一句话</h2>\n<p>明细模型留全量流水，主键模型按主键去重保最新状态。</p>\n<h2>30 秒回答</h2>\n<p>明细模型适合日志、行为流水等需要保留每条明细、无更新的场景；主键模型适合订单状态、用户维表、实时更新宽表等需要 upsert/删除的场景。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>明细模型：保留原始明细、无去重，适合流水类、追加写</li>\n<li>主键模型：按主键 upsert，保证唯一和最新，支持更新/删除</li>\n<li>例子：曝光点击日志用明细，订单最新状态/维表用主键</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>主键模型写入比明细慢吗？</li>\n<li>明细模型能去重吗？</li>\n</ul>"
    },
    {
      "id": "STARROCKS-0005",
      "type": "technical",
      "question": "主键模型的数据更新流程",
      "topic": [
        "starrocks",
        "primary-key",
        "upsert"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-23-anker-data",
          "company": "安克创新",
          "position": "数据岗（一面）",
          "date": "2026-09-23"
        }
      ],
      "domain": "starrocks",
      "body_html": "<h2>一句话</h2>\n<p>主键模型写入时先查主键索引定位行，命中则 upsert 更新，未命中则插入。</p>\n<h2>30 秒回答</h2>\n<p>按主键 hash 分桶 -&gt; 查主键索引（Primary Index）-&gt; 命中更新（upsert）、未命中插入 -&gt; 写内存表 -&gt; flush 持久化；支持 delete 谓词（墓碑）。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>定位：按主键 hash 到分桶，查主键索引</li>\n<li>upsert：命中更新，未命中插入</li>\n<li>删除：delete 谓词 + 墓碑标记</li>\n<li>持久化：内存表 flush 到磁盘，批量合并</li>\n<li>保证：同主键只保留最新版本</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>主键索引存在哪里？</li>\n<li>更新是实时可见吗？</li>\n</ul>"
    },
    {
      "id": "STARROCKS-0006",
      "type": "technical",
      "question": "StarRocks 集群的存储架构是怎么样的",
      "topic": [
        "starrocks",
        "architecture"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-23-anker-data",
          "company": "安克创新",
          "position": "数据岗（一面）",
          "date": "2026-09-23"
        }
      ],
      "domain": "starrocks",
      "body_html": "<h2>一句话</h2>\n<p>存算一体下 BE 既存又算，数据按分区分桶切成 Tablet，多副本分布在各 BE。</p>\n<h2>30 秒回答</h2>\n<p>FE 管元数据和查询计划，BE 负责存储和执行；数据分区内分桶为 Tablet，多副本分布在不同 BE 保证高可用；存算分离则数据放共享存储、计算走 CN。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>FE：元数据、SQL 解析/优化/调度</li>\n<li>BE：本地存储 + 查询执行（存算一体）</li>\n<li>Tablet：分区内分桶的最小存储单元，多副本</li>\n<li>存算分离：计算节点 CN + 共享存储（对象存储/HDFS）</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>Tablet 和副本是什么关系？</li>\n<li>BE 挂了数据会丢吗？</li>\n</ul>"
    },
    {
      "id": "STARROCKS-0007",
      "type": "technical",
      "question": "存算分离和存算一体的区别",
      "topic": [
        "starrocks",
        "architecture"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-23-anker-data",
          "company": "安克创新",
          "position": "数据岗（一面）",
          "date": "2026-09-23"
        }
      ],
      "domain": "starrocks",
      "body_html": "<h2>一句话</h2>\n<p>一体是节点既存又算、本地磁盘；分离是计算和存储独立、共享存储。</p>\n<h2>30 秒回答</h2>\n<p>存算一体：BE 本地存储 + 计算，扩展要一起扩，弹性差、成本高。存算分离：计算节点独立、数据放共享存储，计算存储独立扩展，弹性好、成本低。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>一体：本地磁盘、数据本地计算、扩展耦合、成本高</li>\n<li>分离：CN 计算 + 对象存储，独立扩缩容、按需计费、多集群共享</li>\n<li>代价：网络延迟、缓存/一致性复杂度</li>\n<li>选择：看弹性需求和成本</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>存算分离会变慢吗？</li>\n<li>什么负载适合存算分离？</li>\n</ul>"
    },
    {
      "id": "STARROCKS-0008",
      "type": "technical",
      "question": "为什么做存算分离，有什么好处",
      "topic": [
        "starrocks",
        "architecture"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-23-anker-data",
          "company": "安克创新",
          "position": "数据岗（一面）",
          "date": "2026-09-23"
        }
      ],
      "domain": "starrocks",
      "body_html": "<h2>一句话</h2>\n<p>存算分离主要是为了弹性扩缩容和降本。</p>\n<h2>30 秒回答</h2>\n<p>计算按需伸缩应对负载波动，存储独立扩容，按量计费；多集群共享一份数据，资源隔离；成本更低、运维更灵活。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>弹性：计算按需扩缩，应对峰谷</li>\n<li>成本：计算存储独立优化、按量付费、冷热分层</li>\n<li>共享：多集群共享一份数据，避免冗余</li>\n<li>运维：存储独立扩容、备份恢复灵活</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>存算分离的成本优势体现在哪？</li>\n<li>什么场景存算分离更划算？</li>\n</ul>"
    },
    {
      "id": "STARROCKS-0009",
      "type": "technical",
      "question": "StarRocks 有哪些结构组成",
      "topic": [
        "starrocks",
        "architecture"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-23-anker-data",
          "company": "安克创新",
          "position": "数据岗（一面）",
          "date": "2026-09-23"
        }
      ],
      "domain": "starrocks",
      "body_html": "<h2>一句话</h2>\n<p>核心是 FE（元数据/查询计划）+ BE（存储/执行），存算分离再加 CN（计算节点）。</p>\n<h2>30 秒回答</h2>\n<p>FE 负责元数据管理、SQL 解析优化和调度，Leader/Follower 高可用；BE 负责数据存储和查询执行；存算分离架构增加 CN 计算节点。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>FE（Frontend）：元数据、SQL 解析/优化/调度，Leader/Follower</li>\n<li>BE（Backend）：存储 + 执行，存算一体核心</li>\n<li>CN（Compute Node）：存算分离的计算节点，只算不存</li>\n<li>其他：Catalog、CBO 优化器、向量化执行引擎、BDBJE 元数据</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>FE 挂了怎么办？</li>\n<li>BE 和 CN 有什么区别？</li>\n</ul>"
    },
    {
      "id": "FLINK-0001",
      "type": "technical",
      "question": "Kafka-Flink 中间状态怎么设计，如何处理迟到、重复和退款最新状态",
      "topic": [
        "flink",
        "state",
        "event-time"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-jiukun-data-dev",
          "company": "九坤",
          "position": "数据开发（一面）",
          "date": "2026-09-21"
        }
      ],
      "domain": "flink",
      "body_html": "<h2>一句话</h2>\n<p>按订单号 keyBy，用 ValueState 存「最新状态 + 最新事件时间/版本」，只接受更新的版本，解决迟到、重复和退款乱序。</p>\n<h2>30 秒回答</h2>\n<p>订单号做 key，状态里保存最新订单状态和事件时间。迟到事件用水位线和 allowedLateness 处理；重复发送按事件 ID/版本去重；退款场景比较事件时间，只更新比当前状态更新的事件。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>状态：KeyedState/ValueState 按订单号存最新状态 + 最新事件时间 + 版本</li>\n<li>迟到：Watermark + allowedLateness + 侧输出流，或定时器延迟处理</li>\n<li>重复：按事件 ID/订单号+版本去重，只接受新版本</li>\n<li>退款：下单 -&gt; 退款乱序，用事件时间判断新旧，更新最新状态</li>\n<li>清理：定时器清理过期状态，状态后端 RocksDB/内存</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>状态怎么选（ValueState/MapState）？</li>\n<li>迟到的退款事件怎么保证不覆盖新状态？</li>\n<li>状态过大怎么清理？</li>\n</ul>"
    },
    {
      "id": "FLINK-0002",
      "type": "technical",
      "question": "某一 subtask 长期满载产生反压，如何排查；为什么反压阻塞 checkpoint barrier",
      "topic": [
        "flink",
        "backpressure",
        "checkpoint"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-jiukun-data-dev",
          "company": "九坤",
          "position": "数据开发（一面）",
          "date": "2026-09-21"
        }
      ],
      "domain": "flink",
      "body_html": "<h2>一句话</h2>\n<p>反压是下游处理不过来、向上游传导；排查要定位慢算子，解决要加大并行度、优化算子或削峰。</p>\n<h2>30 秒回答</h2>\n<p>看 UI backpressure 和 subtask 负载定位慢算子，查 CPU/GC/外部 IO；解决靠加下游并行度、优化慢算子、异步 IO、批量写、减少倾斜。反压会让某 subtask 积压、barrier 无法流过，导致 checkpoint 对齐超时。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>排查：定位慢算子，看 CPU、GC、外部 IO、热点 key</li>\n<li>解决：加并行度、优化算子、异步 IO、批量写、控制 source 速率、处理倾斜</li>\n<li>barrier 阻塞：checkpoint barrier 要所有并行 subtask 对齐，反压导致积压，barrier 流不过去，checkpoint 超时/失败</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>反压和背压是一个意思吗？</li>\n<li>怎么判断是 source 慢还是 sink 慢？</li>\n<li>checkpoint 对齐超时怎么处理？</li>\n</ul>"
    },
    {
      "id": "FLINK-0003",
      "type": "technical",
      "question": "实时作业修改口径，如何回刷近七天历史，避免覆盖，失败如何切回",
      "topic": [
        "flink",
        "backfill",
        "realtime"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-jiukun-data-dev",
          "company": "九坤",
          "position": "数据开发（一面）",
          "date": "2026-09-21"
        }
      ],
      "domain": "flink",
      "body_html": "<h2>一句话</h2>\n<p>离线刷历史临时表，按分区隔离，校验后原子切换；保留备份表，失败可切回。</p>\n<h2>30 秒回答</h2>\n<p>离线把近七天按新口径刷成临时表；实时继续写最新分区，历史回刷只覆盖历史分区避免互相覆盖；切换用表别名/rename 原子完成；失败或再调整用备份表切回旧版本。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>回刷：离线任务刷近七天 -&gt; 临时表</li>\n<li>隔离：实时只写当天/最新分区，回刷只写历史分区</li>\n<li>切换：与实时表对账 -&gt; 原子 rename/视图切换</li>\n<li>失败切回：保留旧表（备份表），失败/再调整切回旧版本</li>\n<li>版本管理：记录口径版本，支持回滚</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>实时和回刷怎么按分区隔离？</li>\n<li>原子切换具体怎么做？</li>\n<li>备份表要保留多久？</li>\n</ul>"
    },
    {
      "id": "FLINK-0004",
      "type": "technical",
      "question": "Flink 如何保证数据被精准一次地消费",
      "topic": [
        "flink",
        "exactly-once"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-08-27-alibaba-data-dev",
          "company": "阿里巴巴",
          "position": "数据开发（一面）",
          "date": "2026-08-27"
        }
      ],
      "domain": "flink",
      "body_html": "<h2>一句话</h2>\n<p>Flink 靠 checkpoint 状态快照 + barrier 对齐 + 端到端两阶段提交实现 exactly-once。</p>\n<h2>30 秒回答</h2>\n<p>checkpoint 定期快照状态和 source offset，失败从最近 checkpoint 恢复；sink 端用两阶段提交（如 Kafka 事务）保证结果不重不丢，实现端到端精准一次。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>状态一致性：checkpoint 保存状态和 source offset</li>\n<li>barrier 对齐：保证多流 checkpoint 一致</li>\n<li>恢复：失败从最近 checkpoint 回放</li>\n<li>sink 两阶段提交：事务性写入，避免重复</li>\n<li>前提：source/sink 都支持事务或幂等，否则 at-least-once + 幂等</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>端到端 exactly-once 需要哪些条件？</li>\n<li>Kafka 怎么支持两阶段提交？</li>\n<li>不支持事务的 sink 怎么做幂等？</li>\n</ul>"
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
      "id": "ALGORITHM-0002",
      "type": "technical",
      "question": "直播间最多人数对应的时刻（变式）",
      "topic": [
        "algorithm",
        "sweep-line"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-08-27-alibaba-data-dev",
          "company": "阿里巴巴",
          "position": "数据开发（一面）",
          "date": "2026-08-27"
        }
      ],
      "domain": "algorithm",
      "body_html": "<h2>一句话</h2>\n<p>把进入记 +1、离开记 -1，按时间排序后扫描累加，维护最大在线人数和对应时刻。</p>\n<h2>思路</h2>\n<ul>\n<li>事件化：进入 -&gt; (time, +1)，离开 -&gt; (time, -1)</li>\n<li>排序：按时间排序，同时间先离开后进入（避免边界重复计数）</li>\n<li>扫描：累加当前在线数，更新最大值和对应时刻</li>\n<li>变式：可求最大人数持续时段、峰值时刻、加窗口等</li>\n</ul>\n<h2>代码</h2>\n<pre><code class=\"language-python\">def max_online(events):\n    # events: [(enter, leave), ...]\n    timeline = []\n    for enter, leave in events:\n        timeline.append((enter, 1))\n        timeline.append((leave, -1))\n    timeline.sort(key=lambda x: (x[0], x[1]))  # 同时刻先离开\n    cur = maxv = 0\n    times = []\n    for t, d in timeline:\n        cur += d\n        if cur &gt; maxv:\n            maxv = cur\n            times = [t]\n        elif cur == maxv:\n            times.append(t)\n    return maxv, times</code></pre>\n<h2>追问</h2>\n<ul>\n<li>同时间有进有出，怎么处理才不重复计数？</li>\n<li>变式：求峰值持续时段怎么改？</li>\n<li>复杂度是多少？</li>\n</ul>"
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
      "id": "LLM-0004",
      "type": "technical",
      "question": "知识库准确率指标怎么算，测试集是什么；两个 SQL 写法不同结果相同如何判定",
      "topic": [
        "llm",
        "evaluation",
        "sql"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-jiukun-data-dev",
          "company": "九坤",
          "position": "数据开发（一面）",
          "date": "2026-09-21"
        }
      ],
      "domain": "llm",
      "body_html": "<h2>一句话</h2>\n<p>准确率看「执行结果是否一致」而不是「SQL 文本是否一致」；测试集用「问题 + 标准 SQL + 期望结果」标注。</p>\n<h2>30 秒回答</h2>\n<p>指标：结果集一致率、意图识别准确率、召回率。测试集覆盖真实业务问题 + 标准答案。两个 SQL 写法不同，要执行后比较结果集（schema + 数据）是否一致，再复核语义等价。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>准确率：执行结果一致率（主）、SQL 文本精确匹配率（辅）、召回率</li>\n<li>测试集：问题 + 标准 SQL + 期望结果，按主题/难度分层，持续补 badcase</li>\n<li>判定：执行两个 SQL，比较结果集（列 + 行）是否相同，而非比较文本</li>\n<li>原因：等价 SQL 可以有多种写法，文本一致会误判</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>结果集一致但语义不等价怎么处理？</li>\n<li>测试集怎么持续更新？</li>\n<li>怎么衡量召回率？</li>\n</ul>"
    },
    {
      "id": "LLM-0005",
      "type": "technical",
      "question": "大模型取数权限控制完整链路",
      "topic": [
        "llm",
        "security",
        "data-access"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-jiukun-data-dev",
          "company": "九坤",
          "position": "数据开发（一面）",
          "date": "2026-09-21"
        }
      ],
      "domain": "llm",
      "body_html": "<h2>一句话</h2>\n<p>权限控制要覆盖「身份认证 -&gt; 请求鉴权 -&gt; SQL 校验 -&gt; 数据行级/列级权限 -&gt; 结果过滤 -&gt; 审计」全链路。</p>\n<h2>30 秒回答</h2>\n<p>提交查询时先认证用户身份，鉴权能否访问该数据源，再校验生成的 SQL（表、字段、行级权限），执行后对结果做脱敏/过滤，全程审计留痕。</p>\n<h2>1 分钟回答</h2>\n<ol>\n<li>认证：用户身份（登录态/API key）</li>\n<li>鉴权：是否有取数权限、可访问哪些数据源</li>\n<li>SQL 校验：解析 SQL，校验表和字段权限、阻止越权查询</li>\n<li>行级/列级权限：按数据权限规则过滤</li>\n<li>结果处理：脱敏、限制返回量</li>\n<li>审计：记录查询请求、SQL、结果范围</li>\n<ul>\n<li>大模型链路要防止 prompt 注入绕过权限，必须在引擎层做权限，不能只靠模型</li>\n</ul>\n</ol>\n<h2>追问</h2>\n<ul>\n<li>怎么防止 prompt 注入越权？</li>\n<li>行级权限通常怎么实现？</li>\n<li>权限校验放哪个环节最安全？</li>\n</ul>"
    },
    {
      "id": "LLM-0006",
      "type": "technical",
      "question": "你们做的 skills 是什么，有什么作用，具体怎么写的",
      "topic": [
        "llm",
        "agent",
        "skills"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-23-anker-data",
          "company": "安克创新",
          "position": "数据岗（一面）",
          "date": "2026-09-23"
        }
      ],
      "domain": "llm",
      "body_html": "<h2>一句话</h2>\n<p>skills 是给 Agent 的可复用指令包，把领域知识、工作流和资产封装起来，让 Agent 按规范执行。</p>\n<h2>30 秒回答</h2>\n<p>一个 skill 通常有 SKILL.md（name/description 触发路由 + 指令），可选 scripts、assets、references。作用是封装领域知识、规范流程、复用资产、按需触发。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>结构：SKILL.md 的 frontmatter 写 name/description，正文写步骤、约束、验收</li>\n<li>scripts：可执行脚本，避免 Agent 重写大段代码</li>\n<li>assets/references：模板、参考资料</li>\n<li>作用：按需触发、稳定输出、知识沉淀、复用</li>\n</ul>\n<h2>待补充（真实经历）</h2>\n<blockquote>补你们实际做的 skills：名称、解决的问题、怎么触发、怎么写的。</blockquote>"
    },
    {
      "id": "LLM-0007",
      "type": "technical",
      "question": "你做数据集评测的作用是什么",
      "topic": [
        "llm",
        "evaluation"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-23-anker-data",
          "company": "安克创新",
          "position": "数据岗（一面）",
          "date": "2026-09-23"
        }
      ],
      "domain": "llm",
      "body_html": "<h2>一句话</h2>\n<p>评测数据集用来量化 Agent/模型输出质量，做回归、驱动迭代和方案对比。</p>\n<h2>30 秒回答</h2>\n<p>作用：量化准确率/通过率，改动后防退化，badcase 驱动迭代，不同模型/方案 A/B 对比。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>量化：准确率、通过率、任务成功率</li>\n<li>回归：改动后自动验证不退化</li>\n<li>迭代：定位 badcase，优化 prompt/流程</li>\n<li>对比：不同方案/模型选优</li>\n</ul>\n<h2>待补充（真实经历）</h2>\n<blockquote>说明你评测的数据集、评测方式和发现的问题。</blockquote>"
    },
    {
      "id": "LLM-0008",
      "type": "technical",
      "question": "有什么指标能够量化 skills 和评测",
      "topic": [
        "llm",
        "evaluation",
        "metrics"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-23-anker-data",
          "company": "安克创新",
          "position": "数据岗（一面）",
          "date": "2026-09-23"
        }
      ],
      "domain": "llm",
      "body_html": "<h2>一句话</h2>\n<p>准确率、通过率、任务成功率、指令遵循率是核心，再叠加延迟、成本和 badcase 率。</p>\n<h2>30 秒回答</h2>\n<p>量化指标：准确率/通过率、任务成功率、指令遵循率、召回率、badcase 率、失败分类；成本侧看延迟、token 成本。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>效果：准确率、通过率、任务成功率、指令遵循率</li>\n<li>质量：badcase 率、失败原因分布、回归通过率</li>\n<li>成本：延迟、token 消耗、单位任务成本</li>\n<li>分层：意图识别、工具调用、最终结果分别评测</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>怎么定义一次任务算成功？</li>\n<li>指标怎么区分「模型问题」和「skill 写的问题」？</li>\n</ul>"
    },
    {
      "id": "LLM-0009",
      "type": "technical",
      "question": "项目里 AI Agent 主要用在哪些方面",
      "topic": [
        "llm",
        "agent",
        "application"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "llm",
      "body_html": "<h2>一句话</h2>\n<p>AI Agent 常用于需求解析、任务开发、取数问答、文档知识库、评测与质量等环节。</p>\n<h2>30 秒回答</h2>\n<p>常见场景：需求文档解析自动开发任务、NL2SQL 取数、知识库问答、代码辅助、数据质量、评测。结合项目说明用在哪、解决什么。</p>\n<h2>待补充（真实经历）</h2>\n<blockquote>说明你项目里 Agent 的具体应用场景和效果。</blockquote>"
    },
    {
      "id": "LLM-0010",
      "type": "technical",
      "question": "怎么对 bad case 分类，有哪些类别",
      "topic": [
        "llm",
        "evaluation",
        "badcase"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "llm",
      "body_html": "<h2>一句话</h2>\n<p>bad case 按根因分类：意图识别、检索召回、幻觉、格式、权限、工具调用、上下文不足等。</p>\n<h2>30 秒回答</h2>\n<p>分类：意图识别错误、检索召回不足/错误、生成幻觉、格式/结构错误、权限越权、工具调用错误、知识覆盖不足。分类目的是定位根因、针对性优化。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>意图识别：问错方向、需求理解偏差</li>\n<li>检索召回：没召回/召回错文档</li>\n<li>生成：幻觉、答非所问、格式错</li>\n<li>其他：权限、工具调用、上下文不足</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>分类后怎么驱动优化？</li>\n<li>怎么统计各类别占比？</li>\n</ul>"
    },
    {
      "id": "LLM-0011",
      "type": "technical",
      "question": "会不会继续追溯到意图识别、检索召回、幻觉、权限等底层问题",
      "topic": [
        "llm",
        "evaluation",
        "root-cause"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "llm",
      "body_html": "<h2>一句话</h2>\n<p>会，建立「表象 -&gt; 中间层 -&gt; 根因」的分类树，下钻到底层问题。</p>\n<h2>30 秒回答</h2>\n<p>把 bad case 继续下钻到意图识别、检索召回、模型幻觉、权限控制、知识覆盖等底层根因，形成分类树，定位问题出在哪一环。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>表象：答错、答非所问、越权</li>\n<li>中间层：意图、召回、生成、工具调用</li>\n<li>根因：模型、知识库、prompt、权限、数据</li>\n<li>收益：针对性修复，而不是笼统说「效果不好」</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>分类树怎么设计？</li>\n<li>根因占比怎么辅助排优先级？</li>\n</ul>"
    },
    {
      "id": "LLM-0012",
      "type": "technical",
      "question": "大模型幻觉是什么，怎么减少幻觉",
      "topic": [
        "llm",
        "hallucination"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "llm",
      "body_html": "<h2>一句话</h2>\n<p>幻觉是模型生成看似合理但错误或编造的内容；减少靠 RAG、约束提示、工具调用和后校验。</p>\n<h2>30 秒回答</h2>\n<p>减少幻觉：RAG 检索真实文档再回答、提示词约束「只依据上下文、不知道就说不知道」、事实性任务走工具/结构化数据、控制采样、输出引用来源、后置校验。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>定义：生成与事实不符但看似合理的内容</li>\n<li>减少：RAG、约束 prompt、工具调用、知识库质量、微调、引用来源、后校验</li>\n<li>事实性任务优先工具/数据库，不让模型空想</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>RAG 为什么能减少幻觉？</li>\n<li>幻觉能完全消除吗？</li>\n</ul>"
    },
    {
      "id": "LLM-0013",
      "type": "technical",
      "question": "文档接入 Agent 时，是把文档处理成向量库吗",
      "topic": [
        "llm",
        "rag",
        "vector"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "llm",
      "body_html": "<h2>一句话</h2>\n<p>是的，典型 RAG 把文档切块、向量化、入向量库，检索 top-k 再拼进 prompt。</p>\n<h2>30 秒回答</h2>\n<p>文档切分 -&gt; embedding 向量化 -&gt; 存向量库 -&gt; 查询时向量检索 top-k -&gt; 拼进 prompt。也可混合全文检索、知识图谱、表格结构化。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>切分：按语义/长度切块</li>\n<li>向量化：embedding 模型</li>\n<li>存储：向量库（FAISS、Milvus 等）</li>\n<li>检索：相似度 top-k</li>\n<li>增强：全文检索 + 向量混合，结构化数据走表格/图谱</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>文档切块怎么定大小？</li>\n<li>向量检索和全文检索怎么结合？</li>\n</ul>"
    },
    {
      "id": "LLM-0014",
      "type": "technical",
      "question": "准确率提升超过 20%，怎么验证",
      "topic": [
        "llm",
        "evaluation"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "llm",
      "body_html": "<h2>一句话</h2>\n<p>用同一测试集做前后对比，控制变量，分维度评测，注意统计显著性和测试集不泄漏。</p>\n<h2>30 秒回答</h2>\n<p>固定测试集，优化前后各跑一遍，对比准确率/通过率；分层看意图、召回、回答质量；用人工评审 + 自动指标交叉验证，避免测试集泄漏。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>控制变量：同一测试集、同一评测标准</li>\n<li>分维度：意图识别、召回、回答质量</li>\n<li>交叉验证：自动指标 + 人工抽检</li>\n<li>显著性：样本足够、不是偶然波动</li>\n<li>防泄漏：测试集不参与优化</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>怎么防止测试集泄漏？</li>\n<li>提升 20% 会不会是评测标准松了？</li>\n</ul>"
    },
    {
      "id": "LLM-0015",
      "type": "technical",
      "question": "测试集规模多大，怎么定义「准确/不准确」",
      "topic": [
        "llm",
        "evaluation",
        "testset"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "llm",
      "body_html": "<h2>一句话</h2>\n<p>测试集规模要覆盖足够、统计可靠，分主题/难度分层；准确与否按可执行结果/关键字段/语义等价定义。</p>\n<h2>30 秒回答</h2>\n<p>规模从几百到几千不等，按主题、难度分层覆盖；准确判定：结果集一致、关键字段正确、语义等价，或人工按标注标准打分。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>规模：覆盖度 + 统计显著性，分主题/难度分层</li>\n<li>判定：结果集一致、关键字段正确、语义等价</li>\n<li>标注：明确判定标准，必要时双人标注</li>\n<li>持续：不断补充 badcase</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>测试集和训练集怎么隔离？</li>\n<li>语义等价怎么机器判定？</li>\n</ul>"
    },
    {
      "id": "LLM-0016",
      "type": "technical",
      "question": "一道简单的 Agent Skill 相关题目",
      "topic": [
        "llm",
        "agent",
        "skills"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "llm",
      "body_html": "<h2>一句话</h2>\n<p>Agent Skill 题通常考「给一个场景，设计一个可复用 skill 的结构、触发和验收」。</p>\n<h2>30 秒回答</h2>\n<p>一个 skill = SKILL.md（name/description 触发路由 + 指令）+ 可选 scripts/assets/references。设计时明确触发条件、输入输出、步骤、约束、验收标准。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>frontmatter：name、description（决定何时触发）</li>\n<li>正文：步骤、约束、验收、注意事项</li>\n<li>scripts：可执行脚本，避免重复生成代码</li>\n<li>assets/references：模板与参考资料</li>\n<li>设计要点：职责单一、触发明确、可复用、可验证</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>怎么设计 skill 的 description 让它被正确触发？</li>\n<li>一个 skill 应该多小/多大？</li>\n</ul>"
    },
    {
      "id": "LLM-0017",
      "type": "technical",
      "question": "智能问数 Agent 存在哪些问题",
      "topic": [
        "llm",
        "agent",
        "qa"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-shopee-data-dev",
          "company": "虾皮",
          "position": "数据开发（二面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "llm",
      "body_html": "<h2>一句话</h2>\n<p>意图理解不准、口径不统一、检索召回不足、幻觉、跨域越权是问数 Agent 的主要问题。</p>\n<h2>30 秒回答</h2>\n<p>常见问题：意图识别错误、指标口径不统一、检索召回不足、生成幻觉、复杂查询生成错误、跨域越权、结果不可解释、歧义处理差。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>意图：需求理解偏差、歧义</li>\n<li>口径：同指标多口径，答错口径</li>\n<li>检索：召回不足/错误</li>\n<li>生成：SQL 语法错、语义错、幻觉</li>\n<li>权限：跨域越权调用</li>\n<li>体验：可解释性、置信度、纠错</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>这些问题里哪个最难解决？</li>\n<li>怎么提升结果可解释性？</li>\n</ul>"
    },
    {
      "id": "LLM-0018",
      "type": "technical",
      "question": "从架构和实现上，智能问数 Agent 是怎么做的",
      "topic": [
        "llm",
        "agent",
        "architecture"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-shopee-data-dev",
          "company": "虾皮",
          "position": "数据开发（二面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "llm",
      "body_html": "<h2>一句话</h2>\n<p>问数 Agent 是「意图识别 + 语义层/指标字典 + 检索增强 + SQL 生成 + 权限校验 + 执行 + 评测」的链路。</p>\n<h2>30 秒回答</h2>\n<p>问题 -&gt; 意图识别 -&gt; 指标/口径解析 -&gt; 检索（知识库/元数据）-&gt; SQL 生成 -&gt; 校验/权限 -&gt; 执行 -&gt; 结果 -&gt; 反馈。核心是语义层把业务意图映射到指标和表。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>NLU：意图、实体、指标识别</li>\n<li>语义层：指标字典、口径、维度映射</li>\n<li>检索：RAG 召回业务定义和元数据</li>\n<li>SQL 生成：结合 schema 生成查询</li>\n<li>校验：语法、权限、口径</li>\n<li>执行 + 反馈：执行、结果、评测迭代</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>语义层和指标字典是什么关系？</li>\n<li>怎么保证生成的 SQL 正确？</li>\n</ul>"
    },
    {
      "id": "LLM-0019",
      "type": "technical",
      "question": "检索增强时，怎么检索到和业务意图最匹配的片段",
      "topic": [
        "llm",
        "rag",
        "retrieval"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-shopee-data-dev",
          "company": "虾皮",
          "position": "数据开发（二面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "llm",
      "body_html": "<h2>一句话</h2>\n<p>向量检索 + 关键词/全文混合，结合指标字典和元数据，再 rerank 精排，按权限过滤。</p>\n<h2>30 秒回答</h2>\n<p>先识别业务意图和指标，再用 embedding 向量检索 + 关键词检索混合召回，结合指标字典、表/字段元数据，rerank 精排 top-k，并按业务域/权限过滤。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>意图解析：先转成指标/维度语义</li>\n<li>混合检索：向量相似度 + 全文/关键词</li>\n<li>结构化元数据优先：指标字典、表字段、历史问答</li>\n<li>rerank：精排提升相关度</li>\n<li>权限/域过滤：限制检索范围</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>向量检索和关键词检索怎么融合？</li>\n<li>rerank 模型的作用？</li>\n</ul>"
    },
    {
      "id": "LLM-0020",
      "type": "technical",
      "question": "跨业务域查询，怎么规范跨域错误调用",
      "topic": [
        "llm",
        "security",
        "domain"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-shopee-data-dev",
          "company": "虾皮",
          "position": "数据开发（二面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "llm",
      "body_html": "<h2>一句话</h2>\n<p>通过意图先归域、域级/表级/行级权限、指标字典隔离和 SQL 校验来阻止跨域越权。</p>\n<h2>30 秒回答</h2>\n<p>意图识别先归类业务域，按域路由到对应指标字典和元数据；权限做域级/表级/行级校验；生成 SQL 时校验表和字段权限，审计留痕，阻止跨域错误调用。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>意图归域：先判断属于哪个业务域</li>\n<li>权限：域级/表级/行级隔离</li>\n<li>指标字典：按域隔离，不混用</li>\n<li>SQL 校验：解析后校验表和字段可见性</li>\n<li>审计：记录请求和结果范围</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>行级权限怎么实现？</li>\n<li>怎么防止 prompt 注入越权？</li>\n</ul>"
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
      "id": "WAREHOUSE-0009",
      "type": "technical",
      "question": "DWS 和 ADS 最主要的差异，分层判断依据是什么",
      "topic": [
        "warehouse",
        "dws",
        "ads",
        "layering"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-pdd-data-dev",
          "company": "拼多多",
          "position": "数据开发（社招）",
          "date": "2026-09-21"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>DWS 是「公共汇总层」，面向复用、口径统一；ADS 是「应用层」，面向具体场景、口径专用。</p>\n<h2>30 秒回答</h2>\n<p>DWS 按主题做可复用的中度汇总，跨团队共享、口径统一；ADS 面向具体报表/产品做个性化宽表，口径专用。判断依据不是粒度，而是复用性、口径是否公共、下游数量。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>放 DWS 的逻辑：跨团队/多报表复用的公共指标、主题域汇总（1d/7d/30d）、统一口径</li>\n<li>放 ADS 的逻辑：单一应用专属加工、跨主题宽表、短期一次性指标、展示字段拼接</li>\n<li>核心区别：DWS 面向复用，ADS 面向应用</li>\n<li>判断依据：复用范围 + 口径稳定性 + 被多少下游使用；粒度只是表象</li>\n<li>关键：DWS 可以给其他团队复用，ADS 通常专用</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>如果某指标只有一个团队用，放 DWS 还是 ADS？</li>\n<li>DWS 和 DWD 的边界？</li>\n<li>公共层加字段的代价？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0010",
      "type": "technical",
      "question": "DWS 口径是公用的，如何统一维护、保证多方口径对齐",
      "topic": [
        "warehouse",
        "metrics",
        "governance"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-pdd-data-dev",
          "company": "拼多多",
          "position": "数据开发（社招）",
          "date": "2026-09-21"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>靠「文档 + 资产平台 + 层级对账 + 质量监控」四件事，把口径唯一化、可追踪、可校验。</p>\n<h2>30 秒回答</h2>\n<p>用指标字典统一定义和公式；录入资产平台做唯一入口和血缘；不同层级（DWS 与 ADS/DWD）做对账；用质量监控和波动告警发现口径漂移。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>文档：指标字典，统一命名、公式、维度、口径</li>\n<li>资产平台：指标注册、血缘管理，唯一入口（容易漏但很重要）</li>\n<li>层级对账：DWS 与 ADS/DWD 比对，校验一致性</li>\n<li>质量监控：指标波动、口径漂移、空值/异常告警</li>\n<li>治理机制：口径评审、变更审批、责任 owner</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>指标字典里要包含哪些字段？</li>\n<li>血缘在口径治理里有什么用？</li>\n<li>口径漂移怎么自动发现？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0011",
      "type": "technical",
      "question": "口径变更迭代的完整流程是什么",
      "topic": [
        "warehouse",
        "metrics",
        "governance"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-pdd-data-dev",
          "company": "拼多多",
          "position": "数据开发（社招）",
          "date": "2026-09-21"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>口径变更要走「提出 -&gt; 评审 -&gt; 定义 -&gt; 开发 -&gt; 对账 -&gt; 上线 -&gt; 通知 -&gt; 监控」的闭环。</p>\n<h2>30 秒回答</h2>\n<p>业务提出变更 -&gt; 口径评审 -&gt; 更新指标字典 -&gt; 开发测试 -&gt; 新旧口径对账 -&gt; 灰度上线 -&gt; 通知下游 -&gt; 上线后持续监控。</p>\n<h2>1 分钟回答</h2>\n<ol>\n<li>提出：业务/数分/数开提需求</li>\n<li>评审：确认影响面、口径定义、回滚方案</li>\n<li>定义：更新指标字典、资产平台</li>\n<li>开发：改模型/任务</li>\n<li>测试对账：新旧口径比对</li>\n<li>上线：灰度、通知下游</li>\n<li>监控：上线后持续观察指标波动和下游一致性</li>\n<li>复盘：记录变更、沉淀口径</li>\n</ol>\n<h2>追问</h2>\n<ul>\n<li>口径变更怎么评估下游影响？</li>\n<li>新旧口径对账怎么做？</li>\n<li>上线后要监控哪些东西？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0012",
      "type": "technical",
      "question": "维度退化到底在哪一层做，什么场景需要，有什么优势和缺陷",
      "topic": [
        "warehouse",
        "modeling",
        "degenerate-dimension"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-pdd-data-dev",
          "company": "拼多多",
          "position": "数据开发（社招）",
          "date": "2026-09-21"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>维度退化是把维度属性冗余进事实表、减少 join；一般在 DWD 事实表做，若在 DWS/ADS 之间选，放 DWS 公共层而不是 ADS。</p>\n<h2>30 秒回答</h2>\n<p>把高频、稳定的维度属性（如 city_id 对应的 city_name）直接放进事实表，查询时少 join。优先在 DWD 明细层做；DWS/ADS 之间选 DWS，因为公共层可复用，ADS 是应用专用。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>做在哪层：优先 DWD 事实表；DWS/ADS 之间选 DWS（公共层）</li>\n<li>场景：频繁 join 的维度、维度表大、查询性能敏感、维表稳定</li>\n<li>优势：减少 join、提升查询性能、简化查询</li>\n<li>缺陷：冗余存储、维度变更要同步、一致性维护成本</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>为什么不放 ADS 做退化维度？</li>\n<li>维表经常变化还适合退化吗？</li>\n<li>退化维度和缓慢变化维度冲突吗？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0013",
      "type": "technical",
      "question": "重复计算如何发现，如何推动治理下线/合并",
      "topic": [
        "warehouse",
        "governance",
        "duplicate"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-pdd-data-dev",
          "company": "拼多多",
          "position": "数据开发（社招）",
          "date": "2026-09-21"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>重复计算靠血缘、指标字典和审计发现，治理要「盘点 -&gt; 统一口径 -&gt; 合并/下线 -&gt; 通知下游 -&gt; 监控」。</p>\n<h2>30 秒回答</h2>\n<p>发现：血缘分析、指标字典对比、审计日志、同指标多任务扫描。治理：资产盘点、识别重复、统一口径、合并任务、下线冗余、灰度切换、持续监控。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>典型问题：同一指标多团队各算一套、同一表被重复加工、口径不一致</li>\n<li>发现：血缘 + 指标字典 + 任务审计 + 字段血缘比对</li>\n<li>治理流程：</li>\n<ol>\n<li>盘点资产，识别重复</li>\n<li>对齐口径，选定权威来源</li>\n<li>合并/下线冗余任务</li>\n<li>下游切换、灰度、保留兼容期</li>\n<li>下线后验证 + 持续监控</li>\n</ol>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>怎么判定两个任务是重复计算？</li>\n<li>下游不同意下线怎么办？</li>\n<li>灰度切换怎么做才安全？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0014",
      "type": "technical",
      "question": "数据质量整体如何保障，误报漏报怎么处理，什么规则更能发现问题",
      "topic": [
        "warehouse",
        "data-quality"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-pdd-data-dev",
          "company": "拼多多",
          "position": "数据开发（社招）",
          "date": "2026-09-21"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>数据质量围绕「完整性/准确性/一致性/及时性」，按事前、事中、事后分层保障。</p>\n<h2>30 秒回答</h2>\n<p>事前做规范和规则设计；事中做规则执行、校验和阻断；事后做监控、对账、修复和复盘。误报调阈值/白名单，漏报补规则和校验维度。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>四性：完整性（不缺数）、准确性（数据正确）、一致性（口径/跨表一致）、及时性（SLA）</li>\n<li>事前：口径评审、模型设计、校验规则设计</li>\n<li>事中：ETL 过程校验、规则执行、异常阻断/告警</li>\n<li>事后：监控、对账、修复、复盘</li>\n<li>误报：规则过严 -&gt; 调阈值、加白名单；漏报：规则过松 -&gt; 补规则、加校验维度</li>\n<li>更有效的规则：跨表对账、主键唯一性、波动率、空值率、金额/记录数同比环比、及时性 SLA、关键业务口径校验</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>怎么衡量规则质量（误报率/漏报率）？</li>\n<li>一致性和准确性怎么校验？</li>\n<li>及时性 SLA 怎么定？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0015",
      "type": "technical",
      "question": "下单取消/申请退款会影响哪些指标，退款怎么处理",
      "topic": [
        "warehouse",
        "metrics",
        "refund"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-jiukun-data-dev",
          "company": "九坤",
          "position": "数据开发（一面）",
          "date": "2026-09-21"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>退款会影响交易类指标的口径，核心是定义清楚「退款按申请时间还是完成时间」、以及订单与退款如何关联。</p>\n<h2>30 秒回答</h2>\n<p>影响的指标：下单量、支付金额、净交易额、退款金额、退款率、订单状态、优惠/佣金。退款处理要把退款事实与订单正确关联，按统一口径做净额计算，避免重复扣减。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>订单状态机：已下单 -&gt; 已支付 -&gt; 部分/全额退款 -&gt; 已关闭</li>\n<li>退款相关指标：退款单量、退款金额、退款率、退款时长</li>\n<li>口径要定：按申请时间还是完成时间；是否扣减优惠；部分退款怎么算</li>\n<li>建模：退款事实表与订单事实表分开，或订单表加退款标记</li>\n<li>净额：实付 - 退款，按订单号对账、流水幂等去重</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>退款率和退款时长怎么算？</li>\n<li>部分退款怎么计入净交易额？</li>\n<li>退款跨天怎么归集？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0016",
      "type": "technical",
      "question": "跨天退款如何计算日交易额，避免重复扣减",
      "topic": [
        "warehouse",
        "metrics",
        "refund"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-jiukun-data-dev",
          "company": "九坤",
          "position": "数据开发（一面）",
          "date": "2026-09-21"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>核心是统一口径（退款按申请还是完成时间）并用订单号关联、流水幂等去重，避免退款在申请日和完成日各扣一次。</p>\n<h2>30 秒回答</h2>\n<p>日交易额 = 当日支付金额 - 当日退款完成金额（按退款完成时间口径）。退款流水关联原订单，按退款单号去重，跨天退款只按完成时间扣一次。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>口径二选一：按退款申请时间 or 完成时间，全链路统一</li>\n<li>数据：支付流水 + 退款流水按订单号对账</li>\n<li>净额：支付 - 退款，部分退款按金额拆分</li>\n<li>幂等：退款单号去重，避免重复扣减</li>\n<li>跨天：事件时间归集，申请日和完成日只记一次</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>按申请时间和完成时间各有什么优劣？</li>\n<li>退款和原订单怎么关联？</li>\n<li>部分退款怎么处理？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0017",
      "type": "technical",
      "question": "上游字段改名、schema 变更、旧版本如何维护降级",
      "topic": [
        "warehouse",
        "schema",
        "governance"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-jiukun-data-dev",
          "company": "九坤",
          "position": "数据开发（一面）",
          "date": "2026-09-21"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>schema 变更要向后兼容，靠字段映射、双写和兼容窗口平滑迁移，旧字段延迟下线。</p>\n<h2>30 秒回答</h2>\n<p>记录字段映射和血缘；加字段用可空，删字段先软删除；新老字段双写，下游平滑迁移后再下线旧字段，支持版本降级。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>字段改名：维护字段映射表，下游用视图/别名隔离</li>\n<li>加字段：可空、向后兼容</li>\n<li>删字段：先弃用标记，双写兼容期后再删</li>\n<li>降级：保留旧字段一段时间，新老并行，失败可切回</li>\n<li>流程：变更评审 -&gt; 兼容设计 -&gt; 双写/灰度 -&gt; 通知下游 -&gt; 下线旧版本 -&gt; 监控</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>字段类型变更怎么兼容？</li>\n<li>怎么通知下游字段变更？</li>\n<li>兼容窗口一般多长？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0018",
      "type": "technical",
      "question": "湖仓一体和纯数仓的区别是什么",
      "topic": [
        "warehouse",
        "lakehouse"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-08-27-alibaba-data-dev",
          "company": "阿里巴巴",
          "position": "数据开发（一面）",
          "date": "2026-08-27"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>纯数仓把数据 ETL 进仓、面向分析；湖仓一体在数据湖上叠加事务、元数据、索引和 SQL 能力，让一份数据既存又算。</p>\n<h2>30 秒回答</h2>\n<p>纯数仓：结构化、ETL 入仓、数仓分层，分析为主，原始/非结构化数据难直接查。湖仓一体：湖上增加事务（Iceberg/Hudi/Delta）、元数据和查询引擎，减少搬迁，支持多种负载和开放格式。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>纯数仓：数据先进仓再分析，链路长、成本高、灵活性差</li>\n<li>湖仓一体：一套存储 + 事务 + 元数据 + 多引擎（Presto/Spark），批流统一</li>\n<li>关键组件：Iceberg/Hudi/Delta、Parquet/ORC 开放格式</li>\n<li>优势：一份数据多引擎、降本、批流一体、支持半结构化</li>\n<li>代价：体系复杂、治理和一致性要求高</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>湖仓一体的典型架构有哪些？</li>\n<li>Iceberg/Hudi/Delta 有什么区别？</li>\n<li>什么时候还选纯数仓？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0019",
      "type": "technical",
      "question": "数据回滚怎么处理",
      "topic": [
        "warehouse",
        "rollback",
        "governance"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-08-27-alibaba-data-dev",
          "company": "阿里巴巴",
          "position": "数据开发（一面）",
          "date": "2026-08-27"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>回滚靠「保留原始数据 + 分区可覆盖 + 备份/快照 + 幂等重跑」，出问题按时间范围回刷。</p>\n<h2>30 秒回答</h2>\n<p>按时间分区覆盖重跑、备份表/快照回滚、ODS 原始数据重放、拉链表保留历史；流程是定位问题范围 -&gt; 备份 -&gt; 回刷 -&gt; 校验 -&gt; 通知下游。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>分区重跑：按时间分区覆盖，回滚到正确口径</li>\n<li>备份表/快照：切换前备份，失败切回</li>\n<li>原始数据：ODS 层保留原始，可重放</li>\n<li>版本：拉链表保留历史版本</li>\n<li>关键：幂等重跑、校验、下游通知、保留恢复点</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>回滚和重跑有什么区别？</li>\n<li>跨分区回滚怎么做？</li>\n<li>怎么保证回滚不丢数据？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0020",
      "type": "technical",
      "question": "粒度是什么",
      "topic": [
        "warehouse",
        "granularity"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-08-27-alibaba-data-dev",
          "company": "阿里巴巴",
          "position": "数据开发（一面）",
          "date": "2026-08-27"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>粒度是一条记录所代表的最细业务含义，即「按哪些维度、在什么周期」统计。</p>\n<h2>30 秒回答</h2>\n<p>粒度 = 维度 + 周期，例如「用户 + 商品 + 日」或「品类 + 日」。粒度决定表能回答什么问题、复用范围和数据量。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>粒度细：灵活、可上卷，但数据量大</li>\n<li>粒度粗：聚合快、体积小，但丢失明细</li>\n<li>建模顺序：先定粒度，再定维度和指标</li>\n<li>例子：DWS 表粒度是「品类+日」，ADS 可能是「店铺+品类+日」</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>粒度和指标是什么关系？</li>\n<li>粒度选太细会怎样？</li>\n<li>DWD 和 DWS 的粒度各是多少？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0021",
      "type": "technical",
      "question": "星型模型和雪花模型各自适合哪些场景",
      "topic": [
        "warehouse",
        "star-schema",
        "snowflake-schema"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-08-27-alibaba-data-dev",
          "company": "阿里巴巴",
          "position": "数据开发（一面）",
          "date": "2026-08-27"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>星型模型以冗余换查询性能，适合报表和 OLAP；雪花模型规范化、省空间，适合维度层级复杂、强调整体一致性。</p>\n<h2>30 秒回答</h2>\n<p>星型：事实表 + 一层维度表，join 少、查询快，适合报表、分析查询性能敏感场景。雪花：维度表再规范化拆分，冗余少、一致性好，但 join 多，适合维表大、维度层次多的场景。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>星型优点：查询简单、join 少、性能好、易理解</li>\n<li>星型缺点：维度冗余、一致性维护成本高</li>\n<li>雪花优点：减少冗余、节省存储、一致性更好</li>\n<li>雪花缺点：join 多、查询复杂、性能差</li>\n<li>实践：数仓普遍优先星型，雪花用于层次多或维表巨大的场景</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>为什么数仓多用星型？</li>\n<li>雪花模型什么时候比星型更合适？</li>\n<li>维度冗余会带来什么问题？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0022",
      "type": "technical",
      "question": "三范式的概念是什么",
      "topic": [
        "warehouse",
        "normalization"
      ],
      "difficulty": 2,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-08-27-alibaba-data-dev",
          "company": "阿里巴巴",
          "position": "数据开发（一面）",
          "date": "2026-08-27"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>三范式通过规范化减少冗余、避免更新异常，保证数据一致性。</p>\n<h2>30 秒回答</h2>\n<p>1NF：字段原子性，不可再分；2NF：满足 1NF 且非主属性完全依赖主键；3NF：满足 2NF 且非主属性不传递依赖主键。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>1NF：每个字段不可再分</li>\n<li>2NF：消除部分函数依赖（非主属性不能只依赖主键的一部分）</li>\n<li>3NF：消除传递依赖（非主属性不能依赖其他非主属性）</li>\n<li>目的：减少冗余、避免插入/更新/删除异常</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>还有 BCNF、4NF 了解吗？</li>\n<li>范式化和反范式化各有什么场景？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0023",
      "type": "technical",
      "question": "数仓的表符合三范式吗",
      "topic": [
        "warehouse",
        "normalization",
        "modeling"
      ],
      "difficulty": 2,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-08-27-alibaba-data-dev",
          "company": "阿里巴巴",
          "position": "数据开发（一面）",
          "date": "2026-08-27"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>数仓表通常不符合三范式，而是反范式化、维度建模，故意冗余换查询性能。</p>\n<h2>30 秒回答</h2>\n<p>三范式面向 OLTP（写多、一致性），数仓面向 OLAP（读多、大表 join）。数仓的 DWS/ADS 宽表和维度模型普遍反范式、冗余，以减少 join、提升查询性能。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>ODS/DWD：接近原始或规范化</li>\n<li>DWS/ADS：反范式、宽表冗余，面向查询</li>\n<li>原因：范式化会导致大量 join，分析性能差</li>\n<li>结论：范式用于 OLTP，数仓以维度建模/反范式为主，以空间换性能</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>维度建模和范式化是对立的吗？</li>\n<li>数仓里还有哪些地方会反范式？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0024",
      "type": "technical",
      "question": "一百多张表有没有主题划分，怎么划分",
      "topic": [
        "warehouse",
        "subject-domain"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>表按「主题域」划分，主题域内再按数仓分层组织。</p>\n<h2>30 秒回答</h2>\n<p>先按业务主题域划分（交易、用户、商品、营销、流量、财务等），每个主题域内再按 ODS/DWD/DWS/ADS 分层，配合统一命名规范。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>主题域：交易、用户、商品、营销、流量、财务、供应链等</li>\n<li>分层：主题域内再分 ODS/DWD/DWS/ADS</li>\n<li>命名：前缀带主题域和分层，如 dwd_trade_xxx</li>\n<li>好处：职责清晰、便于检索、权限和治理按域管理</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>主题域怎么确定边界？</li>\n<li>跨主题域的表怎么归属？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0025",
      "type": "technical",
      "question": "项目中的指标你们是怎么对比的",
      "topic": [
        "warehouse",
        "metrics",
        "reconciliation"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>指标对比就是新旧口径/跨层/跨链路对账，验证结果一致性。</p>\n<h2>30 秒回答</h2>\n<p>新旧口径双跑对比、跨层对账（DWD/DWS/ADS）、总量 + 分维度对账、抽样比对，用自动化对账工具发现偏差。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>新旧口径：同一指标新老逻辑双跑，比对结果</li>\n<li>跨层对账：DWD -&gt; DWS -&gt; ADS 层层对账</li>\n<li>维度对账：总量 + 按维度拆分比对</li>\n<li>抽样：抽关键明细人工复核</li>\n<li>工具：自动化对账、偏差告警</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>对账不一致怎么定位？</li>\n<li>对比的粒度和频率怎么定？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0026",
      "type": "technical",
      "question": "离线任务发布校验怎么规定（核心指标偏差 2% 全量发布）",
      "topic": [
        "warehouse",
        "release",
        "validation"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>发布用「新旧链路双跑 + 核心指标偏差校验」，偏差在阈值内才全量发布。</p>\n<h2>30 秒回答</h2>\n<p>灰度/双跑跑新旧逻辑，对比核心指标的偏差，阈值内（如 2%）全量发布，超过则阻断、排查。校验覆盖总量、分维度、数据量、及时性。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>双跑：新旧链路并行，对比核心指标</li>\n<li>阈值：偏差超阈值阻断，阈值内全量</li>\n<li>校验：核心指标、总量、分维度、数据量、SLA</li>\n<li>流程：双跑 -&gt; 对账 -&gt; 审批 -&gt; 全量 -&gt; 监控</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>偏差超阈值后怎么处理？</li>\n<li>全量发布后还要监控多久？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0027",
      "type": "technical",
      "question": "测试环境数据和生产环境数据是否一致",
      "topic": [
        "warehouse",
        "environment"
      ],
      "difficulty": 2,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>通常不一致：测试用脱敏/子集数据，但要保证 schema、口径和链路逻辑一致。</p>\n<h2>30 秒回答</h2>\n<p>测试环境一般用生产脱敏子集或造数，数据本身不等同生产；关键保证 schema、口径、代码链路一致，发布前再用生产子集或影子数据校验。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>数据：脱敏、子集、造数，不等于生产</li>\n<li>一致的部分：schema、口径、任务逻辑、配置</li>\n<li>发布前：用生产子集/影子流量验证</li>\n<li>原因：合规、成本、数据安全</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>怎么保证测试能代表生产？</li>\n<li>影子数据怎么做？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0028",
      "type": "technical",
      "question": "为什么选 X% 这个偏差阈值，逻辑是什么",
      "topic": [
        "warehouse",
        "metrics",
        "threshold"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>阈值是「业务可接受误差 + 数据自然波动 + 风险容忍」的平衡。</p>\n<h2>30 秒回答</h2>\n<p>阈值太严误报多、太松漏报多。按指标重要性分级设阈值：核心指标更严（如 1%-2%），一般指标放宽；结合业务可接受误差和历史波动定。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>业务可接受误差：多少偏差影响决策</li>\n<li>数据自然波动：口径差异、延迟、抽样误差</li>\n<li>风险容忍：核心指标严格，边缘指标放宽</li>\n<li>分级：核心 vs 一般指标不同阈值</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>阈值怎么动态调整？</li>\n<li>不同指标阈值怎么分级？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0029",
      "type": "technical",
      "question": "熔断和告警的策略是什么，哪些熔断、哪些只告警",
      "topic": [
        "warehouse",
        "data-quality",
        "alert"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>熔断阻断严重问题，告警提示一般异常，按影响面分级。</p>\n<h2>30 秒回答</h2>\n<p>熔断：核心链路、数据严重错误、SLA 风险、影响面大时直接阻断任务；告警：波动超阈值、非致命异常、及时性延迟时通知但不阻断。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>熔断场景：数据严重错误、核心指标异常、会污染下游、SLA 必违</li>\n<li>告警场景：波动超阈值、及时性延迟、非核心异常</li>\n<li>分级：核心指标熔断，一般指标告警</li>\n<li>原则：阻断要谨慎，避免误伤链路</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>熔断后怎么恢复？</li>\n<li>怎么避免误熔断？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0030",
      "type": "technical",
      "question": "交付层延迟时如何自动回溯定位上游任务，而不是每个任务单独加 DQC",
      "topic": [
        "warehouse",
        "lineage",
        "root-cause"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>用血缘 + 任务依赖 + 运行时长监控，交付层延迟时沿血缘向上回溯定位根因任务。</p>\n<h2>30 秒回答</h2>\n<p>基于任务血缘和依赖图，监控每个节点的完成时间和延迟，最终交付层延迟时自动向上回溯，找到最早延迟/失败的源头任务，而不是每个任务单独加 DQC。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>血缘：记录任务上下游依赖</li>\n<li>运行监控：每个任务的开始/结束时间、耗时</li>\n<li>回溯：交付层延迟 -&gt; 沿血缘向上找最早异常节点</li>\n<li>收益：一次定位根因，减少大量 DQC 配置</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>血缘图怎么构建？</li>\n<li>多上游同时延迟怎么定位？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0031",
      "type": "technical",
      "question": "当前数仓建模存在什么问题，有哪些可优化点",
      "topic": [
        "warehouse",
        "modeling",
        "governance"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-shopee-data-dev",
          "company": "虾皮",
          "position": "数据开发（二面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>常见问题是分层不规范、口径不统一、重复建表、公共层复用不足；优化围绕统一口径、标准建模和资产治理。</p>\n<h2>30 秒回答</h2>\n<p>问题：分层混乱、口径不统一、重复建表、粒度混乱、ADS 宽表膨胀、命名不规范、元数据缺失。优化：统一口径、标准分层、主题域建模、公共指标沉淀、资产平台、去重治理、血缘。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>口径：指标字典统一，避免同指标多口径</li>\n<li>分层：ODS/DWD/DWS/ADS 职责清晰</li>\n<li>建模：维度建模、主题域、粒度一致</li>\n<li>复用：DWS 公共汇总层沉淀，减少重复加工</li>\n<li>治理：资产平台、血缘、命名规范、去重</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>你怎么判断建模是否规范？</li>\n<li>公共层复用不足会带来什么？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0032",
      "type": "technical",
      "question": "你们建模的过程是怎样的",
      "topic": [
        "warehouse",
        "modeling",
        "process"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-shopee-data-dev",
          "company": "虾皮",
          "position": "数据开发（二面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>建模从需求澄清和口径定义开始，再定主题域、粒度、分层，最后维度建模并评审上线。</p>\n<h2>30 秒回答</h2>\n<p>需求澄清 -&gt; 指标拆解 -&gt; 定主题域和粒度 -&gt; 分层设计 -&gt; 维度建模（事实/维度/星型）-&gt; 命名规范 -&gt; 评审 -&gt; 开发 -&gt; 对账 -&gt; 上线。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>需求澄清：口径、维度、粒度、周期</li>\n<li>指标拆解：原子/派生/复合指标</li>\n<li>建模：事实表、维度表、星型模型</li>\n<li>评审：口径和复用性评审，避免重复</li>\n<li>上线：对账、监控</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>建模时先定粒度还是先定指标？</li>\n<li>评审主要看什么？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0033",
      "type": "technical",
      "question": "分层是怎么设计的",
      "topic": [
        "warehouse",
        "layering"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-shopee-data-dev",
          "company": "虾皮",
          "position": "数据开发（二面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>典型分层是 ODS 贴源 -&gt; DWD 明细 -&gt; DWS 汇总 -&gt; ADS 应用，再加 DIM 维表。</p>\n<h2>30 秒回答</h2>\n<p>ODS 保留原始数据；DWD 清洗成统一明细；DWS 按主题做公共汇总；ADS 面向应用做宽表；DIM 存维度属性。分层解耦、复用、可回溯。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>ODS：贴源、原样落地</li>\n<li>DWD：清洗、规范化、明细</li>\n<li>DWS：主题汇总、公共指标</li>\n<li>ADS：应用宽表</li>\n<li>DIM：维表</li>\n<li>原则：职责清晰、逐层收敛、公共层复用</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>为什么 DWD 不直接出应用结果？</li>\n<li>DWS 和 ADS 边界怎么划？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0034",
      "type": "technical",
      "question": "如何避免重复建表，别人不知道已有同一张表",
      "topic": [
        "warehouse",
        "governance",
        "duplicate"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-shopee-data-dev",
          "company": "虾皮",
          "position": "数据开发（二面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>靠资产平台登记、指标字典、命名规范和新建前检索，避免重复建表。</p>\n<h2>30 秒回答</h2>\n<p>资产平台登记所有表；指标字典查已有指标；命名规范便于检索；新建前先搜血缘和资产；统一建模评审；治理扫描发现重复。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>资产平台：表/指标唯一登记</li>\n<li>指标字典：查已有口径，避免另起炉灶</li>\n<li>血缘检索：新建前看是否已有</li>\n<li>命名规范：统一前缀便于识别</li>\n<li>评审 + 治理：扫描重复、合并</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>资产平台要记录哪些信息？</li>\n<li>怎么发现存量重复表？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0035",
      "type": "technical",
      "question": "既要需求快速上线，又要控制存储，如何平衡",
      "topic": [
        "warehouse",
        "architecture",
        "tradeoff"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-shopee-data-dev",
          "company": "虾皮",
          "position": "数据开发（二面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>用分层、分区、冷热分层和公共复用，在时效和存储之间找平衡。</p>\n<h2>30 秒回答</h2>\n<p>按数据冷热分层、TTL 清理过期分区、压缩格式、公共汇总层复用、物化视图预计算，热数据保留细粒度、冷数据归档压缩，兼顾时效和成本。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>时效：公共层复用、汇总预计算、减少重复加工</li>\n<li>存储：列式压缩、分区裁剪、TTL、冷热分层</li>\n<li>平衡：热数据细粒度、冷数据归档；按访问频率分级</li>\n<li>治理：下线无用表、去重、压缩格式</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>冷热分层怎么做？</li>\n<li>汇总层怎么帮到时效和存储？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0036",
      "type": "technical",
      "question": "口径变更时为什么新建表切换依赖，而不是直接改原表",
      "topic": [
        "warehouse",
        "metrics",
        "change"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-shopee-data-dev",
          "company": "虾皮",
          "position": "数据开发（二面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>新建表可回滚、可灰度、不污染历史，直接改原表会破坏历史和下游。</p>\n<h2>30 秒回答</h2>\n<p>新建表 + 切依赖：保留旧版本可回滚，新旧并行灰度对比，不污染历史，下游平滑切换。直接改原表：历史被覆盖、无法回滚、下游影响面大。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>新建表：旧表保留、可回滚、可对比、灰度切换</li>\n<li>原表改造：历史丢失、回滚难、下游风险大</li>\n<li>流程：新建 -&gt; 对账 -&gt; 切换依赖 -&gt; 观察 -&gt; 下线旧表</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>切换依赖具体怎么做？</li>\n<li>旧表保留多久？</li>\n</ul>"
    },
    {
      "id": "WAREHOUSE-0037",
      "type": "technical",
      "question": "搭建一条数据链路的整体思路是什么",
      "topic": [
        "warehouse",
        "data-pipeline"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-shopee-data-dev",
          "company": "虾皮",
          "position": "数据开发（二面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "warehouse",
      "body_html": "<h2>一句话</h2>\n<p>从业务需求和口径出发，倒推设计采集、建模、调度、质量和治理的完整链路。</p>\n<h2>30 秒回答</h2>\n<p>明确数据源和业务目标 -&gt; 定口径 -&gt; 采集/传输 -&gt; 分层建模 -&gt; 调度编排 -&gt; 质量监控 -&gt; 元数据/血缘 -&gt; 上线运维，过程中考虑复用和治理。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>需求：业务口径、指标、时效</li>\n<li>采集：数据源、接入方式、实时/离线</li>\n<li>建模：分层、事实/维度</li>\n<li>调度：依赖编排、SLA</li>\n<li>质量：DQC、对账、监控</li>\n<li>治理：元数据、血缘、成本</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>实时和离线链路怎么选？</li>\n<li>链路上最容易出问题的是哪一环？</li>\n</ul>"
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
      "id": "SQL-0006",
      "type": "technical",
      "question": "复杂 SQL 如何改写和优化",
      "topic": [
        "sql",
        "tuning",
        "rewrite"
      ],
      "difficulty": 3,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-21-pdd-data-dev",
          "company": "拼多多",
          "position": "数据开发（社招）",
          "date": "2026-09-21"
        }
      ],
      "domain": "sql",
      "body_html": "<h2>一句话</h2>\n<p>复杂 SQL 优化先看执行计划定位慢点，再用「少读、少 shuffle、少重复」的思路改写。</p>\n<h2>30 秒回答</h2>\n<p>谓词下推、列裁剪、join 重排序、小表广播、CTE 拆分复杂嵌套、避免重复子查询、减少 count(distinct)、用窗口函数替代多次自连接、避免笛卡尔积。</p>\n<h2>1 分钟回答</h2>\n<ul>\n<li>定位：执行计划、慢 task、数据倾斜、重复扫描、多次 shuffle</li>\n<li>优化：谓词下推、列裁剪、小表 broadcast、join 顺序</li>\n<li>改写：复杂嵌套改 CTE 分步、union all 合并、条件聚合、窗口函数去重</li>\n<li>去重：count(distinct) 改 group by 或两阶段去重</li>\n<li>缓存：复用中间结果用临时表/物化</li>\n<li>验证：执行计划、耗时、shuffle 量对比</li>\n</ul>\n<h2>追问</h2>\n<ul>\n<li>怎么判断要不要拆子查询？</li>\n<li>CTE 和子查询有什么区别？</li>\n<li>窗口函数和自连接怎么选？</li>\n</ul>"
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
    },
    {
      "id": "PROJECT-0010",
      "type": "project",
      "question": "自我介绍",
      "topic": [
        "project",
        "self-introduction"
      ],
      "difficulty": 1,
      "frequency": "high",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-08-27-alibaba-data-dev",
          "company": "阿里巴巴",
          "position": "数据开发（一面）",
          "date": "2026-08-27"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<p>控制 1-2 分钟，按「背景 -&gt; 经历 -&gt; 技术栈 -&gt; 匹配点」组织：</p>\n<ul>\n<li>背景：学历、方向、工作/实习年限</li>\n<li>经历：1-2 个最有代表性的项目，一句话讲清业务和价值</li>\n<li>技术栈：数仓、Spark/Flink、SQL、平台等</li>\n<li>匹配点：为什么适合这个岗位</li>\n</ul>\n<p>原则：突出与岗位相关的经历，留出追问钩子，不要背简历。</p>\n<h2>待补充（真实经历）</h2>\n<blockquote>按你自己真实经历填写。</blockquote>"
    },
    {
      "id": "PROJECT-0011",
      "type": "project",
      "question": "介绍你项目的框架",
      "topic": [
        "project",
        "architecture"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-08-27-alibaba-data-dev",
          "company": "阿里巴巴",
          "position": "数据开发（一面）",
          "date": "2026-08-27"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<p>按「数据链路 -&gt; 分层 -&gt; 技术组件 -&gt; 你负责的部分」讲：</p>\n<ul>\n<li>数据源：日志、DB binlog、埋点</li>\n<li>链路：采集 -&gt; 消息 -&gt; 实时/离线计算 -&gt; 存储 -&gt; 应用</li>\n<li>分层：ODS/DWD/DWS/ADS，实时与离线怎么结合</li>\n<li>组件：Kafka、Flink、Spark、Doris/ClickHouse 等</li>\n<li>职责：你负责哪一段、做了哪些设计</li>\n</ul>\n<h2>待补充（真实经历）</h2>\n<blockquote>用你自己的项目架构替换，画清楚数据怎么流转。</blockquote>"
    },
    {
      "id": "PROJECT-0012",
      "type": "project",
      "question": "项目每天的数据量是多少",
      "topic": [
        "project",
        "data-volume"
      ],
      "difficulty": 1,
      "frequency": "medium",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-08-27-alibaba-data-dev",
          "company": "阿里巴巴",
          "position": "数据开发（一面）",
          "date": "2026-08-27"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<p>从多个维度量化，别只说一个数字：</p>\n<ul>\n<li>日增量 / 总量</li>\n<li>峰值 QPS、每秒条数</li>\n<li>核心表行数、存储量</li>\n<li>任务数量、任务时长</li>\n<li>分区数、数据倾斜情况</li>\n</ul>\n<p>原则：给出量级 + 关键峰值 + 与业务挂钩，体现你对规模的感知。</p>\n<h2>待补充（真实经历）</h2>\n<blockquote>填你项目的真实数据量级。</blockquote>"
    },
    {
      "id": "PROJECT-0013",
      "type": "project",
      "question": "自我介绍",
      "topic": [
        "project",
        "self-introduction"
      ],
      "difficulty": 1,
      "frequency": "high",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-23-anker-data",
          "company": "安克创新",
          "position": "数据岗（一面）",
          "date": "2026-09-23"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<p>1-2 分钟，按「背景 -&gt; 重点经历 -&gt; 技术栈 -&gt; 匹配点」组织，突出与数据岗/StarRocks/Agent 相关的部分，留追问钩子。</p>\n<h2>待补充（真实经历）</h2>\n<blockquote>按你自己真实经历填写。</blockquote>"
    },
    {
      "id": "PROJECT-0014",
      "type": "project",
      "question": "讲一下你重点做的项目",
      "topic": [
        "project",
        "highlight"
      ],
      "difficulty": 2,
      "frequency": "high",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-23-anker-data",
          "company": "安克创新",
          "position": "数据岗（一面）",
          "date": "2026-09-23"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<p>选 1 个最能体现能力、最熟的项目，用 STAR 结构讲透：背景 -&gt; 目标 -&gt; 方案 -&gt; 你的职责 -&gt; 结果 -&gt; 难点。</p>\n<h2>待补充（真实经历）</h2>\n<blockquote>建议挑和 StarRocks / 数仓 / Agent 相关的项目重点展开。</blockquote>"
    },
    {
      "id": "PROJECT-0015",
      "type": "project",
      "question": "介绍",
      "topic": [
        "project",
        "self-introduction"
      ],
      "difficulty": 1,
      "frequency": "high",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<p>按背景、重点经历、技术栈、匹配点组织，突出数据平台/数仓/Agent 相关经历。</p>\n<h2>待补充（真实经历）</h2>"
    },
    {
      "id": "PROJECT-0016",
      "type": "project",
      "question": "你是做数据平台/中台开发，还是业务 ETL 开发，还是两者都做",
      "topic": [
        "project",
        "role"
      ],
      "difficulty": 1,
      "frequency": "medium",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<p>诚实说明你的定位：平台/中台（通用能力、工具、治理）还是业务 ETL（具体业务需求交付），或两者兼做；举例说明工作内容占比和产出。</p>\n<h2>待补充（真实经历）</h2>"
    },
    {
      "id": "PROJECT-0017",
      "type": "project",
      "question": "中台推广 AI 产品，业务团队抵触吗，推进落地遇到什么困难",
      "topic": [
        "project",
        "ai-product",
        "adoption"
      ],
      "difficulty": 2,
      "frequency": "medium",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<ul>\n<li>抵触来源：改变习惯、信任不足、效果不确定、增加工作量</li>\n<li>应对：找种子用户、用效果说话、降低使用门槛、及时响应反馈</li>\n<li>困难：推广难、需求分散、作为实习生的影响力有限</li>\n</ul>\n<h2>待补充（真实经历）</h2>"
    },
    {
      "id": "PROJECT-0018",
      "type": "project",
      "question": "业务反馈零散、表象不同根因一致，怎么抽象归类",
      "topic": [
        "project",
        "abstraction"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<p>先收集归纳，再找共同根因：把表象问题归到「意图识别 / 检索召回 / 幻觉 / 权限 / 数据口径」等底层类别，形成分类树，避免逐个打补丁。</p>\n<h2>待补充（真实经历）</h2>"
    },
    {
      "id": "PROJECT-0019",
      "type": "project",
      "question": "有没有你自主开发的 Agent，介绍一下",
      "topic": [
        "project",
        "agent"
      ],
      "difficulty": 3,
      "frequency": "medium",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<p>按「背景 -&gt; 目标 -&gt; 方案（工具调用/RAG/流程）-&gt; 你的职责 -&gt; 效果」讲一个自己主导的 Agent 项目，突出自主设计而非单纯调用。</p>\n<h2>待补充（真实经历）</h2>"
    },
    {
      "id": "PROJECT-0020",
      "type": "project",
      "question": "你对我们团队有什么想了解的（反问）",
      "topic": [
        "project",
        "reverse-question"
      ],
      "difficulty": 1,
      "frequency": "high",
      "source_type": "ai_generated",
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
          "company": "美团",
          "position": "数据开发（一面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<p>反问围绕「团队 + 业务 + 成长」，例如：团队规模和组织架构、这个岗位 AI 相关职责与规划、当前技术栈和主要挑战。</p>\n<h2>注意</h2>\n<p>结合面试内容问，展示你关心业务和成长，别只问薪资福利。</p>"
    },
    {
      "id": "PROJECT-0021",
      "type": "project",
      "question": "请做一下自我介绍",
      "topic": [
        "project",
        "self-introduction"
      ],
      "difficulty": 1,
      "frequency": "high",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-shopee-data-dev",
          "company": "虾皮",
          "position": "数据开发（二面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<p>背景、重点经历、技术栈、匹配点，突出数仓和 Agent 相关能力。</p>\n<h2>待补充（真实经历）</h2>"
    },
    {
      "id": "PROJECT-0022",
      "type": "project",
      "question": "你最擅长哪部分",
      "topic": [
        "project",
        "strength"
      ],
      "difficulty": 1,
      "frequency": "medium",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-shopee-data-dev",
          "company": "虾皮",
          "position": "数据开发（二面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<p>选一个最能打的点（如数仓建模、口径治理、性能优化、Agent），讲清楚做得深、有结果的地方。</p>\n<h2>待补充（真实经历）</h2>"
    },
    {
      "id": "PROJECT-0023",
      "type": "project",
      "question": "对比其他人，你的突出优势是什么",
      "topic": [
        "project",
        "strength"
      ],
      "difficulty": 2,
      "frequency": "medium",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-shopee-data-dev",
          "company": "虾皮",
          "position": "数据开发（二面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<p>用具体案例证明优势，而不是空说：全链路思维、治理视角、AI 结合、主动性等，都要落到一个成果上。</p>\n<h2>待补充（真实经历）</h2>"
    },
    {
      "id": "PROJECT-0024",
      "type": "project",
      "question": "在 AI 使用上，你相比其他人的优势在哪里",
      "topic": [
        "project",
        "ai",
        "strength"
      ],
      "difficulty": 2,
      "frequency": "medium",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-shopee-data-dev",
          "company": "虾皮",
          "position": "数据开发（二面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<p>结合具体场景说清楚：会用 Agent/Skill 提效、会评测、能把 AI 落到数据开发流程，而不只是用 ChatGPT 聊天。</p>\n<h2>待补充（真实经历）</h2>"
    },
    {
      "id": "PROJECT-0025",
      "type": "project",
      "question": "你是做 AI 模型，还是 Agent 这类平台",
      "topic": [
        "project",
        "ai",
        "role"
      ],
      "difficulty": 1,
      "frequency": "medium",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-shopee-data-dev",
          "company": "虾皮",
          "position": "数据开发（二面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<p>诚实说明定位：调模型/做 RAG/做 Agent 应用，而不是训练模型；重点讲清楚自己在 Agent 平台里的角色和产出。</p>\n<h2>待补充（真实经历）</h2>"
    },
    {
      "id": "PROJECT-0026",
      "type": "project",
      "question": "没看底层代码，你是怎么学习 Agent 执行流程的",
      "topic": [
        "project",
        "learning"
      ],
      "difficulty": 2,
      "frequency": "medium",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-shopee-data-dev",
          "company": "虾皮",
          "position": "数据开发（二面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<p>通过文档、API、日志、运行现象、官方教程、源码跳读逐步理解，再用实验验证理解，而不是只看代码。</p>\n<h2>待补充（真实经历）</h2>"
    },
    {
      "id": "PROJECT-0027",
      "type": "project",
      "question": "你怎么快速学习业务知识",
      "topic": [
        "project",
        "learning"
      ],
      "difficulty": 2,
      "frequency": "medium",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-shopee-data-dev",
          "company": "虾皮",
          "position": "数据开发（二面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<p>先看文档和指标字典，再找懂业务的人对齐口径，结合数据表、报表和实际案例，快速建立业务认知。</p>\n<h2>待补充（真实经历）</h2>"
    },
    {
      "id": "PROJECT-0028",
      "type": "project",
      "question": "平时还在学习哪些新知识",
      "topic": [
        "project",
        "learning"
      ],
      "difficulty": 1,
      "frequency": "medium",
      "source_type": "ai_generated",
      "needs_personal_input": true,
      "sources": [
        {
          "interview_id": "INTERVIEW-2026-09-24-shopee-data-dev",
          "company": "虾皮",
          "position": "数据开发（二面）",
          "date": "2026-09-24"
        }
      ],
      "domain": "project",
      "body_html": "<h2>回答框架</h2>\n<p>结合岗位说学习方向：数据湖、实时计算、Agent/RAG、大模型应用等，体现持续学习和与业务结合。</p>\n<h2>待补充（真实经历）</h2>"
    }
  ],
  "interviews": [
    {
      "interview_id": "INTERVIEW-2026-09-24-meituan-data-dev",
      "company": "美团",
      "business": "餐饮 SaaS（B 端）",
      "position": "数据开发（一面）",
      "date": "2026-09-24",
      "round": "一面",
      "body_html": "<h2>面经记录（原始）</h2>\n<ol>\n<li>介绍</li>\n<li>你是做数据平台/中台开发，还是业务 ETL 开发，还是两者都做</li>\n<li>一百多张表有没有主题划分，简单介绍</li>\n<li>项目中的指标你们是怎么对比的</li>\n<li>核心指标偏差 2% 就全量发布，离线任务的发布校验怎么规定</li>\n<li>测试环境数据和生产环境数据是否一致</li>\n<li>为什么选 X% 这个偏差阈值，逻辑是什么</li>\n<li>识别到数据倾斜后，加盐处理怎么做，如何缓解</li>\n<li>怎么发现数据倾斜，定位倾斜位置</li>\n<li>Spark UI 某个 stage 运行久、数据量大，怎么定位是哪段代码</li>\n<li>除数据倾斜外还做过哪些性能优化</li>\n<li>熔断和告警策略是什么，哪些熔断、哪些只告警</li>\n<li>有没有「最终交付层就绪延迟时自动回溯上游定位任务」的机制，而不是每个任务单独加 DQC</li>\n<li>简历提到 Hudi，有实际使用吗</li>\n<li>LSM-Tree 大概是什么</li>\n<li>项目里 AI Agent 主要用在哪些方面</li>\n<li>中台角色推广 AI 产品，业务团队会不会抵触，推进落地遇到什么困难</li>\n<li>业务反馈零散输入、表象不同根因一致，怎么抽象归类</li>\n<li>怎么对 bad case 分类，有哪些类别</li>\n<li>会不会继续追溯：意图识别、检索召回、幻觉、权限问题，这些底层问题会归类吗</li>\n<li>了解大模型幻觉吗，怎么减少幻觉</li>\n<li>有没有自主开发的 Agent，介绍一下</li>\n<li>文档接入 Agent 时，是把文档处理成向量库吗</li>\n<li>准确率提升超过 20%，怎么验证</li>\n<li>测试集规模多大，怎么定义「准确/不准确」</li>\n<li>数据库索引了解吗</li>\n<li>介绍一下 Iceberg</li>\n<li>Iceberg 的组成、元数据结构了解多少</li>\n<li>Iceberg 解决了传统 Hive 的哪些问题，还有哪些没覆盖</li>\n<li>Copy-on-Write 的概念</li>\n<li>一道简单的 Agent Skill 相关题目</li>\n<li>反问：数据团队规模/架构；岗位 AI 相关职责与规划</li>\n</ol>\n<blockquote>备注：美团数据开发一面，餐饮 SaaS 面向 B 端。面试官提到：今年开始简单数据需求要求用 Agent 开发，统计 Agent 开发覆盖率。</blockquote>"
    },
    {
      "interview_id": "INTERVIEW-2026-09-24-shopee-data-dev",
      "company": "虾皮",
      "business": "数据开发",
      "position": "数据开发（二面）",
      "date": "2026-09-24",
      "round": "二面",
      "body_html": "<h2>面经记录（原始）</h2>\n<ol>\n<li>自我介绍</li>\n<li>你最擅长哪部分</li>\n<li>你的项目是离线数仓，当前数仓建模存在什么问题，有哪些可优化点</li>\n<li>你们建模的过程是怎样的</li>\n<li>分层是怎么设计的</li>\n<li>如何避免重复建表（别人不知道已有同一张表，重复新建）</li>\n<li>数据架构和治理角度，业务要快上线、资源又紧张，既要时效又要控存储，如何平衡</li>\n<li>口径变更时，为什么新建表切换依赖，而不是直接在原表改造</li>\n<li>搭建这条数据链路的整体思路是什么</li>\n<li>对比其他人，你的突出优势是什么</li>\n<li>优势是全链路思维，那在 AI 使用上你的优势在哪</li>\n<li>你是做 AI 模型，还是 Agent 这类平台</li>\n<li>你学到了什么，智能问数 Agent 存在哪些问题</li>\n<li>从架构和实现上，智能问数 Agent 是怎么做的</li>\n<li>检索增强时，怎么检索到和业务意图最匹配的片段</li>\n<li>跨业务域查询，怎么规范跨域错误调用</li>\n<li>没看底层代码，你是怎么学习 Agent 执行流程的</li>\n<li>你怎么快速学习业务知识</li>\n<li>平时还在学习哪些新知识</li>\n</ol>\n<blockquote>备注：虾皮数据开发二面。</blockquote>"
    },
    {
      "interview_id": "INTERVIEW-2026-09-23-anker-data",
      "company": "安克创新",
      "business": "数据岗",
      "position": "数据岗（一面）",
      "date": "2026-09-23",
      "round": "一面",
      "body_html": "<h2>面经记录（原始）</h2>\n<ol>\n<li>自我介绍</li>\n<li>讲一下你重点做的</li>\n<li>你怎么做的数据查询优化</li>\n<li>怎么设置分区分桶排序键</li>\n<li>StarRocks 有哪些数据模型</li>\n<li>主键模型和明细模型你们使用的场景是什么</li>\n<li>主键模型数据更新的流程</li>\n<li>你们使用的 StarRocks 集群的存储架构是怎么样的</li>\n<li>存算分离和存算一体的区别</li>\n<li>你们 StarRocks 为什么要做存算分离，有什么好处</li>\n<li>StarRocks 有哪些结构组成</li>\n<li>你们做的 skills 是什么，有什么作用，具体怎么写的</li>\n<li>你做这个数据集评测的作用是什么</li>\n<li>有没有什么指标能够量化你做的 skills 和评测</li>\n</ol>\n<blockquote>个人感受：面试官是数据开发出身，对 StarRocks 和 Agent 很熟悉。</blockquote>"
    },
    {
      "interview_id": "INTERVIEW-2026-09-21-jiukun-data-dev",
      "company": "九坤",
      "business": "数据开发",
      "position": "数据开发（一面）",
      "date": "2026-09-21",
      "round": "一面",
      "body_html": "<h2>面经记录（原始）</h2>\n<blockquote>问了三四次退款场景，整体覆盖：退款指标、场景优化与原理、实时回刷、大模型取数权限/准确率、知识库与元数据维护。</blockquote>\n<ol>\n<li>项目：下单取消 / 申请退款影响哪些指标；退款怎么处理</li>\n<li>任务运行涨到 2 小时，数据量只增 15%，少数 task 慢，平均 CPU 40%，如何排查</li>\n<li>调优增加并行度、executor 数量翻倍，总是有效吗</li>\n<li>如何区分数据倾斜，还是单纯某个节点硬件慢或 IO 问题</li>\n<li>确定热点 key，加盐打散是不是永远有效？生效 / 不生效原因</li>\n<li>join 和 group by 倾斜，处理方式的差异</li>\n<li>结合执行计划：salt 加盐、broadcast 广播 join、hash join 区别；广播时内存是谁的内存</li>\n<li>跨天退款：今天申请退款第二天完成 / 今日下单次日退款，计算日交易额，如何避免重复扣减</li>\n<li>Doris 白天每隔几秒写一批查询延迟高，晚上停止写入查询恢复，说下大概原因；改成每分钟一批，查询立刻变快吗，说明什么</li>\n<li>ADS 表支持聚合查询，订单/退款修订，表 key 如何设计；解释分区分桶区别</li>\n<li>Kafka-Flink 中间状态设计：订单流迟到事件、重复发送，维护订单最新状态；退款下单后又退款、数据迟到，如何准确判断订单最新状态，状态怎么维护</li>\n<li>CPU 整体 45%，某一 subtask 长期满载、产生上游反压，排查和解决；为什么反压会导致 checkpoint barrier 阻塞</li>\n<li>实时作业修改口径，回刷近七天历史怎么做；实时持续消费新数据如何避免互相覆盖；回刷失败/口径再调整如何切回旧版本</li>\n<li>知识库准确率指标怎么算，测试集是什么；大模型产出两个 SQL 写法不同、结果相同如何判定</li>\n<li>上游字段改名、schema 变更、数据库维护、旧版本维护降级</li>\n<li>大模型取数权限控制完整链路：提交查询到返回结果整个流程权限校验</li>\n</ol>\n<blockquote>备注：九坤数开一面，社招，北京。</blockquote>"
    },
    {
      "interview_id": "INTERVIEW-2026-09-21-pdd-data-dev",
      "company": "拼多多",
      "business": "数据开发",
      "position": "数据开发（社招）",
      "date": "2026-09-21",
      "round": "一面",
      "body_html": "<h2>面经记录（原始）</h2>\n<ol>\n<li>分层建设，DWS 和 ADS 最主要的差异（追问：两层都在算指标，核心区别；哪些逻辑放 ADS、哪些放 DWS；仅仅只是粒度不同？分层判断依据。答：DWS 可给其他团队复用）</li>\n<li>DWS 口径是公用的，如何统一维护、保证大家口径对齐（文档、不同层级比对、质量监控，容易漏的是：录入资产平台）</li>\n<li>口径变更迭代的完整流程（需补充后续监控）</li>\n<li>DWS 和 ADS 都提到维度退化，到底在哪一层做？什么场景需要，有什么优势和缺陷</li>\n<li>数据倾斜定位、常见场景，两张大表 join 倾斜怎么处理</li>\n<li>Spark 执行过程，map/shuffle/reduce 具体做什么；统计 city 的 user_id 数，每个步骤输出什么（select city_id, count(distinct user_id) group by city）</li>\n<li>小文件，及治理前后效果</li>\n<li>复杂 SQL 改写及优化</li>\n<li>重复计算如何发现、典型问题，如何推动治理下线/合并</li>\n<li>存储治理项目及效果</li>\n<li>数据质量整体保障（完整性/准确性/一致性/及时性，事前事中事后）；误报漏报怎么处理；追问：什么样的规则实际中更能发现问题</li>\n</ol>\n<blockquote>备注：社招一面，拼多多数据开发。</blockquote>"
    },
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
    },
    {
      "interview_id": "INTERVIEW-2026-08-27-alibaba-data-dev",
      "company": "阿里巴巴",
      "business": "数据开发",
      "position": "数据开发（一面）",
      "date": "2026-08-27",
      "round": "一面",
      "body_html": "<h2>面经记录（原始）</h2>\n<ol>\n<li>自我介绍</li>\n<li>介绍项目的框架</li>\n<li>湖仓一体和纯数仓的区别是什么</li>\n<li>数据回滚怎么处理</li>\n<li>项目每天的数据量是多少</li>\n<li>粒度是什么</li>\n<li>链路性能优化是做什么</li>\n<li>Flink 如何保证数据被精准一次地消费</li>\n<li>星型模型和雪花模型，各自适合用在哪些场景</li>\n<li>三范式的概念了解吗</li>\n<li>那你觉得数仓的表是符合三范式的吗</li>\n<li>手撕：直播间最多人数对应时刻（变式）</li>\n</ol>\n<blockquote>备注：阿里数开一面，北京。</blockquote>"
    }
  ]
};
