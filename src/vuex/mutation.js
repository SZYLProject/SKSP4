import {
  PAIENTINFO,
  INFECTIONPAIENTINFO,
  CLRATRPAIENTINFO,
  CLEARINFECTIONPAIENTINFO
} from "./mutation-type";
export default {
  [PAIENTINFO](state, value) {
    state.paientInfo = value;
    state.infoEntry = value.diseaseInfoModel;
    state.children = value.diseaseInfoModel[0].children;
  },

  [CLRATRPAIENTINFO]() {},
  // 感染信息数据
  [INFECTIONPAIENTINFO](state, value) {
    //     // infectionInfo:{},
    // infectionEntry:[],//感染信息录入,
    // infectionChildren:[] //感染信息录入
    state.infectionInfo = value;
    state.infectionEntry = value.diseaseInfoModel;
    state.infectionChildren = value.diseaseInfoModel[0].children;
  },
  [CLEARINFECTIONPAIENTINFO](state) {
    state.infectionInfo = {};
    state.infectionEntry = [];
    state.infectionChildren = [];
  }
};
