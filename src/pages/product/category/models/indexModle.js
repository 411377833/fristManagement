import {get,post,put} from '../../../../utils/request'
import { observable, action,runInAction  } from 'mobx';
import {message} from 'antd';
//根据身份证获取是否存在患者
const getCategoryList = () => get(`/api/v1/addCategory`);
const getCategoryById = (id) => get(`/api/v1/addCategory/${id}`);
const putCategoryById = (id,data) => put(`/api/v1/addCategory/${id}`,data);
const postAddCategory = (data) => post(`/api/v1/addCategory`,data);

class IndexModel {

    @observable categoryList = [];

    /**
     * 修改 username 的方法
     */
    @action
    changeUserName = (name) => {
        this.username = name;
    }
    @action
    getCategoryList(){
        getCategoryList().then((res)=>{
            if(res.code===0){
                runInAction(() => {
                    this.categoryList = res.data
                })
            }else{
                message.error(response.msg)
            }
        })
    }
    @action
    postAddCategory(data,cb){
        postAddCategory(data).then((res)=>{
            console.log(res)
            if(res.code===0){
                cb()
            }else{
                message.error(response.msg)
            }
        })
    }
    @action
    getCategoryById(id,cb){
        getCategoryById(id).then((res)=>{
            console.log(res)
            if(res.code===0){
                cb(res.data)
            }else{
                message.error(response.msg)
            }
        })
    }
    @action
    putCategoryById(id,data,cb){
        putCategoryById(id,data).then((res)=>{
            console.log(res)
            if(res.code===0){
                cb()
            }else{
                message.error(response.msg)
            }
        })
    }
}
export default new IndexModel()