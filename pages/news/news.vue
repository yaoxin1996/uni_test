<template>
  <view class="news">
    <block v-for="item in 20">
      <newsList></newsList>
    </block>
  </view>
</template>

<script>
  import newsList from '../../components/news_list/new_file.vue'
  export default {
    components: {
      newsList
    },
    data () {
      return {
        
      }
    }
  }
</script>

<style lang="scss">
  .news {
    
  }
</style>
