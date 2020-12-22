<template>
  <div>
      <search-btn></search-btn>
      <classify-first></classify-first>
      <van-loading type="spinner"  v-if="show"  vertical/>
      <template v-else>
          <side-bar></side-bar >
          <goods-list></goods-list>
      </template>
      
  </div>
</template>

<script>
import ClassifyFirst from '@/components/list/ClassifyFirst'
import SearchBtn from '@/components/list/SearchBtn'
import SideBar from '@/components/list/SideBar'
import GoodsList from '@/components/list/GoodsList'
import { mapState } from 'vuex'
export default {
    components : {
        SearchBtn,
        ClassifyFirst,
        SideBar,
        GoodsList
    },
    computed:{
        ...mapState({
            show:state=>state.show
        })
    }
}
</script>

<style>

</style>