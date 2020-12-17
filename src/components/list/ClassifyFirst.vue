<template>
  <div ref="oneTab"
   class="first-classify">
      <div
      ref="swiperItem"
      @touchend="scrollTo(i,$event)"
      @touchmove="moveTo(i)"
      @touchstart="move = false"
      class="classify-item" v-for="(item,i) in menuList" :key="i">
          <div :class="{'img-wrap':true,active :index === i }">
          <img :src="item.imgURL" alt="">
          </div>
          <div :class="{'text':true,active : index === i}">
              {{ item.title }}
          </div>
      </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import animate from '@/tools/animate'
export default {
    data(){
        return {
            move : false,//当前是否在移动
            index : 0,
             menuList: [
        {
          title: '时令水果',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg',
        },
        {
          title: '酒水冲调',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/酒水冲调.jpg',
        },
        {
          title: '安心乳品',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/安心乳品.jpg',
        },
        {
          title: '休闲零食',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/休闲零食.jpg',
        },
        {
          title: '肉蛋食材',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/肉蛋食材.jpg',
        },
        {
          title: '新鲜蔬菜',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/新鲜食材.jpg',
        },
        {
          title: '熟食餐饮',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/熟食餐饮.jpg',
        },
        {
          title: '海鲜水产',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/海鲜水产.jpg',
        },
        {
          title: '粮油调味',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/粮油调味.jpg',
        },
        {
          title: '某手美食',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/某手美食.jpg',
        },
        {
          title: '纸杯清洁',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/纸品清洁.jpg',
        },
        {
          title: '个人护理',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/个人护理.jpg',
        },
        {
          title: '美妆护肤',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/美妆护肤.jpg',
        },
        {
          title: '家居收纳',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家居收纳.jpg',
        },
        {
          title: '家用电器',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家用电器.jpg',
        },
        {
          title: '3C数码',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/3C数码.jpg',
        },
        {
          title: '母婴用品',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/母婴用品.jpg',
        },
        {
          title: '鲜花绿植',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/鲜花绿植.jpg',
        },
        {
          title: '宠物用品',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/宠物用品.jpg',
        },
        {
          title: '图书玩具',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/图书文具.jpg',
        },
        {
          title: '手表配饰',
          imgURL:
            'https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg',
        },
      ]
        }
    },
    methods : {
        ...mapActions(['getSideArr']),
        //移动时将移动的状态设为true
        moveTo(){
            this.move = true
        },
        //移动结束时执行的函数
        scrollTo(index,e){
            if(this.move){//如果是通过滑动结束，则什么也不做
                return
            }
            //给当前选中的元素加类名
            this.index = index;
            const itemWidth = e.target.getBoundingClientRect().width;
            const itemLeft = e.target.getBoundingClientRect().left;//拿到当前选中项的宽度及左边距
            const {oneTab} = this.$refs;
            const wrapperWidth = oneTab.getBoundingClientRect().width;//拿到父级以及计算父级的宽度
            const scrollLeft = itemLeft -  wrapperWidth / 2 + itemWidth / 2;
            animate( oneTab,'scrollLeft',oneTab.scrollLeft,oneTab.scrollLeft+scrollLeft)//让父级元素始终滚动至中间。
            this.getSideArr(this.menuList[index].title)//点击完成之后发送网络请求，获取二级导航栏数据
        },
    },
}
</script>

<style lang="less" scoped>
    .first-classify{
        height: 104px;
        width: 375px;
        display: flex;
        overflow: auto;
        .classify-item{
           padding: 10px 0 0 5px;
           width: 50px;
                height:70px;
            .img-wrap{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50px;
                height: 50px;
                border-radius: 23px;
                &.active{border:2px solid #d13193;}
                img{
                width: 45px;
                height: 45px;
                border-radius: 50%;
            }
            }
            .text{
                border-radius: 30px;
                font-weight: bold;
                margin-top: 5px;
                text-align: center;
                &.active{
                    background-color: #d13193;
                    color: #fff;
                }
            }
        }
    }
    //去掉横向滚动时的滚动条
    .first-classify::-webkit-scrollbar{
        width: 0;
        background: none;
    }
</style>