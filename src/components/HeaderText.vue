<template>
  <v-container fluid>
    <v-row>
      <v-col cols='12' md='4' offset-md='3'>
        <v-card :elevation='selected'>
          <v-card-text>
            <h1
            class='text-center ma-2 pa-6'
            style="font-size: 3em; line-height:normal;"
            v-text="`What is ${msg}?`">
            </h1>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HeaderText',

  props: ['msg'],

  data () {
    return {
      selected: 2
    };
  }
};
</script>
