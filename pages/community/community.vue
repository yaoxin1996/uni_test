<template>
  <view class="community">
    <scroll-view class="left" scroll-y="true">
      <view
        v-for="item in categoryList"
        :key="item.cat_id"
        @click="clickItem(item.cat_id, item.children)"
        :class="selectItem == item.cat_id ? 'active' : ''"
        >
        {{ item.cat_name }}
      </view>
    </scroll-view>
    <scroll-view class="right" scroll-y="true" :scroll-top="scrollTop" @scroll="scroll">
      <view class="right-box" v-for="item in rightItem" :key="item.cat_id">
        <view class="right-title">
          {{ item.cat_name }}
        </view>
        <view class="right-child" v-if="item.children">
          <view class="right-child-item" v-for="(val, index) in item.children" :key="val.cat_id">
            <image :src="val.cat_icon" mode="" @click="previewImg(item.children, index)"></image>
            <view class="right-child-label">
              {{ val.cat_name }}
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
  export default {
    data () {
      return {
        categoryList: [],
        selectItem: '',
        rightItem: [],
        scrollTop: 0,
        oldTop: 0
      }
    },
    methods: {
      // 获取分类数据
      getCategory () {
        this.$myRequest({
          url: '/categories'
        }).then(res => {
          this.categoryList = res.message
          this.selectItem = res.message[0].cat_id
          this.rightItem = res.message[0].children
          console.log(this.rightItem)
        })
      },
      // 点击左侧分类
      clickItem (id, children) {
        this.selectItem = id
        this.rightItem = children
        this.scrollTop = this.oldTop
        this.$nextTick(() => {
          this.scrollTop = 0
        })
        console.log(this.scrollTop)
      },
      scroll (e) {
        console.log(e.detail.scrollTop)
        this.oldTop = e.detail.scrollTop
      },
      // 预览图片
      previewImg (val, i) {
        let arr = val.map(item => item.cat_icon)
        uni.previewImage({
          urls: arr,
          current: i,
          loop: true
        })
      }
    },
    created () {
      this.getCategory()
    }
  }
</script>

<style lang="scss">
  page {
    height: calc(100vh - 88rpx);
  }
  .community {
    display: flex;
    justify-content: space-between;
    .left {
      width: 240rpx;
      height: calc(100vh - 88rpx);
      border-right: 1px solid #eee;
      font-size: 34rpx;
      view {
        height: 120rpx;
        line-height: 120rpx;
        text-align: center;
        border-top: 1px solid #eee;
      }
      .active {
        color: #fff;
        border-top: 2px solid #eee;
        background: $uni-color-primary;
        box-sizing: border-box;
      }
    }
    .right {
      width: 510rpx;
      height: calc(100vh - 88rpx);
      background-color: #f2f2f2;
      padding: 15rpx;
      box-sizing: border-box;
      .right-box {
        background-color: #fff;
        border-radius: 20rpx;
        padding: 20rpx;
        margin-bottom: 20rpx;
        .right-title {
          height: 50rpx;
          line-height: 50rpx;
          font-size: 30rpx;
          color: #666;
          font-weight: bold;
          border-bottom: 2rpx solid #eee;
          text-align: center;
          margin-bottom: 10rpx;
        }
        .right-child {
          display: flex;
          // justify-content: space-between;
          flex-wrap: wrap;
          .right-child-item {
            // flex: 1;
            width: 25%;
            image {
              width: 100rpx;
              height: 100rpx;
              margin: 0 auto;
            }
            .right-child-label {
              font-size: 26rpx;
              text-align: center;
              color: #333;
              width: 90%;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
  
</style>
