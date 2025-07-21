// 小程序入口文件
App({
  // 全局数据
  globalData: {
    userInfo: null,
    // 用户偏好设置
    preferences: {
      liked: [], // 想吃的
      disliked: [], // 不想吃的
      canEat: [], // 能吃的
      cannotEat: [] // 不能吃的
    },
    // 美食数据
    foodData: [
      { id: 1, name: '川菜', icon: '🌶️' },
      { id: 2, name: '粤菜', icon: '🦐' },
      { id: 3, name: '湘菜', icon: '🌶️' },
      { id: 4, name: '鲁菜', icon: '🥟' },
      { id: 5, name: '苏菜', icon: '🦀' },
      { id: 6, name: '浙菜', icon: '🐟' },
      { id: 7, name: '闽菜', icon: '🦪' },
      { id: 8, name: '徽菜', icon: '🐷' },
      { id: 9, name: '西餐', icon: '🍝' }
    ]
  },

  // 小程序启动
  onLaunch() {
    console.log('小程序启动');
    // 获取用户信息
    this.getUserInfo();
    // 加载用户偏好
    this.loadUserPreferences();
  },

  // 获取用户信息
  getUserInfo() {
    wx.getUserProfile({
      desc: '用于完善用户资料',
      success: (res) => {
        this.globalData.userInfo = res.userInfo;
      },
      fail: (err) => {
        console.log('获取用户信息失败', err);
      }
    });
  },

  // 加载用户偏好设置
  loadUserPreferences() {
    try {
      const preferences = wx.getStorageSync('userPreferences');
      if (preferences) {
        this.globalData.preferences = preferences;
      }
    } catch (error) {
      console.log('加载用户偏好失败', error);
    }
  },

  // 保存用户偏好设置
  saveUserPreferences() {
    try {
      wx.setStorageSync('userPreferences', this.globalData.preferences);
    } catch (error) {
      console.log('保存用户偏好失败', error);
    }
  }
});
