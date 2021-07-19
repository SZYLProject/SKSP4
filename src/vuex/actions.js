import {
    diseaseInfoSelectSK,
    infectionPaient
} from '../api'
import {
    PAIENTINFO,
    INFECTIONPAIENTINFO
} from './mutation-type'
export default {
    // 获取患者休克信息：修改infectionPaient为diseaseInfoSelectSK即可，当前无数据
    async getPaientInfoActions({commit}) {
        let result = await infectionPaient()
        if (result.status == 0) {
            commit(PAIENTINFO, result.data)
            console.log(result.data)
        }
    },
    // 获取患者感染信息
    async getInfectionPaientInfoActions({
        commit
    }) {
        let result = await infectionPaient()
        if (result.status == 0) {
            commit(INFECTIONPAIENTINFO, result.data)
            console.log(result.data)
        }
    }
}