// 餐厅卡片组件逻辑
Component({
  // 组件属性
  properties: {
    // 餐厅数据
    restaurant: {
      type: Object,
      value: {}
    }
  },

  // 组件数据
  data: {
    // 星级数组，用于渲染星星
    starArray: []
  },

  // 组件方法
  methods: {
    // 卡片点击事件
    onCardTap() {
      // 触发父组件事件
      this.triggerEvent('cardtap', {
        restaurant: this.properties.restaurant
      });

      // 添加点击反馈
      this.addClickFeedback();
    },

    // 添加点击反馈效果
    addClickFeedback() {
      // 轻微震动反馈
      wx.vibrateShort({
        type: 'light'
      });
    },

    // 计算星级数组
    calculateStars(rating) {
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 >= 0.5;
      const starArray = [];

      // 添加满星
      for (let i = 0; i < fullStars; i++) {
        starArray.push('full');
      }

      // 添加半星
      if (hasHalfStar && fullStars < 5) {
        starArray.push('half');
      }

      // 添加空星
      while (starArray.length < 5) {
        starArray.push('empty');
      }

      return starArray;
    }
  },

  // 组件生命周期
  lifetimes: {
    // 组件挂载时
    attached() {
      // 计算星级显示
      const rating = this.properties.restaurant.rating || 0;
      const starArray = this.calculateStars(rating);
      this.setData({ starArray });
    }
  },

  // 监听属性变化
  observers: {
    // 监听餐厅数据变化
    'restaurant.rating': function(rating) {
      if (rating) {
        const starArray = this.calculateStars(rating);
        this.setData({ starArray });
      }
    }
  }
});
