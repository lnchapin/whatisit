<template>
  <div class='ma-2 pa-3'>
    <v-banner>
      <h3>Further Reading</h3>
    </v-banner>

    <ol>
      <li>Need</li>
      <li>To Sort</li>
      <li>Out Map</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'FurtherReading',

  props: ['msg'],

  data () {
    return {
      selected: 0
    };
  }
};
</script>
