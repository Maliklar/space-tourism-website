<template>
  <div class="slider-controller">
    <div
      class="controller-item"
      :class="{ active: items[0] }"
      @click="toggleItem(0)"
    >
      1
    </div>
    <div
      class="controller-item"
      :class="{ active: items[1] }"
      @click="toggleItem(1)"
    >
      2
    </div>
    <div
      class="controller-item"
      :class="{ active: items[2] }"
      @click="toggleItem(2)"
    >
      3
    </div>
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
      this.$store.state.selectedTechnology =
        this.$store.state.technology[index];
    },
  },
};
</script>

<style scoped>
.slider-controller {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.controller-item {
  border-radius: 100%;
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  opacity: 0.25;

  border: #ffffff solid 1px;
  color: white;
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  text-align: center;
  letter-spacing: 2px;
}
.controller-item.active {
  color: black;
  background-color: #ffffff;
  opacity: 1;
}
</style>