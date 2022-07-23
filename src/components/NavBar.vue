<template>
  <header>
    <img src="../assets/shared/logo.svg" alt="Space Logo" />
    <div class="h-line"></div>
    <nav>
      <div class="menu-link desktop tablet" :class="{ active: home }">
        <router-link class="router-link" to="/space-tourism-website">
          <span class="desktop-inline">00</span> HOME
        </router-link>
      </div>
      <div class="menu-link desktop tablet" :class="{ active: destination }">
        <router-link
          class="router-link"
          to="/space-tourism-website/destination"
        >
          <span class="desktop-inline">01</span> DESTINATION
        </router-link>
      </div>
      <div class="menu-link desktop tablet" :class="{ active: crew }">
        <router-link class="router-link" to="/space-tourism-website/crew">
          <span class="desktop-inline">02</span> CREW
        </router-link>
      </div>
      <div class="menu-link desktop tablet" :class="{ active: technology }">
        <router-link class="router-link" to="/space-tourism-website/technology">
          <span class="desktop-inline">03</span> TECHNOLOGY
        </router-link>
      </div>
      <img
        @click="showmenu"
        class="mobile"
        src="../assets/shared/icon-hamburger.svg"
        alt="ham"
      />
    </nav>
    <Drawer @closed="closed" :style="{ display: drawer }" />
  </header>
</template>

<script>
import Drawer from "./Drawer.vue";
export default {
  components: { Drawer },
  data() {
    return {
      home: true,
      destination: false,
      crew: false,
      technology: false,
      deviceType: "desktop",
      drawer: false,
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

  methods: {
    showmenu() {
      this.drawer = "flex";
    },
    closed() {
      this.drawer = "none";
    },
  },
};
</script>

<style scoped>
header {
  height: 96px;
  margin-top: 40px;
  margin-left: 55px;
  display: flex;
  align-items: center;
}

.visible {
  display: flex;
}

.desktop {
  display: inline;
}

.router-link {
  text-decoration: none;
  color: white;
  font-family: "Barlow Condensed", sans-serif;
  align-items: center;
  letter-spacing: 2.7px;
  font-size: 16px;
  display: block;
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
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.h-line {
  height: 1px;
  margin-left: 40px;
  flex-grow: 1;
  background-color: white;
}

.mobile {
  display: none;
}
.desktop {
  display: flex;
}
.desktop-inline {
  display: inline;
}

@media screen and (max-width: 800px) {
  header {
    height: 96px;
    margin-top: 0px;
    margin-left: 39px;
    display: flex;
    align-items: center;
    font-size: 14px;
    justify-content: space-between;
  }

  .h-line {
    display: none;
  }
  .router-link {
    letter-spacing: default;
    font-size: 14px;
  }
  .desktop {
    display: none;
  }
  .desktop-inline {
    display: none;
  }
  .tablet {
    display: flex;
  }
}

@media screen and (max-width: 500px) {
  .mobile {
    display: flex;
  }
  .desktop {
    display: none;
  }
  .tablet {
    display: none;
  }
  nav {
    justify-content: flex-end;
    padding-right: 20px;
    backdrop-filter: none;
  }
}
</style>