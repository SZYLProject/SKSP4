<template>
  <div id="container">
    <van-tabs
      v-model="active"
      swipeable
      animated
      title-inactive-color="#787878"
      title-active-color="#fff"
      v-if="infectionInfo"
    >
      <!-- qSOAF -->
      <van-tab title="SOFA">
        <div class="treatment-card">
          <span>
            {{ infectionInfo.qsofaScorePrama }}
          </span>
        </div>
        <div class="treatment-card" v-for="(item, index) in qs" :key="index">
          <span>
            {{ item.recommendContent }}
          </span>
        </div>
        <van-button type="info" round size="large" @click="lookInfo">查看患者详细信息</van-button>
      </van-tab>
      <!-- 诊断 -->
      <van-tab title="筛查感染部位">
        <div class="treatment-card">
          <span>
            {{ infectionInfo.diagnosisData }}
          </span>
        </div>
        <van-collapse v-model="activeNames" @change="changeCheck">
          <van-collapse-item
            size="large"
            :name="item.recommendContent"
            v-for="(item, index) in Screening"
            :key="index"
          >
            <template #title>
              <div class="title">建议：{{ item.recommendContent }}</div>
            </template>
            <div class="card">
              {{ item.recommendContent }}
            </div>
          </van-collapse-item>
        </van-collapse>
        <van-button type="info" round size="large"  @click="lookInfo"
          >查看患者详细信息</van-button
        >
      </van-tab>
      <!-- 治疗 -->
      <van-tab title="抗感染方案推荐">
        <div class="treatment-card">
          <span>
            {{ infectionInfo.typeData }}
          </span>
        </div>
        <van-collapse v-model="infc" @change="changeCheck">
          <van-collapse-item
            size="large"
            :is-link="true"
            :name="item.recommendContent"
            v-for="(item, index) in recommend"
            :key="index"
          >
            <template #title>
              <div class="title">建议：{{ item.recommendContent }}</div>
            </template>
            <div class="treatment-card">
              <p>建议：</p>
              <span>{{ item.recommendContent }}</span>
            </div>
          </van-collapse-item>
        </van-collapse>
        <van-button type="info" round size="large" @click="lookInfo">查看患者详细信息</van-button>
      </van-tab>
      <van-tab title="抗感染方案评估">
        <div class="treatment-card">
          <span>
            {{ infectionInfo.treateData }}
          </span>
        </div>
        <van-collapse v-model="assess" @change="changeCheck">
          <van-collapse-item
            size="large"
            :is-link="true"
            :name="item.recommendContent"
            v-for="(item, index) in Assessment"
            :key="index"
          >
            <template #title>
              <div class="title">建议：{{ item.recommendContent }}</div>
            </template>
            <div class="treatment-card">
              <p>异常评估：</p>
              <span>{{ item.recommendContent }}</span>
            </div>
          </van-collapse-item>
        </van-collapse>
        <van-button type="info" round size="large" @click="lookInfo"
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
      activeNames: [],
      active: "",
      infc: [],
      assess: [],
      checked: true,
      qs: [], // QSOAF
      Screening: [], // 筛查
      recommend: [], // 推荐
      Assessment: [] //评估
    };
  },
  computed: {
    ...mapState({
      infectionInfo: state => state.infectionInfo,
      infectionEntry: state => state.infectionEntry,
      infectionChildren: state => state.infectionChildren
    })
  },
  methods: {
    changeCheck(value) {},
    goTable() {
      // this.$router.push('/shock/table')
      this.$router.push({ path: "/shock/InfectionEntry" });
    },
    //查看患者详细信息
    lookInfo() {
      this.$router.replace({
        path: "/shock/InfectionEntry"
      });
    }
  },
  mounted() {
    this.$store.dispatch("getInfectionPaientInfoActions");
  },
  watch: {
    infectionInfo: {
      handler(value) {
        console.log(value);
        this.$nextTick(() => {
          value.recommendOrderList.forEach((item, index) => {
            if (item.recommendID === "筛查感染部位") {
              this.Screening.push(item);
            } else if (item.recommendID === "qSOFA评估") {
              this.qs.push(item);
            } else if (item.recommendID === "抗感染方案推荐") {
              this.recommend.push(item);
            } else if (item.recommendID === "抗感染方案评估") {
              this.Assessment.push(item);
            }
          });
        });
      },
      deep: true
    }
  }
};
</script>

<style lang="stylus" scoped>
.title
        width 80%
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
            font-size 14px
            margin-bottom 5px
          span
            color #787878
            margin-bottom 5px
            font-size 15px
        .treatment-card
            margin-bottom 10px
            border 1px solid #E5E5E5
            width 100%
            padding 10px
            border-radius 20px
            font-size 15px
            p
              color #212121
              font-size 14px
              margin-bottom 10px
            span
              color #787878
              display block
              line-height 20px
</style>
