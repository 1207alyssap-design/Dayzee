// ============================================
// 任务模板数据
// ============================================
const taskTemplates = {
  // 🍽️ 食堂场景
  canteen: {
    explore: [
      { icon: '🍽️', title: '新窗口探索', desc: '尝试食堂从未吃过的窗口', narrative: '今天你勇敢地尝试了食堂的新窗口。在一成不变的日常中，主动探索未知的勇气值得嘉奖。每一次小小的改变，都在塑造更好的自己。' },
      { icon: '🥢', title: '隐藏菜单', desc: '询问阿姨今天的隐藏菜品', narrative: '通过与食堂阿姨的交流，你发现了一份隐藏菜单。主动沟通往往能带来意想不到的惊喜，生活中的美好需要我们主动去发现。' },
      { icon: '🍚', title: '换个座位', desc: '选择平时不常坐的位置吃饭', narrative: '换个角度看世界，即使是熟悉的食堂也有新风景。小小的改变，带来不一样的心情。' }
    ],
    observe: [
      { icon: '👀', title: '食客观察', desc: '观察周围同学都在吃什么', narrative: '你发现了同学们的饮食偏好，原来大家的口味如此多样。观察是了解世界的窗口，用心感受身边的小细节。' },
      { icon: '⏰', title: '时间记录', desc: '记录打饭排队时间', narrative: '今天你记录了食堂排队的时间规律。生活中的数据藏着很多有趣的规律，善于观察的人总能发现价值。' }
    ],
    interact: [
      { icon: '👋', title: '主动问候', desc: '向食堂阿姨说声辛苦了', narrative: '一声简单的问候，温暖了他人也温暖了自己。善意是可以传递的，你的小小举动可能会让别人的一天变得更美好。' },
      { icon: '💬', title: '同桌聊天', desc: '和同桌同学聊聊天', narrative: '今天你和同学愉快地交流，分享了彼此的生活。人与人之间的连接，往往就从一顿饭开始。' }
    ],
    express: [
      { icon: '✍️', title: '美食点评', desc: '写下今天午餐的评价', narrative: '用文字记录美食体验，让平凡的一餐变得有意义。记录生活，就是在创造属于自己的故事。' },
      { icon: '📸', title: '美食拍照', desc: '给今天的饭菜拍张照', narrative: '用镜头定格美食瞬间，每一餐都是生活的礼物。记录美好，让回忆有迹可循。' }
    ],
    fun: [
      { icon: '🎲', title: '随机选择', desc: '用石头剪刀布决定吃什么', narrative: '把选择权交给命运，是一种洒脱的生活态度。有时候，放下控制欲，让生活自然流淌，反而能收获惊喜。' },
      { icon: '🍴', title: '光盘行动', desc: '今天努力把饭菜吃完', narrative: '珍惜粮食是一种美德，每一粒米都来之不易。今天你做到了光盘，为环保贡献了一份力量。' }
    ]
  },

  // 🚶 通勤场景
  commute: {
    explore: [
      { icon: '🗺️', title: '新路线', desc: '尝试一条新的通勤路线', narrative: '今天你选择了一条从未走过的路。打破日常的惯性，是发现新世界的第一步。这条新路可能会带给你意想不到的发现。' },
      { icon: '🚶', title: '步行体验', desc: '今天走路去目的地', narrative: '放慢脚步，感受沿途的风景。步行不仅是一种出行方式，更是一种生活态度。' }
    ],
    observe: [
      { icon: '🌳', title: '自然观察', desc: '观察路边的树木花草', narrative: '你发现了路边盛开的花朵，原来美就在身边。在繁忙的生活中，停下脚步感受自然，是最好的疗愈方式。' },
      { icon: '🚶', title: '行人观察', desc: '观察路人的状态', narrative: '每个人都有自己的故事，今天你用心观察了身边的行人。生活就像一部电影，每个人都是主角。' }
    ],
    interact: [
      { icon: '🙋', title: '礼貌让路', desc: '主动为他人让路', narrative: '一个小小的举动，体现了你的修养。礼貌是人际关系的润滑剂，让世界变得更美好。' },
      { icon: '😊', title: '微笑问候', desc: '对遇到的熟人微笑点头', narrative: '一个微笑拉近彼此的距离。今天你用微笑传递了温暖，让简单的问候成为一天的美好开始。' }
    ],
    express: [
      { icon: '🎵', title: '音乐漫步', desc: '边听音乐边走路', narrative: '在音乐的陪伴下漫步，时间仿佛放慢了脚步。你用旋律为平凡的路程赋予了独特的意义。' },
      { icon: '📝', title: '通勤日记', desc: '记录通勤路上的想法', narrative: '用文字捕捉通勤途中的灵感碎片。思考让平凡的路程变得深刻，你抓住了每一个闪过的念头。' }
    ],
    fun: [
      { icon: '⏱️', title: '时间挑战', desc: '尝试用更快的时间到达', narrative: '今天你挑战了通勤时间记录！适当的挑战能让生活更有激情，你做到了！' },
      { icon: '🎧', title: '发现新歌', desc: '通勤时发现一首新歌', narrative: '发现了一首新的喜欢的歌曲。音乐是灵魂的语言，每一首新歌都是一段新的情感体验。' }
    ]
  },

  // ⏳ 课间场景
  break: {
    explore: [
      { icon: '🚶', title: '教室探索', desc: '去其他教室逛逛', narrative: '今天你探索了不同的教室，发现了新的学习空间。保持好奇心，校园里总有未知的角落等待发现。' },
      { icon: '📢', title: '社团招新', desc: '查看校园海报栏', narrative: '校园生活丰富多彩，今天你发现了有趣的社团活动。积极参与，让大学生活更加精彩。' }
    ],
    observe: [
      { icon: '👀', title: '同学观察', desc: '观察同学们课间在做什么', narrative: '你发现同学们的课间活动丰富多彩。每个人都有自己的节奏，尊重彼此的生活方式。' },
      { icon: '📱', title: '手机观察', desc: '看看同学们都在手机上做什么', narrative: '有趣的是，大家课间都在刷手机。数字时代的课间休息，有着独特的时代印记。' }
    ],
    interact: [
      { icon: '🤝', title: '同学交流', desc: '和同学讨论上节课内容', narrative: '与同学的交流让你对知识有了新的理解。分享和讨论是学习的重要环节。' },
      { icon: '💬', title: '深度聊天', desc: '和朋友聊10分钟', narrative: '与朋友进行了一次深入的对话。真正的交流不在于时间长短，而在于心灵的连接。' }
    ],
    express: [
      { icon: '✍️', title: '笔记整理', desc: '整理上节课笔记', narrative: '整理笔记的过程也是复习的过程。好记性不如烂笔头，记录让知识更牢固。' },
      { icon: '📸', title: '随手拍', desc: '拍一张课间的教室', narrative: '用镜头记录下课间的教室时光。阳光洒进教室的瞬间，定格了青春的模样。' }
    ],
    fun: [
      { icon: '🎮', title: '小游戏', desc: '玩5分钟小游戏', narrative: '适当的休息是为了更好地前进。劳逸结合才能保持长久的学习动力。' },
      { icon: '🧩', title: '拼图挑战', desc: '完成一个简单拼图', narrative: '成功完成了拼图挑战！每一块拼图的归位，都是思维能力的锻炼。' }
    ]
  },

  // 🏠 宿舍场景
  dorm: {
    explore: [
      { icon: '🧹', title: '整理收纳', desc: '整理自己的书桌', narrative: '整洁的环境带来愉悦的心情。今天你整理了书桌，让生活空间焕然一新。' },
      { icon: '🌱', title: '绿植养护', desc: '照顾宿舍的植物', narrative: '用心呵护每一株植物，它们也在用绿色回报你。生命需要关爱，小小的绿植也是生活的一部分。' }
    ],
    observe: [
      { icon: '👀', title: '室友观察', desc: '观察室友在做什么', narrative: '了解室友的生活习惯，学会互相尊重。良好的室友关系是大学生活的宝贵财富。' }
    ],
    interact: [
      { icon: '👋', title: '室友问候', desc: '向室友问好', narrative: '一个简单的问候，拉近距离。室友是大学期间最亲密的伙伴，珍惜这份缘分。' },
      { icon: '🍿', title: '共享零食', desc: '和室友分享零食', narrative: '分享是快乐的源泉。一份零食，一份情谊，让宿舍充满温暖。' }
    ],
    express: [
      { icon: '🎤', title: '唱歌放松', desc: '在宿舍唱首歌', narrative: '用歌声表达自己！无论是歌声还是笑声，都是一种释放和表达。' },
      { icon: '📝', title: '日记记录', desc: '写一篇日记', narrative: '记录下今天的心情和感悟。书写是与自己对话的方式，通过文字，你更了解自己。' }
    ],
    fun: [
      { icon: '🎲', title: '桌游时光', desc: '和室友玩桌游', narrative: '桌游带来欢乐时光，增进室友感情。游戏不仅是娱乐，更是沟通的桥梁。' },
      { icon: '💤', title: '小憩片刻', desc: '闭目养神10分钟', narrative: '给自己10分钟的安静时光。在喧嚣的世界中，独处是一种奢侈的享受。' }
    ]
  },

  // 📚 图书馆场景
  library: {
    explore: [
      { icon: '📖', title: '新书发现', desc: '找一本封面有趣的书', narrative: '被一本书的封面吸引，开启了一段新的阅读旅程。有时候，一个有趣的封面背后，藏着一个精彩的世界。' },
      { icon: '📍', title: '区域探索', desc: '探索图书馆新区域', narrative: '图书馆是知识的海洋，今天你发现了新的宝藏区域。保持探索精神，知识的边界永无止境。' }
    ],
    observe: [
      { icon: '👀', title: '阅读观察', desc: '观察大家在读什么书', narrative: '你发现了同学们的阅读偏好，原来大家的兴趣如此广泛。阅读是通往世界的窗户。' },
      { icon: '🕯️', title: '氛围感受', desc: '感受图书馆的氛围', narrative: '沉浸在知识的海洋中，感受安静的力量。图书馆是心灵的栖息地。' }
    ],
    interact: [
      { icon: '💬', title: '书友交流', desc: '和旁边同学交流', narrative: '与书友的交流让你获得了新的书单推荐。分享阅读心得，让知识流动起来。' },
      { icon: '🙋', title: '咨询馆员', desc: '向馆员咨询问题', narrative: '图书馆员是知识的向导，今天你得到了专业的帮助。不要害怕提问，求知是一种美德。' }
    ],
    express: [
      { icon: '✍️', title: '读书笔记', desc: '写下读书心得', narrative: '记录阅读感悟，让思考更深入。读书不仅是获取知识，更是与作者的对话。' },
      { icon: '📝', title: '阅读计划', desc: '制定阅读计划', narrative: '规划阅读目标，让知识积累更有条理。计划让梦想照进现实。' }
    ],
    fun: [
      { icon: '🎯', title: '阅读挑战', desc: '今天读50页书', narrative: '完成了阅读挑战！每一页都是进步，坚持就是胜利。' },
      { icon: '🔤', title: '单词打卡', desc: '背10个单词', narrative: '积累点滴，汇聚成海。今天的努力，是明天的收获。' }
    ]
  },

  // ⚽ 操场场景
  playground: {
    explore: [
      { icon: '🏃', title: '跑步挑战', desc: '跑一圈操场', narrative: '今天你完成了跑步挑战！身体是灵魂的容器，照顾好它是对自己最好的投资。' },
      { icon: '🧘', title: '瑜伽放松', desc: '做10分钟拉伸', narrative: '拉伸让身体更舒展，让心灵更放松。运动不仅是锻炼，更是与身体的对话。' }
    ],
    observe: [
      { icon: '👀', title: '运动观察', desc: '观察同学们的运动', narrative: '操场上充满活力，每个人都在追求健康。运动是生活的调味剂，让每一天都充满能量。' },
      { icon: '🌤️', title: '天空观察', desc: '看看天空和云朵', narrative: '仰望天空，感受大自然的广阔。在繁忙的生活中，抬头看看天空，让心灵得到释放。' }
    ],
    interact: [
      { icon: '🤝', title: '运动伙伴', desc: '和同学一起运动', narrative: '与朋友一起运动，让汗水更有意义。互相鼓励，共同进步。' },
      { icon: '💪', title: '加油鼓励', desc: '为运动的同学加油', narrative: '一句加油，给予他人力量。善意的鼓励能让世界变得更温暖。' }
    ],
    express: [
      { icon: '📸', title: '运动记录', desc: '记录运动瞬间', narrative: '用镜头捕捉运动的美好。健康的身体是一切的基础，记录每一次进步。' },
      { icon: '📊', title: '数据记录', desc: '记录运动数据', narrative: '量化运动成果，让进步看得见。数据是最好的见证。' }
    ],
    fun: [
      { icon: '⚽', title: '踢球', desc: '踢一场足球', narrative: '在球场上挥洒汗水，释放青春活力。运动让生活更精彩。' },
      { icon: '🏀', title: '投篮', desc: '投10个篮', narrative: '每一次投篮都是对自我的挑战。享受运动的乐趣，输赢都是收获。' }
    ]
  },

  // 💡 自习室场景
  study: {
    explore: [
      { icon: '💡', title: '新座位', desc: '换一个自习位置', narrative: '换个环境，换种心情。新的座位带来新的灵感，学习效率也随之提升。' },
      { icon: '📚', title: '资料探索', desc: '发现新的学习资料', narrative: '找到了有用的学习资料，知识的积累又进了一步。探索是学习的乐趣所在。' }
    ],
    observe: [
      { icon: '👀', title: '学习观察', desc: '观察同学们的学习状态', narrative: '看到同学们专注学习的样子，你也受到了鼓舞。良好的学习氛围能激发无限动力。' }
    ],
    interact: [
      { icon: '🤝', title: '小组学习', desc: '和同学一起学习', narrative: '小组学习让知识碰撞出火花。互相讨论，共同进步。' },
      { icon: '🙋', title: '请教问题', desc: '向同学请教问题', narrative: '今天你勇敢地请教了问题。不懂就问是学习的捷径，每个人都有值得学习的地方。' }
    ],
    express: [
      { icon: '✍️', title: '思维导图', desc: '画一张思维导图', narrative: '用思维导图梳理知识，让思路更清晰。可视化思维是学习的好帮手。' },
      { icon: '📝', title: '学习计划', desc: '制定学习计划', narrative: '规划学习目标，让每一天都有方向。计划是成功的第一步。' }
    ],
    fun: [
      { icon: '🎯', title: '番茄工作', desc: '完成一个番茄钟', narrative: '专注25分钟，高效学习。番茄工作法让时间更有价值。' },
      { icon: '🏆', title: '目标打卡', desc: '完成今日学习目标', narrative: '今天的学习目标达成！每一个小成就都是通往大梦想的阶梯。' }
    ]
  }
};

// ============================================
// 全局变量
// ============================================
let selectedScene = '';
let selectedAction = '';
let tasks = [];
let completedCells = [];
let bingoCount = 0;
let currentTaskIndex = -1;
let currentNote = '';
let currentPhoto = '';
let savedMoments = [];

// ============================================
// DOM元素
// ============================================
const pages = {
  welcome: document.getElementById('page-welcome'),
  status: document.getElementById('page-status'),
  bingo: document.getElementById('page-bingo'),
  moments: document.getElementById('page-moments')
};

const modals = {
  task: document.getElementById('task-modal'),
  moment: document.getElementById('moment-modal'),
  momentDetail: document.getElementById('moment-detail-modal')
};

// ============================================
// 初始化
// ============================================
function init() {
  loadData();
  bindEvents();
  updateDate();
}

// 加载数据
function loadData() {
  const saved = localStorage.getItem('dayzee_moments');
  if (saved) {
    savedMoments = JSON.parse(saved);
  }
  
  const bingoSaved = localStorage.getItem('dayzee_bingo');
  if (bingoSaved) {
    const data = JSON.parse(bingoSaved);
    completedCells = data.completedCells || [];
    bingoCount = data.bingoCount || 0;
    selectedScene = data.scene || '';
    selectedAction = data.action || '';
  }
}

// 绑定事件
function bindEvents() {
  // 欢迎页
  document.getElementById('start-btn').addEventListener('click', () => {
    switchPage('status');
  });

  // 返回按钮
  document.getElementById('back-welcome-btn').addEventListener('click', () => {
    switchPage('welcome');
  });
  
  document.getElementById('back-status-btn').addEventListener('click', () => {
    switchPage('status');
  });
  
  document.getElementById('back-bingo-btn').addEventListener('click', () => {
    switchPage('bingo');
  });

  // 场景选择
  document.querySelectorAll('.scene-card').forEach(card => {
    card.addEventListener('click', () => {
      selectedScene = card.dataset.scene;
      document.querySelectorAll('.scene-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      checkGenerateBtn();
    });
  });

  // 行为选择
  document.querySelectorAll('.action-card').forEach(card => {
    card.addEventListener('click', () => {
      selectedAction = card.dataset.action;
      document.querySelectorAll('.action-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      checkGenerateBtn();
    });
  });

  // 生成任务按钮
  document.getElementById('generate-btn').addEventListener('click', generateTasks);

  // 查看奇遇记录
  document.getElementById('view-moments-btn').addEventListener('click', () => {
    renderMomentsGrid();
    switchPage('moments');
  });

  // 任务弹窗
  document.getElementById('close-modal').addEventListener('click', closeTaskModal);
  document.getElementById('cancel-task').addEventListener('click', closeTaskModal);
  document.getElementById('complete-task').addEventListener('click', completeTask);

  // 照片上传
  document.getElementById('photo-input').addEventListener('change', handlePhotoUpload);

  // 奇遇卡弹窗
  document.getElementById('close-moment').addEventListener('click', closeMomentModal);
  document.getElementById('save-moment').addEventListener('click', saveMomentAndClose);
  document.getElementById('share-moment').addEventListener('click', shareMoment);

  // 奇遇卡详情弹窗
  document.getElementById('close-moment-detail').addEventListener('click', closeMomentDetailModal);
  document.getElementById('share-detail-moment').addEventListener('click', shareDetailMoment);
  document.getElementById('delete-moment').addEventListener('click', deleteMoment);
}

// 更新日期
function updateDate() {
  const today = new Date();
  const dateStr = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;
  document.getElementById('current-date').textContent = dateStr;
}

// ============================================
// 页面切换
// ============================================
function switchPage(pageName) {
  Object.keys(pages).forEach(name => {
    pages[name].classList.remove('active');
  });
  pages[pageName].classList.add('active');
}

// ============================================
// 状态选择逻辑
// ============================================
function checkGenerateBtn() {
  const btn = document.getElementById('generate-btn');
  const hint = document.querySelector('.generate-hint');
  
  if (selectedScene && selectedAction) {
    btn.classList.remove('disabled');
    hint.textContent = '准备生成今日任务';
  } else {
    btn.classList.add('disabled');
    hint.textContent = '请先选择场景和行为维度';
  }
}

// ============================================
// 任务生成逻辑
// ============================================
function generateTasks() {
  if (!selectedScene || !selectedAction) return;

  const sceneTasks = taskTemplates[selectedScene];
  if (!sceneTasks) return;

  // 获取当前选择行为的任务
  const mainTasks = sceneTasks[selectedAction] || [];
  
  // 获取其他行为的任务作为补充
  const otherActions = Object.keys(sceneTasks).filter(a => a !== selectedAction);
  let allAvailableTasks = [...mainTasks];
  
  otherActions.forEach(action => {
    allAvailableTasks = [...allAvailableTasks, ...(sceneTasks[action] || [])];
  });

  // 随机打乱并选取9个任务
  tasks = shuffleArray(allAvailableTasks).slice(0, 9);
  
  // 重置完成状态
  completedCells = [];
  bingoCount = 0;
  
  // 保存到localStorage
  saveBingoData();
  
  // 更新状态栏
  document.getElementById('current-scene').textContent = getSceneName(selectedScene);
  document.getElementById('current-action').textContent = getActionName(selectedAction);
  document.getElementById('bingo-count').textContent = bingoCount;
  updateProgress();
  
  // 渲染棋盘
  renderBoard();
  
  // 切换到Bingo页面
  switchPage('bingo');
}

// 获取场景中文名
function getSceneName(scene) {
  const names = {
    canteen: '食堂',
    commute: '通勤',
    break: '课间',
    dorm: '宿舍',
    library: '图书馆',
    playground: '操场',
    study: '自习室'
  };
  return names[scene] || scene;
}

// 获取行为中文名
function getActionName(action) {
  const names = {
    explore: '探索',
    observe: '观察',
    interact: '互动',
    express: '表达',
    fun: '趣味'
  };
  return names[action] || action;
}

// 数组随机打乱
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ============================================
// Bingo棋盘渲染
// ============================================
function renderBoard() {
  const board = document.getElementById('bingo-board');
  board.innerHTML = '';
  
  tasks.forEach((task, index) => {
    const cell = document.createElement('div');
    cell.className = `bingo-cell ${completedCells.includes(index) ? 'completed' : ''}`;
    cell.dataset.index = index;
    
    cell.innerHTML = `
      <span class="cell-icon">${task.icon}</span>
      <span class="cell-title">${task.title}</span>
    `;
    
    cell.addEventListener('click', () => {
      if (!completedCells.includes(index)) {
        openTaskModal(index);
      }
    });
    
    board.appendChild(cell);
  });
  
  // 重置指示器
  document.querySelectorAll('.indicator').forEach(ind => ind.classList.remove('active'));
}

// ============================================
// 任务弹窗
// ============================================
function openTaskModal(index) {
  currentTaskIndex = index;
  const task = tasks[index];
  
  document.getElementById('task-icon').textContent = task.icon;
  document.getElementById('task-title').textContent = task.title;
  document.getElementById('task-desc').textContent = task.desc;
  
  // 清空记录区域
  document.getElementById('task-note').value = '';
  document.getElementById('photo-preview').style.display = 'none';
  currentNote = '';
  currentPhoto = '';
  
  modals.task.classList.add('active');
}

function closeTaskModal() {
  modals.task.classList.remove('active');
  currentTaskIndex = -1;
}

// 处理照片上传
function handlePhotoUpload(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      currentPhoto = event.target.result;
      document.getElementById('photo-preview').src = currentPhoto;
      document.getElementById('photo-preview').style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
}

// ============================================
// 完成任务
// ============================================
function completeTask() {
  if (currentTaskIndex === -1) return;
  
  // 保存当前任务索引（因为closeTaskModal会把它设为-1）
  const taskIndex = currentTaskIndex;
  
  // 获取用户记录
  currentNote = document.getElementById('task-note').value;
  
  // 标记完成
  if (!completedCells.includes(taskIndex)) {
    completedCells.push(taskIndex);
    completedCells.sort((a, b) => a - b);
  }
  
  // 检查Bingo
  checkBingo();
  
  // 保存数据
  saveBingoData();
  
  // 更新进度
  updateProgress();
  
  // 关闭任务弹窗
  closeTaskModal();
  
  // 刷新棋盘
  renderBoard();
  
  // 显示奇遇卡（使用保存的索引）
  setTimeout(() => {
    showMomentCard(taskIndex);
  }, 300);
}

// ============================================
// Bingo检测
// ============================================
function checkBingo() {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // 横向
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // 纵向
    [0, 4, 8], [2, 4, 6]              // 对角线
  ];
  
  const lineIds = ['h1', 'h2', 'h3', 'v1', 'v2', 'v3', 'd1', 'd2'];
  
  lines.forEach((line, index) => {
    const isComplete = line.every(cell => completedCells.includes(cell));
    const indicator = document.getElementById(lineIds[index]);
    
    if (isComplete && !indicator.classList.contains('active')) {
      indicator.classList.add('active');
      bingoCount++;
      document.getElementById('bingo-count').textContent = bingoCount;
    }
  });
}

// 更新进度
function updateProgress() {
  const progress = (completedCells.length / tasks.length) * 100;
  document.getElementById('progress-fill').style.width = `${progress}%`;
}

// ============================================
// 奇遇卡
// ============================================
let currentMomentTaskIndex = -1; // 新增：保存当前奇遇卡对应的任务索引

function showMomentCard(taskIndex) {
  const task = tasks[taskIndex];
  
  // 保存任务索引供后续保存使用
  currentMomentTaskIndex = taskIndex;
  
  document.getElementById('moment-icon').textContent = task.icon;
  document.getElementById('moment-title').textContent = `${task.title} - MOMENT`;
  document.getElementById('moment-narrative').textContent = task.narrative;
  document.getElementById('moment-date').textContent = new Date().toLocaleDateString('zh-CN');
  document.getElementById('moment-scene').textContent = `📍 ${getSceneName(selectedScene)}`;
  document.getElementById('moment-action').textContent = `🎯 ${getActionName(selectedAction)}`;
  
  // 显示用户记录
  const noteEl = document.getElementById('moment-note');
  if (currentNote) {
    noteEl.textContent = currentNote;
    noteEl.style.display = 'block';
  } else {
    noteEl.style.display = 'none';
  }
  
  // 显示照片
  const photoEl = document.getElementById('moment-photo');
  if (currentPhoto) {
    photoEl.src = currentPhoto;
    photoEl.style.display = 'block';
  } else {
    photoEl.style.display = 'none';
  }
  
  modals.moment.classList.add('active');
}

function closeMomentModal() {
  modals.moment.classList.remove('active');
  currentNote = '';
  currentPhoto = '';
}

// 保存奇遇卡
function saveMomentAndClose() {
  const task = tasks[currentMomentTaskIndex];
  
  const moment = {
    id: Date.now(),
    task: {
      icon: task.icon,
      title: task.title,
      narrative: task.narrative
    },
    note: currentNote,
    photo: currentPhoto,
    date: new Date().toISOString(),
    scene: selectedScene,
    action: selectedAction
  };
  
  savedMoments.push(moment);
  localStorage.setItem('dayzee_moments', JSON.stringify(savedMoments));
  
  closeMomentModal();
  alert('奇遇卡已保存！');
}

// 分享奇遇卡
function shareMoment() {
  const narrative = document.getElementById('moment-narrative').textContent;
  const shareText = `【Dayzee奇遇卡】\n\n${narrative}\n\n#Dayzee #生活奇遇`;
  
  if (navigator.share) {
    navigator.share({
      title: 'Dayzee奇遇卡',
      text: shareText
    }).catch(() => {
      copyToClipboard(shareText);
    });
  } else {
    copyToClipboard(shareText);
  }
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('内容已复制到剪贴板！');
  });
}

// ============================================
// 奇遇卡记录页
// ============================================
function renderMomentsGrid() {
  const grid = document.getElementById('moments-grid');
  const emptyState = document.getElementById('empty-moments');
  const countEl = document.getElementById('moments-count');
  
  if (savedMoments.length === 0) {
    grid.style.display = 'none';
    emptyState.style.display = 'flex';
    countEl.textContent = '共 0 张';
    return;
  }
  
  grid.style.display = 'grid';
  emptyState.style.display = 'none';
  countEl.textContent = `共 ${savedMoments.length} 张`;
  
  // 按时间倒序排列
  const sortedMoments = [...savedMoments].reverse();
  
  grid.innerHTML = sortedMoments.map(moment => {
    const date = new Date(moment.date).toLocaleDateString('zh-CN');
    return `
      <div class="moment-card-mini" data-id="${moment.id}">
        <span class="moment-icon">${moment.task.icon}</span>
        <span class="moment-date">${date}</span>
      </div>
    `;
  }).join('');
  
  // 绑定点击事件
  document.querySelectorAll('.moment-card-mini').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.id);
      showMomentDetail(id);
    });
  });
}

// 显示奇遇卡详情
function showMomentDetail(id) {
  const moment = savedMoments.find(m => m.id === id);
  if (!moment) return;
  
  document.getElementById('detail-icon').textContent = moment.task.icon;
  document.getElementById('detail-title').textContent = `${moment.task.title} - MOMENT`;
  document.getElementById('detail-narrative').textContent = moment.task.narrative;
  document.getElementById('detail-date').textContent = new Date(moment.date).toLocaleDateString('zh-CN');
  document.getElementById('detail-scene').textContent = `📍 ${getSceneName(moment.scene)}`;
  document.getElementById('detail-action').textContent = `🎯 ${getActionName(moment.action)}`;
  
  // 显示用户记录
  const noteEl = document.getElementById('detail-note');
  if (moment.note) {
    noteEl.textContent = moment.note;
    noteEl.style.display = 'block';
  } else {
    noteEl.style.display = 'none';
  }
  
  // 显示照片
  const photoEl = document.getElementById('detail-photo');
  if (moment.photo) {
    photoEl.src = moment.photo;
    photoEl.style.display = 'block';
  } else {
    photoEl.style.display = 'none';
  }
  
  // 保存当前查看的ID用于删除
  window.currentViewingMomentId = id;
  
  modals.momentDetail.classList.add('active');
}

function closeMomentDetailModal() {
  modals.momentDetail.classList.remove('active');
  window.currentViewingMomentId = null;
}

function shareDetailMoment() {
  const narrative = document.getElementById('detail-narrative').textContent;
  const shareText = `【Dayzee奇遇卡】\n\n${narrative}\n\n#Dayzee #生活奇遇`;
  
  if (navigator.share) {
    navigator.share({
      title: 'Dayzee奇遇卡',
      text: shareText
    }).catch(() => {
      copyToClipboard(shareText);
    });
  } else {
    copyToClipboard(shareText);
  }
}

function deleteMoment() {
  if (!window.currentViewingMomentId) return;
  
  if (confirm('确定要删除这张奇遇卡吗？')) {
    savedMoments = savedMoments.filter(m => m.id !== window.currentViewingMomentId);
    localStorage.setItem('dayzee_moments', JSON.stringify(savedMoments));
    closeMomentDetailModal();
    renderMomentsGrid();
  }
}

// ============================================
// 数据持久化
// ============================================
function saveBingoData() {
  const data = {
    completedCells,
    bingoCount,
    scene: selectedScene,
    action: selectedAction,
    lastUpdate: new Date().toISOString()
  };
  localStorage.setItem('dayzee_bingo', JSON.stringify(data));
}

// ============================================
// 启动应用
// ============================================
document.addEventListener('DOMContentLoaded', init);