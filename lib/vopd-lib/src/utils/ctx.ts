import {reactive} from "vue"
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
    deleteSelect(p,ctx){
       
        console.log("TODO 批量删除")
        ctx.hashIds.get(ctx.lastSelectId).attr["isDelete"]=true;
    }
    addNode(p,ctx){
        console.log("id"+p.id+"--->"+p.nodeId)
        var node= ctx.nodeIdMap.get(p.nodeId);
        var nextId=ctx.data.project.maxId++
        var cs={
            ...JSON.parse(JSON.stringify(node.style)),
            ...p.style
        }
        var n={
            id:nextId,
            name:node.name+nextId,
            render:node.render,
            widget:node.widget,
            content:"提示的文本信息",
            data:node.data,
            style:cs,
            ref:[],
            attr:{},
            children: reactive([]),
            meta:node.meta,
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
    moveSelectContainer(p,ctx){
        // console.log("移动");
        //TODO 多选会有问题
        ctx.hashIds.get(ctx.lastSelectId).style.left=p.left;
        ctx.hashIds.get(ctx.lastSelectId).style.top=p.top;
        ctx.hashIds.get(ctx.lastSelectId).style.width=p.width;
        ctx.hashIds.get(ctx.lastSelectId).style.height=p.height;
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
        this.nodeList.forEach(g=>{
            g.list.forEach(c=>{
                console.log("写入")
                this.nodeIdMap.set(c.id,c);
            });
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

const store=new Ctx();


export default store;