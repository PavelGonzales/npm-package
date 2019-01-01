export const state = () => ({
  package: null
});

export const mutations = {
  setPackageInfo(state, info) {
    state.package = info;
  }
};

export const getters = {
  package: state => state.package
};

export const actions = {
  async GET_PACKAGE_INFO({commit}, {name}) {
    const res = await this.$axios.get(`https://api.npms.io/v2/package/${name}`);

    commit('setPackageInfo', res.data);
  }
};
