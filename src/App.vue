<template>
  <div id="app">
    <div class="ctn-wrap">
      <router-view />
    </div>

    <div class="bottom">
      <p>
        <span>北京协和医院</span>
        <span>重症医学科</span>
        <span>信息处</span>
      </p>
      <p>
        神州医疗科技股份有限公司
      </p>
    </div>
  </div>
</template>

<script>
import { getNumberICU } from "./api";
export default {
  name: "App",
  async created() {
    let str = sessionStorage.getItem("time");
    if (str) {
      console.log(str);
    } else {
      let time = new Date().toString();
      sessionStorage.setItem("time", time);
      await getNumberICU({ time: new Date().toString() });
    }
  }
};
</script>

<style lang="stylus">
#app
    width 100%
    height 100%
    display flex
    flex-direction column
.bottom
        height 60px
        display flex
        flex-direction column
        justify-content center
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
        p
            margin-bottom 10px
            text-align center
            -moz-user-select none
            -webkit-user-select none
            -ms-user-select none
            -khtml-user-select none
            user-select none
            color #787878
            font-size 12px
            span
                margin-right 5px

.ctn-wrap
  flex 1
  overflow-y scroll
</style>
