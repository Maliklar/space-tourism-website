<template >
  <NavBar />
  <main>
    <router-view />
  </main>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  created() {},

  components: { NavBar },
};
</script>


<style>
main {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
}
.app {
  min-height: 100vh;
}
#app {
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
</style>
