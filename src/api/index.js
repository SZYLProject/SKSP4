import ajax from './axios'
// 患者信息录入:重症休克
export const diseaseInfoSelectSK = () => ajax({
    url: 'v1/diseaseInfoSelectSK',
    method: 'POST',
    data: {
        num_hospital: JSON.parse(sessionStorage.getItem('tablePerpionInfo')).num_hospital,
        patient_id: JSON.parse(sessionStorage.getItem('tablePerpionInfo')).patient_id
    }
})
//患者信息修改
export const patientEdit = (diseaseInfoModel) => ajax({
    url: 'v1/updateDiseaseInfoSK',
    method: 'POST',
    data: {
        num_hospital: JSON.parse(sessionStorage.getItem('tablePerpionInfo')).num_hospital,
        patient_id: JSON.parse(sessionStorage.getItem('tablePerpionInfo')).patient_id,
        diseaseInfoModel: diseaseInfoModel
    }
})


//感染信息录入：重症感染
export const infectionPaient = () => ajax({
    url: 'v1/diseaseInfoSelectSP',
    method: 'POST',
    data: {
        num_hospital: JSON.parse(sessionStorage.getItem('tablePerpionInfo')).num_hospital,
        patient_id: JSON.parse(sessionStorage.getItem('tablePerpionInfo')).patient_id
    }
})
//感染信息更新接口
export const infectionUpdata = (diseaseInfoModel) => ajax({
    url: 'v1/updateDiseaseInfoSP',
    method: 'POST',
    data: {
        num_hospital: JSON.parse(sessionStorage.getItem('tablePerpionInfo')).num_hospital,
        patient_id: JSON.parse(sessionStorage.getItem('tablePerpionInfo')).patient_id,
        diseaseInfoModel
    }
})

// 重症感染查询列表
export const patientTableSelectSP = (data) => ajax({
    url: 'v1/patientTableSelectSP',
    method: 'POST',
    data
})
// 重症休克查询列表
export const patientTableSelectSK = (data) => ajax({
    url: 'v1/patientTableSelectSK',
    method: 'POST',
    data
})

export const insertfeedbackData = (data) => ajax({
    url: 'v1/insertfeedbackData',
    method: 'POST',
    data: {
        content_feedback: data
    }
})

export const getNumberICU = (data) => ajax({
    url: 'v1/getNumberICU',
    method: 'POST',
    data
})