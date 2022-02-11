<template>
  <view class="">
    <view class="shop">
      <block v-for="item in goodsList" :key="item.goods_id">
          <goods :item="item"></goods>
      </block>
      
    </view>
    <view class="line" v-if="flag">
      -------我是有底线的--------
    </view>
  </view>
</template>

<script>
  import goods from '../../components/goods_list/goods_list.vue'
  export default {
    components: {
      goods
    },
    data () {
      return {
        goodsList: [],
        page: 1,
        total: 0,
        flag: false
      }
    },
    methods: {
      // 获取商品信息
      getGoodsList (callback) {
        this.$myRequest({
          url: '/goods/search',
          data: {
            query: '创维',
            pagenum: this.page,
            pagesize: 8
          }
        }).then(res => {
          callback && callback()
          this.goodsList = [...this.goodsList, ...res.message.goods]
          this.total = res.message.total
        })
      }
    },
    created () {
      this.getGoodsList()
    },
    // 上拉触底
    onReachBottom () {
       if (this.goodsList.length !== this.total) {
         this.page++
         this.getGoodsList()
       } else {
         this.flag = true
       }
    },
    // 下拉加载
    onPullDownRefresh () {
      this.goodsList = []
      this.page = 1
      this.total = 0
      this.flag = false 
      this.getGoodsList(() => {
        uni.stopPullDownRefresh()
      })
    }
  }
</script>

<style lang="scss">
  .shop {
    background-color: #f2f2f2;
    padding: 15rpx;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .line {
    width: 750rpx;
    line-height: 60rpx;
    text-align: center;
    background: #fff;
    color: #999;
  }
</style>
