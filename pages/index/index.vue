<template>
	<view class="content">
		<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
        <swiper-item v-for="item in swiperList" :key="item.goods_id">
            <view class="swiper-item uni-bg-red">
              <image :src="item.image_src" mode="scaleToFill"></image>
            </view>
        </swiper-item>
    </swiper>
	</view>
</template>

<script>
  export default {
    data () {
    	return {
        swiperList: [],
        background: ['color1', 'color2', 'color3'],
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 500
    	}
    },
    methods:{
      getSwiperList () {
        // console.log(this.$myRequest)
        // return
        // request({
        //   url: '/home/swiperdata'
        // }).then(res => {
        //   console.log(res)
        // })
        // uni.request({
        //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
        //   method: 'GET',
        //   success: res => {
        //     console.log(res)
        //     if (res.data.meta.status !== 200) {
        //       return uni.showToast({
        //         title: "获取数据失败"
        //       })
        //     }
        //     this.swiperList = res.data.message
        //   }
        // })
      }
    },
    onLoad() {
      this.getSwiperList()
    }
  }
</script>

<style lang="scss">
  image {
    width: 100%;
  }
</style>
