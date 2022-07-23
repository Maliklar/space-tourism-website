<template>
  <div class="home-view">
    <HomeTextBox />
    <ExploreButton />
  </div>
</template>

<script>
import ExploreButton from "../components/home/ExploreButton.vue";
import HomeTextBox from "../components/home/HomeTextBox.vue";
export default {
  name: "Home",
  components: {
    ExploreButton,
    HomeTextBox,
  },
};
</script>

<style scoped>
.home-view {
  color: white;
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-left: 165px;
  padding-right: 165px;
  padding-bottom: 131px;
}

@media screen and (max-width: 800px) {
  .home-view {
    flex-direction: column;
    margin-top: 150px;
    align-items: center;
    gap: 156px;
  }
}

@media screen and (max-width: 500px) {
  .home-view {
    flex-direction: column;
    margin-top: 60px;
    align-items: center;
    justify-content: flex-start;

    gap: 50px;
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
    