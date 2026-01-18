/**
 * 测试题目与逻辑模块
 * 十二星座 × 灵魂香气测试
 */

// 星座数据
const ZODIAC_DATA = {
    aries: { symbol: '♈', name: '白羊座', element: 'fire' },
    taurus: { symbol: '♉', name: '金牛座', element: 'earth' },
    gemini: { symbol: '♊', name: '双子座', element: 'air' },
    cancer: { symbol: '♋', name: '巨蟹座', element: 'water' },
    leo: { symbol: '♌', name: '狮子座', element: 'fire' },
    virgo: { symbol: '♍', name: '处女座', element: 'earth' },
    libra: { symbol: '♎', name: '天秤座', element: 'air' },
    scorpio: { symbol: '♏', name: '天蝎座', element: 'water' },
    sagittarius: { symbol: '♐', name: '射手座', element: 'fire' },
    capricorn: { symbol: '♑', name: '摩羯座', element: 'earth' },
    aquarius: { symbol: '♒', name: '水瓶座', element: 'air' },
    pisces: { symbol: '♓', name: '双鱼座', element: 'water' }
};

// 25道测试题
const QUESTIONS = [
    // 第1题：星座选择
    {
        id: 1,
        type: 'zodiac',
        text: '请选择你的星座',
        options: null // 特殊处理
    },
    // 第2-7题：性格底色
    {
        id: 2,
        type: 'personality',
        text: '在一个热闹的聚会上，你通常会？',
        options: [
            { text: '成为全场焦点，活跃气氛', value: 'extrovert', scent: 'citrus' },
            { text: '找几个好友安静聊天', value: 'introvert', scent: 'floral' },
            { text: '静静观察，偶尔参与', value: 'observer', scent: 'woody' },
            { text: '随心情而定，两者皆可', value: 'flexible', scent: 'fresh' }
        ]
    },
    {
        id: 3,
        type: 'personality',
        text: '面对一个重要决定，你会？',
        options: [
            { text: '相信直觉，果断行动', value: 'intuitive', scent: 'spicy' },
            { text: '仔细分析利弊再做决定', value: 'analytical', scent: 'green' },
            { text: '听取他人意见后再决定', value: 'social', scent: 'floral' },
            { text: '跟随内心感受慢慢想', value: 'emotional', scent: 'oriental' }
        ]
    },
    {
        id: 4,
        type: 'personality',
        text: '压力大的时候，你会怎么释放？',
        options: [
            { text: '运动或户外活动', value: 'active', scent: 'citrus' },
            { text: '和朋友倾诉聊天', value: 'social', scent: 'floral' },
            { text: '独处、听音乐或冥想', value: 'solitude', scent: 'woody' },
            { text: '大吃一顿或购物', value: 'indulgent', scent: 'gourmand' }
        ]
    },
    {
        id: 5,
        type: 'personality',
        text: '你更欣赏哪种类型的人？',
        options: [
            { text: '自信有魄力的领导者', value: 'leader', scent: 'spicy' },
            { text: '温柔体贴的倾听者', value: 'gentle', scent: 'floral' },
            { text: '独立特行的思考者', value: 'independent', scent: 'woody' },
            { text: '热情浪漫的梦想家', value: 'romantic', scent: 'oriental' }
        ]
    },
    {
        id: 6,
        type: 'personality',
        text: '你理想的生活节奏是？',
        options: [
            { text: '快节奏、充实高效', value: 'fast', scent: 'citrus' },
            { text: '慢节奏、享受当下', value: 'slow', scent: 'floral' },
            { text: '规律稳定、井井有条', value: 'steady', scent: 'green' },
            { text: '自由随性、不受拘束', value: 'free', scent: 'fresh' }
        ]
    },
    {
        id: 7,
        type: 'personality',
        text: '你在感情中更看重什么？',
        options: [
            { text: '激情与浪漫', value: 'passion', scent: 'oriental' },
            { text: '安全感与稳定', value: 'security', scent: 'woody' },
            { text: '心灵的契合与理解', value: 'connection', scent: 'floral' },
            { text: '自由与个人空间', value: 'freedom', scent: 'fresh' }
        ]
    },
    // 第8-15题：场景联想
    {
        id: 8,
        type: 'scene',
        text: '听到「夏天」这个词，你脑海中浮现的画面是？',
        options: [
            { text: '海边的海浪和风', value: 'ocean', scent: 'aquatic' },
            { text: '切开的柠檬和冰块', value: 'citrus', scent: 'citrus' },
            { text: '盛开的繁花', value: 'flowers', scent: 'floral' },
            { text: '开着冷气的旧图书馆', value: 'library', scent: 'woody' }
        ]
    },
    {
        id: 9,
        type: 'scene',
        text: '如果你是一种自然元素，你会是？',
        options: [
            { text: '温暖的阳光', value: 'sun', scent: 'citrus' },
            { text: '柔和的月光', value: 'moon', scent: 'floral' },
            { text: '深邃的海洋', value: 'ocean', scent: 'aquatic' },
            { text: '稳固的大地', value: 'earth', scent: 'woody' }
        ]
    },
    {
        id: 10,
        type: 'scene',
        text: '想象你走进一家店，最吸引你的气味是？',
        options: [
            { text: '新鲜出炉的柠檬塔', value: 'lemon', scent: 'citrus' },
            { text: '鲜花和绿植的芬芳', value: 'floral', scent: 'floral' },
            { text: '温暖的香草拿铁', value: 'vanilla', scent: 'gourmand' },
            { text: '木质家具和皮革的味道', value: 'leather', scent: 'woody' }
        ]
    },
    {
        id: 11,
        type: 'scene',
        text: '你梦想中的旅行目的地是？',
        options: [
            { text: '地中海海岸小镇', value: 'mediterranean', scent: 'citrus' },
            { text: '普罗旺斯薰衣草田', value: 'provence', scent: 'floral' },
            { text: '摩洛哥异域市集', value: 'morocco', scent: 'oriental' },
            { text: '京都的古老寺庙', value: 'kyoto', scent: 'woody' }
        ]
    },
    {
        id: 12,
        type: 'scene',
        text: '下雨天，你最想待在哪里？',
        options: [
            { text: '落地窗前安静看雨', value: 'window', scent: 'aquatic' },
            { text: '花店里选一束花', value: 'florist', scent: 'floral' },
            { text: '香薰精油的SPA馆', value: 'spa', scent: 'oriental' },
            { text: '咖啡馆的角落看书', value: 'cafe', scent: 'woody' }
        ]
    },
    {
        id: 13,
        type: 'scene',
        text: '如果你有一个秘密花园，它会是什么样子？',
        options: [
            { text: '充满柑橘果树和阳光', value: 'citrus_garden', scent: 'citrus' },
            { text: '玫瑰和茉莉花盛放', value: 'rose_garden', scent: 'floral' },
            { text: '神秘的东方香料花园', value: 'spice_garden', scent: 'oriental' },
            { text: '安静的竹林和松柏', value: 'zen_garden', scent: 'woody' }
        ]
    },
    {
        id: 14,
        type: 'scene',
        text: '你最喜欢的季节是？',
        options: [
            { text: '春天 - 万物复苏', value: 'spring', scent: 'green' },
            { text: '夏天 - 热烈奔放', value: 'summer', scent: 'citrus' },
            { text: '秋天 - 温柔沉淀', value: 'autumn', scent: 'woody' },
            { text: '冬天 - 安静内敛', value: 'winter', scent: 'oriental' }
        ]
    },
    {
        id: 15,
        type: 'scene',
        text: '想象一个让你最放松的场景是？',
        options: [
            { text: '清晨的森林，带着露珠', value: 'forest', scent: 'green' },
            { text: '温暖的午后花园', value: 'garden', scent: 'floral' },
            { text: '点着蜡烛的温暖夜晚', value: 'candlelight', scent: 'oriental' },
            { text: '壁炉旁的木屋', value: 'cabin', scent: 'woody' }
        ]
    },
    // 第16-20题：感官偏好
    {
        id: 16,
        type: 'sensory',
        text: '如果你是一种颜色，你认为是？',
        options: [
            { text: '明亮的橙黄色', value: 'orange', scent: 'citrus' },
            { text: '柔和的粉紫色', value: 'pink', scent: 'floral' },
            { text: '深邃的酒红色', value: 'wine', scent: 'oriental' },
            { text: '沉稳的墨绿色', value: 'green', scent: 'woody' }
        ]
    },
    {
        id: 17,
        type: 'sensory',
        text: '你喜欢的音乐风格是？',
        options: [
            { text: '轻快的流行乐', value: 'pop', scent: 'citrus' },
            { text: '抒情的慢歌', value: 'ballad', scent: 'floral' },
            { text: '慵懒的爵士乐', value: 'jazz', scent: 'oriental' },
            { text: '古典或独立音乐', value: 'classical', scent: 'woody' }
        ]
    },
    {
        id: 18,
        type: 'sensory',
        text: '你通常偏好的饮品是？',
        options: [
            { text: '鲜榨果汁或气泡水', value: 'juice', scent: 'citrus' },
            { text: '花茶或奶茶', value: 'tea', scent: 'floral' },
            { text: '红酒或威士忌', value: 'wine', scent: 'oriental' },
            { text: '黑咖啡或普洱茶', value: 'coffee', scent: 'woody' }
        ]
    },
    {
        id: 19,
        type: 'sensory',
        text: '你偏爱的甜品类型是？',
        options: [
            { text: '清新的水果塔', value: 'fruit', scent: 'citrus' },
            { text: '精致的马卡龙', value: 'macaron', scent: 'floral' },
            { text: '丝滑的焦糖布丁', value: 'caramel', scent: 'gourmand' },
            { text: '浓郁的黑巧克力', value: 'chocolate', scent: 'woody' }
        ]
    },
    {
        id: 20,
        type: 'sensory',
        text: '以下香气，哪个让你最舒适？',
        options: [
            { text: '刚割完的草坪清香', value: 'grass', scent: 'green' },
            { text: '鲜花绽放的芬芳', value: 'bloom', scent: 'floral' },
            { text: '温暖的香草味道', value: 'vanilla', scent: 'gourmand' },
            { text: '木屋里的松木香', value: 'pine', scent: 'woody' }
        ]
    },
    // 第21-25题：情绪状态
    {
        id: 21,
        type: 'emotion',
        text: '最近你最常有的情绪状态是？',
        options: [
            { text: '容易疲惫、缺乏动力', value: 'tired', healing: 'energizing' },
            { text: '有些焦虑、思虑过多', value: 'anxious', healing: 'calming' },
            { text: '感到迷茫、缺乏方向', value: 'confused', healing: 'grounding' },
            { text: '状态还不错', value: 'good', healing: 'enhancing' }
        ]
    },
    {
        id: 22,
        type: 'emotion',
        text: '你希望香水能带给你什么感受？',
        options: [
            { text: '提振精神、充满活力', value: 'energize', healing: 'energizing' },
            { text: '平静安抚、放松心情', value: 'calm', healing: 'calming' },
            { text: '增添自信、展现魅力', value: 'confidence', healing: 'empowering' },
            { text: '治愈温暖、感到被爱', value: 'comfort', healing: 'comforting' }
        ]
    },
    {
        id: 23,
        type: 'emotion',
        text: '你希望别人闻到你的香水时，会联想到？',
        options: [
            { text: '阳光、活力、亲和力', value: 'sunny', scent: 'citrus' },
            { text: '温柔、优雅、女人味', value: 'elegant', scent: 'floral' },
            { text: '神秘、性感、有深度', value: 'mysterious', scent: 'oriental' },
            { text: '知性、沉稳、有质感', value: 'sophisticated', scent: 'woody' }
        ]
    },
    {
        id: 24,
        type: 'emotion',
        text: '你理想中的香水前调应该是？',
        options: [
            { text: '清爽提神的', value: 'fresh', scent: 'citrus' },
            { text: '甜美柔和的', value: 'sweet', scent: 'floral' },
            { text: '温暖诱惑的', value: 'warm', scent: 'oriental' },
            { text: '淡雅有质感的', value: 'subtle', scent: 'woody' }
        ]
    },
    {
        id: 25,
        type: 'emotion',
        text: '你希望香水的留香方式是？',
        options: [
            { text: '若有若无、干净清透', value: 'light', scent: 'fresh' },
            { text: '柔和环绕、温柔持久', value: 'soft', scent: 'floral' },
            { text: '浓郁深邃、气场强大', value: 'strong', scent: 'oriental' },
            { text: '内敛低调、需靠近才闻到', value: 'intimate', scent: 'woody' }
        ]
    }
];

// 当前状态
let currentQuestion = 0;
let answers = {};
let selectedZodiac = null;

// 页面初始化
document.addEventListener('DOMContentLoaded', function () {
    // 检查会话
    if (!checkSession()) return;

    // 渲染第一题
    renderQuestion();
});

// 渲染问题
function renderQuestion() {
    const question = QUESTIONS[currentQuestion];
    const card = document.getElementById('questionCard');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');

    // 更新进度条
    const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;
    progressFill.style.width = progress + '%';
    progressText.textContent = `问题 ${currentQuestion + 1} / ${QUESTIONS.length}`;

    // 渲染问题内容
    if (question.type === 'zodiac') {
        renderZodiacQuestion(card, question);
    } else {
        renderNormalQuestion(card, question);
    }

    // 添加淡入动画
    card.style.animation = 'none';
    card.offsetHeight; // 触发重排
    card.style.animation = 'fadeIn 0.5s ease';
}

// 渲染星座选择题
function renderZodiacQuestion(card, question) {
    let html = `
        <p class="question-number">Question ${question.id}</p>
        <h2 class="question-text">${question.text}</h2>
        <div class="zodiac-grid">
    `;

    for (const [key, zodiac] of Object.entries(ZODIAC_DATA)) {
        html += `
            <button class="zodiac-btn" data-zodiac="${key}">
                <span class="zodiac-symbol">${zodiac.symbol}</span>
                <span class="zodiac-name">${zodiac.name}</span>
            </button>
        `;
    }

    html += '</div>';
    card.innerHTML = html;

    // 绑定点击事件
    document.querySelectorAll('.zodiac-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            selectedZodiac = this.dataset.zodiac;
            answers[question.id] = selectedZodiac;

            // 添加选中效果
            document.querySelectorAll('.zodiac-btn').forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');

            // 延迟跳转到下一题
            setTimeout(() => {
                nextQuestion();
            }, 300);
        });
    });
}

// 渲染普通问题
function renderNormalQuestion(card, question) {
    let html = `
        <p class="question-number">Question ${question.id}</p>
        <h2 class="question-text">${question.text}</h2>
        <div class="options-list">
    `;

    question.options.forEach((option, index) => {
        html += `
            <button class="option-btn" data-index="${index}">
                ${option.text}
            </button>
        `;
    });

    html += '</div>';
    card.innerHTML = html;

    // 绑定点击事件
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const index = parseInt(this.dataset.index);
            answers[question.id] = question.options[index];

            // 添加选中效果
            document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');

            // 延迟跳转到下一题
            setTimeout(() => {
                nextQuestion();
            }, 300);
        });
    });
}

// 下一题
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= QUESTIONS.length) {
        // 测试完成，计算结果
        finishTest();
    } else {
        renderQuestion();
    }
}

// 完成测试
function finishTest() {
    // 标记授权码已使用
    completeTest();

    // 计算结果
    const result = calculateResult();

    // 存储结果到 sessionStorage
    sessionStorage.setItem('testResult', JSON.stringify(result));

    // 跳转到结果页
    window.location.href = 'result.html';
}

// 计算结果
function calculateResult() {
    // 统计香型偏好
    const scentCounts = {};
    const healingNeeds = [];

    for (const [qId, answer] of Object.entries(answers)) {
        if (qId === '1') continue; // 跳过星座选择

        if (answer.scent) {
            scentCounts[answer.scent] = (scentCounts[answer.scent] || 0) + 1;
        }
        if (answer.healing) {
            healingNeeds.push(answer.healing);
        }
    }

    // 找出主导香型
    const sortedScents = Object.entries(scentCounts).sort((a, b) => b[1] - a[1]);
    const primaryScent = sortedScents[0] ? sortedScents[0][0] : 'floral';
    const secondaryScent = sortedScents[1] ? sortedScents[1][0] : 'woody';

    // 主要疗愈需求
    const healingNeed = healingNeeds[0] || 'enhancing';

    return {
        zodiac: selectedZodiac,
        primaryScent,
        secondaryScent,
        healingNeed,
        answers
    };
}
