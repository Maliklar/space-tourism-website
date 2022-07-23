<template>
  <div class="drawer-view">
    <img src="../assets/shared/icon-close.svg" @click="close" alt="Close" />

    <div class="menu-link desktop tablet" :class="{ active: home }">
      <router-link class="router-link" to="/">
        <span class="desktop">00</span> HOME
      </router-link>
    </div>
    <div class="menu-link desktop tablet" :class="{ active: destination }">
      <router-link class="router-link" to="/destination">
        <span class="desktop">01</span> DESTINATION
      </router-link>
    </div>
    <div class="menu-link desktop tablet" :class="{ active: crew }">
      <router-link class="router-link" to="/crew">
        <span class="desktop">02</span> CREW
      </router-link>
    </div>
    <div class="menu-link desktop tablet" :class="{ active: technology }">
      <router-link class="router-link" to="/technology">
        <span class="desktop">03</span> TECHNOLOGY
      </router-link>
    </div>
  </div>
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

  methods: {
    close(e) {
      e.target.parentNode.style.display = "none";
      this.$emit("closed");
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

<style scoped>
.drawer-view {
  position: absolute;
  right: 0;
  top: 0;
  width: 68vw;
  height: 100vh;
  z-index: 999;
  background-color: rgba(59, 59, 59, 0.322);
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 40px;
}

.drawer-view > img {
  width: 24px;
  margin: 32px;
  align-self: flex-end;
}
.router-link {
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  text-decoration: none;
  color: #ffffff;
}

.menu-link {
  width: 100%;
  padding-left: 24px;
}

.menu-link.active {
  border-right: white 5px solid;
}
</style>