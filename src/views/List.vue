<template>
  <div>
      <search-btn></search-btn>
      <classify-first></classify-first>
  </div>
</template>

<script>
import ClassifyFirst from '@/components/list/ClassifyFirst'
import SearchBtn from '@/components/list/SearchBtn'
export default {
    components : {
        SearchBtn,
        ClassifyFirst
    }
}
</script>

<style>

</style>