<template>
    <div class="" id="">
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img :src="item.imgUrl" class="item-img" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/bc/7aefc32e7f855a.jpg_r_640x214_f88989f3.jpg",
          title: "汕头中海度假村（原中信度假村）龙虎滩",
          desc: "走进客家古邑，感受万绿河源"
        },
        {
          id: "002",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/bc/7aefc32e7f855a.jpg_r_640x214_f88989f3.jpg",
          title: "汕头中海度假村（原中信度假村）龙虎滩",
          desc: "走进客家古邑，感受万绿河源"
        },
        {
          id: "003",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/bc/7aefc32e7f855a.jpg_r_640x214_f88989f3.jpg",
          title: "汕头中海度假村（原中信度假村）龙虎滩",
          desc: "走进客家古邑，感受万绿河源"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
@import '~styles/mixins.styl';

.title {
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2rem;
    margin-top .2rem
}

.item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;

    .item-img {
        width: 100%;
    }
}

.item-info {
    padding: 0.1rem;

    .item-title {
        line-height: 0.54rem;
        font-size: 0.32rem;
        ellipsis();
    }

    .item-desc {
        line-height: 0.4rem;
        color: #ccc;
        ellipsis();
    }
}
</style>