import {Collection, fromJS} from 'immutable';

class Ctx{
    coordinates=[0,0]
    bound=[0,0,0,0];
    data={};
    dataInit(payload:any){
        console.log("数据状态树初始化");
        console.log(this.data=payload);
    }
    get(key:String){

    }
    set(key:String,value:any){

    }
}

const s=new Ctx();

export default s;