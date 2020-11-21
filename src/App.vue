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
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { key } from "./stores";

export default defineComponent({
  name: "App",
  components: {},
  methods: {
    reverse() {
      const store = useStore(key);
      store.commit("increment");
    },
  },
  computed: {
    count() {
      const store = useStore(key);
      return store.getters.count;
    },
  },
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
