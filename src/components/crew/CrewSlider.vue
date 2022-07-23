<template>
  <div class="crew-slider">
    <div class="slider-left">
      <h2>
        {{ $store.state.selectedCrew.role }}
      </h2>
      <h1>
        {{ $store.state.selectedCrew.name }}
      </h1>
      <p>
        {{ $store.state.selectedCrew.bio }}
      </p>
      <SliderController />
    </div>

    <div class="slider-right">
      <img
        :src="
          require(`../../assets/crew/${$store.state.selectedCrew.images.png}`)
        "
        :alt="$store.state.selectedCrew.name"
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
.crew-slider {
  display: flex;
  align-items: center;
  max-height: 100%;
}
.slider-left {
  display: flex;
  flex-direction: column;
  gap: 22px;
}
h1,
h2,
p {
  margin: 0px;
}

.slider-left > h2 {
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  text-transform: uppercase;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
}

.slider-left > h1 {
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 64px;
  text-transform: uppercase;
  color: #ffffff;
}
.slider-left > p {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;
}

.slider-right {
  position: relative;
}

@media screen and (max-width: 800px) {
  .crew-slider {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    max-height: 100%;
    padding-top: 80px;
    padding-left: 80px;
    padding-right: 80px;
  }
  .slider-left {
    display: flex;
    flex-direction: column;
    gap: 22px;
    margin-bottom: 80px;
  }
}

@media screen and (max-width: 500px) {
  .slider-right > img {
    width: 100%;
  }
  .slider-left > h1 {
    font-size: 24px;
  }

  .slider-left > h2 {
    font-size: 16px;
  }
  .slider-left > p {
    font-size: 15px;
  }
  .crew-slider {
    padding: 20px 20px 0 20px;
  }
}
</style>