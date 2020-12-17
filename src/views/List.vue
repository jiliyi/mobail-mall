<template>
  <div>
      <search-btn></search-btn>
      <classify-first></classify-first>
      <side-bar></side-bar>
  </div>
</template>

<script>
import ClassifyFirst from '@/components/list/ClassifyFirst'
import SearchBtn from '@/components/list/SearchBtn'
import SideBar from '@/components/list/SideBar'
export default {
    components : {
        SearchBtn,
        ClassifyFirst,
        SideBar
    }
}
</script>

<style>

</style>