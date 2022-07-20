<template>
    <div class="chart" ref="chart-wrap"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
    props: {
        pointsData: {
            type: Array,
            default: [
                {
                    name: "天津赛德美新能源科技有限公司",
                    value: [
                        "117.5103",
                        "39.148828",
                        "天津滨海高新区滨海科技园海油大道416号",
                    ],
                },
                {
                    name: "格林美（天津）城市矿产循环产业发展有限公司",
                    value: [
                        "116.798025",
                        "38.861838",
                        "天津市静海县子牙循环经济产业园区十号路9号",
                    ],
                },
                {
                    name: "格林美（无锡）能源材料有限公司",
                    value: [
                        "120.471554",
                        "31.480221",
                        "江苏省无锡市新吴区硕放振发路235号",
                    ],
                },
                {
                    name: "格林美（深汕特别合作区）环保科技有限公司",
                    value: [
                        "115.010124",
                        "22.831629",
                        "广东省汕尾市海丰县鹅埠镇",
                    ],
                },
                {
                    name: "武汉三永格林美汽车零部件再制造有限公司",
                    value: [
                        "114.624125",
                        "30.795753",
                        "湖北省武汉市新洲区阳逻开发区仓埠街毕铺村",
                    ],
                },
                {
                    name: "江西格林美报废汽车循环利用有限公司",
                    value: [
                        "115.727898",
                        "28.21629",
                        "江西省丰城市工业园区丰源大道",
                    ],
                },
                {
                    name: "湖南邦普循环科技有限公司",
                    value: [
                        "113.144832",
                        "28.227998",
                        "湖南长沙国家节能环保新材料产业基地",
                    ],
                },
                {
                    name: "湖南邦普汽车循环有限公司",
                    value: [
                        "113.144832",
                        "28.227998",
                        "湖南长沙国家节能环保新材料产业基地",
                    ],
                },
                {
                    name: "荆门市格林美新材料有限公司",
                    value: [
                        "112.208013",
                        "30.950931",
                        "湖北省荆门高新区掇刀区迎春大道3号",
                    ],
                },
                {
                    name: "荆门市格林美新材料有限公司武汉分公司",
                    value: [
                        "114.536176",
                        "30.831513",
                        "湖北省武汉市新洲区阳逻开发区仓埠街毕铺村、马鞍村",
                    ],
                },
                {
                    name: "衢州华友钴新材料有限公司",
                    value: [
                        "118.859785",
                        "28.905882",
                        "浙江省衢州高新技术产业园区（二期）廿新路18号",
                    ],
                },
                {
                    name: "赣州市豪鹏科技有限公司",
                    value: [
                        "114.931804",
                        "25.925864",
                        "江西省赣州市章贡区水西钴钼稀有金属产业基地",
                    ],
                },
            ],
        },
    },

    data() {
        return {
            LocationData: this.pointsData,
        };
    },

    mounted() {
        this.initChart();
    },

    destroyed() {
        if (!this.chart) {
            return;
        }
        this.chart.dispose();
        this.chart = null;
    },

    methods: {
        initChart() {
            let mapWrap = this.$refs['chart-wrap'];
            this.chart = echarts.init(mapWrap);

            let option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: 'line'
                    }
                ]
            };

            option && this.chart.setOption(option);


        },

        mapClickHandler(params) {
            this.$emit("choice-region", params);
        },

        addRegion(info) {
            this.LocationData.push(info);
            this.initChart();
        },
    },
};
</script>

<style>



</style>

<style scoped>

    .chart{
        width:100%;
        height: 50rem;
    }

</style>