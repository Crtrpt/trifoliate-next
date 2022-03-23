import ctx from "./Ctx"

export class EventBus{
    ctx=ctx
    pipline:Map<String,Map<String,any>|undefined>=new Map();
    //订阅
    on(clientId:String,eventName:String,handler:any){
        // console.log("注册:"+clientId+"事件:"+eventName);
        var clientList=this.pipline.get(eventName);
        if(clientList==undefined){
            this.pipline.set(eventName,new Map());
            clientList=this.pipline.get(eventName);
        }
        clientList?.set(clientId,handler);
        this.pipline.set(eventName,clientList);
    }
    //取消订阅
    off(clientId:String,eventName:String){
        var clientList=this.pipline.get(eventName);
        clientList?.delete(clientId)
    }
    //注册事件
    install(eventName:String){
        this.pipline.set(eventName,new Map())
    }
    //注销事件
    uninstall(eventName:String){
        this.pipline.delete(eventName);
    }
    //触发
    fire(clientId:String,eventName:String,payload:any){
       
        var clientList=this.pipline.get(eventName);
        clientList?.forEach((handler,idx) => {
            console.log(idx+":"+idx);
            if(clientId!=idx){
                handler(payload,this.ctx);
            }
        });
    }
    initCtx(ctx:any){
        console.log("init============================")
        this.ctx.dataInit(ctx);
        this.fire("vopd","init",ctx.project);
        this.on("vopd","selectContainer", this.ctx.selectContainer);
        this.on("vopd","cancelSelectContainer", this.ctx.cancelSelectContainer);
        this.on("vopd","deleteContainer", this.ctx.deleteContainer);
        this.on("vopd","lockContainer", this.ctx.lockContainer);
        this.on("vopd","eyeContainer", this.ctx.eyeContainer);
        this.on("vopd","expandContainer", this.ctx.expandContainer);
        this.on("vopd","changeStyle", this.ctx.changeStyle);
        this.on("vopd","addNode", this.ctx.addNode);
        this.on("vopd","deleteSelect", this.ctx.deleteSelect);
        this.on("vopd","moveSelectContainer", this.ctx.moveSelectContainer);
    }
    queryCtx(){
        return this.ctx;
    }
}
const ev=new EventBus();

export default ev;