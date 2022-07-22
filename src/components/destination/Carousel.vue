<template>
  <div class="destination-carousel">
    <img src="../../assets/destination/image-moon.png" alt="MoonIMage" />
    <div class="carousel-details">
      <CarouselTab />
      <h1>MOON</h1>
      <p>
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>
      <div class="vertical-line"></div>
      <div class="travel-details">
        <div class="item">
          <span>AVG. DISTANCE</span>
          <h2>384,400 KM</h2>
        </div>
        <div class="item">
          <span>EST. TRAVEL TIME</span>
          <h2>3 DAYS</h2>
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
  /* line-height: 115px; */
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
</style>