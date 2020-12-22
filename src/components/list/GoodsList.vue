<template>
  <div class="goods-list">
      <!-- 头部区域 -->
      <div class="list-header van-hairline--top-bottom">
          <div @click="changeType('all')"
          :class="{'active' : sortType === 'all'}">综合</div>
          <div @click="changeType('sale')"
          :class="{'active' : sortType === 'sale'}">销量</div>
          <div @click="changeType()"
          :class="{'price-up' : sortType === 'price-up',
          'price-down' : sortType === 'price-down','price':true}">价格</div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            sortType : 'price-up'//排序类型，默认为all。
        }
    },
    methods:{
        changeType(type){
            if(type === 'all'){
                this.sortType = 'all'
            }else if(type === 'sale'){
                this.sortType = 'sale'
            }else{
                if(this.sortType === 'price-up'){
                    this.sortType = 'price-down';
                }else{
                    this.sortType = 'price-up'
                }
            }
        }
    }
}
</script>

<style lang="less">
    .goods-list{
        margin-left: 79px;
        width: 296px;
        .list-header{
            display: flex;
            justify-content: flex-end;
            div{
                width: 50px;
                text-align: center;
                color: #cecece;
                height: 25px;
                line-height: 25px;
                &.active{
                    font-weight: bold;
                    color:#ff1a90 ;
                 
                }
            }
            .price{
                position: relative;
                &.price-up{
                   font-weight: bold;
                    color:#ff1a90 ;
                   &::before{
                       border-bottom-color: #ff1a90;
                      
                   }
                }
                &.price-down{
                   font-weight: bold;
                    color:#ff1a90 ;
                     &::after{
                       border-top-color: #ff1a90;
                   }
                }
            }
            .price::before{
                position: absolute;
                content: '';
                display: block;
                border:5px solid transparent;
                border-bottom-color: #cecece;
                top: 2px;
                right: 2px;
            }
            .price::after{
                position: absolute;
                content: '';
                display: block;
                border:5px solid transparent;
                border-top-color: #cecece;
                bottom: 2px;
                right: 2px;
            }
        }
    }
</style>