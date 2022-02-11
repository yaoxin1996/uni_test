<template>
  <view class="contactus">
    <image
      style="width: 750rpx;height: 350rpx;"
      src="../../static/about.jpg"
      mode="aspectFill"></image>
      <view class="item" @click="call">
        联系电话: 13653264375 (点击拨打)
      </view>
      <view class="item" @click="chooseLocation">
        地址：{{ address }}
      </view>
      <map class="map" :latitude="latitude" :longitude="longitude" :markers="markers" scale="20"></map>
  </view>
</template>

<script>
  export default {
    data () {
      return {
        latitude: 39.909,
        longitude: 116.39742,
        address: '暂无地址',
        markers: [{
          latitude: 39.909,
          longitude: 116.39742,
          width: 50,
          height: 50,
          iconPath: '../../static/about.jpg'
        }]
      }
    },
    methods: {
      call () {
        uni.makePhoneCall({
            phoneNumber: '13653264375' //仅为示例
        });
      },
      chooseLocation () {
        uni.chooseLocation({
          success: (res) => {
            console.log(this)
            this.address = res.address
            this.latitude = res.latitude
            this.longitude = res.longitude
          }
        })
      }
    },
    created () {
    }
  }
</script>

<style lang="scss">
  .contactus {
    image {
      display: flex;
    }
    .item {
      height: 88rpx;
      line-height: 88rpx;
      padding: 0 30rpx;
    }
    .item+.item {
      border-top: 2rpx solid #f2f2f2;
    }
    .map {
      width: 750rpx;
      height: 600rpx;
    }
  }
</style>
