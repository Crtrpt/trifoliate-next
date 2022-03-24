import { StyleHTMLAttributes } from "vue";
import { widgetType } from "./widget";

class NodeAttr {
  //是否选择状态
  isSelect: Boolean = false;
  //是否拖动状态
  isDrag: Boolean = false;
  //是否锁定状态
  isLock: Boolean = false;
  //是否可见状态
  isEye: Boolean = false;
}
class Node {
  //组件的id
  id!: String ;
  //组件的名称
  name?: String ;
  //组件的描述
  description?: String ;
  //组件显示的图标
  icon?: String ;
  //组件的类型
  type!: widgetType ;
  //组件对应的组件的实体
  render?: String;
  //组件的css 样式
  style!: StyleHTMLAttributes;
  //各种属性
  attr!: any;
  //父节点
  parent?: Node ;
  //子节点
  children!: Node[];
  //上一个节点
  prev?: Node;
  //下一个节点
  next?: Node;
}

class NodeGroup{
  name?: String="未定义";
  open?: Boolean=false;
  list: Node[]=new Array();
}

export { Node, NodeAttr, NodeGroup };
