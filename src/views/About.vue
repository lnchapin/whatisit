<template>
  <div class="about">
     <WaWHeader />
    <div style='min-height: 50vh;'>
      <WhoAreWe />
    </div>
    <FooterNav />
  </div>
</template>

<script>
import WaWHeader from '@/components/WaWHeader.vue';
import WhoAreWe from '@/components/WhoAreWe.vue';
import FooterNav from '@/components/FooterNav.vue';

export default {
  name: 'Home',
  components: {
    WaWHeader,
    WhoAreWe,
    FooterNav
  }
};
</script>
