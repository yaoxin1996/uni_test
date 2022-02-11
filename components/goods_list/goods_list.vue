<template>
  <view class="goods-list">
    <view class="rec-item" v-if="item.goods_big_logo">
      <view class="rec-img">
        <image :src="item.goods_big_logo" mode=""></image>
      </view>
      <text class="rec-cur-price">￥{{ item.goods_price }}</text>
      <text class="rec-old-price">￥{{ item.goods_price - 500 }}</text>
      <view class="rec-title">{{ item.goods_name }}</view>
    </view>
  </view>
</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style lang="scss">
  .goods-list {
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
</style>
