<template>
  <v-bottom-navigation
    v-model='bottomNav' >
    <v-btn value='home'>
      <span>Home</span>
      <v-icon>mdi-home-variant</v-icon>
    </v-btn>

    <v-btn value='about'>
      <span>About Us</span>
      <v-icon>mdi-account-group</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'FooterNav',

  data () {
    return {
      bottomNav: 'recent'
    }
  }
}
</script>
