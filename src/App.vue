<template>
  <NavBar />
  <main>
    <router-view />
  </main>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
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

#app {
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
