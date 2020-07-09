<template>
  <v-app>
    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from './views/Home.vue';
import About from './views/About.vue';

export default {
  name: 'App',

  components: {
    Home
    // About
  },

  data: () => ({
    //
  })
};
</script>
