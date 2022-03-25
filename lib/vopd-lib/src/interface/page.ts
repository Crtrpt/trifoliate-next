import { off } from "keyboardjs";
import { Commander } from "./commander";
import { Node } from "./node";

interface Page {
  name?: String;
  tree?: Node | Node[];
  pageAttr?: Map<String, String>;
}

interface RuntimePageInterface extends Page {
  maxId: Number;
  list?: Node | Node[] | undefined;
  hashIds: Map<String, Node>;
  hashNames: Map<String, Node[]>;
  fromJson(source: String): Page;
  toJson(): String;
}
class RuntimePage implements RuntimePageInterface {
  style:any={
    width:"800px",
    height:"600px",
    marginTop:"80px",
    marginLeft:"80px",
    marginWidth:"80px",
    marginRight:"80px",
    marginBottom:"80px",
  }
  //命令栈 前进回退用
  command:Commander=new Commander
  control:Map<String,Node>=new Map();
  //0 默认模式
  channel:number=0;
  scrollTop:String="0";
  scrollLeft:String="0"
  el?:Element;
  displayGrid:boolean=true;
  maxId: number = 0;
  hashIds: Map<String, Node> = new Map();
  hashNames: Map<String, Node[]> = new Map();
  displaySelect:boolean=false;
  selectStyle: any = {};
  selectOne: Boolean = true;
  selectList: String[] = [];
  selectIds?: Map<String, Node> = new Map();
  nodeList?: [];
  nodeIdMap?: Map<String, any> = new Map();

  fromJson(source: any): Page {
    this.maxId = source.maxId;
    this.list = source.list;
    this.hash(source.list, null);

    this.nodeList = source.nodeList;
    var nodeIdMap = new Map();
    source.nodeList.forEach((g: any) => {
      g.list.forEach((c: any) => {
        nodeIdMap.set(c.id, c);
      });
    });
    this.nodeIdMap = nodeIdMap;
    return this;
  }
  toJson(): String {
    throw new Error("Method not implemented.");
  }
  name?: String | undefined;
  list?: Node | Node[] | undefined;
  pageAttr?: Map<String, String> | undefined;
  redo() {
    console.log("TODO 重做");
    this.command.redo();
  }
  undo() {
    console.log("TODO 撤销")
    this.command.undo();
  }

  moveNode(payload:any){
    console.log(payload);
    if (this.selectOne) {
      var lastSelect = this.selectList.at(-1);
      if (lastSelect) {
        var lastEl = this.hashIds
          .get(lastSelect)
        lastEl!.style.width = payload.style.width;
        lastEl!.style.height = payload.style.height;
        lastEl!.style.top = payload.style.top;
        lastEl!.style.left = payload.style.left;
      } else {
        console.log("取消选择");
      }
    }
  }

  addNode(payload: any) {
    console.log("add",payload)
    var widget = this.nodeIdMap?.get(payload.nodeId);
    this.maxId = this.maxId + 1;
    var newNode = JSON.parse(JSON.stringify(widget));
    newNode.id = this.maxId;
    newNode.attr = {
      isExpand: false,
    };
    newNode.parent = payload.id;
    newNode.content = widget.content;
    newNode.style = {
      ...widget.style,
      ...payload.style,
    };
    if (payload.id) {
      this.hashIds.get(payload.id)!.children.push(newNode);
      this.hashIds.get(payload.id)!.attr["isExpand"] = true;
    } else {
      this.list!.push(newNode);
    }
    this.hashIds.set(newNode.id, newNode);
  }

  cancelSelect(payload:any){
    this.displaySelect=false;
    this.selectIds?.clear();
  }

  recalculate(){
    if(this.selectOne){
      var lastSelect = this.selectList.at(-1);
      if (lastSelect) {
        var rect=this.hashIds.get(lastSelect)!.attr["el"].getBoundingClientRect();
        var viewRect=this.el?.getBoundingClientRect();
        
        var cs={
          "top":rect.top-viewRect!.top-parseInt(this.style.marginTop)+this.el!.scrollTop+"px",
          "left":rect.left-viewRect!.left-parseInt(this.style.marginLeft)+this.el!.scrollLeft+"px",
          "width":rect.width+"px",
          "height":rect.height+"px",
          "z-index":9999,
        }
        this.selectStyle=cs;
      }else{
        console.log("取消选择")
      }
    }
  }
  setAttr(payload: any) {
    console.log(payload);
    var n = this.hashIds.get(payload.id);
    if (payload.val == null) {
      var newAttr = !n?.attr[payload.attr];
    } else {
      newAttr = payload.val;
    }
    if (payload.attr == "isSelect") {
      if (payload.val == true) {
        //单选模式
        if (this.selectOne) {
          var lastSelect = this.selectList.at(-1);
          if (lastSelect) {
            //取消老的选择模式
            this.hashIds.get(lastSelect)!.attr["isSelect"] = false;
            this.selectIds?.delete(lastSelect);
          }
          this.selectIds?.set(payload.id, n);
        //多选模式
        } else {
          console.log("多选模式");
          this.selectIds?.set(payload.id, n);
        }
        this.selectList?.push(payload.id);
        this.recalculate();
        this.displaySelect=true;
      }
    }

    n!.attr[payload.attr] = newAttr;
  }
  hash(list: Array<any>, parent: any) {
    for (var i of list) {
      if (i.children?.length > 0) {
        this.hash(i.children, i);
      }

      i.parent = parent?.id;
      this.hashIds.set(i.id, i);
      this.hashNames.set(i.name, i);
    }
  }
}

export { Page, RuntimePage };
