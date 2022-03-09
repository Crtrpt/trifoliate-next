import ctx from "./ctx"

class EventBus{
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
            console.log(idx+":"+eventName);
            handler(payload,this.ctx);
        });
    }
    initCtx(ctx:any){
        this.ctx.dataInit(ctx);
        this.fire("vopd","init",ctx.project);
    }
    queryCtx(){
        return this.ctx;
    }
}
const ev=new EventBus();

export default ev;