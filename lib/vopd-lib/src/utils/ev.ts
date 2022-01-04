

class EventBus{
    pipline:Map<String,Map<String,any>|undefined>=new Map();
    //订阅
    on(clientId:String,eventName:String,handler:any){
        console.log("注册"+clientId);
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
        // console.log("来源: "+clientId+"\n事件: "+eventName,"\n负载: "+JSON.stringify(payload))

        var clientList=this.pipline.get(eventName);
        console.log(this.pipline);
        clientList?.forEach((handler,idx) => {
            if(idx!=clientId){
                handler(payload);
            }
        });
    }
}
const ev=new EventBus();

export default ev;