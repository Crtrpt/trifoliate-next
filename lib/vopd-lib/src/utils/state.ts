import {Collection, fromJS} from 'immutable';

import ev from "./ev";

class State{
    data:any;
    dataInit(payload:any){
        //TODO
       var s=fromJS(payload);
    }
    init(){
        ev.on("State","init",this.dataInit)
    }
}

const s=new State();

export default s;