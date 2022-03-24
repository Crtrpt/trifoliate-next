const page = {
  namespaced: true,
  state: () => ({
    desc: "页面中组件",
    //树结构
    tree: [],
    //根据id获取对应的 hash信息
    idHash: new Map(),
    //用户选择的ids列表
    selectIds:new Map(),
    //页面的配置信息
    page: {
      //页面宽度
      width: "",
      //页面高度
      height: "",
      //页面缩放级别
      zoom: "",
      //左侧偏移
      left: "",
      //高度偏移
      top: "",
      //在dom中的 rect 参数
      rect:null,
    },
  }),
  mutations: {
    test(state: any) {
      state.count++;
    },
  },
};

export default page;
