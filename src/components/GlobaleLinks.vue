<template>
  <div class="links">
    <ul>
      <li>
        <router-link to="/"> Home</router-link>
      </li>
      <li>
        <router-link to="/info">info</router-link>
      </li>
      <li>
        <router-link to="/projects"> Projects</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  a {
    display: block;
    text-decoration: none;
    color: white;
    padding: 15px;
    border-bottom: 2px solid white;
    transition: 0.3s;
    margin-bottom: 5px;
    &:hover {
      background-color: rgb(211, 144, 144);
    }
  }
}
</style>
