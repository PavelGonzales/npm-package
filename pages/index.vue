<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm12 md8>
      <v-autocomplete
        v-model="model"
        :items="items"
        :loading="isLoading"
        :search-input.sync="search"
        color="white"
        hide-no-data
        hide-selected
        item-text="Description"
        item-value="API"
        label="Public APIs"
        @change="select"
        placeholder="Start typing to Search"
        prepend-icon="mdi-database-search"
        return-object
      ></v-autocomplete>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      descriptionLimit: 60,
      entries: [],
      isLoading: false,
      model: null,
      search: null
    }),

    computed: {
      items() {
        return this.entries.map(entry => {
          return entry.package.name;
        });
      }
    },

    methods: {
      select(e) {
        console.log('eeee', e);
      }
    },

    watch: {
      search(val) {
        // Items have already been requested
        if (this.isLoading) return;

        this.isLoading = true;

        // Lazily load input items
        // this.$axios.get('https://api.publicapis.org/entries')

        console.log(val);
        this.$axios.get(`https://api.npms.io/v2/search/suggestions?q=${val}&size=10`)
          .then(res => {
            this.entries = res.data;
            console.log(this.entries);
          })
          .catch(err => {
            console.log(err);
          })
          .finally(() => (this.isLoading = false));
      }
    }
  };
</script>
