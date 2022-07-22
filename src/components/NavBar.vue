<template>
  <header>
    <img src="../assets/shared/logo.svg" alt="Space Logo" />
    <div class="h-line"></div>
    <nav>
      <div class="menu-link" :class="{ active: home }">
        <router-link class="router-link" to="/"> 00 HOME </router-link>
      </div>
      <div class="menu-link" :class="{ active: destination }">
        <router-link class="router-link" to="/destination">
          01 DESTINATION
        </router-link>
      </div>
      <div class="menu-link" :class="{ active: crew }">
        <router-link class="router-link" to="/crew"> 02 CREW </router-link>
      </div>
      <div class="menu-link" :class="{ active: technology }">
        <router-link class="router-link" to="/technology">
          03 TECHNOLOGY
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      home: true,
      destination: false,
      crew: false,
      technology: false,
      deviceType: "desktop",
    };
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    },
  },

  watch: {
    $route() {
      this.home = false;
      this.destination = false;
      this.crew = false;
      this.technology = false;

      if (this.currentRoute == "Home") {
        this.home = true;
        this.$store.state.app.style.backgroundImage = `url(${require("../assets/home/background-home-desktop.jpg")})`;
      } else if (this.currentRoute == "Destination") {
        this.destination = true;
        this.$store.state.app.style.backgroundImage = `url(${require("../assets/destination/background-destination-desktop.jpg")})`;
      } else if (this.currentRoute == "Crew") {
        this.crew = true;
        this.$store.state.app.style.backgroundImage = `url(${require("../assets/crew/background-crew-desktop.jpg")})`;
      } else if (this.currentRoute == "Technology") {
        this.technology = true;
        this.$store.state.app.style.backgroundImage = `url(${require("../assets/technology/background-technology-desktop.jpg")})`;
      }
    },
  },
};
</script>

<style>
header {
  height: 96px;
  margin-top: 40px;
  margin-left: 55px;
  display: flex;
  align-items: center;
}

.router-link {
  text-decoration: none;
  color: white;
  font-family: "Barlow Condensed", sans-serif;
  align-items: center;
  letter-spacing: 2.7px;
  font-size: 16px;
}
.menu-link.active {
  border-bottom: white 3px solid;
}

.menu-link {
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
}

nav {
  height: 100%;
  backdrop-filter: blur(80px);
  width: 56%;
  display: flex;

  justify-content: space-around;
}

.h-line {
  height: 1px;
  margin-left: 40px;

  flex-grow: 1;
  background-color: white;
}
</style>