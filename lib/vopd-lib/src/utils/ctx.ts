import {Collection, fromJS} from 'immutable';

class Ctx{
    coordinates=[0,0]
    bound=[0,0,0,0];
    data={};
    //选择的节点列表
    selected=new Map();
    hashIds=new Map();
    hashNames=new Map();
    selectContainer(p,ctx){
        console.log("select:"+p.id);
        ctx.hashIds.get(p.id).attr["isSelect"]=p||!ctx.hashIds.get(p.id).attr["isSelect"];
        ctx.selected.set(p.id,p);
    }
    eyeContainer(p,ctx){
        console.log("eye:"+p.id)
        ctx.hashIds.get(p.id).attr["isEye"]=!ctx.hashIds.get(p.id).attr["isEye"];
    }
    lockContainer(p,ctx){
        console.log("lock:"+p.id)
        ctx.hashIds.get(p.id).attr["isLock"]=!ctx.hashIds.get(p.id).attr["isLock"];
    }
    deleteContainer(p,ctx){
        console.log("delete:"+p.id)
        ctx.hashIds.get(p.id).attr["isDelete"]=true;
    }
    dataInit(payload:any){
        console.log("数据状态树初始化");
        this.data=payload;
        this.hash(this.data.project.list,null);
        console.log(this.hashIds);
        console.log(this.hashNames);
    }
    hash(list:Array<any>,parent:any){
        for(var i of list){
            if(i.children?.length>0){
                this.hash(i.children,i);
            }
            i.parent=parent;
            this.hashIds.set(i.id,i);
            this.hashNames.set(i.name,i);
        }
    }
    get(key:String){

    }
    set(key:String,value:any){
        
    }
}

const s=new Ctx();

export default s;