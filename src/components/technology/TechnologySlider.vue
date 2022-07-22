<template>
  <div class="technology-slider-view">
    <div class="left">
      <SliderController />
      <div class="technology-slider-content">
        <h3>THE TERMINOLOGY...</h3>
        <h1>{{ $store.state.selectedTechnology.name }}</h1>
        <p>
          {{ $store.state.selectedTechnology.description }}
        </p>
      </div>
    </div>
    <div class="right">
      <img
        :src="
          require(`../../assets/technology/${$store.state.selectedTechnology.images.portrait}`)
        "
        alt="jsp"
      />
    </div>
  </div>
</template>

<script>
import SliderController from "./SliderController.vue";
export default {
  components: { SliderController },
};
</script>

<style scoped>
.technology-slider-view {
  display: flex;
  justify-content: space-between;
}
.left {
  display: flex;
  align-items: center;
}

.technology-slider-content {
  margin-left: 80px;
  margin-right: 120px;
}
.technology-slider-content > h3 {
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  color: #d0d6f9;
}
.technology-slider-content > h1 {
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 64px;
  text-transform: uppercase;
  color: #ffffff;
}
h1 {
  margin: 0px;
}
.technology-slider-content > p {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  max-width: 88%;
  color: #d0d6f9;
}
</style>