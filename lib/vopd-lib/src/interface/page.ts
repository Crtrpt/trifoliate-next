import { off } from "keyboardjs";
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
  maxId: number = 0;

  hashIds: Map<String, Node> = new Map();
  hashNames: Map<String, Node[]> = new Map();

  selectOne: Boolean=true;
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

  addNode(payload: any) {
  
    var widget = this.nodeIdMap?.get(payload.nodeId);
    this.maxId = this.maxId+1;
    var newNode = JSON.parse(JSON.stringify(widget));
    newNode.id = this.maxId;
    newNode.attr = {
      isExpand: false,
    };
    if (payload.id) {
      this.hashIds.get(payload.id)!.children.push(newNode);
      this.hashIds.get(payload.id)!.attr["isExpand"] = true;
    } else { 
      this.list!.push(newNode);
    }
    this.hashIds.set(newNode.id, newNode);
  }
  setAttr(payload: any) {
    console.log(payload);
    var n = this.hashIds.get(payload.id);
    if (payload.val == null) {
      var newAttr = !n?.attr[payload.attr];
      n!.attr[payload.attr] = newAttr;
    } else {
      n!.attr[payload.attr] = payload.val;
    }
    if (payload.attr == "isSelect" || payload.val == true) {

      // if (this.selectOne) {
      //   //取消上一个的选择状态
      
      //   var ps = this.selectList[0];
      //   if (ps != null) {
      //     this.hashIds.get(ps)!.attr["isSelect"] = false;
      //   }
      // }
      this.selectList?.push(payload.id);
    }
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
