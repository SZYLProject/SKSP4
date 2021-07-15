<template>
  <div id="container">
    <div class="panel">
      <table class="table">
        <thead class="header">
          <tr>
            <th>序号</th>
            <th>姓名</th>
            <th>年龄</th>
            <th>手机号</th>
          </tr>
        </thead>
        <tbody class="content">
          <tr
            v-for="(user, index) in users"
            :key="index"
            @click="toEntry(user)"
          >
            <td>{{ index + 1 }}</td>
            <td>{{ user.tpatname }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.tel_num }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: { name: "", age: "", school: "" },
      users: []
    };
  },
  mounted() {
    const id = sessionStorage.getItem("systemTitle") || '1';
    switch (id) {
      case "1":
        this.patientTableSelectSP();// 重症感染
        break;
      case "2":
        this.patientTableSelectSK(); // 重症休克
        break;
      default:
        break;
    }
  },
  methods: {
    async patientTableSelectSP() {
      const data = {};
      let result = await this.$API.patientTableSelectSP(data);
      if (result.status === "0") {
        // this.users = [].concat(result.data);
        this.users = Object.assign([], result.data);
      }
    },
    patientTableSelectSK() {
      let result = this.$API.patientTableSelectSK();
      if (result.status === "0") {
        this.users = result.data;
      }
    },
    toEntry(item) {
      console.log(item);
      const data = JSON.stringify(item)
      sessionStorage.setItem("tablePerpionInfo", data);
      this.$router.push({ path: "/shock/InfectionEntry" });
    }
  }
};
</script>

<style lang="stylus" scoped>
#container
    width 100%
    padding 10px
    min-height 100vh
    .panel
        .table
            width 100%
            .header
                background #01763A
                tr
                    height 50px
                    th
                        width 25%
                        text-align center
                        line-height 50px
                        font-size 14px
                        color  #fff
        .content
            tr
                height 40px
                width 25%
                border-bottom 1px solid #787878
                text-align center
                line-height 40px
</style>
