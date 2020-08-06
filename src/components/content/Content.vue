<template>
  <div class="content">
    <left></left>
    <center></center>
    <right></right>
  </div>
</template>

<script>
import Left from './left/Left'
import Center from './center/Center'
import Right from './right/Right'
export default {
  name: 'Content',
  components: {
    Left,
    Center,
    Right
  }
}
</script>

<style scoped>
  .content {
    display: flex;
    width: 98%;
    margin: 0 auto;
    margin-top: 2.5rem;
  }
  .left {
    width: 30%;
    /* flex: 1; */
  }
  .center {
    width: 60%;
    /* flex: 2; */
  }
  .right {
    width: 20%;
    /* flex: 1; */
  }
</style>