<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <section class="hero">
      <header>
        <br>
        <br>
        <br>
        <h1>Spectrum</h1>
        <h3>A dating app for those who won't be boxed in.</h3>
        <br>
        <br>
        <br>
      </header>
    </section>
    <!--<img src="./assets/logo.png">-->
    <h1>{{ msg }}</h1>
    <h2>Sign up for Spectrum news and info here:</h2>
    <ul>
      <li><a href="https://mailchi.mp/22430d78f75e/spectrum-signup" target="_blank">Spectrum Mail</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Spectrum\'s sign-up page!'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  //color: #2c3e50;
}

h1, h2, h3 {
  font-weight: normal;
}

h1 {
  font-size: xx-large;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #9765f4;
}

/* banner */
// do something neat here with grid or flex instead involving a logo
.hero {
  height: auto; /* grows according to text - won't need updating if I move the instructions*/
  min-height: 42%;
  //background-image: url(./assets/ffb-banner.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  //background-color: #9765f4;
  background-image: linear-gradient(to bottom right, #9765f4 , white);
}
</style>
