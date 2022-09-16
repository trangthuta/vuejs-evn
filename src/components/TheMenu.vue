<template>
  <div class="menu">
    <div>
      <img src="../assets/image 24 (1).png" alt="logo" class="logo" />
    </div>
    <div class="menu-list">
      <router-link
        to="/home"
        v-for="item in menuItems"
        :key="item.id"
        class="menu-level1 menu-item"
      >
        <p class="menu-item">
          {{ item.text }}
        </p>
        <div class="menu-level2">
          <router-link
            to="/"
            v-for="menu2 in item.menu2"
            :key="menu2.id"
            class="menu-level2-item menu-item"
          >
            <div>
              <i class="fa-solid fa-briefcase"></i>
              {{ menu2.text }}
            </div>
          </router-link>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "TheMenu",
    props : ['menuItems'],
    // methods : {
    //     handleGetMenuItem(e){
    //          console.log(e);
    //     }
    // }
};
</script>

<style scoped>
.menu {
  position: absolute;
  top:0 ;
  z-index : 1999;
  width: 250px;
  height: 100%;
  padding: 15px 0;
  background-color: white;
  text-align: center;
}
.logo {
  margin: 23px 0;
}
a {
  text-decoration: none;
}
.menu-level1 {
  font-size: 18px;
  color: #3d5586;
  font-weight: 500;
}
.menu-level2 {
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
}
.menu-level2-item {
  width: 100%;
  text-align: justify;
  margin: 0 20px;
  /* background-color : pink; */
}
.menu-item {
  padding: 7.5px 0;
  cursor: pointer;
}
.menu-item :hover {
  color: red;
}
.menu-level2-item > div {
  margin: 0 10px;
}
.menu-level2-item > div > i {
  margin-right: 12px;
}
.menu-list {
    border-bottom: 1px solid var(--color-solid);
}
</style>
