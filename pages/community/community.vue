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
    <scroll-view class="right" scroll-y="true">
      <view class="right-box">
        <view class="right-title">
          
        </view>
        <view class="right-child">
          <view class="right-child-item">
            <image src="" mode=""></image>
            <view class="right-child-label">
              
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
        rightItem: []
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
        })
      },
      // 点击左侧分类
      clickItem (id, children) {
        this.selectItem = id
        this.rightItem = children
        console.log(this.rightItem)
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
        background: $uni-color-primary;
      }
    }
    .right {
      width: 510rpx;
      height: calc(100vh - 88rpx);
      background-color: #f2f2f2;
      .right-box {
        .right-title {
          
        }
        .right-child {
          .right-child-item {
            image {
              
            }
            .right-child-label {
              
            }
          }
        }
      }
    }
  }
  
</style>
