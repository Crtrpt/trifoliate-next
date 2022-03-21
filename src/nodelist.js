 const nodelist = [
  {
    name: "固定",
    list: [
      {
        id: "100",
        name: "固定布局",
        render: "ContainerRender",
        widget: "Container",
        icon: "las la-stop",
        desc:"固定的 200px布局",
        style: {
          height: "200px"
        },
        children: []
      },
      {
        id: "110",
        name: "浮动布局",
        render: "ContainerRender",
        widget: "Container",
        desc:"浮动元素自由定位",
        icon: "las la-copy",
        style: {
          position: "absolute",
          left: "100px",
          top: "100px",
          width: "400px",
          height: "200px",
        },
        children: []
      },
      {
        id: "101",
        name: "行布局",
        desc:"内部元素横向排列",
        render: "ContainerRender",
        widget: "Container",
        icon: "las la-grip-lines-vertical",
        style: {
          display: "flex",
        },
        children: []
      },
      {
        id: "111",
        name: "列布局",
        render: "ContainerRender",
        desc:"内部元素纵向排列",
        widget: "Container",
        icon: "las la-grip-lines",
        style: {
          flexDirection: "column",
          display: "flex",
        },
        children: []
      },
      {
        id: "102",
        name: "1/2宽布局",
        render: "ContainerRender",
        widget: "Container",
        icon: "las la-stop",
        style: {
          flexDirection: "column",
          display: "flex",
          width: "50%",
        },
        children: []
      },
      {
        id: "103",
        name: "1/3宽布局",
        render: "ContainerRender",
        widget: "Container",
        icon: "las la-stop",
        style: {
          flexDirection: "column",
          display: "flex",
          width: "33.33%",
        },
        children: []
      },
      {
        id: "104",
        name: "1/4宽布局",
        render: "ContainerRender",
        widget: "Container",
        icon: "las la-stop",
        style: {
          flexDirection: "column",
          display: "flex",
          width: "25%",
        },
        children: []
      },
      {
        id: "105",
        name: "1/5宽布局",
        render: "ContainerRender",
        widget: "Container",
        icon: "las la-stop",
        style: {
          flexDirection: "column",
          display: "flex",
          width: "20%",
        },
        children: []
      },
      {
        id: "106",
        name: "填充布局",
        desc:"flex 布局 沾满剩余空间",
        render: "ContainerRender",
        widget: "Container",
        icon: "las la-stop",
        style: {

          display: "flex",
          flexGrow: "1",
        },
        children: []
      },
      {
        id: "201",
        name: "表单布局",
        desc:"提交表单内数据到指定的服务器",
        render: "FormRender",
        widget: "Form",
        icon: "las la-stop",
        style: {
          width: "100%"
        },
        children: []
      },
    ]
  },
  {
    name: "元素",
    list: [
      {
        id: "5",
        name: "文字",
        widget: "Text",
        render: "TextRender",
        icon: "las la-font",
        style: {
          "display": "inline"
        }
      },
      {
        id: "6",
        name: "图表",
        render: "EchartRender",
        widget: "Echart",
        icon: "las la-chart-pie",
        desc:"echart 图表元素",
        style: {
          "width": "100%",
          "height": "100%",
        },
        data: {
          "tooltip": {},
          "xAxis": {
            "data": ["shirt", "cardigan", "chiffon", "pants", "heels", "socks"]
          },
          "yAxis": {},
          "series": [
            {
              "name": "sales",
              "type": "bar",
              "data": [10, 20, 30, 40, 50, 60]
            }
          ]
        },
      },

    ],
  },
  {
    name: "地图",
    list: [
      {
        id: "7",
        name: "地图",
        render: "MapRender",
        widget: "Map",
        icon: "las la-map",
        style: {
          "width": "100%",
          "height": "100%",
        }
      }
    ]
  },
  {
    name: "表单",
    list: [
      {
        id: "202",
        name: "输入框",
        render: "InputRender",
        widget: "Input",
        icon: "las la-stop",
        meta: {
          type: "text",
        },
        style: {

        },
        children: []
      },
      {
        id: "203",
        name: "选择框",
        render: "InputRender",
        widget: "Input",
        icon: "las la-check",
        meta: {
          type: "checkbox",
        },
        style: {

        },
        children: []
      }
    ]
  }
]

export default  nodelist;