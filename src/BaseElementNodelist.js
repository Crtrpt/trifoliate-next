const nodelist = [
  {
    name: "元素",
    isOpen: true,
    list: [
      {
        id: "100",
        name: "布局",
        render: "ContainerRender",
        widget: "Container",
        icon: "las la-stop",
        desc: "固定的 200px布局",
        style: {
          height: "200px",
        },
        package: {},
        children: [],
      },
      {
        id: "5",
        name: "文字",
        widget: "Text",
        render: "TextRender",
        icon: "las la-font",
        package: {},
        style: {
          display: "inline",
        },
      },
      {
        id: "8",
        name: "图片",
        widget: "Image",
        render: "ImageRender",
        icon: "las la-font",
        meta: {
          value: "./img/sample.bmp",
        },
        package: {},
        style: {
          width: "100%",
          height: "100%",
        },
      },
      {
        id: "9",
        name: "视频",
        widget: "Audio",
        render: "AudioRender",
        icon: "lab la-youtube",
        value: "",
        meta: {
          value: "./audio/sample_640x360.mp4",
        },
        package: {},
        style: {
          width: "100%",
          height: "100%",
        },
      },
      {
        id: "6",
        name: "图表",
        render: "EchartRender",
        widget: "Echart",
        icon: "las la-chart-pie",
        desc: "echart 图表元素",
        style: {
          width: "100%",
          height: "100%",
        },
        package: {},
        data: {
          tooltip: {},
          xAxis: {
            data: ["shirt", "cardigan", "chiffon", "pants", "heels", "socks"],
          },
          yAxis: {},
          series: [
            {
              name: "sales",
              type: "bar",
              data: [10, 20, 30, 40, 50, 60],
            },
          ],
        },
      },
    ],
  },
];

export default  nodelist;