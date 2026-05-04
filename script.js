// Dayzee - NERV SYSTEM
// EVA风格AI生活陪伴系统

// 任务模板数据（包含专属叙事）
const taskTemplates = {
happy: [
  { 
    icon: '🍽️', 
    title: 'NEW WINDOW', 
    desc: '去食堂一楼随便选一个没点过的窗口，点第三个菜',
    narrative: '今天你试了一个从没点过的窗口。有时候，生活的变化就是从这样一个小小的“试试看”开始的。'
  },
  { 
    icon: '🎵', 
    title: 'MUSIC WALK', 
    desc: '戴上耳机，选一首很久没听过的歌，从宿舍走到教学楼',
    narrative: '你带着音乐走了一段路。熟悉的地方，好像也因此变得不太一样了。'
  },
  { 
    icon: '👋', 
    title: 'GREETING', 
    desc: '对路上遇到的3个陌生人打招呼',
    narrative: '你今天主动和几个人打了招呼。这些小小的连接，正在悄悄让世界变得柔软一点。'
  },
  { 
    icon: '💐', 
    title: 'BEAUTY SPOT', 
    desc: '在校园里走一小段，拍下一个你觉得好看的角落',
    narrative: '你找到了校园里最美的角落。生活中从不缺少美，只是缺少发现美的眼睛。恭喜你拥有一双善于发现的眼睛。'
  },
  { 
    icon: '📝', 
    title: 'DIARY', 
    desc: '随便写下今天让你有点开心的3件小事',
    narrative: '记录下今天的三个快乐瞬间。幸福不是惊天动地的大事，而是藏在日常中的点点滴滴。记住这些美好，它们会成为你前进的动力。'
  },
  { 
    icon: '🎲', 
    title: 'RANDOM', 
    desc: '用抛硬币决定今天吃什么（正面A，反面B）',
    narrative: '把选择权交给命运，是一种洒脱的生活态度。有时候，放下控制欲，让生活自然流淌，反而能收获意想不到的惊喜。'
  },
  { 
    icon: '💬', 
    title: 'CHAT', 
    desc: '找一个人，面对面认真聊10分钟（不看手机）',
    narrative: '与朋友进行了一次深入的对话。真正的交流不在于时间长短，而在于心灵的连接。你正在建立有意义的人际关系。'
  },
  { 
    icon: '🏃', 
    title: 'EXERCISE', 
    desc: '去操场走一圈或慢跑10分钟',
    narrative: '今天你坚持了10分钟的运动。身体是灵魂的容器，照顾好它是对自己最好的投资。每一滴汗水都是对健康的承诺。'
  },
  { 
    icon: '🎨', 
    title: 'CREATIVE', 
    desc: '用纸随便画点什么（哪怕只是几条线）',
    narrative: '用画笔表达内心的世界。艺术不在于技巧的完美，而在于表达的真诚。你创造了一件独一无二的作品。'
  },
],

bored: [
  { 
    icon: '🚶', 
    title: 'NEW ROUTE', 
    desc: '今天换一条不一样的路去教室（哪怕只是绕一下）',
    narrative: '今天你选择了一条从未走过的路。打破日常的惯性，是发现新世界的第一步。这条新路可能会带给你意想不到的发现。'
  },
  { 
    icon: '🔍', 
    title: 'OBSERVE', 
    desc: '抬头看，观察并记录你刚刚看到的3个小细节',
    narrative: '你发现了三个有趣的细节。生活的美好往往藏在细节之中，拥有一颗好奇心，平凡的日子也能变得精彩。'
  },
  { 
    icon: '🎯', 
    title: 'CHALLENGE', 
    desc: '点开一个随机任务，然后直接去做',
    narrative: '接受并完成了随机挑战！面对未知，你选择了勇敢尝试。这种精神会帮助你在未来克服更大的困难。'
  },
  { 
    icon: '📚', 
    title: 'BOOK HUNT', 
    desc: '随便找一本书，只看封面和第一页',
    narrative: '被一本书的封面吸引，开启了一段新的阅读旅程。有时候，一个有趣的封面背后，藏着一个精彩的世界。'
  },
  { 
    icon: '🎧', 
    title: 'NEW SONG', 
    desc: '随机播放完一首没听过的歌',
    narrative: '发现了一首新的歌曲。音乐是灵魂的语言，每一首新歌都是一段新的情感体验。让旋律丰富你的生活吧。'
  },
  { 
    icon: '🍃', 
    title: 'NATURE', 
    desc: '找一棵树或一小片绿植，观察它1分钟',
    narrative: '静静地观察大自然的生灵。在繁忙的生活中，停下脚步感受自然，是最好的疗愈方式。与自然连接，找回内心的平静。'
  },
  { 
    icon: '🧩', 
    title: 'PUZZLE', 
    desc: '买一块拼图，完成它',
    narrative: '成功完成了拼图挑战！每一块拼图的归位，都是思维能力的锻炼。耐心和专注是完成任何事情的关键。'
  },
  { 
    icon: '✍️', 
    title: 'WRITE', 
    desc: '随便写两三句话，想到什么写什么',
    narrative: '让思绪自由流淌在纸上。书写是与自己对话的方式，通过文字，你更了解自己的内心世界。'
  },
  { 
    icon: '🎮', 
    title: 'MINIGAME', 
    desc: '玩一个小游戏，5分钟就停',
    narrative: '用小游戏放松了5分钟。适当的休息是为了更好地前进，劳逸结合才能保持长久的动力。'
  },
],

low: [
  { 
    icon: '🌙', 
    title: 'QUIET TIME', 
    desc: '找个地方坐下来，安静待10分钟',
    narrative: '给自己10分钟的安静时光。在喧嚣的世界中，独处是一种奢侈的享受。倾听内心的声音，你会找到答案。'
  },
  { 
    icon: '🍵', 
    title: 'WARM DRINK', 
    desc: '泡一杯热水或热饮，慢慢喝完',
    narrative: '一杯温暖的饮品，温暖了身体也温暖了心灵。有时候，最简单的事物却能带来最大的安慰。'
  },
  { 
    icon: '🧘', 
    title: 'BREATHE', 
    desc: '跟着节奏，慢慢呼吸3分钟',
    narrative: '进行了3分钟的深呼吸练习。呼吸是生命的节奏，通过调节呼吸，你重新找回了内心的平静。'
  },
  { 
    icon: '📖', 
    title: 'READ', 
    desc: '找一小段文字，慢慢读完',
    narrative: '阅读了一段治愈的文字。文字的力量在于它能跨越时空，给予你安慰和力量。你不是一个人。'
  },
  { 
    icon: '🎵', 
    title: 'RELAX', 
    desc: '放一首轻松的音乐，听完',
    narrative: '让舒缓的音乐带走疲惫。音乐是最好的疗愈师，它能抚平心灵的褶皱，带来内心的安宁。'
  },
  { 
    icon: '💭', 
    title: 'EMPTY', 
    desc: '找个地方发呆2分钟，不看手机',
    narrative: '允许自己发一会儿呆。放空不是浪费时间，而是大脑在进行深度整理。有时候，什么都不做也是一种智慧。'
  },
  { 
    icon: '🖼️', 
    title: 'ART', 
    desc: '看一张你喜欢的图片或画，停留一会儿',
    narrative: '欣赏了一幅喜欢的画。艺术能触动心灵深处的情感，让你暂时忘却烦恼，沉浸在美的世界中。'
  },
  { 
    icon: '📝', 
    title: 'MOOD', 
    desc: '写下一句话，描述你现在的心情',
    narrative: '诚实地记录下此刻的心情。接纳自己的情绪是治愈的第一步，无论好坏，都是真实的你。'
  },
  { 
    icon: '🌳', 
    title: 'OUTDOOR', 
    desc: '走到室外待3分钟，看看天或树',
    narrative: '走出室内，接触大自然。阳光、空气、绿植，这些自然元素有着神奇的疗愈力量。感受大自然的美好吧。'
  },
],

excited: [
  { 
    icon: '🎉', 
    title: 'SHARE', 
    desc: '把刚刚发生的一件开心小事发给一个人',
    narrative: '把好心情分享给了朋友。快乐会因为分享而加倍，你的积极能量正在感染身边的人。'
  },
  { 
    icon: '🚀', 
    title: 'ACTION', 
    desc: '选一件你刚想到的事，立刻开始做第一步',
    narrative: '想到就做，立即行动！这种执行力是成功的关键。每一个伟大的成就，都始于一个勇敢的开始。'
  },
  { 
    icon: '🎯', 
    title: 'CHALLENGE', 
    desc: '去做一件你最近一直想做但没做的事（哪怕只做一点）',
    narrative: '终于尝试了一直想做的事！勇气不是没有恐惧，而是带着恐惧依然前行。恭喜你突破了自己！'
  },
  { 
    icon: '📸', 
    title: 'CAPTURE', 
    desc: '拍下一张你觉得“这一刻还不错”的照片',
    narrative: '用镜头捕捉了美好的瞬间。时光会流逝，但照片能定格永恒。这些珍贵的回忆会成为你人生的宝藏。'
  },
  { 
    icon: '💡', 
    title: 'IDEAS', 
    desc: '写下3个随便的想法，不用合理',
    narrative: '记录了三个疯狂的想法！创造力源于大胆的想象，不要害怕异想天开，每一个伟大的发明都始于一个看似疯狂的念头。'
  },
  { 
    icon: '🏆', 
    title: 'GOAL', 
    desc: '完成一件很小的待办（比如回一条消息）',
    narrative: '成功完成了一个小目标！积少成多，聚沙成塔，每一个小成就都是通往大梦想的阶梯。'
  },
  { 
    icon: '🎤', 
    title: 'EXPRESS', 
    desc: '随便唱一句歌或说一段话，给自己听',
    narrative: '用声音表达自己！无论是歌声还是朗诵，都是一种释放和表达。勇敢地展现自己，你的声音值得被听见。'
  },
  { 
    icon: '🌟', 
    title: 'PRAISE', 
    desc: '对一个人说一句具体的赞美',
    narrative: '真诚地赞美了身边的人。一句赞美的话可以点亮别人的一天，你的善意会传递下去，温暖整个世界。'
  },
  { 
    icon: '📚', 
    title: 'LEARN', 
    desc: '查一个你刚刚好奇的问题，花3分钟了解一下',
    narrative: '学习了一个新知识点！知识是通往无限可能的钥匙，每一次学习都是自我提升的机会。保持好奇心，不断成长。'
  },
],
};

// 全局状态
let currentMood = '';
let tasks = [];
let completedCells = [];
let bingoCount = 0;
let currentTaskIndex = -1;

// DOM元素
const pageMood = document.getElementById('page-mood');
const pageBingo = document.getElementById('page-bingo');
const proceedBtn = document.getElementById('proceed-btn');
const backBtn = document.getElementById('back-btn');
const moodCards = document.querySelectorAll('.mood-card');
const bingoBoard = document.getElementById('bingo-board');
const taskModal = document.getElementById('task-modal');
const momentModal = document.getElementById('moment-modal');
const bingoCountEl = document.getElementById('bingo-count');
const currentDateEl = document.getElementById('current-date');
const currentMoodEl = document.getElementById('current-mood');
const progressFill = document.getElementById('progress-fill');

// 初始化
function init() {
  const now = new Date();
  currentDateEl.textContent = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`;
  
  loadGameData();
  bindEvents();
}

// 绑定事件
function bindEvents() {
  // 心情卡片点击
  moodCards.forEach(card => {
    card.addEventListener('click', () => {
      moodCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      currentMood = card.dataset.mood;
      proceedBtn.classList.remove('disabled');
    });
  });

  // 继续按钮
  proceedBtn.addEventListener('click', () => {
    if (currentMood && !proceedBtn.classList.contains('disabled')) {
      generateTasks();
      switchPage('bingo');
      renderBoard();
      updateMoodDisplay();
    }
  });

  // 返回按钮
  backBtn.addEventListener('click', () => {
    switchPage('mood');
  });

  // 任务弹窗关闭
  document.getElementById('close-modal').addEventListener('click', closeTaskModal);
  document.getElementById('cancel-task').addEventListener('click', closeTaskModal);

  // 奇遇卡弹窗关闭
  document.getElementById('close-moment').addEventListener('click', closeMomentModal);

  // 完成任务按钮
  document.getElementById('complete-task').addEventListener('click', completeTask);

  // 分享按钮
  document.getElementById('share-moment').addEventListener('click', shareMoment);

  // 自动保存
  setInterval(saveGameData, 5000);
}

// 页面切换
function switchPage(pageName) {
  if (pageName === 'bingo') {
    pageMood.classList.remove('active');
    pageBingo.classList.add('active');
  } else {
    pageBingo.classList.remove('active');
    pageMood.classList.add('active');
    moodCards.forEach(c => c.classList.remove('selected'));
    proceedBtn.classList.add('disabled');
  }
}

function updateMoodDisplay() {
  const moodLabels = {
    happy: 'HAPPY',
    bored: 'BORED',
    low: 'LOW',
    excited: 'EXCITED'
  };
  currentMoodEl.textContent = moodLabels[currentMood] || currentMood.toUpperCase();
}

function generateTasks() {
  const templates = taskTemplates[currentMood] || taskTemplates.happy;
  const shuffled = [...templates].sort(() => Math.random() - 0.5);
  tasks = shuffled.slice(0, 9);
}

function renderBoard() {
  bingoBoard.innerHTML = '';
  
  tasks.forEach((task, index) => {
    const cell = document.createElement('div');
    cell.className = `bingo-cell ${completedCells.includes(index) ? 'completed' : ''}`;
    cell.dataset.index = index;
    
    cell.innerHTML = `
      <span class="cell-icon">${task.icon}</span>
      <span class="cell-text">${task.title}</span>
    `;
    
    if (!completedCells.includes(index)) {
      cell.addEventListener('click', () => openTaskModal(index));
    }
    
    bingoBoard.appendChild(cell);
  });
  
  updateProgress();
  updateBingoIndicators();
}

function updateProgress() {
  const progress = (completedCells.length / 9) * 100;
  progressFill.style.width = `${progress}%`;
}

function openTaskModal(index) {
  currentTaskIndex = index;
  const task = tasks[index];
  
  document.getElementById('task-icon').textContent = task.icon;
  document.getElementById('task-title').textContent = task.title;
  document.getElementById('task-desc').textContent = task.desc;
  
  taskModal.classList.add('active');
}

function closeTaskModal() {
  taskModal.classList.remove('active');
  currentTaskIndex = -1;
}

// 完成任务
function completeTask() {
  if (currentTaskIndex === -1) return;
  
  // 保存当前任务索引（因为closeTaskModal会把它设为-1）
  const taskIndex = currentTaskIndex;
  
  // 标记完成
  if (!completedCells.includes(taskIndex)) {
    completedCells.push(taskIndex);
    completedCells.sort((a, b) => a - b);
  }
  
  // 检查Bingo
  checkBingo();
  
  // 关闭任务弹窗
  closeTaskModal();
  
  // 刷新棋盘
  renderBoard();
  
  // 显示奇遇卡（使用保存的索引）
  setTimeout(() => {
    showMomentCard(taskIndex);
  }, 300);
}

// 检查Bingo连线
function checkBingo() {
  const winPatterns = [
    { pattern: [0, 1, 2], id: 'h1' },
    { pattern: [3, 4, 5], id: 'h2' },
    { pattern: [6, 7, 8], id: 'h3' },
    { pattern: [0, 3, 6], id: 'v1' },
    { pattern: [1, 4, 7], id: 'v2' },
    { pattern: [2, 5, 8], id: 'v3' },
    { pattern: [0, 4, 8], id: 'd1' },
    { pattern: [2, 4, 6], id: 'd2' },
  ];
  
  winPatterns.forEach(({ pattern, id }) => {
    const allCompleted = pattern.every(cell => completedCells.includes(cell));
    const indicator = document.getElementById(id);
    
    if (allCompleted && !indicator.classList.contains('completed')) {
      indicator.classList.add('completed');
      indicator.textContent = '✓';
      bingoCount++;
    }
  });
  
  bingoCountEl.textContent = bingoCount;
}

function updateBingoIndicators() {
  const winPatterns = [
    { pattern: [0, 1, 2], id: 'h1' },
    { pattern: [3, 4, 5], id: 'h2' },
    { pattern: [6, 7, 8], id: 'h3' },
    { pattern: [0, 3, 6], id: 'v1' },
    { pattern: [1, 4, 7], id: 'v2' },
    { pattern: [2, 5, 8], id: 'v3' },
    { pattern: [0, 4, 8], id: 'd1' },
    { pattern: [2, 4, 6], id: 'd2' },
  ];
  
  winPatterns.forEach(({ pattern, id }) => {
    const indicator = document.getElementById(id);
    const allCompleted = pattern.every(cell => completedCells.includes(cell));
    
    if (allCompleted) {
      indicator.classList.add('completed');
      indicator.textContent = '✓';
    }
  });
}

// 显示奇遇卡
function showMomentCard(taskIndex) {
  const task = tasks[taskIndex];
  
  document.getElementById('moment-icon').textContent = task.icon;
  document.getElementById('moment-title').textContent = `${task.title} - MOMENT`;
  document.getElementById('moment-narrative').textContent = task.narrative || '今日任务已完成。每一个小行动都在塑造你的生活。';
  document.getElementById('moment-date').textContent = new Date().toLocaleDateString();
  document.getElementById('moment-mood').textContent = currentMood.toUpperCase();
  
  momentModal.classList.add('active');
}

function closeMomentModal() {
  momentModal.classList.remove('active');
}

function shareMoment() {
  const narrative = document.getElementById('moment-narrative').textContent;
  const text = `✨ DAYZEE MOMENT ✨\n\n${narrative}\n\n#Dayzee #NERV #Bingo`;
  
  if (navigator.share) {
    navigator.share({
      title: 'Dayzee Moment Card',
      text: text,
    });
  } else {
    navigator.clipboard.writeText(text).then(() => {
      alert('Moment copied to clipboard!');
    });
  }
}

function saveGameData() {
  const data = {
    currentMood,
    tasks,
    completedCells,
    bingoCount,
    lastPlayDate: new Date().toISOString().split('T')[0]
  };
  localStorage.setItem('dayzee_data', JSON.stringify(data));
}

function loadGameData() {
  const saved = localStorage.getItem('dayzee_data');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      const today = new Date().toISOString().split('T')[0];
      
      if (data.lastPlayDate !== today) {
        resetDailyData();
        return;
      }
      
      currentMood = data.currentMood || '';
      tasks = data.tasks || [];
      completedCells = data.completedCells || [];
      bingoCount = data.bingoCount || 0;
      
      if (currentMood) {
        switchPage('bingo');
        renderBoard();
        updateMoodDisplay();
        const selectedCard = document.querySelector(`.mood-card[data-mood="${currentMood}"]`);
        if (selectedCard) {
          selectedCard.classList.add('selected');
        }
        proceedBtn.classList.remove('disabled');
      }
      
      bingoCountEl.textContent = bingoCount;
      updateProgress();
      updateBingoIndicators();
    } catch (e) {
      console.error('Failed to load data:', e);
    }
  }
}

function resetDailyData() {
  completedCells = [];
  bingoCount = 0;
  tasks = [];
  document.querySelectorAll('.indicator').forEach(ind => {
    ind.classList.remove('completed');
    ind.textContent = '';
  });
}

// 启动应用
init();