<template>
  <v-app>
    <v-main>
      <!-- <HeaderText />
      <Search /> -->
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import HeaderText from './components/HeaderText.vue';
import Search from './components/Search.vue';
import Home from './views/Home.vue';

export default {
  name: 'App',

  components: {
    // HeaderText,
    // Search
    Home
  },

  data: () => ({
    //
  })
};
</script>
