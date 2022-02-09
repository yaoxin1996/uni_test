<template>
	<view class="content">
		<text selectable space="nbsp" :decode="false">须知少时凌云志，曾许人间第一流</text>
    <view class="">{{title}}</view>
    <view class="div" hover-class="hover">
      <view
        class="div1"
        hover-stop-propagation
        hover-start-time="1000"
        hover-stay-time="500"
        hover-class="hover-div1"></view>
    </view>
    <button type="primary" v-on:click="clickBtn(5, $event)">点击</button>
    <image src="../../static/a.jpg" mode="widthFix"></image>
    <view v-for="(item,index) in arr" :key="index">
		{{ item }}
    </view>
    <button type="default" @click="send">发送请求</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				dis: true,
				arr: [1, 2, 3, 5, 8]
			}
		},
		onLoad() {

		},
    onPullDownRefresh() {
      console.log('下拉刷新')
      setTimeout(() => {
        this.arr = ['罗', '飞', '大', '魔', '王']
        uni.stopPullDownRefresh()
      }, 500)
    },
    onReachBottom() {
      console.log('触底了')
      this.arr.push('罗', '飞')
    },
		methods: {
      clickBtn (doc, e) {
        uni.startPullDownRefresh()
        uni.removeStorageSync('res')
      },
      send () {
        uni.request({
          url:'http://127.0.0.1:3000/uni',
          method:'GET',
          success(res) {
            console.log(res)
            uni.setStorageSync('res', res.data)
          }
        })
      }
		}
	}
</script>

<style lang="scss">
  .div {
    width: 200rpx;
    height: 200rpx;
    border: 1rpx solid #4CD964;
  }
  .div1 {
    width: 100rpx;
    height: 100rpx;
    background: #333333;
  }
  .hover {
    background-color: #808080;
  }
  .hover-div1 {
    background-color: #C0C0C0;
  }
  text {
    color: $uni-color-primary;
  }

	
</style>
