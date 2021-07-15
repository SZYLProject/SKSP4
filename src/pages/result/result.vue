<template>
  <div id="container">
    <van-tabs
      v-model="active"
      swipeable
      animated
      title-inactive-color="#787878"
      title-active-color="#fff"
      @click="changeActive"
    >
      <!-- 诊断 -->
      <van-tab title="诊断">
        <div class="treatment-card">
          <span>{{ paientInfo.diagnosisData }}</span>
        </div>
        <van-collapse v-model="activeNames">
          <van-collapse-item
            :name="item.recommendContent"
            size="large"
            :is-link="true"
            v-for="(item, index) in diagnosis"
            :key="index"
          >
            <template #title>
              <div class="title">{{ item.recommendID }}</div>
            </template>
            <!-- <template #value>
                <van-switch v-model="checked[index]" active-color="#01763A" inactive-color="#E5E5E5" size="30px"/>
              </template> -->
            <div class="card">
              <span>{{ item.recommendContent }}</span>
            </div>
          </van-collapse-item>
        </van-collapse>
        <div class="treatment-card">
          <span>{{ paientInfo.typeData }}</span>
        </div>
        <van-collapse v-model="activeNames">
          <van-collapse-item
            :name="item.recommendContent"
            size="large"
            :is-link="true"
            v-for="(item, index) in recommend"
            :key="index"
          >
            <template #title>
              <div class="title">{{ item.recommendID }}</div>
            </template>
            <!-- <template #value>
                <van-switch v-model="checked[index]" active-color="#01763A" inactive-color="#E5E5E5" size="30px"/>
              </template> -->
            <div class="card">
              <span>{{ item.recommendContent }}</span>
            </div>
          </van-collapse-item>
        </van-collapse>
        <van-button type="info" round size="large" @click="goTable"
          >查看患者详细信息</van-button
        >
      </van-tab>
      <!-- 治疗 -->
      <van-tab title="治疗">
        <div class="treatment-card">
          <span>{{ paientInfo.treateData }}</span>
        </div>
        <van-collapse v-model="activeNames">
          <van-collapse-item
            :name="item.recommendContent"
            size="large"
            :is-link="true"
            v-for="(item, index) in type"
            :key="index"
          >
            <template #title>
              <div class="title">{{ item.recommendID }}</div>
            </template>
            <!-- <template #value>
                <van-switch v-model="checked[index]" active-color="#01763A" inactive-color="#E5E5E5" size="30px"/>
              </template> -->
            <div class="card">
              <span>{{ item.recommendContent }}</span>
            </div>
          </van-collapse-item>
        </van-collapse>
        <van-button type="info" round @click="goInfo" size="large"
          >查看患者详细信息</van-button
        >
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      active: "",
      activeNames: [],
      // checked:true,
      navIndex: 1,
      recommend: [], //诊断
      type: [],
      checked: [],
      diagnosis: []
    };
  },
  mounted() {
    this.$store.dispatch("getPaientInfoActions");
  },
  computed: {
    ...mapState({
      paientInfo: state => state.paientInfo
    })
  },
  methods: {
    // changeCheck(value){
    //   if(value.length > 0){
    //       value.forEach((item,index)=>{
    //         this.recommend.forEach((details,data)=>{
    //             if(item === details.recommendContent){
    //               this.checked[index].check = !this.checked[index].check
    //             }
    //         })
    //       })
    //   }
    // },
    goTable() {
      this.$router.push("/shock/table");
    },
    //去往患者详细i西南西
    goInfo() {
      this.$store.dispatch("getPaientInfoActions");
      this.$router.replace({ path: "/shock/entry", query: { type: "shock" } });
    },
    changeActive(name, title) {
      this.navIndex = name;
    }
  },
  watch: {
    paientInfo: {
      handler(value) {
        this.$nextTick(() => {
          let recommendID = [];
          let type = [];
          let diagnosis = [];
          value.recommendOrderList.forEach((item, index) => {
            if (item.recommendID === "治疗") {
              type.push(item);
            } else if (item.recommendID === "类型判断") {
              recommendID.push(item);
            } else if (item.recommendID === "诊断") {
              diagnosis.push(item);
            }
          });
          this.recommend = recommendID;
          this.type = type;
          this.diagnosis = diagnosis;
        });
      },
      deep: true
    }
  }
};
</script>

<style lang="stylus" scoped>
.title
        width 100%
        display:block;
        overflow:hidden;
        word-break:keep-all;
        white-space:nowrap;
        text-overflow:ellipsis;
/deep/.van-tab--active
         background #01763A !important
         color #fff !important
/deep/.van-button
         background #01763A
         margin-top 20px
/deep/.van-collapse-item__content

/deep/.van-cell
         justify-content space-between
/deep/.van-cell__title
          flex none
          width 80%
          div
            font-size 16px
/deep/.van-tabs__wrap
        margin-bottom 10px
/deep/.van-tabs__line
        width 0
        height 0
/deep/.van-tab
          // background #01763A
          border-radius 20px
          margin-right 10px
    #container
        width 100%
        padding 20px
        .card
          width 100%
          border-radius 20px
          border 1px solid #F1F1F1
          padding 10px
          font-size 15px
          color #000
          p
            color #212121
            font-size 15px
            margin-bottom 5px
          span
            color #787878
            margin-bottom 5px
            color #000
        .treatment-card
            margin-bottom 10px
            border 1px solid #E5E5E5
            width 100%
            padding 10px
            border-radius 20px
            p
              color #212121
              font-size 14px
              margin-bottom 10px
            span
              color #787878
              display block
              margin-bottom 10px
              font-size 16px
              line-height 25px
</style>
