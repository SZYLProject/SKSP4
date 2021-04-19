import ajax from './axios'
// 患者信息录入
export const patientInfo = () => ajax({
    url:'v1/diseaseInfoSelectSK',
    method:'POST',
    data:{
        num_hospital:1,
        patient_id:1
    }
})
//患者信息修改
export const patientEdit = (diseaseInfoModel) => ajax({
    url:'v1/updateDiseaseInfoSK',
    method:'POST',
    data:{
        num_hospital:1,
        patient_id:1,
        diseaseInfoModel:diseaseInfoModel
    }
})


//感染信息录入
export  const infectionPaient = () => ajax({
    url:'v1/diseaseInfoSelectSP',
    method:'POST',
    data:{
        num_hospital:1,
        patient_id:1
    }
})
//感染信息更新接口
export const infectionUpdata = (diseaseInfoModel) => ajax({
    url:'v1/updateDiseaseInfoSP',
    method:'POST',
    data:{
        num_hospital:'1',
        patient_id:'1',
        diseaseInfoModel
    }
})

export const table = () => ajax({
    url:'v1/patientTableSelectSP',
    method:'POST',
    data:{
        patient_id:'1',
        num_hospital:'1',
        age:'20'
    }
})

export const insertfeedbackData = (data) => ajax({
    url:'v1/insertfeedbackData',
    method:'POST',
    data:{
        content_feedback:data
    }
})

export const getNumberICU = (data) => ajax({
    url:'v1/getNumberICU',
    method:'POST',
    data
})