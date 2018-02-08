const fs = require('fs');
const path = require('path');
const basePath = path.format({ dir: 'C:\\hitbdata\\library' });

const state = {
  files: [],
  file: []
};

const mutations = {
  LIBRARY_LOAD_FILES() {
    const files = fs.readdirSync(basePath).filter(x => x.endsWith('.csv'))
    state.files = files;
  },
  LIBRARY_LOAD_FILE(state, message) {
    state.file = message;
  },
};

const actions = {
  someAsyncTask({ commit }) {
    commit('LIBRARY_LOAD_FILES');
    commit('LIBRARY_LOAD_FILE');
  },
};

export default {
  state,
  mutations,
  actions,
};
