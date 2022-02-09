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
    <button type="primary" v-on:click="clickBtn">点击</button>
    <image src="../../static/a.jpg" mode="widthFix"></image>
    
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
        dis: true
			}
		},
		onLoad() {

		},
		methods: {
      clickBtn () {
        console.log(1111)
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
