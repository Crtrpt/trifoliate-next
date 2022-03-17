import {Collection, fromJS} from 'immutable';
import {ref,reactive} from "vue"
class Ctx{
    data={};
    //可以添加的节点列表
    nodeList=[];
    maxId=null;
    nodeIdMap=new Map();
    //选择的节点列表
    selected=new Map();
    hashIds=new Map();
    hashNames=new Map();
    //false 单选 true多选
    selectMode=true;
    lastSelectId=null;
   
    addNode(p,ctx){
        console.log("id"+p.id+"--->"+p.nodeId)
        var node= ctx.nodeIdMap.get(p.nodeId);
        var nextId=ctx.data.project.maxId++
        var n={
            id:nextId,
            name:node.name+nextId,
            render:node.render,
            widget:node.widget,
            content:"显示文本",
            data:node.data,
            style:node.style,
            ref:[],
            attr:{},
            children: reactive([])
        }

        if(p.id==null){
            console.log("root")
            n.parent=null;
            ctx.data.project.list.push(reactive(n));
        }else{
            console.log("child")
            n.parent=p.id;
            ctx.hashIds.get(p.id).children.push(reactive(n))
        }
       
        ctx.hashIds.set(n.id,reactive(n));
    }
    changeStyle(p,ctx){
        ctx.hashIds.get(p.id).style=p;
    }
    cancelSelectContainer(e,ctx){
        var p=e.data;
        ctx.hashIds.get(p.id).attr["isSelect"]=false
    }
    selectContainer(e,ctx){
        var p=e.data;
        if(ctx.selectMode && ctx.lastSelectId!=null){
            //取消选择
            //console.log("取消选择")
            ctx.hashIds.get(ctx.lastSelectId).attr["isSelect"]=false
        }
        ctx.hashIds.get(p.id).attr["isSelect"]=true; 
        ctx.lastSelectId=p.id;       
    }
    eyeContainer(p,ctx){
        console.log("eye:"+p.id)
        ctx.hashIds.get(p.id).attr["isEye"]=!ctx.hashIds.get(p.id).attr["isEye"];
    }
    expandContainer(p,ctx){
        console.log("expand:"+p.id)
        ctx.hashIds.get(p.id).attr["isExpand"]=!ctx.hashIds.get(p.id).attr["isExpand"];
        console.log( ctx.hashIds.get(p.id).attr["isExpand"]);
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
        this.nodeList=payload.nodeList;
        this.hash(this.data.project.list,null);
        this.hashNodeId();
    }
    hashNodeId(){
        this.nodeList.forEach(i=>{
           this.nodeIdMap.set(i.id,i);
        })
    }
    hash(list:Array<any>,parent:any){
        for(var i of list){
            if(i.children?.length>0){
                this.hash(i.children,i);
            }
            i.parent=parent.id;
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