const px2rem = require('postcss-px2rem') //将css像素转换为rem的插件
module.exports = {
  lintOnSave: true,
  css : {
    loaderOptions:{
      postcss:{
        plugins:[
          px2rem({
            remUnit :37.5 //转换基数，与设计稿同步的话，直接用设计稿的的数据就行
          })
        ]
      }
    }
  }
}
