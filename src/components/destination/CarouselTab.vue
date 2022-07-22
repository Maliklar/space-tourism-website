<template>
  <div class="carousel-tab">
    <div class="tab-item active">MOON</div>
    <div class="tab-item">MARS</div>
    <div class="tab-item">EUROPA</div>
    <div class="tab-item">TITAN</div>
  </div>
</template>

<script>
export default {};
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
}

.tab-item.active {
  border-bottom: 2px white solid;
}
</style>