<template>
  <div id="app">
    <div id="nav">
      <span class="title">XAROCA.trade</span>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');

html {
  font-family: 'Space Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /** background: url(https://source.unsplash.com/random/1960x1080) no-repeat center center fixed; **/
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  -webkit-transition: background-image 0.2s ease-in-out;
  transition: background-image 0.2s ease-in-out;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #b94242;
    }
  }
}

.title {
  padding: .5rem;
  font-weight: bold;
}
</style>
