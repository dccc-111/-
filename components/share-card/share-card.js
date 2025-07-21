// 分享卡片组件逻辑
Component({
  // 组件属性
  properties: {
    // 分享数据
    shareData: {
      type: Object,
      value: {}
    }
  },

  // 组件数据
  data: {
    // 内部状态
  },

  // 组件方法
  methods: {
    // 卡片点击事件
    onCardTap() {
      // 触发父组件事件
      this.triggerEvent('cardtap', {
        shareData: this.properties.shareData
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
    }
  },

  // 组件生命周期
  lifetimes: {
    // 组件创建时
    created() {
      console.log('分享卡片组件创建');
    },

    // 组件挂载时
    attached() {
      console.log('分享卡片组件挂载');
    },

    // 组件销毁时
    detached() {
      console.log('分享卡片组件销毁');
    }
  },

  // 监听属性变化
  observers: {
    // 监听分享数据变化
    'shareData': function(shareData) {
      if (shareData && shareData.id) {
        console.log('分享数据更新:', shareData.nickname);
      }
    }
  }
});
