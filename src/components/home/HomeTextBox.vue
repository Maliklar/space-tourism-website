<template>
  <div class="home-text-box">
    <p>SO, YOU WANT TO TRAVEL TO</p>
    <h1>SPACE</h1>
    <p>
      Let’s face it; if you want to go to space, you might as well genuinely go
      to outer space and not hover kind of on the edge of it. Well sit back, and
      relax because we’ll give you a truly out of this world experience!
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.home-text-box {
  height: 382px;
  width: 450px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
.home-text-box :first-child {
  color: #d0d6f9;
  font-size: 28px;
  text-align: center;
  letter-spacing: 4.725px;
}

.home-text-box > :nth-child(3) {
  color: #d0d6f9;
  font-size: 18px;
  text-align: center;

  line-height: 32px;
}
.home-text-box > h1 {
  font-size: 150px;
  font-weight: 100;
  margin: 0px;
  font-family: "Bellefair", serif;
}

@media screen and (max-width: 800px) {
  .home-text-box {
    height: 382px;
    width: 450px;
    position: relative;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .home-text-box :first-child {
    color: #d0d6f9;
    font-size: 20px;
    letter-spacing: 4.725px;
  }

  .home-text-box > :nth-child(3) {
    color: #d0d6f9;
    font-size: 16px;
    line-height: 32px;
  }
  .home-text-box > h1 {
    font-size: 150px;
    font-weight: 100;
    margin: 0px;
    font-family: "Bellefair", serif;
  }
}
</style>