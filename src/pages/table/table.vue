<template>
  <div id="container">
      <div class="panel">
            <table class="table">
                <thead class="header">
                    <tr>
                        <th>患者姓名</th>
                        <th>休克情况</th>
                        <th>床位</th>
                        <th>病情变化</th>
                    </tr>
                </thead>
                <tbody class="content">
                    <tr v-for ="(user,index) in users" :key="index">
                      <td>{{index+1}}</td>
                      <td>{{user.tpatname}}</td>
                      <td>{{user.age}}</td>
                      <td>{{user.tel_num}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            user: {'name': '', 'age': '', 'school': ''},
            users: [
            ]
        }
    },
    async mounted(){
        let result  = await this.$API.table()
        if(result.status === '0'){
            this.users = result.data
        }
    }
}
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