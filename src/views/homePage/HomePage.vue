<template>
  <div class="home space-left ">
     <div class="home-header home-flex-box">
      <p class="title-page">
        Hồ sơ danh mục SCL
      </p>
      <div class="home-flex-box">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          class="home-input-search"
        />
        <div class="home-flex-box">
         
            <button class="home-button-add">
              <router-link to="/themmoihoso" class="home-flex-box">
              <img
              src="../../assets/Plus.png"
              alt=""
              class="home-button-add-icon"
            />
            Thêm mới
            </router-link>
          </button>
          
        </div>
    
    </div>
     </div>
    <HomePageListHS :trangThaiOptions = "trangThaiOptions"/>

  </div>
</template>

<script>
  import HomePageListHS from './HomePageListHS.vue'
export default {
  name: "HomePage",
  components : {HomePageListHS},
  data() {
    return {
      trangThaiOptions: [
        {
          text: "Chọn",
          value: "tatca"
        },
        {
          text: "Tất cả",
          value: "tatca"
        },
        {
          text: "Khởi tạo",
          value: "khoitao"
        },
        {
          text: "Hoàn thành",
          value: "hoanthanh"
        },
        {
          text: "Lãnh đạo đơn vị phê duyệt",
          value: "pheduyet"
        },
        {
          text: "Thẩm định hồ sơ",
          value: "thamdinhhoso"
        },
        {
          text: "Tờ trình TCT",
          value: "totrinh"
        },
        {
          text: "Đã hủy",
          value: "thamdinhhoso"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-flex-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.home-header {
  padding: 12px 0;
  border-bottom: solid 1px #e2e8f0;
}
.home-button-add {
  background-color: var(--bg-color-font);
  padding: 12px 14px;
  border-radius: 8px;
  border: none;
}
.home-button-add:hover {
  background-color : red
}
.home-button-add-icon {
  margin-right: 10px;
}
.home-input-search {
  margin-right: 20px;
  height: 40px;
  width: 500px;
  padding: 0 10px;
  border: 1px solid var(--color-solid);
  background-color: #f9faff;
  border-radius: 4px;
}
a {
   text-decoration: none;
   color: #fff;
}

</style>
