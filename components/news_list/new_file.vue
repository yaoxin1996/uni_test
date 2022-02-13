<template>
  <view class="news-list">
    <view class="box">
      <view class="left">
        <image src="../../static/about.jpg" mode="scaleToFill"></image>
      </view>
      <view class="right">
        <view class="title">须知少时凌云志，曾许人间第一流！！！</view>
        <view class="bottom">
          <text>发表时间：2022-02-12</text>
          <text>浏览：520次</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
</script>

<style lang="scss">
  .news-list {
    .box {
      display: flex;
      justify-content: space-between;
      padding: 10rpx 20rpx;
      border-top: 2rpx solid $uni-color-primary;
      .left {
        width: 200rpx;
        height: 130rpx;
        image {
          width: 100%;
          height: 100%;
        }
      }
      .right {
        width: 500rpx;
        color: #333;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title {
          font-size: 30rpx;
        }
        .bottom {
          display: flex;
          justify-content: space-between;
          text {
            font-size: 28rpx;
            color: #666;
          }
        }
      }
    }
  }
</style>
