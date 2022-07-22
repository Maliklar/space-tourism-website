<template>
  <div class="crew-view">
    <h1><span>02 </span> MEET YOUR CREW</h1>
    <div class="crew-view-body">
      <CrewSlider />
    </div>
  </div>
</template>

<script>
import CrewSlider from "../components/crew/CrewSlider.vue";

export default {
  components: { CrewSlider },
};
</script>

<style>
.crew-view {
  flex: 1;
  margin-top: 76px;
  margin-left: 166.5px;
  margin-right: 166.5px;
}

.crew-view > h1 {
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 4.725px;
}
</style>