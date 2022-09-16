<template>
  <div id="app">
    <TheHeaderVue />
    <TheMenuVue :menuItems="menuItems" />
    <router-view />
  </div>
</template>

<script>
import TheHeaderVue from "./components/TheHeader.vue";
import TheMenuVue from "./components/TheMenu.vue";
export default {
  name: "App",
  components: { TheHeaderVue, TheMenuVue },
  data() {
    return {
      menuItems: [
        {
          id: 1,
          text: "Quy trình phê duyệt DM SCL",
          path: "/",
          menu2: [
            {
              id: 1,
              text: "Hồ sơ DM SCL",
              path: "/"
            },
            {
              id: 2,
              text: "Thẩm định hồ sơ DM SCL",
              path: "/"
            }
          ]
        }
      ]
    }
  }
};
</script>

<style>
:root {
  --bg-color: #eceef7;
  --bg-color-font: #0f0e9f;
  --color-solid: #bdc3c7;
  --color-border-form : #4990EF ;
  --color-font-form : #586B8B
}
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: var(--bg-color);
  font-size: 12px;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
.space-left {
  padding: 0 30px;
  padding-left: 280px;
}
.title-page {
  font-size: 20px;
  color: var(--bg-color-font);
  font-weight: 500;
  text-transform: uppercase;
  padding:  15px 0;
}
</style>
