let baseUrl = {
	dev: 'http://localhost:810',//本地环境
    test1: 'http://loan-web-api1.internal.jiebide.xin:881',//测试环境1
    test2: 'http://loan-web-api2.internal.jiebide.xin:881',//测试环境2
    // moer: 'http://192.168.0.169:810',  // 测试
    moer: 'https://api.promote.bicredit.xin', 
    ttfq: 'http://api.ruiru.xyz',
    yimiao:'https://web-api.yingjiwallet.cn', //宜秒
    ssd: 'https://h5.api.yourongdai.cn',//惠融
}
// 引入axios
import axios from "axios";
// import Qs from 'qs';
// 创建axios实例
const service =axios.create({
    baseURL:baseUrl.moer, // 接口地址
    timeout:10000, // 超时时间
})
// 请求拦截器
service.interceptors.request.use(
    (config) =>{
        // 成功
        config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        // config.headers['X-Requested-With'] = 'XMLHttpRequest'
        // 设置token
        // const token:any = $store.getters['token']
        // config.data = Qs.stringify(config.data)
        console.log('config',config)
        return config
    },
    (error) =>{
        return Promise.reject(error)
    }
)
// 响应拦截器
service.interceptors.response.use(
    // 成功
    (res) => {
        if(res.status === 200){
            // 成功
            return Promise.resolve(res.data)
        }else {
            return Promise.reject(res)
        }
    },
    // 失败
    (err) =>{
        const status = err.response.status
        return Promise.reject(status)
    }
)
export default service
