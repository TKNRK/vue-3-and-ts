<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-link to="/hello">Uaaaaaaa!!!</router-link>
    <router-link to="/bye">Oaaaaa!!!</router-link>
    <router-view></router-view>
    <button v-on:click="reverse">Clicked: {{ count }}</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "App",
  setup() {
    const store = useStore()
    return {
      reverse: () => {
        store.commit("hoge/increment")
      },
      count: computed(() => {
        return store.getters["hoge/count"]
      })
    }
  },
  components: {},
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
