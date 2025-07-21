/**
 * 通用工具函数库
 * 提供项目中常用的工具方法
 */

/**
 * 防抖函数 - 防止频繁触发事件
 * @param {Function} func 要执行的函数
 * @param {number} delay 延迟时间(毫秒)
 * @returns {Function} 防抖后的函数
 */
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

/**
 * 节流函数 - 限制函数执行频率
 * @param {Function} func 要执行的函数
 * @param {number} delay 间隔时间(毫秒)
 * @returns {Function} 节流后的函数
 */
function throttle(func, delay) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= delay) {
      lastTime = now;
      func.apply(this, args);
    }
  };
}

/**
 * 深拷贝对象 - 避免引用传递问题
 * @param {any} obj 要拷贝的对象
 * @returns {any} 深拷贝后的对象
 */
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  
  if (obj instanceof Array) {
    return obj.map(item => deepClone(item));
  }
  
  if (typeof obj === 'object') {
    const clonedObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }
}

/**
 * 随机打乱数组 - Fisher-Yates洗牌算法
 * @param {Array} array 要打乱的数组
 * @returns {Array} 打乱后的新数组
 */
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

/**
 * 格式化时间 - 将时间戳转换为可读格式
 * @param {number} timestamp 时间戳
 * @param {string} format 格式化模板，默认'YYYY-MM-DD HH:mm:ss'
 * @returns {string} 格式化后的时间字符串
 */
function formatTime(timestamp, format = 'YYYY-MM-DD HH:mm:ss') {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
}

/**
 * 生成随机ID - 用于临时标识
 * @param {number} length ID长度，默认8位
 * @returns {string} 随机ID字符串
 */
function generateRandomId(length = 8) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * 检查是否为空值 - 统一空值判断
 * @param {any} value 要检查的值
 * @returns {boolean} 是否为空
 */
function isEmpty(value) {
  if (value === null || value === undefined) {
    return true;
  }
  
  if (typeof value === 'string') {
    return value.trim() === '';
  }
  
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  
  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }
  
  return false;
}

/**
 * 显示加载提示 - 统一加载状态管理
 * @param {string} title 提示文字
 * @param {boolean} mask 是否显示透明蒙层
 */
function showLoading(title = '加载中...', mask = true) {
  wx.showLoading({
    title,
    mask
  });
}

/**
 * 隐藏加载提示
 */
function hideLoading() {
  wx.hideLoading();
}

/**
 * 显示成功提示 - 统一成功反馈
 * @param {string} title 提示文字
 * @param {number} duration 显示时长(毫秒)
 */
function showSuccess(title, duration = 2000) {
  wx.showToast({
    title,
    icon: 'success',
    duration
  });
}

/**
 * 显示错误提示 - 统一错误反馈
 * @param {string} title 提示文字
 * @param {number} duration 显示时长(毫秒)
 */
function showError(title, duration = 2000) {
  wx.showToast({
    title,
    icon: 'error',
    duration
  });
}

/**
 * 显示普通提示 - 统一信息反馈
 * @param {string} title 提示文字
 * @param {number} duration 显示时长(毫秒)
 */
function showToast(title, duration = 2000) {
  wx.showToast({
    title,
    icon: 'none',
    duration
  });
}

// 导出所有工具函数
module.exports = {
  debounce,
  throttle,
  deepClone,
  shuffleArray,
  formatTime,
  generateRandomId,
  isEmpty,
  showLoading,
  hideLoading,
  showSuccess,
  showError,
  showToast
};
