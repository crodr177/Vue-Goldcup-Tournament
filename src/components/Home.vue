<template>
  <div id="home-container">
    <div>
      <h1>Tables and Brackets</h1>
      <img class="tables-pic" src="https://static.clubs.nfl.com/image/private/t_editorial_landscape_8_desktop_mobile/f_auto/titans/dgbwxx7d6gfhwskmstv5.jpg"/>
      <a href="#tables-brackets"><button id="down-arrow">&#10151;</button></a>
    </div>
    <div id="tables-brackets">
      <Tables></Tables>
      <Brackets></Brackets>
    </div>
  </div>
</template>

<script>
import Tables from './Tables'
import Brackets from './Brackets'

export default {
  components: {
    Tables,
    Brackets
  }
}
</script>

<style>
  #home-container{
    width: 1000px;
    position: relative;
  }

  #home-container h1 {
    color: white;
    font-size: 40px;
  }

  .tables-pic {
    width: 1000px;
    height: 500px;
    border: 5px solid white;
    border-radius: 5px;
    margin-bottom: 0px;
  }

  #down-arrow{
    width: 50px;
    height: 250px;
    font-size: 50px;
    transform: rotate(90deg);
    background-color: rgba(255, 255, 255, .2);
    color: rgba(0, 0, 0, .3);
    border: none;
    position: absolute;
    top: 515px;
    left: 470px;
    outline: none;
  }

  #down-arrow:hover {
    background-color: rgba(255, 255, 255, .5);
    color: rgba(0, 0, 0, .6);
  }

  #tables-brackets {
    margin-top:80px;
  }
</style>
