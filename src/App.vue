<template>
  <TopBar/>
  <router-view class="router-view"/>
</template>

<script>

import TopBar from "@/components/TopBar";
export default {
  name: 'App',
  components: {
    TopBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body{
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}

*{
  box-sizing: border-box;
}

.router-view{
  padding: 18px;
}

</style>
