<template>
    <div class="" id="">
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img :src="item.imgUrl" class="item-img" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      recommendList: [
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1602/77/773582b52f423ca290.img.jpg_200x200_bcef24a3.jpg",
          title: "汕头中海度假村（原中信度假村）龙虎滩",
          desc: "走进客家古邑，感受万绿河源"
        },
        {
          id: "002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1602/77/773582b52f423ca290.img.jpg_200x200_bcef24a3.jpg",
          title: "汕头中海度假村（原中信度假村）龙虎滩",
          desc: "走进客家古邑，感受万绿河源"
        },
        {
          id: "003",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1602/77/773582b52f423ca290.img.jpg_200x200_bcef24a3.jpg",
          title: "汕头中海度假村（原中信度假村）龙虎滩",
          desc: "走进客家古邑，感受万绿河源"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>