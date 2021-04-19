import {PAIENTINFO,INFECTIONPAIENTINFO} from './mutation-type'
export default{
    [PAIENTINFO](state,value){
        state.paientInfo = value
        state.infoEntry = value.diseaseInfoModel
        state.children = value.diseaseInfoModel[0].children
    },
    [INFECTIONPAIENTINFO](state,value){

    //     // infectionInfo:{},
    // infectionEntry:[],//感染信息录入,
    // infectionChildren:[] //感染信息录入
        state.infectionInfo = value
        state.infectionEntry = value.diseaseInfoModel
        state.infectionChildren  = value.diseaseInfoModel[0].children
    }
}