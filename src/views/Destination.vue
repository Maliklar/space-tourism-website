<template>
  <div class="destination-view">
    <h1><span>01 </span> PICK YOUR DESTINATION</h1>
    <div class="destination-view-body">
      <img src="../assets/destination/image-moon.png" alt="MoonIMage" />
      <div class="redbox"></div>
    </div>
  </div>
</template>

<script>
export default {};
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
  line-height: 34px;
  /* identical to box height */

  letter-spacing: 4.725px;
}

.redbox {
  background-color: red;
  height: 200px;
  width: 200px;
}
</style>