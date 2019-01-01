<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm12 md8>
      <PackageCard :info="packageInfo.collected.metadata" />
      <pre>
        {{ packageInfo }}
      </pre>
    </v-flex>
  </v-layout>
</template>

<script>
import {mapGetters} from 'vuex';
import PackageCard from '~/components/PackageCard';

export default {
  async fetch({store, params}) {
    await store.dispatch('GET_PACKAGE_INFO', {name: params.name});
  },

  components: {
    PackageCard
  },

  computed: {
    ...mapGetters({
      packageInfo: 'package'
    })
  }
};
</script>