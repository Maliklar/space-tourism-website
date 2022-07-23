<template>
  <div class="technology-view">
    <h1><span>01 </span> SPACE LAUNCH 101</h1>
    <div class="technology-view-body">
      <TechnologySlider />
    </div>
  </div>
</template>

<script>
import TechnologySlider from "../components/technology/TechnologySlider.vue";
export default {
  components: { TechnologySlider },
};
</script>

<style>
.technology-view {
  flex: 1;
  margin-top: 76px;
  margin-left: 166.5px;
}

.technology-view > h1 {
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  letter-spacing: 4.725px;
}

@media screen and (max-width: 800px) {
  .technology-view {
    flex: 1;
    margin-top: 76px;
    margin-left: 0px;
  }
}

@media screen and (max-width: 500px) {
  .technology-view > h1 {
    font-size: 16px;
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>