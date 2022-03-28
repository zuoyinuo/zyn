<template>
  <div class="main">
    <h1>数据统计</h1>
    <ul>
      <li>当日数据：</li>
      <li>0<span>新增用户</span></li>
      <li>1<span>订单</span></li>
      <li>6<span>管理员</span></li>
      <li>总数据：</li>
      <li>65941<span>注册用户</span></li>
      <li>29968<span>订单</span></li>
      <li>114354<span>管理员</span></li>
    </ul>
    <div ref="main" class="echarts"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "HomeUser",
  mounted() {
    this.zhu();
  },
  methods: {
    zhu() {
      var chartDom = this.$refs.main;
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        title: {
          text: "走势图",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["新注册用户", "新增订单", "新增管理员"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "2022-03-17",
            "2022-03-18",
            "2022-03-19",
            "2022-03-20",
            "2022-03-21",
            "2022-03-22",
            "2022-03-23",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "新注册用户",
            type: "line",
            stack: "Total",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "新增订单",
            type: "line",
            stack: "Total",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "新增管理员",
            type: "line",
            stack: "Total",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
        ],
      };
      option && myChart.setOption(option);
    },
  },
};
</script>
<style scoped>
.main{
    margin-top:25px;
    margin-left:30px;
}
.main h1 {
  font-size: 28px;
  text-align: center;
}
.main ul {
  width: 1034px;
  height: 81px;
  margin-top: 10px;
}
.main ul li span {
  font-size: 14px;
  color: #666;
}
.main ul li {
  font-size: 22px;
  float: left;
  width: 243px;
  height: 35px;
  background: #e5e9f2;
  margin: 5px 15px 0 0;
  border-radius: 5px;
  text-align: center;
  line-height: 35px;
}
.main ul li:first-child {
  background: #ff9800;
  color: #fff;
}
.main ul li:nth-child(5) {
  background: #20a0ff;
  color: #fff;
}
.echarts {
  width: 1000px;
  height: 418px;
  margin-top:40px;
}
</style>