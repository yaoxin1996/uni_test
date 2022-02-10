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
      <view class="nav-item" v-for="item in navList" :key="item.image_src">
        <!-- <view class="nav-icon iconfont" :class="item.image_src"></view> -->
        <image class="nav-icon" :src="item.image_src" mode=""></image>
        <!-- <view class="nav-title">{{ item.name }}</view> -->
      </view>
    </view>
    <!-- E 导航区域 -->
    <!-- S 推荐商品 -->
    <view class="recommend">
      <view class="title">推荐商品</view>
      <view class="rec-box">
        <block v-for="item in goods" :key="item.goods_id">
          <view class="rec-item" v-if="item.goods_big_logo">
            <view class="rec-img">
              <image :src="item.goods_big_logo" mode=""></image>
            </view>
            <text class="rec-cur-price">￥{{ item.goods_price }}</text>
            <text class="rec-old-price">￥{{ item.goods_price - 500 }}</text>
            <view class="rec-title">{{ item.goods_name }}</view>
          </view>
        </block>
      </view>
    </view>
    <!-- E 推荐商品 -->
	</view>
</template>

<script>
  export default {
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
        console.log(this.$myRequest)
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
        .rec-item {
          width: 350rpx;
          background: #fff;
          margin: 10rpx 0;
          padding: 15rpx;
          box-sizing: border-box;
          border-radius: 10rpx;
          .rec-img {
            width: 100%;
            margin-bottom: 10rpx;
            image {
              width: 100%;
              height: 150px;
            }
          }
          .rec-cur-price {
            color: $uni-color-primary;
            font-size: 36rpx;
          }
          .rec-old-price {
            color: #ccc;
            font-size: 28rpx;
            text-decoration: line-through;
            margin-left: 20rpx;
          }
          .rec-title {
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 28rpx;
            line-height: 50rpx;
            padding: 10rpx 0;
          }
        }
      }
    }
  }
</style>
