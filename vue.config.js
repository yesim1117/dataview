module.exports = {
  configureWebpack: {
    resolve: {
      //配置可以不添加后缀 默认配置过了
      // extensions: [],
      // 配置别名
      alias: {
        // 默认配置
        // '@': 'src'
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
      }
    }
  } 
}