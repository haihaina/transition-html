import  request  from "../utils/request";
// 机构信息
export function appinfo(id){
    return request({
        url: `/api/v1/get/appinfo/${id}`,
        method: 'post',
    })
}
// 个人信息
export function realinfo(id){
  return request({
      url: `/v1/get/realinfo/${id}`,
      method: 'post',
  })
}