<template>
  <div>
    <h1>VuexText</h1>
    <div class="name">{{this.$store.state.name}}</div>
    <div class="num">{{this.$store.state.num}}</div>
    <div class="hebing">{{this.$store.getters.getData}}</div>
    <div>
      <button v-on:click="increase">增加</button>
    </div>
    <div>
      <button v-on:click="changed">更改名字</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      num:1
    }
  },
  methods:{
    increase(){
      this.$store.commit('add');
    },
    changed(){
      this.$store.dispatch('changeName')
    }
  }
}
</script>

<style>

</style>