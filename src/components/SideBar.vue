<template>
  <div class="side-bar">
    <app-links />
  </div>
</template>

<style lang="scss" scoped>
.side-bar {
  width: 300px;
  background-color: rgb(128, 93, 93);
  color: white;
  h1 {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}

@media (max-width: 767px) {
  .side-bar {
    width: 100px;
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
