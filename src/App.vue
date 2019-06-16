<template>
  <div id="app">
    <div id="main-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

html {
  box-sizing:border-box;
}

*, *::before, *::after {
  box-sizing:inherit;
}

body {
  background-color: rgb(37, 37, 122);
}

#app {
 font-family: 'Roboto', sans-serif;
}

#main-container {
  width: 1000px;
  display: flex;
  flex-direction: column;
  margin: auto;
}
</style>
