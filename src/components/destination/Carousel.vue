<template>
  <div class="destination-carousel">
    <img
      :src="
        require(`../../assets/destination/${$store.state.selectedDestination.images.png}`)
      "
      :alt="$store.state.selectedDestination.name"
    />

    <div class="carousel-details">
      <CarouselTab />
      <h1>
        {{ $store.state.selectedDestination.name }}
      </h1>
      <p>
        {{ $store.state.selectedDestination.description }}
      </p>
      <div class="vertical-line"></div>
      <div class="travel-details">
        <div class="item">
          <span>AVG. DISTANCE</span>
          <h2>{{ $store.state.selectedDestination.distance }}</h2>
        </div>
        <div class="item">
          <span>EST. TRAVEL TIME</span>
          <h2>{{ $store.state.selectedDestination.travel }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import CarouselTab from "./CarouselTab.vue";
export default {
  components: { CarouselTab },
};
</script>

<style>
.destination-carousel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-top: 64px;
}
h1,
p {
  margin: 0px;
}
.carousel-details {
  width: 445px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.carousel-details > h1 {
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  text-transform: uppercase;
}
.vertical-line {
  margin-top: 54px;
  margin-bottom: 14px;
  height: 1px;
  background: #383b4b;
  width: 100%;
}

.carousel-details > p {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;
}

.travel-details {
  display: flex;
  gap: 15%;
}
.item > h2 {
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  text-transform: uppercase;
}

.item > span {
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2.3625px;
  text-transform: uppercase;
  color: #d0d6f9;
}
@media screen and (max-width: 800px) {
  .destination-carousel {
    flex-direction: column;
    position: relative;
    text-align: center;
  }
  .carousel-details {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .travel-details {
    display: flex;
    justify-content: space-evenly;
    gap: 0%;
  }
}
</style>