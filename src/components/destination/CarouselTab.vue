<template>
  <div class="carousel-tab">
    <div class="tab-item" :class="{ active: moon }" @click="toggleTab(0)">
      MOON
    </div>
    <div class="tab-item" :class="{ active: mars }" @click="toggleTab(1)">
      MARS
    </div>
    <div class="tab-item" :class="{ active: europa }" @click="toggleTab(2)">
      EUROPA
    </div>
    <div class="tab-item" :class="{ active: titan }" @click="toggleTab(3)">
      TITAN
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.state.selectedDestination = this.$store.state.destinations[0];
  },
  data() {
    return {
      moon: true,
      mars: false,
      europa: false,
      titan: false,
    };
  },
  methods: {
    toggleTab(index) {
      this.$store.state.selectedDestination =
        this.$store.state.destinations[index];

      this.moon = false;
      this.mars = false;
      this.europa = false;
      this.titan = false;

      if (index == 0) {
        this.moon = true;
      }
      if (index == 1) {
        this.mars = true;
      }
      if (index == 2) {
        this.europa = true;
      }
      if (index == 3) {
        this.titan = true;
      }
    },
  },
};
</script>

<style scoped>
.carousel-tab {
  display: flex;
  min-height: 34px;
  gap: 35px;
}

.tab-item {
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  color: #ffffff;
  text-transform: uppercase;
}

.tab-item.active {
  border-bottom: 2px white solid;
}

@media screen and (max-width: 800px) {
  .carousel-tab {
    display: flex;
    justify-content: center;
    margin: 53px 0px;
    min-height: 34px;
    gap: 35px;
  }
}
</style>