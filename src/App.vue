<template>
    <TopBar/>
    <div class="router-view">
      <router-view/>
    </div>
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
  width: 100%;
  height: 100%;
}
body{
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}

* {
  box-sizing: border-box;
}

.router-view {
  padding: 18px;
  height: 100%;
}


</style>
