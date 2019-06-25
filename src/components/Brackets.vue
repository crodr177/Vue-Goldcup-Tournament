<template>
  <div id="bracket-container">
    <h2>Brackets</h2>
    <main id="tournament">
      <ul class="round round-2">
          <li class="spacer">&nbsp;</li>
          
          <li class="game game-top winner"><input maxlength="20" placeholder="1B Team"/> <span class="score"><input maxlength="2" placeholder="0"/></span></li>
          <li class="game game-spacer">&nbsp;</li>
          <li class="game game-bottom "><input maxlength="20" placeholder="2A Team"/> <span class="score"><input maxlength="1" placeholder="0"/></span></li>

          <li class="spacer">&nbsp;</li>
          
          <li class="game game-top winner"><input maxlength="20" placeholder="1A Team"/> <span class="score"><input maxlength="2" placeholder="0"/></span></li>
          <li class="game game-spacer">&nbsp;</li>
          <li class="game game-bottom "><input maxlength="20" placeholder="2B Team"/> <span class="score"><input maxlength="2" placeholder="0"/></span></li>

          <li class="spacer">&nbsp;</li>
          
          <li class="game game-top "><input maxlength="20" placeholder="1C Team"/> <span class="score"><input maxlength="2" placeholder="0"/></span></li>
          <li class="game game-spacer">&nbsp;</li>
          <li class="game game-bottom winner"><input maxlength="20" placeholder="2D Team"/> <span class="score"><input maxlength="2" placeholder="0"/></span></li>

          <li class="spacer">&nbsp;</li>
          
          <li class="game game-top "><input maxlength="20" placeholder="1D Team"/> <span class="score"><input maxlength="2" placeholder="0"/></span></li>
          <li class="game game-spacer">&nbsp;</li>
          <li class="game game-bottom winner"><input maxlength="20" placeholder="2C Team"/> <span class="score"><input maxlength="2" placeholder="0"/></span></li>

          <li class="spacer">&nbsp;</li>
      </ul>
      <ul class="round round-3">
          <li class="spacer">&nbsp;</li>
          
          <li class="game game-top winner"><input maxlength="20" placeholder="Team 1B/2A"/> <span class="score"><input maxlength="2" placeholder="0"/></span></li>
          <li class="game game-spacer">&nbsp;</li>
          <li class="game game-bottom "><input maxlength="20" placeholder="Team 1A/2B"/> <span class="score"><input maxlength="2" placeholder="0"/></span></li>

          <li class="spacer">&nbsp;</li>
          
          <li class="game game-top "><input maxlength="20" placeholder="Team 1C/2D"/> <span class="score"><input maxlength="2" placeholder="0"/></span></li>
          <li class="game game-spacer">&nbsp;</li>
          <li class="game game-bottom winner"><input maxlength="20" placeholder="Team 1D/2C"/> <span class="score"><input maxlength="2" placeholder="0"/></span></li>

          <li class="spacer">&nbsp;</li>
      </ul>
      <ul class="round round-4">
          <li class="spacer">&nbsp;</li>
          
          <li class="game game-top winner"><input maxlength="20" placeholder="Team"/> <span class="score"><input maxlength="2" placeholder="0"/></span></li>
          <li class="game game-spacer">&nbsp;</li>
          <li class="game game-bottom "><input maxlength="20" placeholder="Team"/> <span class="score"><input maxlength="2" placeholder="0"/></span></li>
          
          <li class="spacer">&nbsp;</li>
      </ul>       
    </main>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  main{
  margin-top: 20px;
  display:flex;
  flex-direction:row;
  background-color: white;
  padding-left: 80px;
  border-radius: 3px;
  }
  .round{
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:250px;
    list-style:none;
    padding:0;
    font-size: 20px;
  }
  .round .spacer{ flex-grow:.5; }
  .round .spacer:first-child,
  .round .spacer:last-child{ flex-grow:.2; }

  .round .game-spacer{
    flex-grow:1;
  }
  #bracket-container{
    padding:10px;
    line-height:1.4em;
  }

  li.game{
    padding-left:20px;
  }

  li.game input {
    border: none;
    font-size: 20px;
    color: rgb(179, 151, 102);
    border: 2px solid white;
    outline: none;
    border-radius: 3px;
    width: 180px;
  }

  li.game input::placeholder {
    font-style: italic;
  }

  li.game input:hover {
    border: 2px solid black;
  }

  li.game .score input:hover {
    border: 2px solid black;
  }

  li.game .score{
    float:right;
    margin-right:5px;
    width: 35px;
  }

  li.game .score input {
    width: 35px;
    margin: 5px;
    border: 2px solid white;
    border-radius: 3px;
    text-align: center;
    color: rgb(12, 12, 173);
  }

  li.game-top{ border-bottom:1px solid black; }

  li.game-spacer{ 
    border-right:1px solid black;
    min-height:40px;
  }

  li.game-bottom{ 
    border-top:1px solid black;
  }
</style>
