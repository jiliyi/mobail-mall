//侧边栏书写模块
<template>
  <div ref="oneTab"
        class="side-bar">
      <div  @touchstart="move = false"
            @touchmove="move = true"
            @touchend="moveTo(index,$event)"
           v-for="(item,index) in sideList" :key="item"
          :class="{active:index === i}">
          {{ item }}
      </div>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import animate from '@/tools/animate';
export default {
    data(){
        return {
            i : 0,//当前选中的索引
            move : false//当前竖向滚动条是否在滚动
        }
    },
    methods:{
        moveTo(index,e){
            if(this.move){
                return;//如果是通过拖动滚动条，则啥也不做
            }
            this.i = index;
            //以下代码均为让选中的竖直元素居中
            const {oneTab} = this.$refs;
            const tabTop = oneTab.offsetTop;//容器距离浏览器顶边的距离
            const height = oneTab.getBoundingClientRect().height;//容器的高度
            const itemHeight = e.target.getBoundingClientRect().height;//当前选中项的高度
            const itemTop = e.target.offsetTop;
            const scrollTop = - height / 2 - tabTop + (itemTop + itemHeight / 2)
            //通过一个运动函数来实现动画过程
            animate(oneTab,'scrollTop',oneTab.scrollTop,oneTab.scrollTop+scrollTop)
            this.getGoodsList({
                type : this.sideList[index],
                page : 1,
                size : 5,
                sort : 'all'
            })
        },
        ...mapActions(['getGoodsList'] )
    },
    computed : {
        ...mapState({
            sideList : state=>state.sideArr
        }),
    },
    mounted(){
        this.getGoodsList({
            type:this.sideList[0],
            page : 1,
            size : 5,
            sort : 'all'
        })
    }
}
</script>

<style lang="less" scoped>
    .side-bar{
        position: fixed;
        width:79px;
        left: 0;
        bottom: 50px;
        top: 135px;
        background-color: #f8f8f8;
        overflow: auto;//溢出时滚动条
        div{
            width: 79px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            position: relative;
        }
        .active{
            font-weight: bold;
            color: #ff1a90;
        }
        .active::before{
            position: absolute;
            display: block;
            content: '';
            width: 6px;
            height: 18px;
            background-color: #ff1a90;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    //去掉滚动条
    .side-bar::-webkit-scrollbar{
        width: 0;
        background: none;
    }
</style>