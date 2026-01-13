/**
 * 题库数据 - 包含各书籍的问题
 */
const QUESTIONS_DATA = {
    chuanxilu: [
        // 第一关：初识心学
        {
            id: 'cx001',
            level: 1,
            question: '王阳明心学的核心概念是什么？',
            options: ['格物致知', '致良知', '存天理灭人欲', '知识即美德'],
            correctIndex: 1,
            explanation: '"致良知"是王阳明心学的核心，指通过自我修养发现和实现内心的良知。'
        },
        {
            id: 'cx002',
            level: 1,
            question: '王阳明提出的"知行合一"是什么意思？',
            options: ['先知后行', '知识和行动是统一的', '只需要知道不需要行动', '行动比知识重要'],
            correctIndex: 1,
            explanation: '知行合一强调真正的知识必然包含行动，知而不行只是未知。'
        },
        {
            id: 'cx003',
            level: 1,
            question: '王阳明是哪个朝代的思想家？',
            options: ['宋朝', '元朝', '明朝', '清朝'],
            correctIndex: 2,
            explanation: '王阳明（1472-1529）是明代著名的思想家、哲学家、军事家。'
        },
        // 第二关：格物之惑
        {
            id: 'cx004',
            level: 2,
            question: '王阳明年轻时曾"格竹子"七天，这个故事说明了什么？',
            options: ['格物致知的方法是正确的', '通过观察外物无法获得真理', '竹子没有道理可格', '需要更长时间格物'],
            correctIndex: 1,
            explanation: '这个经历让王阳明认识到，道理不在外物中，而在人心中。'
        },
        {
            id: 'cx005',
            level: 2,
            question: '"心即理"的含义是什么？',
            options: ['心脏就是道理', '天理存在于人心之中', '只要想就能做到', '心理学研究'],
            correctIndex: 1,
            explanation: '心即理强调道德准则和天理都源于人的本心，不需要外求。'
        },
        {
            id: 'cx006',
            level: 2,
            question: '朱熹的"格物致知"与王阳明的不同在于？',
            options: ['朱熹主张向外求理，王阳明主张向内求理', '两者完全相同', '王阳明反对学习', '朱熹不讲格物'],
            correctIndex: 0,
            explanation: '朱熹认为理在事物中，要格物穷理；王阳明认为理在心中，要致良知。'
        },
        // 第三关：龙场悟道（BOSS关）
        {
            id: 'cx007',
            level: 3,
            question: '王阳明在龙场悟道时领悟到的核心思想是什么？',
            options: ['功名利禄', '圣人之道，吾性自足', '天命不可违', '服从权威'],
            correctIndex: 1,
            explanation: '龙场悟道让王阳明认识到成圣的道理不假外求，人人本具良知。'
        },
        {
            id: 'cx008',
            level: 3,
            question: '龙场位于今天的哪个省份？',
            options: ['江西省', '浙江省', '贵州省', '云南省'],
            correctIndex: 2,
            explanation: '龙场位于今贵州省贵阳市修文县，王阳明被贬至此。'
        },
        {
            id: 'cx009',
            level: 3,
            question: '王阳明被贬龙场的原因是？',
            options: ['贪污腐败', '军事失败', '得罪宦官刘瑾', '科举舞弊'],
            correctIndex: 2,
            explanation: '王阳明因上疏营救被宦官刘瑾迫害的官员，触怒刘瑾而被贬。'
        },
        {
            id: 'cx010',
            level: 3,
            question: '"破山中贼易，破心中贼难"这句话的含义是？',
            options: ['山中的贼很少', '改变自己内心的私欲比外在征战更难', '不应该剿灭山贼', '心理疾病难治'],
            correctIndex: 1,
            explanation: '王阳明强调克服内心的私欲比消灭外部的敌人更加困难和重要。'
        },
        // 第四关：知行之辩
        {
            id: 'cx011',
            level: 4,
            question: '根据"知行合一"，如果一个人知道孝顺却不孝顺父母，说明什么？',
            options: ['他知道但做不到', '他其实不是真的知道', '他没有时间', '孝顺不重要'],
            correctIndex: 1,
            explanation: '王阳明认为，真知必能行，知而不行只是未知。'
        },
        {
            id: 'cx012',
            level: 4,
            question: '"知是行之始，行是知之成"的意思是？',
            options: ['先学习再实践', '知识和行动相互促进、不可分割', '知道就是做到', '行动不需要知识'],
            correctIndex: 1,
            explanation: '这句话强调知与行是一个整体过程，互为始终。'
        },
        {
            id: 'cx013',
            level: 4,
            question: '王阳明反对的是什么样的"知"？',
            options: ['科学知识', '脱离实践的空谈', '历史知识', '技术知识'],
            correctIndex: 1,
            explanation: '王阳明批评那种只停留在口头上、不付诸实践的虚假知识。'
        },
        // 第五关：良知之光
        {
            id: 'cx014',
            level: 5,
            question: '王阳明所说的"良知"指的是什么？',
            options: ['后天学习的知识', '人天生具有的道德意识', '聪明智慧', '社会规范'],
            correctIndex: 1,
            explanation: '良知是人天生具有的、能够判断是非善恶的道德本能。'
        },
        {
            id: 'cx015',
            level: 5,
            question: '"良知"这个概念最早出自哪部经典？',
            options: ['论语', '孟子', '大学', '中庸'],
            correctIndex: 1,
            explanation: '良知概念源于《孟子》："人之所不学而能者，其良能也；所不虑而知者，其良知也。"'
        },
        {
            id: 'cx016',
            level: 5,
            question: '"致良知"中的"致"是什么意思？',
            options: ['达到、实现', '学习', '放弃', '怀疑'],
            correctIndex: 0,
            explanation: '致是实现、达到的意思，致良知就是把良知实现出来。'
        },
        {
            id: 'cx017',
            level: 5,
            question: '王阳明认为阻碍良知的主要因素是什么？',
            options: ['知识不足', '私欲遮蔽', '环境恶劣', '命运不好'],
            correctIndex: 1,
            explanation: '私欲如同灰尘遮蔽明镜，去除私欲，良知自然显现。'
        },
        // 第六关：破山中贼（BOSS关）
        {
            id: 'cx018',
            level: 6,
            question: '王阳明平定了哪场重大叛乱？',
            options: ['安史之乱', '宁王之乱', '靖难之役', '三藩之乱'],
            correctIndex: 1,
            explanation: '王阳明在35天内平定了宁王朱宸濠的叛乱，展现了卓越的军事才能。'
        },
        {
            id: 'cx019',
            level: 6,
            question: '王阳明用兵的特点是什么？',
            options: ['以多胜少', '用正不用奇', '以奇制胜、攻心为上', '蛮力强攻'],
            correctIndex: 2,
            explanation: '王阳明善用奇谋，注重攻心，以少胜多。'
        },
        {
            id: 'cx020',
            level: 6,
            question: '"此心不动，随机而动"体现了什么境界？',
            options: ['麻木不仁', '心如止水又能灵活应变', '犹豫不决', '冲动行事'],
            correctIndex: 1,
            explanation: '这是王阳明的修养境界，内心宁静而能随机应变。'
        },
        {
            id: 'cx021',
            level: 6,
            question: '王阳明认为用兵与心学的关系是？',
            options: ['毫无关系', '用兵是心学的实践运用', '用兵违背心学', '心学阻碍用兵'],
            correctIndex: 1,
            explanation: '王阳明将心学思想运用于军事实践，知行合一。'
        },
        // 第七关：四句教法
        {
            id: 'cx022',
            level: 7,
            question: '王阳明"四句教"的第一句是什么？',
            options: ['无善无恶心之体', '有善有恶意之动', '知善知恶是良知', '为善去恶是格物'],
            correctIndex: 0,
            explanation: '四句教：无善无恶心之体，有善有恶意之动，知善知恶是良知，为善去恶是格物。'
        },
        {
            id: 'cx023',
            level: 7,
            question: '"无善无恶心之体"是什么意思？',
            options: ['人性本恶', '人性本善', '心的本体超越善恶分别', '善恶不分'],
            correctIndex: 2,
            explanation: '心之本体是纯粹的、未被污染的，超越了善恶的对立。'
        },
        {
            id: 'cx024',
            level: 7,
            question: '"为善去恶是格物"的含义是？',
            options: ['研究事物', '做好事去坏事就是修养的功夫', '善恶不重要', '只做好事'],
            correctIndex: 1,
            explanation: '格物在王阳明这里是正心的功夫，即存善念去恶念。'
        },
        // 第八关：天泉证道
        {
            id: 'cx025',
            level: 8,
            question: '天泉证道是王阳明与谁的对话？',
            options: ['朱熹', '王龙溪和钱德洪', '皇帝', '佛教高僧'],
            correctIndex: 1,
            explanation: '天泉证道是王阳明在天泉桥与两位弟子王龙溪、钱德洪论道。'
        },
        {
            id: 'cx026',
            level: 8,
            question: '王阳明的弟子王龙溪持什么观点？',
            options: ['四有说', '四无说', '否定良知', '回归朱熹'],
            correctIndex: 1,
            explanation: '王龙溪主张"四无"，认为心、意、知、物皆无善无恶。'
        },
        {
            id: 'cx027',
            level: 8,
            question: '钱德洪持什么观点？',
            options: ['四无说', '四有说', '否定心学', '折中调和'],
            correctIndex: 1,
            explanation: '钱德洪主张"四有"，强调功夫修养的重要性。'
        },
        {
            id: 'cx028',
            level: 8,
            question: '王阳明对两位弟子观点的态度是？',
            options: ['只认可王龙溪', '只认可钱德洪', '两者各有所长，因人而异', '两者都错'],
            correctIndex: 2,
            explanation: '王阳明认为两说各有针对，可因材施教。'
        },
        // 第九关：心外无物
        {
            id: 'cx029',
            level: 9,
            question: '"心外无物"的真正含义是？',
            options: ['外部世界不存在', '一切事物的意义和价值源于心的赋予', '唯我独尊', '否定科学'],
            correctIndex: 1,
            explanation: '心外无物强调事物与心的关联，不是否定外物存在。'
        },
        {
            id: 'cx030',
            level: 9,
            question: '王阳明说"你未看此花时，此花与汝心同归于寂"，说明什么？',
            options: ['花不存在', '心与物相互感应', '人比花重要', '不要看花'],
            correctIndex: 1,
            explanation: '这说明心与物的关系是相互感应、相互成就的。'
        },
        {
            id: 'cx031',
            level: 9,
            question: '"心外无理"与"心即理"的关系是？',
            options: ['完全矛盾', '同一思想的不同表述', '前者正确后者错误', '没有关系'],
            correctIndex: 1,
            explanation: '两者都表达天理在心中，不需外求的核心思想。'
        },
        {
            id: 'cx032',
            level: 9,
            question: '王阳明心学与佛教的区别是？',
            options: ['完全相同', '心学否定外物，佛教不否定', '心学肯定日常生活和社会责任', '没有区别'],
            correctIndex: 2,
            explanation: '心学强调在日常生活和社会责任中修行，不脱离人伦。'
        },
        // 第十关：此心光明（BOSS关）
        {
            id: 'cx033',
            level: 10,
            question: '王阳明临终遗言是什么？',
            options: ['吾道已成', '此心光明，亦复何言', '心学无用', '后悔一生'],
            correctIndex: 1,
            explanation: '"此心光明，亦复何言"表达了王阳明一生追求的境界。'
        },
        {
            id: 'cx034',
            level: 10,
            question: '王阳明心学对后世的影响是？',
            options: ['毫无影响', '影响了日本明治维新、中国思想界', '只影响了明朝', '被完全否定'],
            correctIndex: 1,
            explanation: '心学深刻影响了东亚思想史，日本明治维新领袖多受其影响。'
        },
        {
            id: 'cx035',
            level: 10,
            question: '"立志、勤学、改过、责善"是王阳明给谁的建议？',
            options: ['皇帝', '弟子', '儿子', '敌人'],
            correctIndex: 1,
            explanation: '这是王阳明教导弟子修身的四个要点。'
        },
        {
            id: 'cx036',
            level: 10,
            question: '学习王阳明心学最重要的是？',
            options: ['背诵经典', '在生活中实践致良知', '考试拿高分', '与人辩论'],
            correctIndex: 1,
            explanation: '心学强调实践，要在日常生活中体认和实现良知。'
        },
        {
            id: 'cx037',
            level: 10,
            question: '王阳明被后人尊称为？',
            options: ['文圣', '武圣', '完人', '愚人'],
            correctIndex: 2,
            explanation: '王阳明立德、立功、立言三不朽，被誉为真正的完人。'
        }
    ],

    maoxuan: [
        // 第一关：星火燎原
        {
            id: 'mx001',
            level: 1,
            question: '"星星之火，可以燎原"这句话出自哪篇文章？',
            options: ['湖南农民运动考察报告', '中国的红色政权为什么能够存在', '星星之火，可以燎原', '论持久战'],
            correctIndex: 2,
            explanation: '这是1930年毛泽东写给林彪的信，后发表为《星星之火，可以燎原》。'
        },
        {
            id: 'mx002',
            level: 1,
            question: '毛泽东认为中国革命的主要力量是？',
            options: ['资产阶级', '工人阶级', '农民', '知识分子'],
            correctIndex: 2,
            explanation: '毛泽东强调农民是中国革命的主力军。'
        },
        {
            id: 'mx003',
            level: 1,
            question: '"枪杆子里面出政权"强调的是什么？',
            options: ['暴力万能', '武装斗争的重要性', '和平过渡', '文化革命'],
            correctIndex: 1,
            explanation: '这句话强调在半殖民地半封建社会，武装斗争是革命的主要形式。'
        },
        // 第二关：湖南农民运动
        {
            id: 'mx004',
            level: 2,
            question: '《湖南农民运动考察报告》发表于哪一年？',
            options: ['1925年', '1927年', '1929年', '1931年'],
            correctIndex: 1,
            explanation: '这篇重要文献发表于1927年3月。'
        },
        {
            id: 'mx005',
            level: 2,
            question: '毛泽东如何评价农民运动？',
            options: ['过火行动', '好得很', '需要压制', '无关紧要'],
            correctIndex: 1,
            explanation: '毛泽东用"好得很"来评价农民运动，与"糟得很"的论调针锋相对。'
        },
        {
            id: 'mx006',
            level: 2,
            question: '毛泽东认为革命不是什么？',
            options: ['暴力行动', '请客吃饭', '阶级斗争', '群众运动'],
            correctIndex: 1,
            explanation: '"革命不是请客吃饭"，强调革命的暴烈性质。'
        },
        // 第三关：井冈山斗争
        {
            id: 'mx007',
            level: 3,
            question: '井冈山革命根据地位于哪两个省份交界处？',
            options: ['江西和湖南', '江西和福建', '湖南和湖北', '广东和江西'],
            correctIndex: 0,
            explanation: '井冈山位于江西和湖南两省交界的罗霄山脉中段。'
        },
        {
            id: 'mx008',
            level: 3,
            question: '"工农武装割据"的核心内容是什么？',
            options: ['城市起义', '在农村建立革命根据地', '议会斗争', '经济建设'],
            correctIndex: 1,
            explanation: '工农武装割据的核心是在农村建立革命根据地。'
        },
        {
            id: 'mx009',
            level: 3,
            question: '毛泽东和谁在井冈山会师？',
            options: ['周恩来', '朱德', '刘少奇', '邓小平'],
            correctIndex: 1,
            explanation: '1928年4月，毛泽东和朱德在井冈山会师。'
        },
        {
            id: 'mx010',
            level: 3,
            question: '"农村包围城市"道路的提出说明了什么？',
            options: ['照搬苏联经验', '根据中国国情探索革命道路', '放弃城市', '农村比城市重要'],
            correctIndex: 1,
            explanation: '这条道路是把马克思主义与中国实际相结合的产物。'
        },
        // 第四关：反对本本主义
        {
            id: 'mx011',
            level: 4,
            question: '"没有调查，就没有发言权"出自哪篇文章？',
            options: ['实践论', '矛盾论', '反对本本主义', '改造我们的学习'],
            correctIndex: 2,
            explanation: '这句名言出自1930年的《反对本本主义》。'
        },
        {
            id: 'mx012',
            level: 4,
            question: '毛泽东反对的"本本主义"是什么意思？',
            options: ['重视书本', '教条主义、不联系实际', '学习理论', '尊重经典'],
            correctIndex: 1,
            explanation: '本本主义指脱离实际、教条式地对待理论。'
        },
        {
            id: 'mx013',
            level: 4,
            question: '实事求是的核心要求是？',
            options: ['一切从实际出发', '坚持理论', '服从上级', '保持传统'],
            correctIndex: 0,
            explanation: '实事求是要求一切从实际出发，理论联系实际。'
        },
        // 第五关：论持久战
        {
            id: 'mx014',
            level: 5,
            question: '《论持久战》发表于哪一年？',
            options: ['1936年', '1937年', '1938年', '1939年'],
            correctIndex: 2,
            explanation: '《论持久战》发表于1938年5月。'
        },
        {
            id: 'mx015',
            level: 5,
            question: '毛泽东认为抗日战争将经历哪几个阶段？',
            options: ['两个阶段', '三个阶段', '四个阶段', '五个阶段'],
            correctIndex: 1,
            explanation: '战略防御、战略相持、战略反攻三个阶段。'
        },
        {
            id: 'mx016',
            level: 5,
            question: '毛泽东批评了哪两种错误观点？',
            options: ['乐观论和悲观论', '亡国论和速胜论', '左倾和右倾', '冒险和保守'],
            correctIndex: 1,
            explanation: '毛泽东批评了"亡国论"和"速胜论"两种错误观点。'
        },
        {
            id: 'mx017',
            level: 5,
            question: '"兵民是胜利之本"强调的是什么？',
            options: ['军队重要', '人民战争的力量', '民兵制度', '全民皆兵'],
            correctIndex: 1,
            explanation: '这句话强调人民群众是战争胜利的根本力量。'
        },
        // 第六关：整风运动
        {
            id: 'mx018',
            level: 6,
            question: '延安整风运动开始于哪一年？',
            options: ['1940年', '1941年', '1942年', '1943年'],
            correctIndex: 2,
            explanation: '延安整风运动开始于1942年。'
        },
        {
            id: 'mx019',
            level: 6,
            question: '整风运动要反对的"三风"是什么？',
            options: ['主观主义、宗派主义、党八股', '官僚主义、命令主义、形式主义', '享乐主义、奢靡之风、贪腐', '左倾、右倾、中间'],
            correctIndex: 0,
            explanation: '整风运动反对主观主义、宗派主义和党八股。'
        },
        {
            id: 'mx020',
            level: 6,
            question: '"惩前毖后，治病救人"的方针说明什么？',
            options: ['严厉惩罚', '团结同志、改正错误', '开除党籍', '彻底批判'],
            correctIndex: 1,
            explanation: '这个方针强调教育改造而非单纯惩罚。'
        },
        {
            id: 'mx021',
            level: 6,
            question: '整风运动的学习文件包括哪篇重要文献？',
            options: ['共产党宣言', '改造我们的学习', '资本论', '社会契约论'],
            correctIndex: 1,
            explanation: '《改造我们的学习》是整风运动的重要文献。'
        },
        // 第七关：为人民服务
        {
            id: 'mx022',
            level: 7,
            question: '《为人民服务》是为纪念谁而作的演讲？',
            options: ['刘胡兰', '张思德', '白求恩', '雷锋'],
            correctIndex: 1,
            explanation: '这是1944年毛泽东在张思德追悼会上的演讲。'
        },
        {
            id: 'mx023',
            level: 7,
            question: '"为人民服务"的核心含义是什么？',
            options: ['个人奋斗', '全心全意为人民利益工作', '服从上级', '追求功名'],
            correctIndex: 1,
            explanation: '共产党人的根本宗旨是全心全意为人民服务。'
        },
        {
            id: 'mx024',
            level: 7,
            question: '张思德牺牲时在做什么工作？',
            options: ['战斗', '烧炭', '种地', '运输'],
            correctIndex: 1,
            explanation: '张思德在烧炭时因炭窑崩塌而牺牲。'
        },
        // 第八关：论联合政府
        {
            id: 'mx025',
            level: 8,
            question: '《论联合政府》是在哪次会议上的报告？',
            options: ['遵义会议', '中共六大', '中共七大', '中共八大'],
            correctIndex: 2,
            explanation: '《论联合政府》是毛泽东在中共七大上所作的政治报告。'
        },
        {
            id: 'mx026',
            level: 8,
            question: '中共七大确立的党的指导思想是？',
            options: ['马克思主义', '列宁主义', '毛泽东思想', '邓小平理论'],
            correctIndex: 2,
            explanation: '中共七大确立毛泽东思想为党的指导思想。'
        },
        {
            id: 'mx027',
            level: 8,
            question: '统一战线的基本原则是什么？',
            options: ['独立自主', '坚持党的领导、又联合又斗争', '完全妥协', '彻底对立'],
            correctIndex: 1,
            explanation: '统一战线要坚持党的领导，既联合又斗争。'
        },
        {
            id: 'mx028',
            level: 8,
            question: '"三大法宝"指的是什么？',
            options: ['军队、农民、工人', '统一战线、武装斗争、党的建设', '理论、实践、批评', '民主、集中、纪律'],
            correctIndex: 1,
            explanation: '统一战线、武装斗争、党的建设是中国革命的三大法宝。'
        },
        // 第九关：将革命进行到底
        {
            id: 'mx029',
            level: 9,
            question: '《将革命进行到底》发表于哪一年？',
            options: ['1947年', '1948年', '1949年', '1950年'],
            correctIndex: 2,
            explanation: '这篇文章发表于1949年元旦。'
        },
        {
            id: 'mx030',
            level: 9,
            question: '毛泽东在文中用什么寓言批评妥协主义？',
            options: ['愚公移山', '农夫和蛇', '龟兔赛跑', '井底之蛙'],
            correctIndex: 1,
            explanation: '毛泽东用"农夫和蛇"的寓言批评对敌人的幻想。'
        },
        {
            id: 'mx031',
            level: 9,
            question: '"宜将剩勇追穷寇，不可沽名学霸王"表达了什么态度？',
            options: ['见好就收', '彻底革命、不留后患', '仁慈为怀', '急流勇退'],
            correctIndex: 1,
            explanation: '这句诗强调要将革命进行到底，不给敌人喘息之机。'
        },
        {
            id: 'mx032',
            level: 9,
            question: '解放战争中的三大战役是？',
            options: ['淮海、平津、辽沈', '台儿庄、百团大战、渡江', '长征、抗日、解放', '北伐、南昌、秋收'],
            correctIndex: 0,
            explanation: '辽沈、淮海、平津三大战役是解放战争的战略决战。'
        },
        // 第十关：新民主主义革命
        {
            id: 'mx033',
            level: 10,
            question: '新民主主义革命的性质是？',
            options: ['资产阶级革命', '无产阶级领导的资产阶级民主革命', '社会主义革命', '农民革命'],
            correctIndex: 1,
            explanation: '新民主主义革命是无产阶级领导的、人民大众的、反帝反封建的革命。'
        },
        {
            id: 'mx034',
            level: 10,
            question: '新民主主义革命的对象是？',
            options: ['资产阶级', '帝国主义、封建主义、官僚资本主义', '地主阶级', '一切有产阶级'],
            correctIndex: 1,
            explanation: '新民主主义革命要推翻帝国主义、封建主义、官僚资本主义三座大山。'
        },
        {
            id: 'mx035',
            level: 10,
            question: '中国革命分两步走，第一步是？',
            options: ['社会主义革命', '新民主主义革命', '无产阶级革命', '文化革命'],
            correctIndex: 1,
            explanation: '第一步是新民主主义革命，第二步是社会主义革命。'
        },
        {
            id: 'mx036',
            level: 10,
            question: '毛泽东思想的活的灵魂是？',
            options: ['阶级斗争', '实事求是、群众路线、独立自主', '武装斗争', '统一战线'],
            correctIndex: 1,
            explanation: '实事求是、群众路线、独立自主是毛泽东思想活的灵魂。'
        },
        {
            id: 'mx037',
            level: 10,
            question: '学习毛泽东选集最重要的是学习什么？',
            options: ['具体结论', '立场、观点、方法', '文采', '策略'],
            correctIndex: 1,
            explanation: '要学习毛泽东思想的立场、观点和方法，而非教条地套用结论。'
        }
    ],

    zizhitongjian: [
        // 第一关：战国风云
        {
            id: 'zz001',
            level: 1,
            question: '《资治通鉴》的作者是谁？',
            options: ['司马迁', '司马光', '班固', '陈寿'],
            correctIndex: 1,
            explanation: '《资治通鉴》由北宋史学家司马光主编。'
        },
        {
            id: 'zz002',
            level: 1,
            question: '"资治通鉴"这个书名是什么意思？',
            options: ['资助治国', '借鉴历史以治理国家', '记录财政', '研究天文'],
            correctIndex: 1,
            explanation: '书名意为"鉴于往事，有资于治道"，即以历史为鉴治理国家。'
        },
        {
            id: 'zz003',
            level: 1,
            question: '《资治通鉴》记载的时间跨度是？',
            options: ['从黄帝到宋朝', '从周威烈王到五代后周', '从秦朝到清朝', '从汉朝到唐朝'],
            correctIndex: 1,
            explanation: '《资治通鉴》记载从周威烈王二十三年到五代后周世宗显德六年，共1362年历史。'
        },
        // 第二关：秦并六国
        {
            id: 'zz004',
            level: 2,
            question: '秦国能够统一六国的根本原因是什么？',
            options: ['军事力量强大', '商鞅变法使秦国实力增强', '运气好', '六国内斗'],
            correctIndex: 1,
            explanation: '商鞅变法从根本上增强了秦国的经济和军事实力。'
        },
        {
            id: 'zz005',
            level: 2,
            question: '司马光如何评价秦始皇？',
            options: ['只有功绩', '功过参半，有统一之功也有暴政之过', '只有过错', '伟大圣君'],
            correctIndex: 1,
            explanation: '司马光认为秦始皇有统一之功，但暴政也导致二世而亡。'
        },
        {
            id: 'zz006',
            level: 2,
            question: '"焚书坑儒"说明了什么治国教训？',
            options: ['文化无用', '思想压制无法长久维护统治', '应该焚书', '儒生该杀'],
            correctIndex: 1,
            explanation: '历史证明单纯的思想压制无法长久，反而激化矛盾。'
        },
        // 第三关：楚汉争霸
        {
            id: 'zz007',
            level: 3,
            question: '项羽失败的主要原因是什么？',
            options: ['武力不如刘邦', '不善用人、刚愎自用', '运气不好', '背叛太多'],
            correctIndex: 1,
            explanation: '项羽虽然勇武，但不善用人，不能采纳谋士建议。'
        },
        {
            id: 'zz008',
            level: 3,
            question: '"鸿门宴"给后人什么启示？',
            options: ['宴会无用', '当断不断反受其乱', '仁义重要', '请客吃饭'],
            correctIndex: 1,
            explanation: '项羽放走刘邦，说明做事要果断，优柔寡断贻害无穷。'
        },
        {
            id: 'zz009',
            level: 3,
            question: '刘邦能够成功的关键是什么？',
            options: ['武力最强', '善于用人、从谏如流', '家世显赫', '运气好'],
            correctIndex: 1,
            explanation: '刘邦能用韩信、张良、萧何等人才，善于听取意见。'
        },
        {
            id: 'zz010',
            level: 3,
            question: '"四面楚歌"说明了什么？',
            options: ['楚人爱唱歌', '人心向背决定成败', '音乐的力量', '夜晚唱歌'],
            correctIndex: 1,
            explanation: '四面楚歌瓦解了项羽军心，说明人心向背的重要性。'
        },
        // 第四关：汉武盛世
        {
            id: 'zz011',
            level: 4,
            question: '汉武帝采取的"罢黜百家，独尊儒术"有什么影响？',
            options: ['只有消极影响', '统一思想、巩固统治，但也限制思想自由', '只有积极影响', '没有影响'],
            correctIndex: 1,
            explanation: '这一政策有利于统一思想，但也造成了思想禁锢。'
        },
        {
            id: 'zz012',
            level: 4,
            question: '汉武帝晚年的"轮台诏"说明了什么？',
            options: ['继续征战', '能够反思错误、知错能改', '放弃边疆', '投降匈奴'],
            correctIndex: 1,
            explanation: '汉武帝晚年反思穷兵黩武的错误，说明领导者要能自我反省。'
        },
        {
            id: 'zz013',
            level: 4,
            question: '"巫蛊之祸"给后人什么警示？',
            options: ['巫术真的存在', '谗言可以亡国、要明辨是非', '不要养太子', '宫廷危险'],
            correctIndex: 1,
            explanation: '这一事件说明君主要明辨是非，不被谗言蒙蔽。'
        },
        // 第五关：三国鼎立
        {
            id: 'zz014',
            level: 5,
            question: '司马光认为三国中谁是正统？',
            options: ['魏国', '蜀汉', '吴国', '都不是正统'],
            correctIndex: 0,
            explanation: '《资治通鉴》以魏为正统，这与《三国演义》不同。'
        },
        {
            id: 'zz015',
            level: 5,
            question: '曹操的用人之道有什么特点？',
            options: ['只用亲信', '唯才是举、不拘一格', '只用儒生', '只用武将'],
            correctIndex: 1,
            explanation: '曹操提出"唯才是举"，不拘泥于出身门第。'
        },
        {
            id: 'zz016',
            level: 5,
            question: '诸葛亮"鞠躬尽瘁，死而后已"给后人什么启示？',
            options: ['不要太累', '忠诚敬业的职业精神', '不要做官', '换个主公'],
            correctIndex: 1,
            explanation: '诸葛亮是忠诚敬业的典范，值得后人学习。'
        },
        {
            id: 'zz017',
            level: 5,
            question: '"赤壁之战"的胜利说明了什么？',
            options: ['南方水战强', '以少胜多需要智谋和团结', '曹操无能', '运气决定一切'],
            correctIndex: 1,
            explanation: '孙刘联军以少胜多，关键在于正确的战略和团结协作。'
        },
        // 第六关：五胡乱华
        {
            id: 'zz018',
            level: 6,
            question: '西晋灭亡的主要原因是什么？',
            options: ['外敌太强', '皇室内斗、八王之乱', '经济崩溃', '自然灾害'],
            correctIndex: 1,
            explanation: '八王之乱严重削弱了西晋国力，给了外族可乘之机。'
        },
        {
            id: 'zz019',
            level: 6,
            question: '"五胡乱华"时期给后人什么教训？',
            options: ['排斥外族', '内部团结才能抵御外患', '闭关锁国', '武力第一'],
            correctIndex: 1,
            explanation: '历史证明，内部团结是抵御外患的基础。'
        },
        {
            id: 'zz020',
            level: 6,
            question: '东晋能够偏安一隅的原因是什么？',
            options: ['运气好', '长江天险和北方战乱', '军事强大', '皇帝英明'],
            correctIndex: 1,
            explanation: '东晋依靠长江天险和北方持续战乱得以延续。'
        },
        {
            id: 'zz021',
            level: 6,
            question: '"淝水之战"说明了什么道理？',
            options: ['人多力量大', '民心向背和指挥得当比人数重要', '南方必胜', '北方必败'],
            correctIndex: 1,
            explanation: '前秦虽然人多，但军心不齐、指挥失误，最终失败。'
        },
        // 第七关：贞观之治
        {
            id: 'zz022',
            level: 7,
            question: '唐太宗李世民通过什么方式获得皇位？',
            options: ['禅让', '玄武门之变', '世袭', '选举'],
            correctIndex: 1,
            explanation: '李世民通过玄武门之变夺取皇位，这也成为他一生的心结。'
        },
        {
            id: 'zz023',
            level: 7,
            question: '唐太宗的名言"以铜为镜，可以正衣冠；以史为镜，可以知兴替"说明什么？',
            options: ['要多照镜子', '要重视历史经验教训', '铜镜重要', '衣冠重要'],
            correctIndex: 1,
            explanation: '这句话强调学习历史、借鉴历史的重要性。'
        },
        {
            id: 'zz024',
            level: 7,
            question: '魏征敢于直谏说明什么？',
            options: ['魏征性格问题', '开明君主能够虚心纳谏', '唐太宗软弱', '朝廷无纪律'],
            correctIndex: 1,
            explanation: '唐太宗能够虚心纳谏，才造就了贞观之治。'
        },
        // 第八关：安史之乱
        {
            id: 'zz025',
            level: 8,
            question: '安史之乱爆发的根本原因是什么？',
            options: ['安禄山野心', '唐玄宗晚年昏聩、藩镇制度弊端', '杨贵妃', '自然灾害'],
            correctIndex: 1,
            explanation: '唐玄宗晚年沉迷享乐，藩镇权力过大，最终酿成大乱。'
        },
        {
            id: 'zz026',
            level: 8,
            question: '"渔阳鼙鼓动地来"说明什么教训？',
            options: ['军事重要', '居安思危、盛世也要防范危机', '打鼓好听', '渔阳风景好'],
            correctIndex: 1,
            explanation: '盛世之下往往隐藏危机，要居安思危。'
        },
        {
            id: 'zz027',
            level: 8,
            question: '安史之乱对唐朝的影响是什么？',
            options: ['没有影响', '由盛转衰的转折点', '更加强盛', '立即灭亡'],
            correctIndex: 1,
            explanation: '安史之乱是唐朝由盛转衰的转折点，之后藩镇割据日益严重。'
        },
        {
            id: 'zz028',
            level: 8,
            question: '唐玄宗前期和后期的对比说明什么？',
            options: ['人会变老', '守业更比创业难、不能懈怠', '不要当皇帝', '美女误国'],
            correctIndex: 1,
            explanation: '唐玄宗前期励精图治，后期懈怠荒政，说明守业更需努力。'
        },
        // 第九关：五代十国
        {
            id: 'zz029',
            level: 9,
            question: '五代十国时期的特点是什么？',
            options: ['统一稳定', '政权更迭频繁、战乱不断', '经济繁荣', '文化昌盛'],
            correctIndex: 1,
            explanation: '这一时期政权更迭频繁，是中国历史上的分裂时期。'
        },
        {
            id: 'zz030',
            level: 9,
            question: '"石敬瑭割让燕云十六州"带来什么后果？',
            options: ['没有影响', '使中原失去屏障，后患无穷', '换来和平', '正确决策'],
            correctIndex: 1,
            explanation: '燕云十六州的割让使中原失去北方屏障，影响延续数百年。'
        },
        {
            id: 'zz031',
            level: 9,
            question: '后周世宗柴荣被认为是？',
            options: ['昏君', '有为之君，可惜英年早逝', '暴君', '庸君'],
            correctIndex: 1,
            explanation: '柴荣励精图治，本有统一天下的能力，可惜39岁去世。'
        },
        {
            id: 'zz032',
            level: 9,
            question: '《资治通鉴》以五代后周为结尾说明什么？',
            options: ['司马光不喜欢宋朝', '为宋朝提供治国借鉴', '宋朝历史不重要', '没有特别含义'],
            correctIndex: 1,
            explanation: '《资治通鉴》总结历代兴亡教训，为宋朝治国提供借鉴。'
        },
        // 第十关：以史为鉴
        {
            id: 'zz033',
            level: 10,
            question: '司马光编撰《资治通鉴》的主要目的是什么？',
            options: ['娱乐消遣', '总结历史经验教训、资助治国', '个人爱好', '赚取稿费'],
            correctIndex: 1,
            explanation: '《资治通鉴》的根本目的是"鉴前世之兴衰，考当今之得失"。'
        },
        {
            id: 'zz034',
            level: 10,
            question: '《资治通鉴》最重视的是什么？',
            options: ['文学价值', '政治得失和治国经验', '军事战争', '经济发展'],
            correctIndex: 1,
            explanation: '《资治通鉴》着重记载政治得失，总结治国经验。'
        },
        {
            id: 'zz035',
            level: 10,
            question: '"前事不忘，后事之师"表达了什么观点？',
            options: ['忘记过去', '学习历史才能避免重蹈覆辙', '历史无用', '活在当下'],
            correctIndex: 1,
            explanation: '这句话强调学习历史教训的重要性。'
        },
        {
            id: 'zz036',
            level: 10,
            question: '读《资治通鉴》最重要的收获应该是什么？',
            options: ['记住年份', '理解历史规律和治国智慧', '背诵原文', '应付考试'],
            correctIndex: 1,
            explanation: '读史要理解其中的规律和智慧，而非死记硬背。'
        },
        {
            id: 'zz037',
            level: 10,
            question: '司马光认为好的君主应该具备什么品质？',
            options: ['只要武力强', '仁德、明智、善于用人、虚心纳谏', '只要有钱', '只要长寿'],
            correctIndex: 1,
            explanation: '《资治通鉴》通过历史案例说明明君应具备的品质。'
        }
    ]
};

/**
 * 获取指定书籍的题目
 */
function getQuestionsByBook(bookId) {
    return QUESTIONS_DATA[bookId] || [];
}

/**
 * 获取指定关卡的题目
 */
function getQuestionsByLevel(bookId, levelId) {
    const questions = getQuestionsByBook(bookId);
    return questions.filter(q => q.level === levelId);
}

/**
 * 随机打乱数组
 */
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * 获取随机题目
 */
function getRandomQuestions(bookId, levelId, count) {
    const levelQuestions = getQuestionsByLevel(bookId, levelId);
    const shuffled = shuffleArray(levelQuestions);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

// 导出
window.QUESTIONS_DATA = QUESTIONS_DATA;
window.getQuestionsByBook = getQuestionsByBook;
window.getQuestionsByLevel = getQuestionsByLevel;
window.getRandomQuestions = getRandomQuestions;
window.shuffleArray = shuffleArray;
