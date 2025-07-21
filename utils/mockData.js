/**
 * 模拟数据文件
 * 提供开发和测试阶段使用的模拟数据
 */

/**
 * 美食类型数据 - 用于翻牌抽选
 */
const foodTypes = [
  { id: 1, name: '川菜', icon: '🌶️', description: '麻辣鲜香，口味浓郁' },
  { id: 2, name: '粤菜', icon: '🦐', description: '清淡鲜美，营养丰富' },
  { id: 3, name: '湘菜', icon: '🌶️', description: '香辣可口，色泽诱人' },
  { id: 4, name: '鲁菜', icon: '🥟', description: '咸鲜为主，突出本味' },
  { id: 5, name: '苏菜', icon: '🦀', description: '清淡微甜，制作精细' },
  { id: 6, name: '浙菜', icon: '🐟', description: '清香爽脆，鲜嫩软滑' },
  { id: 7, name: '闽菜', icon: '🦪', description: '鲜香清淡，重汤轻油' },
  { id: 8, name: '徽菜', icon: '🐷', description: '重油重色，口味醇厚' },
  { id: 9, name: '西餐', icon: '🍝', description: '营养均衡，制作精美' }
];

/**
 * 餐厅数据 - 用于推荐展示
 */
const restaurants = [
  {
    id: 1,
    name: '老北京炸酱面',
    rating: 4.8,
    ratingCount: 1234,
    deliveryTime: '30分钟',
    price: '人均¥25',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=300&fit=crop',
    category: '中式快餐',
    distance: '500m',
    tags: ['快餐', '面食', '经济实惠']
  },
  {
    id: 2,
    name: '川味小厨',
    rating: 4.6,
    ratingCount: 856,
    deliveryTime: '25分钟',
    price: '人均¥35',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&h=300&fit=crop',
    category: '川菜',
    distance: '800m',
    tags: ['川菜', '麻辣', '正餐']
  },
  {
    id: 3,
    name: '粤式茶餐厅',
    rating: 4.7,
    ratingCount: 967,
    deliveryTime: '35分钟',
    price: '人均¥45',
    image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=300&fit=crop',
    category: '粤菜',
    distance: '1.2km',
    tags: ['粤菜', '茶点', '正餐']
  },
  {
    id: 4,
    name: '日式料理店',
    rating: 4.5,
    ratingCount: 543,
    deliveryTime: '40分钟',
    price: '人均¥68',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=300&fit=crop',
    category: '日料',
    distance: '1.5km',
    tags: ['日料', '寿司', '精致']
  },
  {
    id: 5,
    name: '意大利餐厅',
    rating: 4.4,
    ratingCount: 432,
    deliveryTime: '45分钟',
    price: '人均¥88',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop',
    category: '西餐',
    distance: '2km',
    tags: ['西餐', '意面', '浪漫']
  }
];

/**
 * 用户分享数据 - 用于社交展示
 */
const userShares = [
  {
    id: 1,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    nickname: '美食达人小王',
    foodImage: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop',
    description: '今天的麻辣香锅真的太香了！满满的配菜，辣度刚好，强烈推荐！',
    createTime: Date.now() - 3600000, // 1小时前
    likeCount: 23,
    location: '朝阳区'
  },
  {
    id: 2,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    nickname: '吃货小李',
    foodImage: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop',
    description: '这家的烤鸭皮脆肉嫩，蘸酱也很棒，值得再来！',
    createTime: Date.now() - 7200000, // 2小时前
    likeCount: 45,
    location: '海淀区'
  },
  {
    id: 3,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    nickname: '料理爱好者',
    foodImage: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=400&fit=crop',
    description: '自制的红烧肉，色香味俱全，家人都说好吃！',
    createTime: Date.now() - 10800000, // 3小时前
    likeCount: 67,
    location: '西城区'
  },
  {
    id: 4,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    nickname: '美食探索家',
    foodImage: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=400&fit=crop',
    description: '新发现的小店，环境很棒，菜品也很有特色！',
    createTime: Date.now() - 14400000, // 4小时前
    likeCount: 34,
    location: '东城区'
  },
  {
    id: 5,
    avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face',
    nickname: '甜品控',
    foodImage: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop',
    description: '这个蛋糕太美了，舍不得吃！味道也超级棒！',
    createTime: Date.now() - 18000000, // 5小时前
    likeCount: 89,
    location: '丰台区'
  }
];

/**
 * 筛选标签数据 - 用于餐厅筛选
 */
const filterTags = [
  { id: 1, name: '附近', active: true, type: 'distance' },
  { id: 2, name: '快餐', active: false, type: 'category' },
  { id: 3, name: '正餐', active: false, type: 'category' },
  { id: 4, name: '甜品', active: false, type: 'category' },
  { id: 5, name: '夜宵', active: false, type: 'category' },
  { id: 6, name: '高评分', active: false, type: 'rating' },
  { id: 7, name: '快速送达', active: false, type: 'delivery' },
  { id: 8, name: '经济实惠', active: false, type: 'price' }
];

/**
 * 获取随机美食类型 - 用于翻牌抽选
 * @param {number} count 获取数量，默认9个
 * @returns {Array} 美食类型数组
 */
function getRandomFoodTypes(count = 9) {
  const shuffled = [...foodTypes].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

/**
 * 获取推荐餐厅 - 根据条件筛选餐厅
 * @param {Object} filters 筛选条件
 * @returns {Array} 餐厅数组
 */
function getRecommendedRestaurants(filters = {}) {
  let result = [...restaurants];
  
  // 根据筛选条件过滤
  if (filters.category) {
    result = result.filter(restaurant => 
      restaurant.category === filters.category ||
      restaurant.tags.includes(filters.category)
    );
  }
  
  if (filters.rating) {
    result = result.filter(restaurant => restaurant.rating >= filters.rating);
  }
  
  if (filters.maxPrice) {
    result = result.filter(restaurant => {
      const price = parseInt(restaurant.price.match(/\d+/)[0]);
      return price <= filters.maxPrice;
    });
  }
  
  // 按评分排序
  result.sort((a, b) => b.rating - a.rating);
  
  return result;
}

/**
 * 获取用户分享列表 - 获取最新分享内容
 * @param {number} count 获取数量，默认5个
 * @returns {Array} 分享数组
 */
function getUserShares(count = 5) {
  return userShares
    .sort((a, b) => b.createTime - a.createTime)
    .slice(0, count);
}

/**
 * 获取筛选标签 - 获取所有可用标签
 * @returns {Array} 标签数组
 */
function getFilterTags() {
  return [...filterTags];
}

// 导出所有数据和方法
module.exports = {
  foodTypes,
  restaurants,
  userShares,
  filterTags,
  getRandomFoodTypes,
  getRecommendedRestaurants,
  getUserShares,
  getFilterTags
};
