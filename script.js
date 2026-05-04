// Dayzee - 今日生活Bingo MVP
// 游戏风格的AI生活陪伴系统

// 任务模板数据（模拟AI生成）
const taskTemplates = {
  happy: [
    { icon: '🍽️', title: '尝试新窗口', desc: '今天去食堂一个从未去过的窗口吃饭' },
    { icon: '🎵', title: '音乐漫步', desc: '边听喜欢的音乐边走路去教室' },
    { icon: '👋', title: '主动问候', desc: '向三个同学或老师主动打招呼' },
    { icon: '💐', title: '发现美好', desc: '在校园里找一处最美的角落拍照' },
    { icon: '📝', title: '心情日记', desc: '写下今天最开心的三件事' },
    { icon: '🎲', title: '随机选择', desc: '用抛硬币决定午餐吃什么' },
    { icon: '💬', title: '深度聊天', desc: '和朋友进行一次超过10分钟的聊天' },
    { icon: '🏃', title: '活力运动', desc: '在操场慢跑或散步15分钟' },
    { icon: '🎨', title: '创意时刻', desc: '画一幅简单的画或写一首小诗' },
  ],
  bored: [
    { icon: '🚶', title: '换条路线', desc: '换一条从未走过的路线去教室' },
    { icon: '🔍', title: '观察细节', desc: '记录通勤路上的三个有趣细节' },
    { icon: '🎯', title: '随机挑战', desc: '完成一个随机生成的小挑战' },
    { icon: '📚', title: '新书探索', desc: '在图书馆找一本封面有趣的书' },
    { icon: '🎧', title: '新音乐', desc: '发现并收藏一首新歌曲' },
    { icon: '🍃', title: '自然观察', desc: '观察校园里的植物或小动物' },
    { icon: '🧩', title: '拼图挑战', desc: '完成一个简单的拼图游戏' },
    { icon: '✍️', title: '自由书写', desc: '随便写点什么，不考虑内容' },
    { icon: '🎮', title: '小游戏', desc: '玩一局不超过5分钟的小游戏' },
  ],
  low: [
    { icon: '🌙', title: '温柔时光', desc: '找个安静的地方坐10分钟' },
    { icon: '🍵', title: '温暖饮品', desc: '给自己泡一杯热饮慢慢喝' },
    { icon: '🧘', title: '深呼吸', desc: '进行3分钟的深呼吸练习' },
    { icon: '📖', title: '治愈阅读', desc: '读一段温暖治愈的文字' },
    { icon: '🎵', title: '疗愈音乐', desc: '听一首能让你放松的音乐' },
    { icon: '💭', title: '放空时刻', desc: '什么都不做，发一会儿呆' },
    { icon: '🖼️', title: '欣赏艺术', desc: '看一幅喜欢的画或照片' },
    { icon: '📝', title: '情绪日记', desc: '写下此刻的心情，不用修饰' },
    { icon: '🌳', title: '自然疗愈', desc: '到户外接触大自然5分钟' },
  ],
  excited: [
    { icon: '🎉', title: '分享喜悦', desc: '把今天的好心情分享给朋友' },
    { icon: '🚀', title: '立即行动', desc: '把一个想法立刻付诸行动' },
    { icon: '🎯', title: '挑战自我', desc: '尝试一件一直想做但没做的事' },
    { icon: '📸', title: '记录美好', desc: '用照片记录今天的精彩瞬间' },
    { icon: '💡', title: '创意爆发', desc: '写下三个疯狂的想法' },
    { icon: '🏆', title: '完成目标', desc: '今天完成一个小目标' },
    { icon: '🎤', title: '表达自我', desc: '唱歌或朗诵一段喜欢的文字' },
    { icon: '🌟', title: '赞美他人', desc: '真诚地赞美身边的人' },
    { icon: '📚', title: '知识充电', desc: '学习一个新知识点' },
  ],
};

// 徽章数据
const badgesData = [
  { id: 'first_bingo', name: '初露锋芒', icon: '⭐', unlocked: false },
  { id: 'daily_bingo', name: '每日赢家', icon: '🏅', unlocked: false },
  { id: 'full_house', name: '满贯达人', icon: '👑', unlocked: false },
  { id: 'streak_3', name: '三连勇士', icon: '🔥', unlocked: false },
  { id: 'photo_master', name: '摄影大师', icon: '📸', unlocked: false },
  { id: 'mood_expert', name: '心情专家', icon: '🌈', unlocked: false },
];

// AI叙事生成模板
const narrativeTemplates = [
  '在平凡的一天里，你选择了{{action}}。这个小小的举动，让今天变得与众不同。生活的美好，往往藏在这些不经意的瞬间。',
  '今天的{{action}}，是送给自己的一份礼物。每一个认真生活的时刻，都值得被铭记。',
  '通过{{action}}，你重新发现了生活的乐趣。这就是Dayzee想要带给你的——让每一天都充满惊喜。',
  '{{action}}，看似简单的小事，却蕴含着生活的智慧。你正在用行动书写自己的故事。',
  '完成{{action}}后，有没有发现心情变得轻松了一些？这就是微小行动的力量。',
];

// 全局状态
let currentMood = 'happy';
let tasks = [];
let completedCells = [];
let bingoCount = 0;
let unlockedBadges = [];
let timerInterval = null;
let timerSeconds = 0;
let currentTaskIndex = -1;
let taskNote = '';
let taskPhoto = null;

// DOM元素
const bingoBoard = document.getElementById('bingo-board');
const taskModal = document.getElementById('task-modal');
const achievementModal = document.getElementById('achievement-modal');
const momentModal = document.getElementById('moment-modal');
const badgesGrid = document.getElementById('badges-grid');
const bingoCountEl = document.getElementById('bingo-count');
const currentDateEl = document.getElementById('current-date');

// 初始化
function init() {
  // 设置日期
  const now = new Date();
  currentDateEl.textContent = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`;
  
  // 加载保存的数据
  loadGameData();
  
  // 生成任务
  generateTasks();
  
  // 渲染棋盘
  renderBoard();
  
  // 渲染徽章
  renderBadges();
  
  // 绑定事件
  bindEvents();
}

// 生成任务
function generateTasks() {
  const templates = taskTemplates[currentMood];
  const shuffled = [...templates].sort(() => Math.random() - 0.5);
  tasks = shuffled.slice(0, 9);
}

// 渲染棋盘
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
  
  // 更新Bingo指示器
  updateBingoIndicators();
}

// 打开任务弹窗
function openTaskModal(index) {
  currentTaskIndex = index;
  const task = tasks[index];
  
  document.getElementById('task-icon').textContent = task.icon;
  document.getElementById('task-title').textContent = task.title;
  document.getElementById('task-description').textContent = task.desc;
  document.getElementById('task-note').value = '';
  document.getElementById('preview-image').style.display = 'none';
  document.getElementById('preview-image').src = '';
  document.getElementById('timer').textContent = '00:00';
  timerSeconds = 0;
  
  taskPhoto = null;
  taskNote = '';
  
  taskModal.classList.add('active');
}

// 关闭任务弹窗
function closeTaskModal() {
  stopTimer();
  taskModal.classList.remove('active');
  currentTaskIndex = -1;
}

// 计时器功能
function startTimer() {
  stopTimer();
  timerInterval = setInterval(() => {
    timerSeconds++;
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function updateTimerDisplay() {
  const mins = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
  const secs = (timerSeconds % 60).toString().padStart(2, '0');
  document.getElementById('timer').textContent = `${mins}:${secs}`;
}

// 完成任务
function completeTask() {
  if (currentTaskIndex === -1) return;
  
  taskNote = document.getElementById('task-note').value;
  
  // 标记完成
  completedCells.push(currentTaskIndex);
  completedCells.sort((a, b) => a - b);
  
  // 检查Bingo
  checkBingo();
  
  // 关闭任务弹窗
  closeTaskModal();
  
  // 刷新棋盘
  renderBoard();
  
  // 更新徽章
  updateBadges();
  
  // 生成奇遇卡
  showMomentCard();
}

// 检查Bingo连线
function checkBingo() {
  const winPatterns = [
    [0, 1, 2], // 横1
    [3, 4, 5], // 横2
    [6, 7, 8], // 横3
    [0, 3, 6], // 竖1
    [1, 4, 7], // 竖2
    [2, 5, 8], // 竖3
    [0, 4, 8], // 斜1
    [2, 4, 6], // 斜2
  ];
  
  let newBingo = false;
  
  winPatterns.forEach((pattern, index) => {
    const allCompleted = pattern.every(cell => completedCells.includes(cell));
    const indicator = document.getElementById(`indicator-${['h1', 'h2', 'h3', 'v1', 'v2', 'v3', 'd1', 'd2'][index]}`);
    
    if (allCompleted && !indicator.classList.contains('completed')) {
      indicator.classList.add('completed');
      indicator.textContent = '✓';
      bingoCount++;
      newBingo = true;
    }
  });
  
  bingoCountEl.textContent = `${bingoCount} Bingo!`;
  
  // 如果有新的Bingo，显示成就弹窗
  if (newBingo) {
    showAchievementModal();
  }
}

// 更新Bingo指示器
function updateBingoIndicators() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  
  winPatterns.forEach((pattern, index) => {
    const indicator = document.getElementById(`indicator-${['h1', 'h2', 'h3', 'v1', 'v2', 'v3', 'd1', 'd2'][index]}`);
    const allCompleted = pattern.every(cell => completedCells.includes(cell));
    
    if (allCompleted) {
      indicator.classList.add('completed');
      indicator.textContent = '✓';
    }
  });
}

// 显示成就弹窗
function showAchievementModal() {
  const achievementTitle = bingoCount === 1 ? '🎉 Bingo!' : 
                          bingoCount >= 3 ? '🌟 超级Bingo!' : '🎊 Bingo!';
  const achievementDesc = bingoCount === 1 ? '恭喜完成第一个Bingo！' :
                         bingoCount >= 3 ? '太厉害了！三连Bingo！' : '又达成一个Bingo！';
  
  document.getElementById('achievement-title').textContent = achievementTitle;
  document.getElementById('achievement-desc').textContent = achievementDesc;
  document.getElementById('badge-display').textContent = getBadgeIcon();
  
  achievementModal.classList.add('active');
}

function closeAchievementModal() {
  achievementModal.classList.remove('active');
}

// 获取徽章图标
function getBadgeIcon() {
  if (bingoCount >= 3) return '👑';
  if (bingoCount >= 2) return '🏆';
  return '⭐';
}

// 显示奇遇卡
function showMomentCard() {
  const task = tasks[currentTaskIndex];
  const narrative = generateNarrative(task.title);
  
  document.getElementById('moment-icon').textContent = task.icon;
  document.getElementById('moment-title').textContent = `奇遇时刻 · ${task.title}`;
  document.getElementById('moment-narrative').textContent = narrative;
  document.getElementById('moment-date').textContent = new Date().toLocaleDateString();
  document.getElementById('moment-mood').textContent = getMoodEmoji(currentMood);
  
  const photoContainer = document.getElementById('moment-photo');
  if (taskPhoto) {
    photoContainer.innerHTML = `<img src="${taskPhoto}" alt="任务照片">`;
  } else {
    photoContainer.innerHTML = `<span style="font-size:48px;">${task.icon}</span>`;
  }
  
  momentModal.classList.add('active');
}

function closeMomentModal() {
  momentModal.classList.remove('active');
}

// AI叙事生成
function generateNarrative(action) {
  const template = narrativeTemplates[Math.floor(Math.random() * narrativeTemplates.length)];
  return template.replace('{{action}}', action);
}

// 获取心情表情
function getMoodEmoji(mood) {
  const emojis = {
    happy: '😊 开心',
    bored: '😐 无聊',
    low: '😔 低落',
    excited: '🤩 兴奋'
  };
  return emojis[mood] || '😊';
}

// 更新徽章
function updateBadges() {
  // 初露锋芒：第一次Bingo
  if (bingoCount >= 1 && !unlockedBadges.includes('first_bingo')) {
    unlockBadge('first_bingo');
  }
  
  // 每日赢家：完成一次Bingo
  if (bingoCount >= 1 && !unlockedBadges.includes('daily_bingo')) {
    unlockBadge('daily_bingo');
  }
  
  // 满贯达人：完成所有格子
  if (completedCells.length >= 9 && !unlockedBadges.includes('full_house')) {
    unlockBadge('full_house');
  }
  
  renderBadges();
}

function unlockBadge(badgeId) {
  if (!unlockedBadges.includes(badgeId)) {
    unlockedBadges.push(badgeId);
  }
}

// 渲染徽章
function renderBadges() {
  badgesGrid.innerHTML = '';
  
  badgesData.forEach(badge => {
    const isUnlocked = unlockedBadges.includes(badge.id);
    const badgeEl = document.createElement('div');
    badgeEl.className = `badge-item ${isUnlocked ? '' : 'locked'}`;
    
    badgeEl.innerHTML = `
      <span class="badge-icon">${isUnlocked ? badge.icon : '❓'}</span>
      <span class="badge-name">${badge.name}</span>
    `;
    
    badgesGrid.appendChild(badgeEl);
  });
}

// 分享奇遇卡
function shareMoment() {
  const narrative = document.getElementById('moment-narrative').textContent;
  const text = `✨ Dayzee奇遇时刻 ✨\n\n${narrative}\n\n#Dayzee #今日Bingo`;
  
  if (navigator.share) {
    navigator.share({
      title: 'Dayzee奇遇卡',
      text: text,
    });
  } else {
    // 复制到剪贴板
    navigator.clipboard.writeText(text).then(() => {
      alert('已复制到剪贴板！');
    });
  }
}

// 图片上传处理
function handlePhotoUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      taskPhoto = e.target.result;
      document.getElementById('preview-image').src = taskPhoto;
      document.getElementById('preview-image').style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
}

// 保存游戏数据
function saveGameData() {
  const data = {
    currentMood,
    tasks,
    completedCells,
    bingoCount,
    unlockedBadges,
    lastPlayDate: new Date().toISOString().split('T')[0]
  };
  localStorage.setItem('dayzee_data', JSON.stringify(data));
}

// 加载游戏数据
function loadGameData() {
  const saved = localStorage.getItem('dayzee_data');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      const today = new Date().toISOString().split('T')[0];
      
      // 如果不是今天的数据，重置
      if (data.lastPlayDate !== today) {
        resetDailyData();
        return;
      }
      
      currentMood = data.currentMood || 'happy';
      tasks = data.tasks || [];
      completedCells = data.completedCells || [];
      bingoCount = data.bingoCount || 0;
      unlockedBadges = data.unlockedBadges || [];
      
      // 更新心情按钮状态
      document.querySelector(`.mood-btn[data-mood="${currentMood}"]`)?.classList.add('active');
    } catch (e) {
      console.error('Failed to load data:', e);
    }
  }
}

// 重置每日数据
function resetDailyData() {
  completedCells = [];
  bingoCount = 0;
  tasks = [];
  // 重置指示器
  document.querySelectorAll('.indicator').forEach(ind => {
    ind.classList.remove('completed');
    ind.textContent = '⬜';
  });
}

// 绑定事件
function bindEvents() {
  // 心情按钮
  document.querySelectorAll('.mood-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentMood = btn.dataset.mood;
      generateTasks();
      renderBoard();
    });
  });
  
  // 关闭弹窗按钮
  document.getElementById('close-modal').addEventListener('click', closeTaskModal);
  document.getElementById('close-achievement').addEventListener('click', closeAchievementModal);
  document.getElementById('close-moment').addEventListener('click', closeMomentModal);
  
  // 计时器按钮
  document.getElementById('start-timer').addEventListener('click', startTimer);
  document.getElementById('stop-timer').addEventListener('click', stopTimer);
  
  // 完成任务按钮
  document.getElementById('complete-task').addEventListener('click', completeTask);
  
  // 图片上传
  document.getElementById('photo-upload').addEventListener('change', handlePhotoUpload);
  
  // 分享按钮
  document.getElementById('share-moment').addEventListener('click', shareMoment);
  
  // 自动保存
  setInterval(saveGameData, 5000);
}

// 启动应用
init();