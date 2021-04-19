import axios from 'axios'
let instance
if (process.env.NODE_ENV === 'development') {
    instance=axios.create({
        // baseURL: 'http://152.136.182.96:5030/' //原地址
        baseURL: 'http://172.16.115.130:5031'  // 郭飞地址

    })
} else if(process.env.NODE_ENV === 'production'){
    instance=axios.create({
        baseURL: 'http://152.136.182.96:5030/'
    })
}else {
    instance=axios.create()
}

//请求拦截器
instance.interceptors.request.use(config => {
    return config
})
//响应拦截器
instance.interceptors.response.use(response => {
    return response.data
},error => {
    return Promise.reject(error)
})
export default instance