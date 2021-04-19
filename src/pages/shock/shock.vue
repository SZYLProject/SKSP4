<template>
  <div id="container">
     <van-nav-bar
        :title="title"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        >
    <template slot="left">
        <van-icon name="bars" size="30px"/>
    </template>
    <template slot="right">
        <div class="top-right-wrap">
            <van-icon @click="onClickRight(0)" name="friends-o" size=".45rem"/>
            <van-icon @click="onClickRight(1)" name="records" size=".45rem"/>
        </div>
    </template>
    </van-nav-bar>
    <van-popup v-model="show" position="left" :style="{ height: '100%',width:'60%' }" get-container="#container">
        <van-cell title="ICU快捷辅助决策系统" size="large" @click="goIndex">
            <template #icon>
                <i class="iconfont icon-ICU" style="color:yellow"></i>
            </template>
        </van-cell>
        <van-cell title="重症感染辅助决策" icon="location-o" size="large" @click="goInfection">
            <template #icon>
                <i class="iconfont icon-zhongzhengkeshi" style="color:#01763A"></i>
            </template>
        </van-cell>
        <van-cell title="重症休克辅助决策" icon="location-o" size="large"  @click="goShock">
            <template #icon>
                <i class="iconfont icon-weibiaoti511" style="color:#55A55A"></i>
            </template>
        </van-cell>
        
    </van-popup>
    <van-overlay :show="isShowOverlay" @click="isShowOverlay = false">
            <div class="wrapper" @click.stop>
                <van-field
                    v-model="mesage"
                    rows="3"
                    :autosize=hw
                    label="意见反馈"
                    type="textarea"
                    maxlength="200"
                    placeholder="请输入您的建议"
                    show-word-limit
                />
                <div class="submit-wrap">
                    <van-button :disabled = 'disabled' size="small" type="primary" @click="onSubmit">提交</van-button>
                </div>               
            </div>
        </van-overlay>
    <router-view></router-view>
  </div>
</template>

<script>
import { Overlay } from 'vant';
import {Toast} from 'vant'
export default {
    components:{
        [Overlay.name]:Overlay,
        [Toast.name]:Toast,
    },
    data(){
        return {
            loading:null,
            disabled:true,
            hw:{ maxHeight: 200, minHeight: 100 },
            mesage:'',
            isShowOverlay: false,
            show:false,
            title:`重症${this.$route.query.type === 'shock'?'休克':'感染'}辅助决策系统`
        }
    },
    methods:{
        // title左侧图标
        onClickLeft(){
            this.show = true 
        },
        //title右侧图标
        onClickRight(el){
             if (el === 0) {
                 if(this.$route.path != '/shock/table') this.$router.push('/shock/table')
             }else {
                 this.isShowOverlay = true
             }
        },
        //去往重症感染
        goInfection(){
            if(this.$route.path != '/shock/InfectionEntry')  this.$router.push({path:'/shock/InfectionEntry',query:{type:'infection'}})
            this.show = false
        },
        //去往重症休克
        goShock(){
            if(this.$route.path != '/shock/entry') this.$router.push({path:'/shock/entry',query:{type:'shock'}})
            this.show = false
        },
        //去往首页
        goIndex(){
            this.$router.push('/index')
            this.show = false
        },
       async onSubmit(){
           this.loading  = Toast.loading({
                message: '提交中请稍后...',
                forbidClick: true,
                duration:0
            });
            let result = await this.$API.insertfeedbackData(this.mesage)
            Toast.clear(this.loading)
            this.isShowOverlay = false
            if(result.status === '0'){
                this.mesage = ''
                Toast.success('提交成功!')
            }else {
                Toast.fail('提交失败!')
            }
        }
    },
    watch:{
        $route(value){
            if(value.query.type === 'shock'){
                this.title=`重症休克辅助决策系统`
            }else{
                this.title=`重症感染辅助决策系统`
            }
        },
         mesage(newValue, oldValue) {
             console.log(oldValue);
            if (newValue) {
                this.disabled = false
            } else {
                this.disabled = true
            }
        }
    }

}
</script>

<style lang="stylus" scoped>
.iconfont
        font-size 20px
        margin-right 5px
#container
    margin-bottom 10px
/deep/.van-nav-bar__title
    margin 0 50px
    font-size 20px
    color  #212121
/deep/.van-nav-bar .van-icon
    color black 
    font-weight bold
.top-right-wrap 
    display: flex;
    align-items: center;
    height: 100%;
    i 
        padding 0 10px
.wrapper 
    padding 15px 10px
    border-radius 5px
    background #fff
    position absolute
    position absolute
    left 15px
    right 15px
    top 50%
    transform translateY(-50%)

.submit-wrap 
    display flex
    justify-content flex-end
    padding-top 15px
</style>