<template>
  <div class="search-btn" @click="linkTo">
      <van-icon name="search" color="#a1a1a1"/>
      <div class="text">荔枝九块九包邮</div>
  </div>
</template>

<script>
export default {
    methods : {
        linkTo(){
            this.$router.push('/search')
        }
    }
}
</script>

<style lang="less">
    .search-btn{
        width: 355px;
        height: 33px;
        margin: 10px auto 0;
        background-color:  #eee;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        .text{
            font-size: 14px;
            color: #a1a1a1;
        }
    }
</style>