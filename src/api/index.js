import axios from 'axios';

axios.defaults.baseURL="http://react.zbztb.cn/site/"

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  // 轮播图和推荐商品
export const getGoods=()=>axios.get("goods/gettopdata/goods")

// 首页列表
export const getGoodsGroup =() => axios.get("goods/getgoodsgroup")
export const getGoodsInfo =(id) => axios.get("goods/getgoodsinfo/"+id)
