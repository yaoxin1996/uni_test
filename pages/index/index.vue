<template>
	<view class="home">
    <!-- S 轮播图 -->
		<swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="1500" :duration="500">
        <swiper-item v-for="item in swiperList" :key="item.goods_id">
            <view class="swiper-item uni-bg-red">
              <image :src="item.image_src" mode="scaleToFill"></image>
            </view>
        </swiper-item>
    </swiper>
    <!-- E 轮播图 -->
    <!-- S 导航区域 -->
    <view class="nav-box">
      <view class="nav-item" v-for="(item, index) in navList" :key="item.image_src" @click="navClick(index)">
        <image class="nav-icon" :src="item.image_src" mode=""></image>
      </view>
    </view>
    <!-- E 导航区域 -->
    <!-- S 推荐商品 -->
    <view class="recommend">
      <view class="title">推荐商品</view>
      <view class="rec-box">
        <block v-for="item in goods" :key="item.goods_id">
          <goods :item="item" @show="goToDetail"></goods>
        </block>
      </view>
    </view>
    <!-- E 推荐商品 -->
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
        swiperList: [],
        navList: [],
        goods: []
        
    	}
    },
    methods:{
      // 获取轮播图数据
      getSwiperList () {
        this.$myRequest({
          url: '/home/swiperdata',
        }).then(res => {
          this.swiperList = res.message
        })
      },
      // 获取导航
      getNavigator () {
        this.$myRequest({
          url: '/home/catitems'
        }).then(res => {
          this.navList = res.message
        })
      },
      // 获取热门商品列表数据
      getHotGoods () {
        this.$myRequest({
          url: '/goods/search',
          data: {
            pagenum: 1,
            pagesize: 10
          }
        }).then(res => {
          this.goods = res.message.goods
        })
      },
      // 点击导航跳转
      navClick (index) {
        console.log(index)
        if (index == 0) {
          // 超市
          uni.navigateTo({
            url:"../shop/shop"
          })
        } else if (index == 1) {
          // 联系我们
          uni.navigateTo({
            url:"../contactus/contactus"
          })
        } else if (index == 2) {
          // 社区
          uni.navigateTo({
            url:"../community/community"
          })
        } else {
          // 学习视频
          uni.navigateTo({
            url:"../learnvideo/learnvideo"
          })
        }
      },
      // 查看详情
      goToDetail (id) {
        console.log(id)
        uni.navigateTo({
          url: '../goodsdetail/goodsdetail?id=' + id
        })
      }
    },
    onLoad() {
      this.getSwiperList()
      this.getNavigator()
      this.getHotGoods()
    }
  }
</script>

<style lang="scss">
  .home {
    swiper {
      width: 750rpx;
      height: 380rpx;
      image {
        width: 100%;
      }
    }
    .nav-box  {
      width: 750rpx;
      display: flex;
      justify-content: space-around;
      .nav-item {
        flex: 1;
        text-align: center;
        .nav-icon {
          width: 130rpx;
          height: 130rpx;
          margin: 10px auto;
          color: #fff;
        }
        .nav-title {
          font-size: 30rpx;
        }
      }
    }
    .recommend {
      background: #f2f2f2;
      .title {
        font-size: 35rpx;
        letter-spacing: 10rpx;
        color: $uni-color-primary;
        text-align: center;
        line-height: 80rpx;
        border-top: 10rpx solid #f2f2f2;
        background: #fff;
      }
      .rec-box {
        padding: 0 15rpx;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
  }
</style>
