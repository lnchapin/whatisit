<template>
  <div class='home'>
    <!-- <img alt='Vue logo' src='../assets/logo.png' /> -->
    <HeaderText msg='Toxic Masculinity' />
    <Search />
    <div style='min-height: 50vh;'>
      <!-- <BodyText style='display:none;' />
      <Sources style='display:none;' />
      <FurtherReading style='display:none;' /> -->
      <BodyText />
      <Sources />
      <FurtherReading />
    </div>
    <FooterNav />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderText from '@/components/HeaderText.vue';
import Search from '@/components/Search.vue';
import BodyText from '@/components/BodyText.vue';
import Sources from '@/components/Sources.vue';
import FurtherReading from '@/components/FurtherReading.vue';
import FooterNav from '@/components/FooterNav.vue';

export default {
  name: 'Home',
  components: {
    HeaderText,
    Search,
    BodyText,
    Sources,
    FurtherReading,
    FooterNav
  }
};
</script>
