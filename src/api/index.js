import axios from 'axios';
import baseUrl ,{paths} from './url' 
const request = axios.create({
    baseURL : baseUrl,
    params : {
        appkey : 'yijili_1607537083645'
    }
})
request.interceptors.response.use(res=>{
    return res.data//为请求的结果添加一个拦截器，处理数据
})
const getSidebar = (type)=>request.get(paths.getSidebar,{
    params : {
        type
    }
})
export default {
    getSidebar
}