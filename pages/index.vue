<template>
  <div class="container">
    <About />
    <Contact />
  </div>
</template>

<script>
import Contact from '../components/contact'
import About from '../components/about'

export default {
  components: {
    Contact,
    About
  }
}
</script>

<style>
.container {
  margin: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
