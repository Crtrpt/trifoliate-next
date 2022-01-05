import {Collection, fromJS} from 'immutable';

import ev from "./eventbus";

class State{
    data:any=fromJS({});
    dataInit(payload:any){
    //    this.data=fromJS(payload);
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