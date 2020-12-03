# mobail-mall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### 项目背景
移动端开发在当下是前端人员必备技能，用一个mall项目练手，熟悉熟悉移动端开发

## 项目开始前的配置说明
- 第三方包1
lib-flexible

- 作用
用来做移动端适配的，主要就是通过判断不同屏幕，将屏幕分成10等份，然后通过设置几等份，来设置像素，这个的作用就是将你写的px转换为rem

- npm地址
https://www.npmjs.com/package/lib-flexible

- 细节
使用时要将index.html中的“ <meta name="viewport" content="width=device-width,initial-scale=1.0">”删除，否则不会走适配，这是踩过的坑。

- 第三方包2
postcss-px2rem
- 作用
与给出的设计稿一致参数，避免重新计算

配置方法详见vue.config.js


## 组件库vant

- 地址
https://youzan.github.io/
备注：打不开就在hosts文件加上
185.199.111.153    youzan.github.io