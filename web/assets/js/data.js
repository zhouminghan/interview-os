window.OS_DATA = {
  "generatedAt": "2026-09-23T15:29:52+08:00",
  "stats": {
    "questions": 13,
    "interviews": 1,
    "technical": 11,
    "project": 2,
    "domains": {
      "warehouse": 7,
      "sql": 4,
      "project": 2
    }
  },
  "domains": {
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
    }
  ]
};
