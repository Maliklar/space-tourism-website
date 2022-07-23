<template>
  <button class="explore-button" type="button">EXPLORE</button>
</template>

<script>
export default {};
</script>

<style>
.explore-button {
  height: 274px;
  width: 274px;
  border-radius: 100%;
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  background-color: white;
  letter-spacing: 2px;
  border: none;
  color: #0b0d17;
}

@media screen and (max-width: 600px) {
  .explore-button {
    height: 150px;
    width: 150px;
    font-size: 20px;
  }
}
</style>