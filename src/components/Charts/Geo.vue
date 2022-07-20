<template>
    <div class="chart" ref="chart-wrap"></div>
</template>

<script>
export default {
    mounted() {
        this.initChart();
    },

    methods: {
        initChart() {
            let mapWrap = this.$refs["chart-wrap"];
            this.chart = echarts.init(mapWrap);

            // https://geo.datav.aliyun.com/areas_v3/bound/340000_full.json

            let vm = this;

            this.chart.showLoading();
            this.$request
                .get(
                    `https://geo.datav.aliyun.com/areas_v3/bound/340000_full.json`,
                    {
                        withCredentials: false,
                    }
                )
                .then((res) => {
                    console.log("res", res);

                    this.chart.hideLoading();
                    // echarts.registerMap("济南", res.data); //#2

                    echarts.registerMap("AH", res.data);
                    this.chart.setOption({
                        title: {
                            text: "安徽地级市",
                            subtext: "Just Test",
                            sublink:
                                "http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12",
                        },
                        tooltip: {
                            trigger: "item",
                            formatter: "{b}<br/>{c} (p / km2)",
                        },
                        toolbox: {
                            show: true,
                            orient: "vertical",
                            left: "right",
                            top: "center",
                            feature: {
                                dataView: { readOnly: false },
                                restore: {},
                                saveAsImage: {},
                            },
                        },
                        visualMap: {
                            min: 800,
                            max: 50000,
                            text: ["High", "Low"],
                            realtime: false,
                            calculable: true,
                            inRange: {
                                color: ["lightskyblue", "yellow", "orangered"],
                            },
                        },
                        series: [
                            {
                                name: "安徽",
                                type: "map",
                                map: "AH",
                                label: {
                                    show: true,
                                },
                                data: [
                                    { name: "中西区", value: 20057.34 },
                                    { name: "湾仔", value: 15477.48 },
                                    { name: "东区", value: 31686.1 },
                                    { name: "南区", value: 6992.6 },
                                    { name: "油尖旺", value: 44045.49 },
                                    { name: "深水埗", value: 40689.64 },
                                    { name: "九龙城", value: 37659.78 },
                                    { name: "黄大仙", value: 45180.97 },
                                    { name: "观塘", value: 55204.26 },
                                    { name: "葵青", value: 21900.9 },
                                    { name: "荃湾", value: 4918.26 },
                                    { name: "屯门", value: 5881.84 },
                                    { name: "元朗", value: 4178.01 },
                                    { name: "北区", value: 2227.92 },
                                    { name: "大埔", value: 2180.98 },
                                    { name: "沙田", value: 9172.94 },
                                    { name: "西贡", value: 3368 },
                                    { name: "离岛", value: 806.98 },
                                ],
                                // 自定义名称映射
                                nameMap: {
                                    "Central and Western": "中西区",
                                    Eastern: "东区",
                                    Islands: "离岛",
                                    "Kowloon City": "九龙城",
                                    "Kwai Tsing": "葵青",
                                    "Kwun Tong": "观塘",
                                    North: "北区",
                                    "Sai Kung": "西贡",
                                    "Sha Tin": "沙田",
                                    "Sham Shui Po": "深水埗",
                                    Southern: "南区",
                                    "Tai Po": "大埔",
                                    "Tsuen Wan": "荃湾",
                                    "Tuen Mun": "屯门",
                                    "Wan Chai": "湾仔",
                                    "Wong Tai Sin": "黄大仙",
                                    "Yau Tsim Mong": "油尖旺",
                                    "Yuen Long": "元朗",
                                },
                            },

                            {
                                name: "pm2.5",
                                type: "scatter",
                                coordinateSystem: "geo",
                                data: [
                                    {
                                        name: "合肥",
                                        value: [117.27, 31.86, 229],
                                    },
                                ],
                                symbolSize: function (val) {
                                    return 10;
                                },
                                encode: {
                                    value: 2,
                                },
                                label: {
                                    formatter: "{b}",
                                    position: "right",
                                    show: false,
                                },
                                emphasis: {
                                    label: {
                                        show: true,
                                    },
                                },
                            },
                        ],
                    });

                    // let option = {
                    //     series: [
                    //         {
                    //             name: "济南地图",
                    //             type: "map",
                    //             mapType: "济南", //#3
                    //             itemStyle: {
                    //                 normal: {
                    //                     label: { show: true },
                    //                     areaStyle: {
                    //                         color: "#CCFFFF",
                    //                     },
                    //                 },
                    //                 emphasis: {
                    //                     label: { show: true },
                    //                     areaStyle: {
                    //                         color: "#CCFFFF",
                    //                     },
                    //                 },
                    //             },
                    //             data: [
                    //                 {
                    //                     name: "历下区",
                    //                     value: 100,
                    //                     selected: true,
                    //                 },
                    //             ], //地图数据。name对应geo.json中的name,
                    //             nameMap: { 历下区: "历下区" }, //更改地图中的name 名称
                    //         },
                    //     ],
                    // };
                    // this.chart.setOption(option);
                });

            // option && this.chart.setOption(option);
        },

        convertData(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = this.geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value),
                    });
                }
            }
            return res;
        },
    },
};
</script>

<style>
</style>

<style scoped>
.chart {
    width: 100%;
    /* height: 50rem; */
    height: 100%;
}
</style>