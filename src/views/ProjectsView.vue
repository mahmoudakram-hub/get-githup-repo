<template>
  <div class="projects content-config">
    <header-component :header="header" />
    <h3 v-if="!data.mainData.id">
      just write the right username in the home page
      <router-link to="/">| Home</router-link>
    </h3>
    <h1 v-if="data.mainData.id">Number of Projects: {{ data.repos.length }}</h1>
    <div class="repos" v-if="data.mainData.id">
      <div class="repo" v-for="repo in data.repos" :key="repo.id">
        <h3>{{ repo.name }}</h3>
        <a :href="repo.html_url"> repo link</a>
        <p class="description">{{ repo.description }}</p>
        <div class="watcher">
          watchers : <span>{{ repo.watchers_count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.repos {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 5px;
  word-break: break-all;
}
.repo {
  border: 2px solid black;
  border-radius: 10px;
  width: calc((100% / 3) - 5px);
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
  min-width: 200px;
  padding: 5px;
}
.repo h3 {
  margin: 10px 0;
  padding: 10px;
  color: rgb(0, 110, 255);
}
.repo .description {
  padding: 5px;
}
.repo a {
  display: block;
  border: 2px solid rgb(0, 110, 255);
  border-radius: 5px;
  text-decoration: none;
  width: 100px;
  font-size: 20px;
  font-weight: bold;
  margin: 10px auto;
}
</style>
<script>
import { globalData } from "@/store/index.js";
import HeaderComponent from "@/components/GlobalHeader.vue";

export default {
  name: "AboutPage",
  data: () => {
    return {
      data: globalData,
      header: "Github Repos",
    };
  },
  components: {
    HeaderComponent,
  },
};
</script>
