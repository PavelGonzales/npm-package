<template>
  <v-card class="white--text">
  
    <v-layout row>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ info.name }} {{ info.version }}</div>
            <div>{{ info.description }}</div>
            <div>{{ info.date }}</div>
            <v-layout row>
              <v-layout class="mr-3" align-items="center" v-for="keyword of info.keywords" :key="keyword">
                <v-icon small>label</v-icon>{{ keyword }}
              </v-layout>
            </v-layout>
          </div>
        </v-card-title>
      
    </v-layout>
    <v-divider light></v-divider>
    <v-card-actions class="pa-3">
      Rate this album
      <v-spacer></v-spacer>
      <v-icon>star_border</v-icon>
      <v-icon>star_border</v-icon>
      <v-icon>star_border</v-icon>
      <v-icon>star_border</v-icon>
      <v-icon>star_border</v-icon>
    </v-card-actions>
    <pre>
      {{ info }}
    </pre>
  </v-card>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.label {
  line-height: 0.8;
}
</style>
