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
    <HomePageListHS
      :listHs="listHs"
      @seletedHoSoDeleted="deleteHoSo"
      @filterHoSo = "filterHoSo"
    />
  </div>
</template>

<script>
import HomePageListHS from "./HomePageListHS.vue";
import axios from "axios";
export default {
  name: "HomePage",
  components: { HomePageListHS },

  data() {
    return {
      listHs: []
    };
  },
  methods: {
    callApi() {
      axios
        .get(`/HoSoScl`)
        .then(response => {
          this.listHs = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteHoSo(e) {
      console.log(e.id);
      axios
        .delete(`/HoSoScl/${e.id}`)
        .then(response => {
          this.callApi()
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    filterHoSo(e) {
      
      this.callApi()
      
      if(e==="Tất cả") {
        this.callApi()
        
      }
      else {
        this.listHs = this.listHs.filter(item => item.trangThai === e)
        // this.listHs = newArray
       
       
     

      }
    //   console.log(this.listHs);
    }
  },
  created() {
    this.callApi()
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
  background-color: red;
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
