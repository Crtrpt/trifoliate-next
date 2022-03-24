enum widgetType {
  //独立的小部件
  Widget,
  //容器类部件
  Container,
  //容器类部件 和小部件的组合体
  Compose,
}
interface widget {
  //组件的名称
  name: String | undefined;
  //组件的描述
  description: String | undefined;
  //组件显示的图标
  icon: String | undefined;
  //组件的类型
  type: widgetType | undefined;
  //组件对应的组件的实体
  render: String;
}

export {
    widget,widgetType
}
