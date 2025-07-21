# 今天吃什么 - 微信小程序

一个帮助用户快速决定用餐选择的微信小程序，采用极简黑白风格设计。

## 功能特色

### 🎯 核心功能
- **翻牌抽选**: 3D翻牌动画，随机选择美食类型
- **偏好设置**: 支持设置想吃的、不想吃的、能吃的、不能吃的偏好
- **智能推荐**: 基于偏好推荐附近优质餐厅
- **社交分享**: 查看其他用户的美食分享

### 🎨 设计特色
- **极简黑白风格**: 纯净的视觉体验，突出内容本身
- **流畅动画**: 精心设计的翻牌动画和交互反馈
- **响应式布局**: 适配不同屏幕尺寸的手机设备
- **无障碍支持**: 支持无障碍访问功能

## 技术架构

### 前端技术栈
- **框架**: 微信小程序原生开发
- **样式**: WXSS + CSS3 动画
- **组件化**: 自定义组件开发
- **状态管理**: 页面级状态管理

### 项目结构
```
├── app.js                 # 小程序入口文件
├── app.json               # 全局配置
├── app.wxss               # 全局样式
├── project.config.json    # 项目配置
├── sitemap.json          # 站点地图
├── pages/                # 页面目录
│   └── index/            # 主页面
│       ├── index.js      # 页面逻辑
│       ├── index.json    # 页面配置
│       ├── index.wxml    # 页面结构
│       └── index.wxss    # 页面样式
├── components/           # 组件目录
│   ├── flip-card/        # 翻牌组件
│   ├── restaurant-card/  # 餐厅卡片组件
│   └── share-card/       # 分享卡片组件
└── images/               # 图片资源
    ├── share.svg         # 分享图标
    ├── clock.svg         # 时钟图标
    ├── arrow-right.svg   # 右箭头图标
    └── ...               # 其他图标
```

## 核心组件说明

### 1. 翻牌组件 (flip-card)
- **功能**: 实现3D翻牌动画效果
- **特色**: 
  - CSS3 transform 3D翻转
  - 选中状态高亮显示
  - 流畅的动画过渡效果
- **属性**:
  - `cardData`: 卡片数据
  - `isFlipped`: 是否翻转
  - `isSelected`: 是否被选中

### 2. 餐厅卡片组件 (restaurant-card)
- **功能**: 展示餐厅信息
- **特色**:
  - 星级评分显示
  - 配送时间和价格信息
  - 图片懒加载优化
- **属性**:
  - `restaurant`: 餐厅数据对象

### 3. 分享卡片组件 (share-card)
- **功能**: 展示用户分享的美食
- **特色**:
  - 用户头像和昵称
  - 美食图片展示
  - 文字描述截断处理
- **属性**:
  - `shareData`: 分享数据对象

## 样式系统

### 色彩规范
```css
/* 主色调 */
--color-black: #000000;      /* 纯黑 */
--color-white: #FFFFFF;      /* 纯白 */
--color-dark-gray: #333333;  /* 深灰 */
--color-light-gray: #999999; /* 浅灰 */

/* 强调色 */
--color-gold: #FFD700;       /* 金色(评分星级) */

/* 背景色 */
--color-bg-primary: #F8F8F8; /* 主背景 */
--color-bg-card: #FFFFFF;    /* 卡片背景 */
```

### 字体层级
```css
/* 标题 */
.text-title { font-size: 40rpx; font-weight: 600; }

/* 副标题 */
.text-subtitle { font-size: 32rpx; font-weight: 500; }

/* 正文 */
.text-body { font-size: 28rpx; font-weight: 400; }

/* 说明文字 */
.text-caption { font-size: 24rpx; font-weight: 400; }
```

### 间距系统
```css
/* 间距规范 */
.mt-xs { margin-top: 16rpx; }
.mt-sm { margin-top: 24rpx; }
.mt-md { margin-top: 32rpx; }
.mt-lg { margin-top: 48rpx; }
.mt-xl { margin-top: 64rpx; }
```

## 开发指南

### 环境要求
- 微信开发者工具 1.05.0 或更高版本
- 小程序基础库 2.19.4 或更高版本

### 本地开发
1. 下载并安装微信开发者工具
2. 导入项目到开发者工具
3. 配置 AppID (在 project.config.json 中)
4. 点击编译运行

### 部署发布
1. 在微信开发者工具中点击"上传"
2. 填写版本号和项目备注
3. 登录微信公众平台提交审核
4. 审核通过后发布上线

## 性能优化

### 图片优化
- 使用 WebP 格式图片
- 实现图片懒加载
- 压缩图片文件大小

### 动画优化
- 使用 CSS3 硬件加速
- 避免频繁的 DOM 操作
- 合理使用 will-change 属性

### 代码优化
- 组件化开发，提高复用性
- 按需加载，减少包体积
- 使用小程序分包加载

## 浏览器兼容性

支持微信小程序运行的所有平台：
- iOS 微信客户端
- Android 微信客户端
- 微信开发者工具

## 许可证

MIT License

## 贡献指南

欢迎提交 Issue 和 Pull Request 来改进项目。

## 联系方式

如有问题或建议，请通过以下方式联系：
- 邮箱: developer@example.com
- 微信: your-wechat-id

---

**注意**: 这是一个演示项目，实际使用时请根据具体需求进行调整和完善。
