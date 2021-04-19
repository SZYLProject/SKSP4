<template>
    <!-- 头像 -->
   <div class="anv">
       <div class="logo">
           <div class="img-wrap">
               <img src="../../assets/img/logo.gif" alt="">
               <img class="icon-img" src="../../assets/img/logo.png" alt="">
           </div>
           <h3>重症基层诊疗规范</h3>
           <p>北京协和医院 重症医学科 信息处</p>
       </div>
       <div class="btn">
           <van-button round type="info" size="large" @click="goShock">重症休克</van-button>
           <van-button round type="info" size="large" @click="goInfection">重症感染</van-button>
       </div>
   </div>
</template>

<script>
export default {
    methods:{
        //前往休克
        goShock(){
                this.$store.dispatch('getPaientInfoActions')
                this.$router.push({path:'/shock/entry',query:{type:'shock'}})
        },
        //前往感染
        goInfection(){
            this.$store.dispatch('getInfectionPaientInfoActions')
            this.$router.push({path:'/shock/infectionEntry',query:{type:'infection'}})
        }
    }
}
</script>

<style lang="stylus" scoped>
.anv
    padding 0px 20px 0
    position relative
    width 100%
    height 100%
    box-sizing border-box
    .logo
        .img-wrap 
            display flex
            padding-bottom 50px
            overflow hidden
            align-items center
            justify-content space-between
        img
            // width: 80px;
            height: 140px;
            display block
        .icon-img 
            height 1.8rem
            padding-right 40px
        h3
            font-size: 0.533333rem;
            font-weight: 700;
            color: #212121;
            margin-bottom: 0.266667rem;
            text-align: center;
        p
            font-size: 0.28rem;
            color: #787878;
            font-weight: normal;
            text-align: center;
            padding-top: 10px;
    .btn
        width 100%
        padding 0 20px
        padding-top 40px
        .van-button
            margin-bottom 20px
    
/deep/.van-button
            background #01763A


</style>
