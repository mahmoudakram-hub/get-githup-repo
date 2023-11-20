import { createStore } from "vuex";
import { reactive } from "vue";
export const globalData = new reactive({
  mainData: { type: Object },
  repos: { type: Object },
  fetchGitData: async username => {
    let getRepos = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    let request = await fetch(`https://api.github.com/users/${username}`);

    request = await request.json();
    getRepos = await getRepos.json();
    globalData.repos = getRepos;
    globalData.mainData = request;
  },
});
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
