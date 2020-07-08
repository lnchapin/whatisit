<template>
  <div class='home'>
    <img alt='Vue logo' src='../assets/logo.png' />
    <HeaderText msg='Welcome to Your Vue.js App' />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderText from '@/components/HeaderText.vue';

export default {
  name: 'Home',
  components: {
    HeaderText
  }
};
</script>
