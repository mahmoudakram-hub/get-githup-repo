<template>
  <div class="links">
    <ul>
      <li>
        <router-link to="/">
          <i class="fa-solid fa-house"></i><span> Home </span>
        </router-link>
      </li>
      <li>
        <router-link to="/info"
          ><i class="fa-solid fa-user"></i><span> info </span></router-link
        >
      </li>
      <li>
        <router-link to="/projects">
          <i class="fa-solid fa-diagram-project"></i
          ><span> projects </span></router-link
        >
      </li>
      <li>
        <router-link to="/about"
          ><i class="fa-regular fa-circle-question"></i
          ><span> about </span></router-link
        >
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  a {
    position: relative;
    display: block;
    text-decoration: none;
    color: white;
    padding: 15px;
    border-bottom: 2px solid white;
    transition: 0.3s;
    &:hover {
      background-color: rgba(0, 0, 0, 0.486);
    }
    i {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      margin-right: 5px;
    }
  }
}

@media (max-width: 767px) {
  ul {
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px 20px;
      span {
        display: none;
      }
      i {
        position: static;
        display: block;
        font-size: 20px;
      }
    }
  }
}
</style>
