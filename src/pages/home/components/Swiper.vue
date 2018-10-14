<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
    export default {
       name: 'HomeSwiper',
       data () {
           return{
               swiperOption:{
                   pagination: '.swiper-pagination',
                   loop: true
               },
               swiperList: [{
                   id:'001',
                   imgUrl:'http://img1.qunarzz.com/piao/fusion/1809/c6/2467595fffc3b302.jpg_750x200_cca13d51.jpg'
               },{
                   id:'002',
                   imgUrl:'http://img1.qunarzz.com/piao/fusion/1809/47/7599053a2cb2ee02.jpg_750x200_c61be0c1.jpg'
               },
               ]
           }
       }
    }
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active{
        background: #fff
    }      
    .wrapper{
        overflow : hidden;
        width : 100%;
        height : 0;
        padding-bottom : 31.25%;
        background #eee
    }
    .wrapper .swiper-img{
        width : 100%
    }
</style>