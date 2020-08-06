<template>
    <div class="center">
      <dv-border-box-10>
        <Echarts></Echarts>
        <!-- <div class="map"></div>
        <div class="map2"></div> -->
      </dv-border-box-10>
    </div>
</template>
<script>
import Echarts from 'components/echarts/Echarts'
export default {
  name: 'Center',
  components: {
    Echarts
  }
}
</script>

<style scoped>
  .dv-border-box-10 {
    width: 98%;
    margin: 5px auto 0;
    position: relative;
    height: 10rem;
  }
  .map {
    width: 10rem;
    height: 10rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url('~assets/images/map.png');
    background-size: 100% 100%;
    opacity: .3;
    animation: rotate1 15s linear infinite;
  }

  @keyframes rotate1 {
    form {
      transform: translate(-50%, -50%)
      rotate(0deg)
    }
    to {
      transform: translate(-50%, -50%)
      rotate(360deg);
    }
  }
</style>