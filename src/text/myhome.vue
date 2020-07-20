<template>
  <div>
    <h1>{{message}}</h1> 
    <ul>
      <li>
        <router-link to="/vuex">vuex</router-link>
      </li>
    </ul>
  </div>  
</template>

<script>
export default {
  data(){
    return{
      message:"欢迎来到Vue"
    }
  }
}
</script>

<style>

</style>