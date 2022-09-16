<template>
  <div class="hoso">
    <p class="title-page hoso-title">Thêm mới hồ sơ SCL</p>
    <form action="">
      <table class="home-table">
        <tr>
          <td class="home-table-cell">
            <p class="home-table-cell-title">Đơn vị thực hiện :</p>
            <input
              type="text"
              value="Công ty nhiệt điện Phú Mỹ"
              class="style-input"
              disabled
            />
          </td>
          <td class="home-table-cell">
            <p class="home-table-cell-title">Chuyên viên thực hiện :</p>
            <select id="cars" class="style-input">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="vw">VW</option>
              <option value="audi" selected>Audi</option>
            </select>
          </td>
          <td class="home-table-cell">
            <p class="home-table-cell-title">Chuyên viên thực hiện :</p>
            <select id="cars" class="style-input">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="vw">VW</option>
              <option value="audi" selected>Audi</option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="home-table-cell" colspan="3">
            <p class="home-table-cell-title">Tên hồ sơ danh mục SCL :</p>
            <input type="text" class="style-input" />
          </td>
        </tr>
        <tr>
          <td class="home-table-cell">
            <p class="home-table-cell-title">Năm kế hoạch :</p>
            <div class="home-flex-box home-dropdown-years">
              <div class="w-45">
                <select id="cars" class="style-input">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="vw">VW</option>
                  <option value="audi" selected>Audi</option>
                </select>
              </div>
              <p>~</p>
              <div class="w-45">
                <select id="cars" class="style-input">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="vw">VW</option>
                  <option value="audi" selected>Audi</option>
                </select>
              </div>
            </div>
          </td>
          <td class="home-table-cell">
            <p class="home-table-cell-title">Hạn thực hiện :</p>
            <input type="date" class="style-input" />
          </td>
        </tr>
        <tr>
          <td class="home-table-cell" colspan="3">
            <p class="home-table-cell-title">Nội dung hồ sơ :</p>
            <textarea class="style-input"> </textarea>
          </td>
        </tr>
        <tr>
          <td class="home-table-cell" colspan="3">
            <div class="home-flex-box home-file">
              <p class="home-table-cell-title">
                1.Tờ trình hồ sơ danh mục SCL :
              </p>
              <input
                type="file"
                class="custom-file-input"
                multiple
                @change="handleGetFileToTrinh"
              />
            </div>
            <p v-show="fileToTrinh.length === 0" class="file-name">
              {{ errMessageFile }}
            </p>
            <p v-for="file in fileToTrinh" :key="file.index" class="file-name">
              {{ file.name }}
            </p>
          </td>
        </tr>

        <tr>
          <td class="home-table-cell" colspan="3">
            <div class="home-flex-box home-file">
              <p class="home-table-cell-title">
                2.Phụ lục hồ sơ danh mục SCL :
              </p>
              <input
                type="file"
                class="custom-file-input"
                multiple
                @change="handleGetFilePhuLuc"
              />
            </div>
            <p v-show="filePhuLuc.length === 0" class="file-name">
              {{ errMessageFilePhuLuc }}
            </p>
            <p v-for="file in filePhuLuc" :key="file.index" class="file-name">
              {{ file.name }}
            </p>
          </td>
        </tr>
      </table>
    </form>
    <button class="form-button-add" @click="addHoSo">
      <img src="../../assets/Plus.png" alt="" class="home-button-add-icon" />
      <p>
        Lưu
      </p>
    </button>

    <FormHSListHM/>
  </div>
</template>

<script>
import FormHSListHM from './FormHSListHM.vue'
export default {
  name: "FormHS",
  components : {FormHSListHM} ,
  data() {
    return {
      fileToTrinh: [],
      errMessageFile: "Tệp đính kèm không được quá 2MB",
      filePhuLuc: [],
      errMessageFilePhuLuc: "Tệp đính kèm không được quá 2MB",
    };
  },
  methods: {
    handleGetFileToTrinh(e) {
      const files = e.target.files;
      for (let i = 0; i < files.length; i++) {
        this.fileToTrinh.push(files[i]);
      }
    },
    handleGetFilePhuLuc(e) {
      const files = e.target.files;
      for (let i = 0; i < files.length; i++) {
        this.filePhuLuc.push(files[i]);
        console.log(this.filePhuLuc);
      }
    },
    addHoSo() {
      // axios
      //   .post(`/HoSoScl`)
      //   .then(response => {
      //     this.listHs = response.data;
      //     console.log(response.data);
      //   })
      //   .catch(e => {
      //     console.log(e);
      //   });
    }
  },
};
</script>

<style scoped>
.hoso {
  background-color: #fff;
  padding-left: 250px;
}
.hoso-title {
  border-bottom: 1px solid var(--color-border-form);
  padding-left: 30px;
}
.home-table {
  width: 100%;
  padding: 10px 0;
  font-weight: 400;
  font-size: 14px;
}
td {
  padding: 0 30px;
  padding-bottom: 14px;
  margin: 10px;
}

.home-table-cell-title {
  color: #3d5586;
  margin-bottom: 5px;
}
.style-input {
  border: 1px solid var(--color-border-form);
  border-radius: 4px;
  color: var(--color-font-form);
  height: 30px;
  width: 100%;
}
.w-45 {
  width: 40%;
}
.home-flex-box {
  display: flex;
  align-items: center;
}
.home-dropdown-years {
  justify-content: space-between;
}
input,
textarea,
select {
  border: none;
  outline: none;
}
textarea {
  height: 120px !important;
}
.home-file {
  align-items: center;
  gap: 0 10px;
}
.home-file > p {
  margin-bottom: 0;
}
.file-name {
  padding: 5px 0;
  color: #8390af;
}
form {
  border-bottom: 1px solid var(--color-border-form);
}
.form-button-add {
  background-color: var(--bg-color-font);
  padding: 12px 14px;
  border-radius: 8px;
  border: none;
  color : white;
   display: flex;
   justify-content: center;
   align-items: center;
   gap : 0 10px;
   margin : 20px 30px
  }

.form-button-add:hover {
  background-color : red}
.form-button-add-icon {
  margin-right: 10px;
  display: block;
}
</style>
