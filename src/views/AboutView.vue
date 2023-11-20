<template>
  <div class="about content-config">
    <header-component :header="header" />
    <p>
      here is an app to get github info by typing the username of any one i Home
      page
    </p>
    <br />
    <router-link to="/">Home</router-link>
  </div>
</template>

<style scoped>
p {
  font-size: 30px;
}
</style>

<script>
import HeaderComponent from "@/components/GlobalHeader.vue";

export default {
  data() {
    return {
      header: "About Us",
    };
  },
  components: {
    HeaderComponent,
  },
};
</script>
