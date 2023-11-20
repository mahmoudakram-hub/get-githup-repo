<template>
  <div class="home content-config">
    <header-component :header="header" />
    <div class="search-box">
      <i class="fa-brands fa-github"></i>
      <form onsubmit="event.preventDefault()">
        <input
          type="search"
          placeholder="Enter you User Name"
          id="user-name"
          :value="data.mainData.login"
        />
        <input
          type="submit"
          value="search"
          @click="data.fetchGitData(getUserName())"
        />
      </form>
      <div v-if="data.mainData.message || data.mainData.id" class="output">
        {{ data.mainData.message || "found" }}
      </div>
    </div>
  </div>
</template>

<script>
import { globalData } from "@/store/index.js";
import HeaderComponent from "@/components/GlobalHeader.vue";

export default {
  name: "AboutPage",
  data: () => {
    return {
      data: globalData,
      header: "Home Page",
    };
  },
  methods: {
    getUserName() {
      return document.querySelector("#user-name").value;
    },
  },
  components: {
    HeaderComponent,
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 30px;
}
.search-box i {
  display: block;
  font-size: 200px;
  margin-bottom: 20px;
}
.search-box form input[type="search"] {
  border: 3px solid black;
  box-shadow: 0 0 3px #ccc;
  border-radius: 3px;
  padding: 10px;
  width: 300px;
  font-weight: bold;
  display: block;
  margin: 10px auto;
}
.search-box form input:focus {
  outline: none;
}
.search-box form input[type="submit"] {
  border: 1ps solid green;
  background-color: aqua;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px;
}
.search-box .output {
  padding: 20px;
  border-radius: 6px;
  border: 2px solid aqua;
  font-weight: bold;
  width: 300px;
  margin: 30px auto;
}
</style>
