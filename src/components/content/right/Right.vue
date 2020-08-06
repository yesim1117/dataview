<template>
  <div class="right">
    <dv-border-box-12 class="jdzt">
      <div class="jdtype">
        <h4 class="rightTitle">水肥机系统</h4>
        <div class="rightkz">
          <p class="twotitle">水肥机1</p>
          <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949"
            width="80">
          </el-switch>
        </div>
        <div class="rightkz">
          <p class="twotitle">水肥机2</p>
          <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949"
            width="80">
          </el-switch>
        </div>

        <h4 class="rightTitle">实时云台系统</h4>
        <div class="rightkz">
          <p class="twotitle">6号大棚云台</p>
          <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949"
            width="80">
          </el-switch>
        </div>
        <div class="rightkz">
          <p class="twotitle">8号大棚云台</p>
          <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949"
            width="80">
          </el-switch>
        </div>

        <h4 class="rightTitle">通风系统</h4>
        <div class="rightkz">
          <p class="twotitle">3号大棚风机</p>
          <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949"
            width="80">
          </el-switch>
        </div>

        <div class="rightkz">
          <p class="twotitle">4号大棚风机</p>
          <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949"
            width="80">
          </el-switch>
        </div>

        <h4 class="rightTitle">湿帘系统</h4>
        <div class="rightkz">
          <p class="twotitle">A区大棚</p>
          <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949"
            width="80">
          </el-switch>
        </div>

        <div class="rightkz">
          <p class="twotitle">B区大棚</p>
          <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949"
            width="80">
          </el-switch>
        </div>

        <h4 class="rightTitle">外遮阳网系统</h4>
        <div class="rightkz">
          <p class="twotitle">12号外遮阳网</p>
          <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949"
            width="80">
          </el-switch>
        </div>

        <div class="rightkz">
          <p class="twotitle">86号外遮阳网</p>
          <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949"
            width="80">
          </el-switch>
        </div>

        <h4 class="rightTitle">卷膜机系统</h4>
        <div class="rightkz">
          <p class="twotitle">1号卷膜机</p>
          <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949"
            width="80">
          </el-switch>
        </div>

        <div class="rightkz">
          <p class="twotitle">7号卷膜机</p>
          <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949"
            width="80">
          </el-switch>
        </div>

      </div>
    </dv-border-box-12>
  </div>
</template>

<script src="http://www.jq22.com/js/jq.js"></script>
<script>
export default {
  name: 'Right',
  data () {
    return {
      value: true
    }
  }
}
</script>

<style scoped>
  .dv-border-box-12 {
    padding: .333333rem;
    padding-left: .5rem;
    color: #ffffff;
    text-align: left;
  }
  .rightTitle {
    margin-top: .166667rem;
    font-size: .3rem;
  }
  .rightkz {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: .216667rem;
    padding-top: .0383333rem;
    font-size: .266667rem;
    line-height: .5rem;
  }
</style>