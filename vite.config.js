import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // 如果你使用 Vue，请保留此插件

export default defineConfig({
  // 基础路径
  base: './', // 设置资源的公共基础路径，默认为根路径

  // 插件
  plugins: [
    vue(), // 如果你使用 Vue 框架，请启用此插件
  ],

  // 服务配置
  server: {
    host: '0.0.0.0', // 允许外部访问
    port: 3000, // 默认端口
    open: true, // 启动后自动打开浏览器
    cors: true, // 开启跨域
  },

  // 构建配置
  build: {
    outDir: 'dist', // 输出目录
    sourcemap: false, // 是否生成 source map 文件
    rollupOptions: {
      output: {
        manualChunks: {
          // 将依赖单独分包
          vendor: ['vue']
        },
      },
    },
  },

  // 别名配置
  resolve: {
    alias: {
      '@': '/src', // @ 符号指向项目 src 目录
    },
  },

  // CSS配置
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`, // 自动导入 SCSS 全局变量
      },
    },
  },
});
