import { RuntimePage } from "../interface/page";

const page = {
  namespaced: true,
  state: () => {
    return new RuntimePage();
  },
  hashIds() {},
  getters: {
    getPage: (state: any, getters: any) => {
      return state;
    },
    widgetList: (state: any, getters: any) => {
      return state.nodeList;
    },
  },
  mutations: {
    init(state: any, payload: any) {
      state = state.fromJson(payload);
    },
    addNode(state: any, payload: any) {
      state.addNode(payload);
    },
    moveNode(state:any,payload:any){
      state.moveNode(payload);
    },
    setAttr(state: any, payload: any) {
      state.setAttr(payload);
    },
    cancelSelect(state:any,payload:any){
      state.cancelSelect(payload);
    },
    
  },
  actions: {
    init: {
      root: true,
      handler(namespacedContext: any, payload: any) {
        namespacedContext.commit("init", payload);
      },
    },
    //增加节点
    addNode: {
      root: false,
      handler(namespacedContext: any, payload: any) {
        namespacedContext.commit("addNode", payload);
      },
    },
    //移动节点
    moveNode:{
      root:false,
      handler(namespacedContext: any, payload: any) {
        namespacedContext.commit("moveNode", payload);
      },
    },
    //增加节点
    setAttr: {
      root: false,
      handler(namespacedContext: any, payload: any) {
        namespacedContext.commit("setAttr", payload);
      },
    },
    //cancelSelect
    cancelSelect: {
        root: false,
        handler(namespacedContext: any, payload: any) {
          namespacedContext.commit("cancelSelect", payload);
        },
    },
  },
};

export default page;
