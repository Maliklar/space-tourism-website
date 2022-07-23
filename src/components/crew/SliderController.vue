<template>
  <div class="slider-controller">
    <div
      class="controller-item"
      :class="{ active: items[0] }"
      @click="toggleItem(0)"
    ></div>
    <div
      class="controller-item"
      :class="{ active: items[1] }"
      @click="toggleItem(1)"
    ></div>
    <div
      class="controller-item"
      :class="{ active: items[2] }"
      @click="toggleItem(2)"
    ></div>
    <div
      class="controller-item"
      :class="{ active: items[3] }"
      @click="toggleItem(3)"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [true, false, false, false],
    };
  },
  methods: {
    toggleItem(index) {
      for (let i = 0; i < this.items.length; i++) {
        this.items[i] = false;
      }
      this.items[index] = true;
      this.$store.state.selectedCrew = this.$store.state.crew[index];
    },
  },
};
</script>

<style>
.slider-controller {
  display: flex;
  gap: 20px;
  margin-top: 88px;
}

.controller-item {
  border-radius: 100%;
  height: 15px;
  width: 15px;
  background: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.17;
}
.controller-item.active {
  opacity: 1;
}

@media screen and (max-width: 800px) {
  .slider-controller {
    justify-content: center;
    margin-top: 30px;
  }
}
</style>