<template>
  <div class="Wd">
    <div id="main"></div>
  </div>
</template>

<script>
export default {
  name: "Wd",
  methods: {
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据
      var option = {
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
          trigger: "axis"
        },
        legend: {
          // data: ["A区大棚", "B区大棚"],
          textStyle: {
            color: '#fff'
          },
          top: '4%',
          right: '3%'
        },
        grid: {
          top: '20%',
          left: "0%",
          right: "3%",
          bottom: "0%",
          show: true,
          borderColor: '#012f4a',
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月","8月", "9月", "10月", "11月", "12月"],
          axisLabel: {
            color: '#fff'
          },
          splitLine: {
            linStyle: {
              color: '#012f4a'
            }
          }
        },
        yAxis: {
          type: "value",
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#fff'
          },
          splitLine: {
            linStyle: {
              color: '#012f4a'
            }
          }
        },
        series: [
          {
            name: "A区大棚",
            type: "line",
            smooth: true,
            data: [0, 15, 14, 20, 17, 10, 7]
          },
          {
            name: "B区大棚",
            type: "line",
            smooth: true,
            data: [0, 9, 17, 20, 15, 14, 20,]
          },
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  mounted() {
    this.myEcharts();
  }
};
</script>

<style>
#main {
  height: 3.333333rem;
}
</style>