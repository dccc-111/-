// 主页面逻辑
const app = getApp();
const { getRandomFoodTypes, getRecommendedRestaurants, getUserShares, getFilterTags } = require('../../utils/mockData');
const { showToast, showLoading, hideLoading } = require('../../utils/common');

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
    // 筛选标签 - 将通过loadFilterTags方法加载
    filterTags: [],
    // 推荐餐厅数据
    restaurants: [],
    // 分享数据
    shareList: []
  },

  // 页面加载
  onLoad() {
    this.initPage();
    this.loadData();
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

  // 初始化美食卡片数据 - 使用模拟数据生成翻牌卡片
  initFoodCards() {
    // 获取随机的9种美食类型用于翻牌
    const foodData = getRandomFoodTypes(9);
    const foodCards = foodData.map(item => ({
      ...item,
      isFlipped: false, // 初始状态未翻转
      isSelected: false // 初始状态未选中
    }));
    this.setData({ foodCards });
  },

  // 加载数据 - 异步加载页面所需数据
  loadData() {
    showLoading('加载中...');

    // 模拟网络请求延迟
    setTimeout(() => {
      this.loadRestaurants();
      this.loadShareList();
      this.loadFilterTags();
      hideLoading();
    }, 500);
  },

  // 加载餐厅数据 - 获取推荐餐厅列表
  loadRestaurants() {
    const restaurants = getRecommendedRestaurants();
    this.setData({ restaurants });
  },

  // 加载分享列表数据 - 获取用户分享内容
  loadShareList() {
    const shareList = getUserShares(5);
    this.setData({ shareList });
  },

  // 加载筛选标签数据 - 获取筛选选项
  loadFilterTags() {
    const filterTags = getFilterTags();
    this.setData({ filterTags });
  },

  // 分享按钮点击
  onShareTap() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
  },

  // 偏好设置点击 - 处理用户的饮食偏好选择
  onPreferenceTap(e) {
    const { mode } = e.currentTarget.dataset;
    const currentMode = this.data.preferences.mode;

    // 切换偏好模式，如果已选中则取消选中
    this.setData({
      'preferences.mode': currentMode === mode ? '' : mode
    });

    // 保存偏好设置到本地存储
    this.savePreferences();
  },

  // 保存偏好设置 - 持久化用户偏好数据
  savePreferences() {
    const preferences = this.data.preferences;
    // 更新全局数据并保存到本地存储
    app.globalData.preferences = { ...app.globalData.preferences, ...preferences };
    app.saveUserPreferences();
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

  // 执行翻牌动画 - 实现3D翻转效果
  startFlipAnimation() {
    const foodCards = [...this.data.foodCards];

    // 所有卡片同时翻转，展示背面内容
    foodCards.forEach(card => {
      card.isFlipped = true;
    });
    this.setData({ foodCards });

    // 延迟600ms后选择随机卡片，确保翻转动画完成
    setTimeout(() => {
      this.selectRandomCard();
    }, 600);
  },

  // 选择随机卡片 - 随机算法选择最终结果
  selectRandomCard() {
    const foodCards = [...this.data.foodCards];
    // 使用Math.random()生成随机索引
    const randomIndex = Math.floor(Math.random() * foodCards.length);

    // 设置选中状态，高亮显示选中的卡片
    foodCards[randomIndex].isSelected = true;
    this.setData({
      foodCards,
      isFlipping: false // 结束翻牌状态
    });

    // 显示结果提示，告知用户今天吃什么
    showToast(`今天吃${foodCards[randomIndex].name}！`, 2000);
  },

  // 卡片点击
  onCardTap(e) {
    const { cardData } = e.detail;
    console.log('卡片点击:', cardData);
  },

  // 筛选标签点击
  onFilterTap(e) {
    const { id } = e.currentTarget.dataset;
    const filterTags = this.data.filterTags.map(tag => ({
      ...tag,
      active: tag.id === id
    }));
    this.setData({ filterTags });
  },

  // 餐厅卡片点击
  onRestaurantTap(e) {
    const { restaurant } = e.detail;
    console.log('餐厅点击:', restaurant);
    // 这里可以跳转到餐厅详情页
  },

  // 分享卡片点击
  onShareCardTap(e) {
    const { shareData } = e.detail;
    console.log('分享卡片点击:', shareData);
  },

  // 底部导航点击
  onTabTap(e) {
    const { index } = e.currentTarget.dataset;
    this.setData({ currentTab: parseInt(index) });
    
    // 根据不同tab执行不同逻辑
    switch (index) {
      case 0:
        // 首页
        break;
      case 1:
        // 发现
        wx.showToast({ title: '发现页面开发中', icon: 'none' });
        break;
      case 2:
        // 收藏
        wx.showToast({ title: '收藏页面开发中', icon: 'none' });
        break;
      case 3:
        // 我的
        wx.showToast({ title: '个人页面开发中', icon: 'none' });
        break;
    }
  },

  // 页面分享
  onShareAppMessage() {
    return {
      title: '今天吃什么？快来一起决定吧！',
      path: '/pages/index/index',
      imageUrl: '../../images/share-cover.jpg'
    };
  },

  // 分享到朋友圈
  onShareTimeline() {
    return {
      title: '今天吃什么？快来一起决定吧！',
      imageUrl: '../../images/share-cover.jpg'
    };
  }
});
