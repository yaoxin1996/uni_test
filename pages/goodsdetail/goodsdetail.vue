<template>
  <view class="goods-detail">
    <swiper class="swiper" indicator-dots autoplay>
        <swiper-item v-for="(item, index) in imgList" :key="index">
          <image :src="item" mode=""></image>
        </swiper-item>
    </swiper>
    <view class="price">
      <text>￥{{ detail.goods_price }}</text>
      <text>￥{{ detail.goods_price - 600 }}</text>
    </view>
    <view class="title">{{ detail.goods_name }}</view>
    <view class="divide"></view>
    <view class="info">
      <view class="info-item">
        货号：{{ detail.goods_id }}
      </view>
      <view class="info-item">
        库存：{{ detail.goods_number }}
      </view>
    </view>
    <view class="divide"></view>
    <view class="detail">
      <view class="detail-title">
        详细介绍
      </view>
      <rich-text :nodes="detail.goods_introduce"></rich-text>
    </view>
    <view class="top" @click="goToTop">➤</view>
    <view class="bottom">
      <uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
    </view>
    <!-- <view class="bottom">
      <view class="bottom-left">
        <view class="left-item">
          <view class="icon iconfont icon-service"></view>
          <view class="label">客服</view>
        </view>
        <view class="left-item">
          <view class="icon iconfont icon-store"></view>
          <view class="label">店铺</view>
        </view>
        <view class="left-item cart">
          <view class="icon iconfont icon-cart-full"></view>
          <view class="label">购物车</view>
          <view class="tag">2</view>
        </view>
      </view>
      <view class="bottom-right">
        <view class="left">加入购物车</view>
        <view class="right">立即购买</view>
      </view>
    </view> -->
  </view>
</template>

<script>
  export default {
    data () {
      return {
        detail: {},
        imgList: [],
        options: [{
              icon: 'headphones',
              text: '客服'
          }, {
              icon: 'shop',
              text: '店铺',
              info: 2,
              infoBackgroundColor:'#007aff',
              infoColor:"red"
          }, {
              icon: 'cart',
              text: '购物车',
              info: 2
          }],
          buttonGroup: [{
            text: '加入购物车',
            backgroundColor: '#ff0000',
            color: '#fff'
          },
          {
            text: '立即购买',
            backgroundColor: '#ffa200',
            color: '#fff'
          }
          ]
        }
    },
    methods: {
      getDetail (id) {
        this.$myRequest({
          url: '/goods/detail',
          data: {
            goods_id: id
          }
        }).then(res => {
          this.detail = res.message
          this.imgList = this.detail.pics.map(item => item.pics_big_url)
        })
      },
      // 回到顶部
      goToTop () {
        uni.pageScrollTo({
          scrollTop: 0,
          duration: 1000
        })
      },
      onClick (e) {
        uni.showToast({
          title: `点击${e.content.text}`,
          icon: 'none'
        })
      },
      buttonClick (e) {
        console.log(e)
        this.options[2].info++
      }
    },
    onLoad (options) {
      this.getDetail(options.id)
    }
  }
</script>

<style lang="scss">
  .goods-detail {
    .swiper {
      height: 600rpx;
      image {
        width: 100%;
        height: 100%;
      }
    }
    .price {
      padding: 0 20rpx;
      text {
        color: $uni-color-primary;
        font-size: 42rpx;
        font-weight: bold;
        line-height: 80rpx;
      }
      text+text {
        margin-left: 20rpx;
        font-size: 32rpx;
        color: #999;
        text-decoration: line-through;
      }
    }
    .title {
      padding: 0 20rpx;
      font-size: 36rpx;
      line-height: 60rpx;
    }
    .divide {
      height: 10rpx;
      background-color: #eee;
    }
    .info {
      padding: 0 20rpx;
      .info-item {
        padding: 10rpx 0;
        font-size: 30rpx;
        line-height: 40rpx;
      }
    }
    .detail {
      .detail-title {
          padding: 10rpx 20rpx;
          font-size: 36rpx;
          line-height: 80rpx;
          font-weight: bold;
          color: #666;
      }
    }
    .top {
      width: 100rpx;
      height: 100rpx;
      border-radius: 50%;
      background-color: #FFFFFF;
      border: 1rpx solid #999;
      position: fixed;
      bottom: 150rpx;
      right: 10rpx;
      text-align: center;
      line-height: 100rpx;
      font-size: 50rpx;
      color: #999;
      transform: rotate(-90deg);
    }
    .bottom {
      height: 100rpx;
      background-color: #FFFFFF;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      color: #666;
      .bottom-left {
        width: 50%;
        display: flex;
        justify-content: space-around;
        .left-item {
          flex: 1;
          text-align: center;
          padding: 6rpx 0;
          .icon {
            font-size: 50rpx;
          }
          .label {
            font-size: 26rpx;
          }
        }
        .cart {
          position: relative;
         .tag {
           width: 30rpx;
           height: 30rpx;
           background-color: red;
           position: absolute;
           top: 6rpx;
           right: 30rpx;
           border-radius: 50%;
           font-size: 24rpx;
           color: #fff;
           line-height: 30rpx;
         } 
        }
      }
      .bottom-right {
        flex: 1;
        padding-right: 20rpx;
        width: 100%;
        height: 80rpx;
        line-height: 80rpx;
        margin-top: 10rpx;
        display: flex;
        justify-content: space-around;
        box-sizing: border-box;
        font-size: 28rpx;
        text-align: center;
        color: #fff;
        .left {
          flex: 1;
          border-top-left-radius: 50rpx;
          border-bottom-left-radius: 50rpx;
          background-color: orange;
          padding-left: 10rpx;
        }
        .right {
          flex: 1;
          padding-right: 10rpx;
          border-top-right-radius: 50rpx;
          border-bottom-right-radius: 50rpx;
          background-color: red;
        }
      }
    }
  }
</style>
