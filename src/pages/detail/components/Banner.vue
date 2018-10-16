<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1602/77/773582b52f423ca290.img.jpg_600x330_5166ceee.jpg" alt="">
            <div class="banner-info">
                <div class="banner-tittle">
                    汕头中海度假村（原中信度假村）龙虎滩
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe692;</span>
                    39
                </div>
            </div>
        </div>
        <common-gallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </div>
</template>
<script>
    import CommonGallary from 'common/gallary/Gallary'

    export default {
        name:'DetailBanner',
        props: {
            sightName: String,
            bannerImg: String,
            bannerImgs: Array
        },
        data () {
            return {
                showGallary: false
            }
        },
        methods: {
            handleBannerClick () {
                this.showGallary = true
            },
            handleGallaryClose () {
                this.showGallary = false
            }
        },
        components: {
            CommonGallary,
            // FadeAnimation
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
        ellipsis()
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>