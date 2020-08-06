<template>
  <div id="index">
    <dv-full-screen-container>
      <Header></Header>
      <Content></Content>
    </dv-full-screen-container>
  </div>
</template>

<script src="../../node_modules/amfe-flexible/index.js"></script>
<script>
  import Header from 'components/header/Header'
  import Content from 'components/content/Content'
  export default {
    name: 'index',
    components: {
      Header,
      Content
    }
  }
</script>

<style>
  #index {
    width: 100%;
    height: 100%;
    background-color: #030409;
    color: #fff;
  }
  #dv-full-screen-container {
    background-image: url('../assets/images/bg.837e99ea.png');
    background-size: 100% 100%;
    box-shadow: 0 0 .05rem blue;
    display: flex;
    flex-direction: column;
  }
</style>