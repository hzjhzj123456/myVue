<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Vue from 'vue';
export default {
     name:'App',
     data(){
      return{

      }
     }
  
}
</script>

<style lang="less">
  .myapp{
    height:100px;
    width:100px;
    line-height:100px;
    text-align:center;
  }
  .imgbox{
    width:50px;
    height:30px;
    img{
      width:100%;
      height:100%;
    }
  }
</style>