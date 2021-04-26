<template>
  <div id="container">
    <van-row :gutter="10" type="flex" justify="space-around">
      <van-col>
        <span>{{ tablePerpionInfo.tpatname }}</span>
      </van-col>
      <van-col>
        <span>住院号: </span>
      </van-col>
      <van-col>
        <span>年龄: {{ tablePerpionInfo.age }}</span>
      </van-col>
      <van-col>
        <span>性别: {{ tablePerpionInfo.gender }}</span>
      </van-col>
    </van-row>
    <div v-if="infectionEntry">
      <van-form
        label-align="center"
        v-for="(item, index) in infectionEntry"
        :key="index"
      >
        <h3>{{ item.disease_info_title }}</h3>
        <h4>{{ item.children[0].disease_info_title }}</h4>
        <van-cell-group
          v-for="itemLife in item.children[0].children"
          :key="itemLife.id"
        >
          <van-field
            v-model="itemLife.disease_info_title_value"
            :label="itemLife.disease_info_title"
          >
            <van-text slot="button" size="small" type="text">{{
              itemLife.disease_info_title_unit
            }}</van-text>
          </van-field>
        </van-cell-group>
        <h4>{{ item.children[4].disease_info_title }}</h4>
        <!-- <van-field
            v-model="itemCheck.disease_info_title_value"
            :label="itemCheck.disease_info_title"
            v-for="(itemCheck) in item.children[4].children"
            :key="itemCheck.id"
        /> -->
        <van-field>
          <template #input>
            <van-checkbox-group v-model="checkedBox" style="width:100%">
              <van-cell-group>
                <van-cell
                  v-for="(itemCheck, index) in item.children[4].children"
                  clickable
                  :key="itemCheck.id"
                  :title="itemCheck.disease_info_title"
                  @click="toggle(index, $event)"
                  :class="{ addStyle: checkedBox.indexOf(itemCheck.id) != -1 }"
                >
                  <template #right-icon>
                    <van-checkbox :name="itemCheck.id" ref="checkboxes" />
                  </template>
                </van-cell>
              </van-cell-group>
            </van-checkbox-group>
          </template>
        </van-field>
        <h4>{{ item.children[5].disease_info_title }}</h4>
        <van-field>
          <template #input>
            <van-checkbox-group v-model="culture" style="width:100%">
              <van-cell-group>
                <van-cell
                  v-for="(itemCheck, index) in item.children[5].children"
                  clickable
                  :key="itemCheck.id"
                  :title="itemCheck.disease_info_title"
                  @click="handCulture(index, $event)"
                  :class="{ addStyle: culture.indexOf(itemCheck.id) != -1 }"
                >
                  <template #right-icon>
                    <van-checkbox :name="itemCheck.id" ref="cultureboxes" />
                  </template>
                </van-cell>
              </van-cell-group>
            </van-checkbox-group>
          </template>
        </van-field>
        <h4>{{ item.children[6].disease_info_title }}</h4>
        <van-cell-group
          v-for="itemLife in item.children[6].children"
          :key="itemLife.id"
        >
          <van-field
            v-model="itemLife.disease_info_title_value"
            :label="itemLife.disease_info_title"
            label-width="270px"
          >
            <van-text slot="button" size="small" type="text">{{
              itemLife.disease_info_title_unit
            }}</van-text>
          </van-field>
        </van-cell-group>
        <h4>{{ item.children[1].disease_info_title }}</h4>
        <van-field>
          <template #input>
            <van-checkbox-group v-model="box" style="width:100%">
              <van-cell-group>
                <van-cell
                  v-for="(itemSymptom, index) in item.children[1].children"
                  :key="itemSymptom.id"
                  :title="itemSymptom.disease_info_title"
                  clickable
                  @click="changeStatus(index)"
                  :class="{ addStyle: box.indexOf(itemSymptom.id) != -1 }"
                >
                  <template #right-icon>
                    <van-checkbox :name="itemSymptom.id" ref="assCheckbox" />
                  </template>
                </van-cell>
              </van-cell-group>
            </van-checkbox-group>
          </template>
        </van-field>
        <h4>{{ item.children[3].disease_info_title }}</h4>
        <van-field
          name="checkboxGroup"
          v-for="item in item.children[3].children"
          :key="item.id"
          :label="item.disease_info_title"
        >
          <template #input>
            <van-checkbox-group v-model="checkboxGroup" direction="horizontal">
              <van-checkbox
                :name="details.id"
                shape="square"
                v-for="details in item.children"
                :key="details.id"
                >{{ details.disease_info_title }}</van-checkbox
              >
            </van-checkbox-group>
          </template>
        </van-field>
        <h4>{{ item.children[2].disease_info_title }}</h4>
        <van-field>
          <template #input>
            <van-checkbox-group v-model="antiInfectiveBox" style="width:100%">
              <van-cell-group>
                <van-cell
                  :title="itemSigns.disease_info_title"
                  v-for="(itemSigns, indexSigns) in item.children[2].children"
                  :key="indexSigns"
                  clickable
                  @click="ChangeantiInfective(indexSigns)"
                  :class="{
                    addStyle: antiInfectiveBox.indexOf(itemSigns.id) != -1
                  }"
                >
                  <template #right-icon>
                    <van-checkbox
                      :name="itemSigns.id"
                      ref="InfectiveCheckbox"
                    />
                  </template>
                </van-cell>
              </van-cell-group>
            </van-checkbox-group>
          </template>
        </van-field>
        <div style="margin: 16px;">
          <van-button
            round
            style="width:46%;margin-right:8%"
            type="info"
            native-type="submit"
            class="reSubmit"
            size="normal"
          >
            重置
          </van-button>
          <van-button
            round
            style="width:46%"
            type="info"
            native-type="submit"
            class="submit"
            @click="submit"
            size="normal"
          >
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Toast } from "vant";
export default {
  data() {
    return {
      tablePerpionInfo: JSON.parse(sessionStorage.getItem("tablePerpionInfo")),
      symptom: "", //症状体征
      assess: [], //治疗评估
      antiInfective: "", //体征
      fungus: "", //真菌
      name: "",
      username: "",
      password: "",
      showPicker: false,
      value: [
        {
          value: ""
        }
      ],
      box: [],
      checkboxGroup: [],
      antiInfectiveBox: [],
      checkedBox: [],
      pct: [],
      culture: [],
      diseaseInfoModel: []
    };
  },
  methods: {
    async submit() {
      let diseaseInfoModel = [];
      this.infectionEntry[0].children[0].children.forEach(item => {
        diseaseInfoModel.push({
          disease_info_title: item.disease_info_title,
          disease_info_title_unit: item.disease_info_title_unit,
          disease_info_title_value: item.disease_info_title_value
        });
      });
      this.infectionEntry[0].children[6].children.forEach(item => {
        diseaseInfoModel.push({
          disease_info_title: item.disease_info_title,
          disease_info_title_unit: item.disease_info_title_unit,
          disease_info_title_value: item.disease_info_title_value
        });
      });
      this.infectionEntry[0].children[5].children.forEach(item => {
        this.culture.forEach(details => {
          if (details === item.id) {
            diseaseInfoModel.push({
              disease_info_title: item.disease_info_title,
              disease_info_title_unit: item.disease_info_title_unit,
              disease_info_title_value: item.disease_info_title_value
            });
          }
        });
      });
      this.infectionEntry[0].children[2].children.forEach(item => {
        this.antiInfectiveBox.forEach(details => {
          if (details === item.id) {
            diseaseInfoModel.push({
              disease_info_title: item.disease_info_title,
              disease_info_title_unit: item.disease_info_title_unit,
              disease_info_title_value: item.disease_info_title_value
            });
          }
        });
      });
      this.infectionEntry[0].children[1].children.forEach(item => {
        this.box.forEach(details => {
          if (details === item.id) {
            diseaseInfoModel.push({
              disease_info_title: item.disease_info_title,
              disease_info_title_unit: item.disease_info_title_unit,
              disease_info_title_value: item.disease_info_title_value
            });
          }
        });
      });
      this.checkedBox.forEach(item => {
        this.infectionEntry[0].children[4].children.forEach(details => {
          if (item === details.id) {
            diseaseInfoModel.push({
              disease_info_title: details.disease_info_title,
              disease_info_title_unit: details.disease_info_title_unit,
              disease_info_title_value: details.disease_info_title_value
            });
          }
        });
      });
      this.infectionEntry[0].children[3].children.forEach(item => {
        item.children.forEach(details => {
          this.checkboxGroup.forEach(data => {
            if (details.id == data) {
              diseaseInfoModel.push({
                disease_info_title: details.disease_info_title,
                disease_info_title_unit: details.disease_info_title_unit,
                disease_info_title_value: details.disease_info_title_value
              });
            }
          });
        });
      });
      this.diseaseInfoModel = diseaseInfoModel;
      let result = await this.$API.infectionUpdata(this.diseaseInfoModel);
      if (result.status === "0") {
        Toast("提交成功");
        if (this.$route.path != "/shock/infectionResult") {
          this.$router.push("/shock/infectionResult");
        }
      }
    },
    handpct(index) {
      this.$refs.pctboxes[index].toggle();
    },
    handCulture(index) {
      this.$refs.cultureboxes[index].toggle();
    },
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
    changeStatus(index) {
      this.$refs.assCheckbox[index].toggle();
    },
    ChangeantiInfective(index) {
      this.$refs.InfectiveCheckbox[index].toggle();
    },
    changeData(value, index, data) {
      value[0].children[index].children.forEach(item => {
        if (item.disease_info_title_value === "y") {
          this[data] = item.id;
        }
      });
    },
    changeNull(value, index) {
      value[0].children[index].children.forEach(item => {
        if (item.disease_info_title_value === "null") {
          item.disease_info_title_value = "";
        }
      });
    }
  },
  computed: {
    ...mapState({
      infectionInfo: state => state.infectionInfo,
      infectionEntry: state => state.infectionEntry,
      infectionChildren: state => state.infectionChildren
    })
  },
  mounted() {
    this.$store.dispatch("getInfectionPaientInfoActions");
  },
  watch: {
    infectionEntry: {
      handler(value) {
        this.$nextTick(() => {
          this.changeData(this.infectionEntry, 0, "symptom");
          this.changeData(this.infectionEntry, 1, "assess");
          this.changeData(this.infectionEntry, 2, "antiInfective");
          this.changeNull(this.infectionEntry, 4);
          let checkboxGroup = [];
          let antiInfectiveBox = [];
          let checkedBox = [];
          let box = [];
          let culture = [];
          let select = [];
          value[0].children[3].children.forEach(item => {
            if (item.presentation_type === "3") {
              select.push(item);
            } else if (item.presentation_type === "2") {
              console.log(1);
            }
            if (item) {
              item.children.forEach(details => {
                if (details.disease_info_title_value === "y") {
                  checkboxGroup.push(details.id);
                }
              });
            }
          });
          value[0].children[1].children.forEach(item => {
            if (item.disease_info_title_value === "y") {
              box.push(item.id);
            }
          });
          value[0].children[2].children.forEach(item => {
            if (item.disease_info_title_value === "y") {
              antiInfectiveBox.push(item.id);
            }
          });
          value[0].children[4].children.forEach(item => {
            if (item.disease_info_title_value === "y") {
              checkedBox.push(item.id);
            }
          });
          value[0].children[5].children.forEach(item => {
            if (item.disease_info_title_value === "y") {
              culture.push(item.id);
            }
          });
          this.checkboxGroup = checkboxGroup;
          this.antiInfectiveBox = antiInfectiveBox;
          this.checkedBox = checkedBox;
          this.box = box;
          this.culture = culture;
        });
      },
      deep: true
    }
  }
};
</script>

<style lang="stylus" scoped>
/deep/.van-checkbox
         margin-bottom 0
     .addStyle
        border 2px solid #01763a !important
/deep/.van-cell__title
           line-height 1
/deep/.van-checkbox__icon--checked .van-icon
            background #01763a
/deep/.van-cell--clickable
            border 2px solid #fff
            border-radius 10px
            padding 5px
            margin-bottom 5px
     .active
             border 2px solid #01763A
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
