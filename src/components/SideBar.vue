<template>
  <div class="side-bar">
    <h1>side bar</h1>
    <app-links />
  </div>
</template>

<style lang="scss" scoped>
.side-bar {
  width: 300px;
  background-color: black;
  color: white;
  h1 {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
</style>

<script>
import AppLinks from "@/components/GlobaleLinks.vue";
export default {
  name: "SideBar",
  components: { AppLinks },
};
</script>
