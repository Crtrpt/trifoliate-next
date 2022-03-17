export class Command{
    param:any;
    redo:any;
    undo:any;
}
export class Commander{
    commandList:[]=[];
    capacity=100;
    cursor=0;
    exec(parm:any,doAction:Function,undoAction?:Function){

        if(this.cursor!=this.commandList.length){
            this.commandList=this.commandList.splice(0,this.cursor);
        }
        if(this.cursor>=this.capacity){
            console.log("clean stack")
            this.commandList.unshift();
        }else{
            this.cursor++;
        }
        this.commandList.push({
            redo:doAction,
            undo:undoAction,
            param:parm,
        });
       
        doAction(parm);
    }
    undo(){
        console.log("撤销")
        if(this.cursor==0){
            return;
        }
       
        this.cursor--;
        var cm=this.commandList[this.cursor];
        cm.undo(cm.param);
    }
    redo(){
        console.log("重做")
        if(this.cursor>=this.commandList.length){
            return;
        }
        var cm=this.commandList[this.cursor];
        cm.redo(cm.param)
        this.cursor++;
    }
}
export const command=new Commander()