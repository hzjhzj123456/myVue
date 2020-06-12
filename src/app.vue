<template>
  <div id="app">
    <div>欢迎来到vue</div>
    <div class="imgbox">
      <!-- <img src="../assets/img/sign.png" alt="" /> -->
    </div>
  </div>
</template>

<script>
// import Vue from 'vue';
export default {
     name:'App',
     data(){
       return {
         message:"欢迎来到vue"
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