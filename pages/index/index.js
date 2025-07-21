// 主页面逻辑 - 今天吃什么小程序
const app = getApp();

Page({
  data: {
    // 状态栏高度
    statusBarHeight: 0,
    // 当前选中的底部导航
    currentTab: 0,
    // 偏好设置
    preferences: {
      mode: '', // 当前选择的偏好模式
    },
    // 翻牌状态
    isFlipping: false,
    // 美食卡片数据
    foodCards: [],
    // 筛选标签
    filterTags: [
      { id: 1, name: '附近', active: true },
      { id: 2, name: '快餐', active: false },
      { id: 3, name: '正餐', active: false },
      { id: 4, name: '甜品', active: false },
      { id: 5, name: '夜宵', active: false }
    ],
    // 推荐餐厅数据
    restaurants: [
      {
        id: 1,
        name: '老北京炸酱面',
        rating: 4.8,
        ratingCount: 1234,
        deliveryTime: '30分钟',
        price: '人均¥25'
      },
      {
        id: 2,
        name: '川味小厨',
        rating: 4.6,
        ratingCount: 856,
        deliveryTime: '25分钟',
        price: '人均¥35'
      }
    ],
    // 分享数据
    shareList: [
      {
        id: 1,
        nickname: '美食达人',
        description: '今天的麻辣香锅真的太香了！'
      },
      {
        id: 2,
        nickname: '吃货小王',
        description: '这家的烤鸭皮脆肉嫩，强烈推荐'
      }
    ]
  },

  // 页面加载
  onLoad() {
    this.initPage();
  },

  // 初始化页面
  initPage() {
    // 获取系统信息
    const systemInfo = wx.getSystemInfoSync();
    this.setData({
      statusBarHeight: systemInfo.statusBarHeight
    });

    // 初始化美食卡片
    this.initFoodCards();
  },

  // 初始化美食卡片数据
  initFoodCards() {
    const foodData = app.globalData.foodData;
    const foodCards = foodData.map(item => ({
      ...item,
      isFlipped: false,
      isSelected: false
    }));
    this.setData({ foodCards });
  },

  // 偏好设置点击
  onPreferenceTap(e) {
    const { mode } = e.currentTarget.dataset;
    const currentMode = this.data.preferences.mode;
    
    this.setData({
      'preferences.mode': currentMode === mode ? '' : mode
    });
  },

  // 开始翻牌
  onStartFlip() {
    if (this.data.isFlipping) return;

    this.setData({ isFlipping: true });

    // 重置所有卡片状态
    const foodCards = this.data.foodCards.map(card => ({
      ...card,
      isFlipped: false,
      isSelected: false
    }));
    this.setData({ foodCards });

    // 延迟开始翻牌动画
    setTimeout(() => {
      this.startFlipAnimation();
    }, 100);
  },

  // 执行翻牌动画
  startFlipAnimation() {
    const foodCards = [...this.data.foodCards];
    
    // 所有卡片翻转
    foodCards.forEach(card => {
      card.isFlipped = true;
    });
    this.setData({ foodCards });

    // 延迟选择随机卡片
    setTimeout(() => {
      this.selectRandomCard();
    }, 600);
  },

  // 选择随机卡片
  selectRandomCard() {
    const foodCards = [...this.data.foodCards];
    const randomIndex = Math.floor(Math.random() * foodCards.length);
    
    // 设置选中状态
    foodCards[randomIndex].isSelected = true;
    this.setData({ 
      foodCards,
      isFlipping: false 
    });

    // 显示结果提示
    wx.showToast({
      title: `今天吃${foodCards[randomIndex].name}！`,
      icon: 'none',
      duration: 2000
    });
  },

  // 页面分享
  onShareAppMessage() {
    return {
      title: '今天吃什么？快来一起决定吧！',
      path: '/pages/index/index'
    };
  }
});
