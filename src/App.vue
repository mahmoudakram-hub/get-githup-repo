<template>
  <side-bar />
  <router-view />
</template>

<script>
import SideBar from "@/components/SideBar.vue";
export default {
  name: "SideComponent",
  components: {
    SideBar,
  },
};
</script>
