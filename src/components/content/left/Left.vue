<template>
  <div class="left">
    <dv-border-box-12 class="jdzt">
      <div class="jdtype">
        <h3 class="sus">基地状态</h3>
        <dv-decoration-3 style="height:30px; margin-top: 10px;" />
        <div class="info sus">
          <p>大棚建设时间 : 2018年12月</p>
          <p>面积 : 1234m2</p>
          <p>投入资金 : 82万</p>
          <p>政府支援40万</p>
          <p>感知信息</p>
        </div>
      </div>
    </dv-border-box-12>

    <dv-border-box-12 class="sstx">
        <h3 class="sus">实时提醒</h3>
        <dv-decoration-3 style="height:30px; margin-top: 10px;" />
        <dv-scroll-board class="sus" :config="config" style="" />
    </dv-border-box-12>
  </div>
</template>

<script>
import Wd from 'components/content/left/Wd'
export default {
  name: 'Left',
  components: {
    Wd
  },
  data() {
    return {
      config: {
        data: [
          ['4号大棚有人员进入', '2020/08/06 03:17:32'],
          ['2号大棚温度严重偏高', '2020/08/06 03:17:32'],
          ['11号大棚有人员进入', '2020/08/06 03:17:32'],
          ['2号大棚温度严重偏高', '2020/08/06 03:17:32'],
          ['11号大棚有人员进入', '2020/08/06 03:17:32'],
          ['4号大棚有人员进入', '2020/08/06 03:17:32'],
          ['4号大棚有人员进入', '2020/08/06 03:17:32'],
          ['5号大棚有人员进入', '2020/08/06 03:17:32'],
          ['4号大棚有人员进入', '2020/08/06 03:17:32'],
          ['6号大棚有人员进入', '2020/08/06 03:17:32'],
          ['4号大棚有人员进入', '2020/08/06 03:17:32'],
        ],
        oddRowBGC: '',
        evenRowBGC: '',
        rowNum: 6,
        waitTime: 1000,
        hoverPause: true
      }
    }
  }
}
</script>

<style scoped>
  .dv-border-box-12 {
    padding: .333333rem;
    color: #ffffff;
    text-align: left;
  }
  .dv-border-box-12 h3 {
    text-align: center;
    font-size: .366667rem;
    margin-top: .166667rem;
  }
  .info {
    margin-top: .2rem;
    padding-left: .1rem;
    line-height: .5rem;
    font-size: .3rem;
    /* color: rgb(136, 238, 243); */
  }
  .jdzt {
    height: 4.666667rem;
  }
  .sstx {
    height: 5.5rem;
  }
  .dv-scroll-board {
    height: 3.333333rem;
    margin-top: .083333rem;
    padding: 0;
    /* color: rgb(136, 238, 243); */
  }
</style>