import {Collection, fromJS} from 'immutable';

import ev from "./eventbus";

class State{
    data:any=[];
    dataInit(payload:any){
        // console.log("初始化数据");
        // console.log(this);
        // this.data=payload;
    }
    get(key:String){

    }
    set(key:String,value:any){

    }
    init(){
        ev.on("State","init",this.dataInit)
    }
}

const s=new State();

export default s;