import {Collection, fromJS} from 'immutable';

import ev from "./eventbus";

class Ctx{
    coordinates=[0,0]
    bound=[0,0,0,0];
    data=[];
    dataInit(payload:any){
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