<template>
  <div class='home'>
    <!-- <img alt='Vue logo' src='../assets/logo.png' /> -->
    <HeaderText msg='Toxic Masculinity' />
    <Search />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderText from '@/components/HeaderText.vue';
import Search from '@/components/Search.vue';

export default {
  name: 'Home',
  components: {
    HeaderText,
    Search
  }
};
</script>
