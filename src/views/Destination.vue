<template>
  <div class="destination-view">
    <h1><span>01 </span> PICK YOUR DESTINATION</h1>
    <div class="destination-view-body">
      <Carousel />
    </div>
  </div>
</template>

<script>
import Carousel from "../components/destination/Carousel.vue";
export default {
  components: { Carousel },
};
</script>

<style>
.destination-view {
  flex: 1;
  margin-top: 76px;
  margin-left: 166.5px;
  margin-right: 166.5px;
}

.destination-view > h1 {
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  letter-spacing: 4.725px;
}
@media screen and (max-width: 800px) {
  .destination-view {
    flex: 1;
    margin-top: 76px;
    margin-left: 97px;
    margin-right: 97px;
  }
}

@media screen and (max-width: 500px) {
  .destination-view {
    flex: 1;
    margin-top: 76px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .destination-view > h1 {
    font-size: 16px;
    text-align: center;
  }
}
</style>