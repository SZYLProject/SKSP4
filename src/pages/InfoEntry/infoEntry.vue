<template>
  <div id="container">
      <van-row :gutter="10" type="flex" justify="space-around">
          <van-col>
              <span>张三</span>
          </van-col>
          <van-col>
              <span>住院号: 123</span>
          </van-col>
          <van-col>
              <span>年龄: 40</span>
          </van-col>
          <van-col>
              <span>性别: 男</span>
          </van-col>
      </van-row>
      <h3></h3>
      <div v-if="infoEntry">
      <van-form v-for="(item,index) in infoEntry" :key="index"  label-align="center">
        <h4>{{item.disease_info_title}}</h4>
        <h4>{{item.children[2].disease_info_title}}</h4>
        <van-field>
            <template #input>
                 <van-checkbox-group
                 v-model="checkedBox"
                 checked-color="#01763a" 
                 style="width:100%">
                    <van-cell-group>
                        <van-cell
                        v-for="(itemCheck,index) in item.children[2].children"
                        clickable
                        :key="itemCheck.id"
                        :title="itemCheck.disease_info_title"
                        @click="toggle(index)"
                        :class="{addStyle:checkedBox.indexOf(itemCheck.id) != -1}"
                        >
                        <template #right-icon>
                            <van-checkbox :name="itemCheck.id" ref="checkboxes" />
                        </template>
                        </van-cell>
                    </van-cell-group>
                </van-checkbox-group>
            </template>
        </van-field>
        <h4>{{item.children[5].disease_info_title}}</h4>
        <van-field>
            <template #input>
                <van-checkbox-group
                 v-model="model"
                 checked-color="#01763a" 
                 style="width:100%">
                    <van-cell-group>
                        <van-cell
                        v-for="(itemCheck,index) in item.children[5].children"
                        clickable
                        :key="itemCheck.id"
                        :title="itemCheck.disease_info_title"
                        @click="modelBox(index)"
                        :class="{addStyle:model.indexOf(itemCheck.id) != -1}"
                        >
                        <template #right-icon>
                            <van-checkbox :name="itemCheck.id" ref="modelboxes" />
                        </template>
                        </van-cell>
                    </van-cell-group>
                </van-checkbox-group>
            </template>
        </van-field>
        <h4>{{item.children[0].disease_info_title}}</h4>
        <van-cell-group
             v-for="(itemLife,indexLife) in item.children[0].children" :key="indexLife"
        >
          <van-field
            v-model="itemLife.disease_info_title_value"
            :label="itemLife.disease_info_title"
        >
          <van-text slot="button" size="small" type="text">{{itemLife.disease_info_title_unit}}</van-text>
          </van-field>
        </van-cell-group>
        <h4>{{item.children[3].disease_info_title}}</h4>
        <van-cell-group v-for="(itemCheck) in item.children[3].children" :key="itemCheck.id">
          <van-field
            v-model="itemCheck.disease_info_title_value"
            :label="itemCheck.disease_info_title"
        >
          <van-text slot="button" size="small" type="text">{{itemCheck.disease_info_title_unit}}</van-text>
          </van-field>
        </van-cell-group>
        <h4>{{item.children[4].disease_info_title}}</h4>
        <van-cell-group>
          <van-field
            v-model="itemNoCheck.disease_info_title_value"
            :label="itemNoCheck.disease_info_title"
            v-for="(itemNoCheck) in item.children[4].children" :key="itemNoCheck.id"
        >
          <van-text slot="button" size="small" type="text">{{itemNoCheck.disease_info_title_unit}}</van-text>
          </van-field>
        </van-cell-group>
        <h4>{{item.children[1].disease_info_title}}</h4>
          <van-field>
              <template #input>
                <van-checkbox-group
                 v-model="symptomBox"
                 checked-color="#01763a" 
                 style="width:100%">
                    <van-cell-group>
                        <van-cell
                        v-for="(itemCheck,index) in item.children[1].children"
                        clickable
                        :key="itemCheck.id"
                        :title="itemCheck.disease_info_title"
                        @click="handSymptom(index)"
                        :class="{addStyle:symptomBox.indexOf(itemCheck.id) != -1}"
                        >
                        <template #right-icon>
                            <van-checkbox :name="itemCheck.id" ref="symptomBox" />
                        </template>
                        </van-cell>
                    </van-cell-group>
                </van-checkbox-group>
             </template>
          </van-field>
          <h4>{{item.children[6].disease_info_title}}</h4>
          <van-field>
              <template #input>
                <van-checkbox-group
                 v-model="SuperbornBox"
                 checked-color="#01763a" 
                 style="width:100%">
                    <van-cell-group>
                        <van-cell
                        v-for="(itemCheck,index) in item.children[6].children"
                        clickable
                        :key="itemCheck.id"
                        :title="itemCheck.disease_info_title"
                        @click="handSuperborn(index)"
                        :class="{addStyle:SuperbornBox.indexOf(itemCheck.id) != -1}"
                        >
                        <template #right-icon>
                            <van-checkbox :name="itemCheck.id" ref="superbornBox" />
                        </template>
                        </van-cell>
                    </van-cell-group>
                </van-checkbox-group>
             </template>
          </van-field>
          <h4>{{item.children[7].disease_info_title}}</h4>
          <van-field>
              <template #input>
                <van-checkbox-group
                 v-model="chestBox"
                 checked-color="#01763a" 
                 style="width:100%">
                    <van-cell-group>
                        <van-cell
                        v-for="(itemCheck,index) in item.children[7].children"
                        clickable
                        :key="itemCheck.id"
                        :title="itemCheck.disease_info_title"
                        @click="handChestBox(index)"
                        :class="{addStyle:chestBox.indexOf(itemCheck.id) != -1}"
                        >
                        <template #right-icon>
                            <van-checkbox :name="itemCheck.id" ref="chestBox" />
                        </template>
                        </van-cell>
                    </van-cell-group>
                </van-checkbox-group>
             </template>
          </van-field>
        <div style="margin: 16px;">
            <van-button round style="width:46%;margin-right:8%"  type="info" native-type="submit" @click="reSubmit" class="reSubmit" size="normal">
            重置
            </van-button>
            <van-button round style="width:46%" type="info" native-type="submit" class="submit" @click="submit" size="normal">
            提交
            </van-button>
        </div>
        </van-form>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {Toast} from 'vant'
export default {
    data(){
        return {
            symptom:'',//症状体征
            mode:'',//呼吸模式
            image:'',//影像学检查
            symptomIndex:null,//症状体征下表
            modeIndex:null,//呼吸模式下标
            imageIndex:null,//影像学检查下标
            checkedBox:[],
            symptomBox:[],
            SuperbornBox:[],
            model:[],
            chestBox:[],
            diseaseInfoModel:[]
        }
    },
    computed:{
        ...mapState({
            paientInfo: state => state.paientInfo,
            infoEntry: state => state.infoEntry,
            children: state => state.children
        })
    },
    methods:{
        toggle(index){
            this.$refs.checkboxes[index].toggle()
        },
        modelBox(index){
            this.$refs.modelboxes[index].toggle()
        },
        handSymptom(index){
             this.$refs.symptomBox[index].toggle()
        },
        handSuperborn(index){
            this.$refs.superbornBox[index].toggle()
        },
        handChestBox(index){
            this.$refs.chestBox[index].toggle()
        },
        //提交
        async submit(){
            //遍历添加到对象中
            let diseaseInfoModel = []
            this.infoEntry[0].children[0].children.forEach((item)=>{
                diseaseInfoModel.push({
                    disease_info_title:item.disease_info_title,
                    disease_info_title_unit:item.disease_info_title_unit,
                    disease_info_title_value:item.disease_info_title_value
                })
            })
            this.infoEntry[0].children[3].children.forEach((item)=>{
                diseaseInfoModel.push({
                    disease_info_title:item.disease_info_title,
                    disease_info_title_unit:item.disease_info_title_unit,
                    disease_info_title_value:item.disease_info_title_value
                })
            })
            this.infoEntry[0].children[4].children.forEach((item)=>{
                diseaseInfoModel.push({
                    disease_info_title:item.disease_info_title,
                    disease_info_title_unit:item.disease_info_title_unit,
                    disease_info_title_value:item.disease_info_title_value
                })
            })
            this.checkedBox.forEach((item)=>{
                this.infoEntry[0].children[2].children.forEach((details)=>{
                    if(item === details.id){
                        diseaseInfoModel.push({
                            disease_info_title:details.disease_info_title,
                            disease_info_title_unit:details.disease_info_title_unit,
                            disease_info_title_value:details.disease_info_title_value
                        })
                    }
                })
            })
            this.model.forEach((item)=>{
                this.infoEntry[0].children[5].children.forEach((details)=>{
                    if(item === details.id){
                        diseaseInfoModel.push({
                            disease_info_title:details.disease_info_title,
                            disease_info_title_unit:details.disease_info_title_unit,
                            disease_info_title_value:details.disease_info_title_value
                        })
                    }
                })
            })
            this.symptomBox.forEach((item)=>{
                this.infoEntry[0].children[1].children.forEach((details)=>{
                    if(item === details.id){
                        diseaseInfoModel.push({
                            disease_info_title:details.disease_info_title,
                            disease_info_title_unit:details.disease_info_title_unit,
                            disease_info_title_value:details.disease_info_title_value
                        })
                    }
                })
            })
            this.SuperbornBox.forEach((item)=>{
                this.infoEntry[0].children[6].children.forEach((details)=>{
                    if(item === details.id){
                        diseaseInfoModel.push({
                            disease_info_title:details.disease_info_title,
                            disease_info_title_unit:details.disease_info_title_unit,
                            disease_info_title_value:details.disease_info_title_value
                        })
                    }
                })
            })
            this.chestBox.forEach((item)=>{
                this.infoEntry[0].children[7].children.forEach((details)=>{
                    if(item === details.id){
                        diseaseInfoModel.push({
                            disease_info_title:details.disease_info_title,
                            disease_info_title_unit:details.disease_info_title_unit,
                            disease_info_title_value:details.disease_info_title_value
                        })
                    }
                })
            })
            this.diseaseInfoModel = diseaseInfoModel
            let result = await this.$API.patientEdit(this.diseaseInfoModel)
            if(result.status === '0') {
                Toast('提交成功')
                this.$router.push({path:'/shock/result',query:{type:'shock'}})
            }
        },
        //重置
        reSubmit(){
            this.symptom = ''
            this.mode = ''
            this.image = ''
            this.checkedBox = []
            this.symptomBox = []
            this.model = []
            if(this.infoEntry){
                this.infoEntry.forEach((item)=>{
                    item.children.forEach((detailes)=>{
                        if(detailes.children){
                            detailes.children.forEach((data)=>{
                                data.disease_info_title_value = ''
                            })
                        }
                    })
                })
            }
        },
        //遍历数组，value=y赋值data
        changeData(value,index,data){
             value[0].children[index].children.forEach((item)=>{
                if(item.disease_info_title_value === 'y'){
                   this[data]  = item.constant_encod
                }
            })
        },
        //改变null
        changeNull(value,index){
             value[0].children[index].children.forEach((item)=>{
                if(item.disease_info_title_value === 'null'){
                    item.disease_info_title_value = ''
                }
            })
        },
    },
    async mounted(){
       this.$store.dispatch('getPaientInfoActions')
       if(this.infoEntry && this.infoEntry.length > 0){
            this.changeData(this.infoEntry,2,'symptom')
            this.changeData(this.infoEntry,5,'mode')
            this.changeData(this.infoEntry,1,'image')
            this.changeNull(this.infoEntry,4)
       }
    },
    watch:{
        infoEntry:{
            handler(value){
                this.$nextTick(()=>{
                    this.changeData(value,2,'symptom')
                    this.changeData(value,5,'mode')
                    this.changeData(value,1,'image')
                    this.changeNull(value,4)
                    let checkedBox = []
                    let model = []
                    let symptomBox = []
                    let SuperbornBox = []
                    let chestBox = []
                    this.infoEntry[0].children[2].children.forEach((item)=>{
                        if(item.disease_info_title_value === 'y'){
                            checkedBox.push(item.id)
                        }
                    })
                    this.infoEntry[0].children[5].children.forEach((item)=>{
                        if(item.disease_info_title_value === 'y'){
                            model.push(item.id)
                        }
                    })
                    this.infoEntry[0].children[1].children.forEach((item)=>{
                        if(item.disease_info_title_value === 'y'){
                            symptomBox.push(item.id)
                        }
                    })
                    this.infoEntry[0].children[6].children.forEach((item)=>{
                        if(item.disease_info_title_value === 'y'){
                            SuperbornBox.push(item.id)
                        }
                    })
                    this.infoEntry[0].children[7].children.forEach((item)=>{
                        if(item.disease_info_title_value === 'y'){
                            chestBox.push(item.id)
                        }
                    })
                    this.model = model
                    this.checkedBox = checkedBox
                    this.symptomBox = symptomBox
                    this.SuperbornBox = SuperbornBox
                    this.chestBox = chestBox
                })
            },
            deep:true
        }
    }

}
</script>

<style lang="stylus" scoped>
     .addStyle
        border 2px solid #01763a !important
/deep/.van-cell--clickable
            border 1px solid #fff
            border-radius 10px
            padding 5px
            margin-bottom 5px
     .active
             border 1px solid #01763A
#container
    width 100%
    height 100%
    padding 20px
    .van-row
        height 50px
        background #01763A
        border-radius 5px
        text-align center
        line-height 50px
        font-size 15px
        color #fff
        padding 0 25px
        box-sizing border-box
        margin-bottom 20px
        .van-col
            text-align center
    h3
        color #212121
        font-size 15px
        font-weight W3
        margin-bottom 10px
h4
    margin-bottom 10px
    font-size 14px
    font-weight W3
    color #212121
.reSubmit
    background #B2D6C5
    color #5B8B70
    border none
.submit
    background #01763A
    color #fff
    border none
.van-radio-group
    margin-bottom 10px
.van-field
    margin-bottom 10px
/deep/.van-field{
    padding 10px 0
}
// 单选框样式
/deep/.van-radio__icon--checked .van-icon
    background #01763A
    border-color #01763A
</style>