class XView {
    //view name
    name!: String;
    //tab 开口方向
    postion!: String;
    //是否打开状态
    isOpen!: Boolean;
    // 激活的view
    active!: number;
    //view 子节点
    children?:[];
}

class XGutter {
  flow: String="row";
}

class XWin {
  name: String="";
  flow: String="row";
  children: [] = [];
  constructor(s?:String) {
    console.log("初始化")
  }
  fromJson(s:String):XWin {
    return new XWin(s);
  }
  toJson() {
    
  }
}

export {XWin,XView,XGutter}