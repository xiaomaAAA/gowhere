<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
}
</script>



<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header{
    line-height : $headerHeight;
    display flex;
    background $bgColor;
    color:#fff
  }
  .header-left{
    width:  .64rem;
    float left
  }
  .header-left .back-icon{
    text-align : center;
    font-size: .4rem
  }
  .header-input{
    flex: 1;
    height: .64rem;
    margin-top: .12rem;
    line-height: .64rem;
    margin-left :.2rem;
    padding-left: .2rem;
    background #fff;
    border-radius:.1rem;
    color:#ccc;
  } 
  .header-right{
    width: 1.24rem;
    float:right;
    text-align: center
    color #fff
  }
  .header-right .arrow-icon{
    font-size: .24rem;
    margin-left  -.04rem;
  }
</style>
