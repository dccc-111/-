// 翻牌组件逻辑 - 实现3D翻牌交互功能
Component({
  // 组件属性定义
  properties: {
    // 卡片数据 - 包含美食名称、图标等信息
    cardData: {
      type: Object,
      value: {}
    },
    // 是否翻转 - 控制卡片翻转状态
    isFlipped: {
      type: Boolean,
      value: false
    },
    // 是否被选中 - 控制选中高亮效果
    isSelected: {
      type: Boolean,
      value: false
    }
  },

  // 组件内部数据
  data: {
    // 预留内部状态数据
  },

  // 组件方法定义
  methods: {
    // 卡片点击事件处理 - 响应用户点击交互
    onCardTap() {
      // 防止在翻转前响应点击，确保用户体验
      if (!this.properties.isFlipped) {
        return;
      }

      // 向父组件传递点击事件和卡片数据
      this.triggerEvent('cardtap', {
        cardData: this.properties.cardData
      });

      // 添加触觉反馈增强交互体验
      this.addClickFeedback();
    },

    // 添加点击反馈效果 - 提供触觉反馈
    addClickFeedback() {
      // 轻微震动反馈，提升用户交互体验
      wx.vibrateShort({
        type: 'light'
      });
    }
  },

  // 组件生命周期
  lifetimes: {
    // 组件创建时
    created() {
      console.log('翻牌组件创建');
    },

    // 组件挂载时
    attached() {
      console.log('翻牌组件挂载');
    },

    // 组件销毁时
    detached() {
      console.log('翻牌组件销毁');
    }
  },

  // 监听属性变化
  observers: {
    // 监听翻转状态变化
    'isFlipped': function(isFlipped) {
      if (isFlipped) {
        console.log('卡片翻转:', this.properties.cardData.name);
      }
    },

    // 监听选中状态变化
    'isSelected': function(isSelected) {
      if (isSelected) {
        console.log('卡片被选中:', this.properties.cardData.name);
        
        // 选中时的特效
        this.showSelectedEffect();
      }
    }
  },

  // 显示选中特效
  showSelectedEffect() {
    // 可以在这里添加更多选中特效
    // 比如粒子效果、声音效果等
    
    // 震动反馈
    wx.vibrateShort({
      type: 'heavy'
    });
  }
});
