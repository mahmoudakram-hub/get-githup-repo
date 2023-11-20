<template>
  <div class="info content-config">
    <header-component :header="header" />
    <h3 v-if="!data.mainData.id">
      just write the right username in the home page
      <router-link to="/">| Home</router-link>
    </h3>
    <div class="card" v-if="data.mainData.id">
      <img :src="data.mainData.avatar_url" alt="" />
      <div class="conte">
        <h3>{{ data.mainData.login }}</h3>
        <a :href="data.mainData.html_url" target="_blank"> Github Profile</a>
        <div class="followers">
          number of followers is :
          <span>
            {{ data.mainData.followers }}
          </span>
        </div>
      </div>
    </div>
    <div class="notfound" v-else-if="data.mainData.message">
      <h3>not found</h3>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin: 20px auto;
  border: 2px solid rgb(0, 110, 255);
  width: 500px;
  padding: 20px;
  border-radius: 10px;
}

.card img {
  display: block;
  width: 200px;
  border-radius: 50%;
  margin: 20px auto;
}
.card h3 {
  margin: 20px 0;
  color: rgb(0, 110, 255);
  font-size: 20px;
  font-weight: bold;
}
.card a {
  display: block;
  padding: 20px;
  width: fit-content;
  border: 2px solid rgb(21, 76, 179);
  border-radius: 10px;
  margin: 20px auto;
  text-decoration: none;
  font-size: 20px;
}
.card .followers {
  margin: 20px;
  font-size: 20px;
}
.card .followers span {
  color: rgb(21, 76, 179);
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
      header: "Info",
    };
  },
  components: {
    HeaderComponent,
  },
};
</script>
