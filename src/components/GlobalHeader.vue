<template>
  <div class="header">
    <h1>{{ header }}</h1>
  </div>
</template>

<script>
export default {
  name: "GlobalHeader",
  props: {
    header: String,
  },
};
</script>
<style>
.header {
  background-color: #ccc;
  margin-bottom: 30px;
  box-shadow: 5px 0 10px #ccc;
}
.header h1 {
  padding: 20px;
}
</style>
