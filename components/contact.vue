<template>
  <div class='contact-card'>
    <h2 class='title'>Contact Info</h2>
    <div class='contact-info'>
      <ul>
        <li v-for="info in contactInfo" v-bind:key="info.value">
          <label>{{ info.label }}: </label>
          <a target='_blank' v-bind:href="info.link">{{ info.value }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    contactInfo: [
      { label: 'GitHub', value: 'Germanika', link: 'https://github.com/Germanika' },
      { label: 'LinkedIn', value: 'Ian Germann', link: 'https://www.linkedin.com/in/ian-germann-67315960/' },
      { label: 'Email', value: 'ianjgermann@gmail.com', link: 'mailto:ianjgermann@gmail.com' }
    ]
  })
}
</script>

<style scoped>
.contact-card {
  margin: 1rem;
  padding: 1rem;
  border: 2px solid black;
}
.contact-card h2 {
  padding: 0 0 .2em 0;
}
</style>