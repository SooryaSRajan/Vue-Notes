<template>
  <div class="nav-root">
    <div class="top-bar">
      <div class="title">
        Notes App
      </div>
      <div class="nav-items nav-row">
        <router-link class="routerLink" to="/">Home</router-link>
        <router-link class="routerLink" to="/create">Create</router-link>
        <router-link class="routerLink" to="/update">Update</router-link>
      </div>
      <button class="drawer-button" @click="controlDrawer">
        <font-awesome-icon icon="bars" class="icon"/>
      </button>
    </div>
    <div class="nav-drawer">
      <router-link class="routerLink" to="/" @click="closeDrawer">Home</router-link>
      <router-link class="routerLink" to="/create" @click="closeDrawer">Create</router-link>
      <router-link class="routerLink" to="/update" @click="closeDrawer">Update</router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      isDrawerOpen: false,
    }
  },
  methods: {
    closeDrawer() {
      let drawer = document.getElementsByClassName("nav-drawer")[0]
      drawer.style.transform = "translate(0,-200%)"
      this.isDrawerOpen = false
    },
    controlDrawer() {
      let drawer = document.getElementsByClassName("nav-drawer")[0]

      if (!this.isDrawerOpen) {
        drawer.style.transform = "translate(0," + 0 + "px)"

      } else {
        drawer.style.transform = "translate(0,-200%)"
      }

      this.isDrawerOpen = !this.isDrawerOpen
    }
  }
}
</script>

<style scoped>

.nav-root {
  position: sticky;
  top: 0;
}

.top-bar {
  background-color: #5b5b5b;
  color: white;
  height: 60px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: unset;
  align-items: center;
  position: relative;
  z-index: 20;
}

.icon {
  font-size: 25px;
}

button {
  background-color: transparent;
  border: none;
  color: white;
  transition: 0.3s ease-in-out;
  border-radius: 10px;
  padding: 10px;
}

button:hover {
  cursor: pointer;
  transform: rotate(180deg);
  background-color: white;
  color: black;
}

.title {
  flex: 1;
  font-size: 22px;
  font-family: "Courier New", monospace;
  font-weight: bold;
}

.nav-items {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.routerLink {
  text-decoration: none;
  color: white;
  transition: ease-in-out 0.3s;
  height: 100%;
  padding: 5px 15px;
  border-radius: 10px;
  margin-left: 5px;
  margin-right: 5px;
}

.routerLink:hover {
  transform: scale(1.1, 1.1);
}

.routerLink.active {
  background: white;
  color: black;
}

.nav-drawer {
  width: 100%;
  background-color: #525252;
  padding: 30px;
  flex-direction: column;
  display: none;
  transition: ease-in-out 1s;
  z-index: 0;
  transform: translate(0, -100%);
}

.drawer-button {
  display: none;
}

/*media screen*/
@media screen and (max-width: 600px) {
  .nav-row {
    display: none;
  }

  .nav-drawer {
    display: flex;
    position: fixed;
  }

  .routerLink {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .drawer-button {
    display: block;
  }
}


</style>