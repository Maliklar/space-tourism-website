<template>
  <header>
    <img src="../assets/shared/logo.svg" alt="Space Logo" />
    <div class="h-line"></div>
    <nav>
      <div class="menu-link">00 HOME</div>
      <div class="menu-link">01 DESTINATION</div>
      <div class="menu-link">02 CREW</div>
      <div class="menu-link">03 TECHNOLOGY</div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  height: 96px;
  margin-top: 40px;
  margin-left: 55px;
  display: flex;
  align-items: center;
}

nav {
  height: 100%;
  backdrop-filter: blur(80px);
  color: white;
  width: 56%;
  display: flex;
  font-family: "Barlow Condensed", sans-serif;
  align-items: center;
  letter-spacing: 2.7px;
  font-size: 16px;
  justify-content: space-around;
}

.h-line {
  height: 1px;
  margin-left: 40px;

  flex-grow: 1;
  background-color: white;
}
</style>