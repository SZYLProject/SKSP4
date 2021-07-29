import axios from 'axios'
let instance
if (process.env.NODE_ENV === 'development') {
    instance = axios.create({
        // baseURL: 'http://152.136.182.96:5030/' //原地址
        baseURL: 'http://172.16.116.75:5031'  // 郭飞本地地址
        // baseURL: 'http://10.160.28.153:5031' // 协和服务器



    })
} else if (process.env.NODE_ENV === 'production') {
    instance = axios.create({
        // 给郭飞打包修改此线上地址
        // baseURL: 'http://152.136.182.96:5030/' // 打包地址
        baseURL: 'http://172.16.116.75:5032/' //本地打包地址
        // baseURL: 'http://10.160.28.153:5031' // 协和服务器


    })
} else {
    instance = axios.create()
}

//请求拦截器
instance.interceptors.request.use(config => {
    return config
})
//响应拦截器
instance.interceptors.response.use(response => {
    return response.data
}, error => {
    return Promise.reject(error)
})
export default instance