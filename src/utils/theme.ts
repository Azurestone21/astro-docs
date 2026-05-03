/**
 * 主题切换工具函数
 * @description 用于处理主题的保存、加载和切换
 */

// 主题类型
type Theme = 'light' | 'dark';

/**
 * 保存主题到本地存储
 * @param theme 主题类型
 */
export const saveTheme = (theme: Theme): void => {
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
};

/**
 * 加载主题
 * @returns 当前主题类型
 */
export const loadTheme = (): Theme => {
  const savedTheme = localStorage.getItem('theme') as Theme | null;
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const theme = savedTheme || systemTheme;
  
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

/**
 * 切换主题
 * @returns 切换后的主题类型
 */
export const toggleTheme = (): Theme => {
  const currentTheme = document.documentElement.getAttribute('data-theme') as Theme || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  saveTheme(newTheme);
  return newTheme;
};