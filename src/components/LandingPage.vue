<template>
  <div id="landing-container">
    <img class="logo" src="../assets/goldcup-logo.png"/>
    <div id="title-container">
      <h1 class="landing-title">Make Your 2019 GoldCup Predictions!</h1>
      <h2 class="landing-subtitle">Predict who will win the group stage and who will win it all!</h2>
    </div>
    <router-link to="/home"><button class="get-started">Get Started</button></router-link>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
  #landing-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo{
    width: 300px;
  }

  #title-container {
    color: white;
    text-align: center;
  }

  .landing-title {
    font-weight: bolder;
    font-size: 50px;
    margin-top: 0;
    margin-bottom: 0;
  }

  .landing-subtitle{
    margin-top: 0;
  }

  .get-started {
    margin-top: 30px;
    border: none;
    width: 200px;
    height: 50px;
    font-size: 20px;
    font-weight: bolder;
    border-radius: 5px;
    transition: 1s all;
    outline: none;
  }

  .get-started:hover {
    width: 250px;
    height: 60px;
    font-size: 25px;
  }
</style>
