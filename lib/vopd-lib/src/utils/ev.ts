

class EventBus{
    pipline:Map<String,Map<String,any>>=new Map();
    //订阅
    on(clientId:String,eventName:String,handler:any){
        var clientList=this.pipline.get(eventName);
        clientList?.set(clientId,handler);
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
            if(idx!=clientId){
                handler();
            }
        });
    }
}
const ev=new EventBus();
export default ev;