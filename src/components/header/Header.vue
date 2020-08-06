<template>
  <div class="header clear-fix">
    <div class="header-flex">
      <div class="left">
        <div>
          <i class="iconfont icon-caidan sus"></i>
        </div>
        <div class="showTime">
          2020.07.09
        </div>
        <div>
          <i class="iconfont icon-taiyang sus"></i>
        </div>
        <dv-decoration-8 style="width: 100px;height:50px;" />
      </div>
      <div class="center">
        <h1 class="sus">农场超脑-AI农场</h1>
        <span>Agricultural Super Brain AI farm</span>
        <dv-decoration-5></dv-decoration-5>
      </div>
      <div class="right">
        <dv-decoration-8 :reverse="true" style="width: 100px;height:50px;" />
        <div>
          <i class="iconfont icon-shu sus"></i>
          <p>作业记录</p>
        </div>
        <div>
          <i class="iconfont icon-yujing sus"></i>
          <p>预警</p>
        </div>
        <div>
          <i class="iconfont icon-shezhi sus"></i>
          <p>设置</p>
        </div>
      </div>
    </div>
    <dv-border-box-1>
      <div class="link-flex">
        <dv-decoration-11 class="sus" style="width:120px;height:60px;">智控中台</dv-decoration-11>
        <dv-decoration-11 class="sus" style="width:120px;height:60px;">图像监测</dv-decoration-11>
        <dv-decoration-11 class="sus" style="width:120px;height:60px;">环境监测</dv-decoration-11>
        <dv-decoration-11 class="sus" style="width:120px;height:60px;">土壤监测</dv-decoration-11>
        <dv-decoration-11 class="sus" style="width:120px;height:60px;">本体监测</dv-decoration-11>
        <dv-decoration-11 class="sus" style="width:120px;height:60px;">水肥监测</dv-decoration-11>
        <dv-decoration-11 class="sus" style="width:120px;height:60px;">环境控制</dv-decoration-11>
      </div>
    </dv-border-box-1>
  </div>
</template>

<script>
  var t = null;
  t = setTimeout(time, 1000);
  function time () {
    clearTimeout(t);
    dt = new Date();
    var y = dt.getFullYear();
    var mt = dt.getMonth() + 1;
    var day = dt.getDate();
    var h = dt.getHours();
    var m = dt.getMinutes();
    var s = dt.getSeconds();
    document.querySelector('.showTime').innerHTML = `当前时间${y}年${mt}月${day}-${h}时${m}分${s}秒`;
    t = setTimeout(time, 1000);
  }
</script>
<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  .header {
    height: 100px;
    color: rgb(136, 238, 243);
  }
  .header-flex {
    display: flex;
    width: 98%;
    height: 100px;
    color: rgb(136, 238, 243);
  }
  .left {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items:center;
    flex-wrap: nowrap;
    font-size: 15px;
    text-align: center;
    padding-right: 10px;
  }
  .center {
    flex: 2;
    text-align: center;
  }
  .center h1 {
    position: relative;
    top: 30px;
    left: 0;
  }
  .center span {
    position: relative;
    top: 35px;
    left: 0;
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    font-size: 16px;
    text-align: center;
    padding-left: 10px;
  }
  .dv-decoration-5 {
    width: 100%;
    height: 100px;
  }

  .dv-border-box-1 {
    margin-top: 24px;
  }

  .link-flex {
    display: flex;
    widows: 100%;
    height: 60px;
    justify-content: space-between;
    padding: 20px;
  }
</style>