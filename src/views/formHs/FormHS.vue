<template>
  <div class="hoso">
    <p class="title-page hoso-title">Thêm mới hồ sơ SCL</p>
    <form @submit.prevent="SubmitFomHoSo()">
      <table class="home-table">
        <tr>
          <td class="home-table-cell">
            <p class="home-table-cell-title">Đơn vị thực hiện :</p>
            <input
              type="text"
              :value="hoSo.donVi"
              class="style-input"
              disabled
            />
          </td>
          <td class="home-table-cell">
            <p class="home-table-cell-title">Chuyên viên thực hiện :</p>
            <select class="style-input" v-model="hoSo.chuyenVien" @change="validateForm">
              <option value="" disabled>Chọn</option>
              <option>Tạ Thị Thu Trang</option>
              <option>Nguyễn Văn A</option>
              <option>Nguyễn Văn B</option>
              <option>Nguyễn Văn C</option>
            </select>
            <p v-if="hoSoErrorMsg.chuyenVienErrorMsg" class="error-message">
              {{ hoSoErrorMsg.chuyenVienErrorMsg }}
            </p>
          </td>
          <td class="home-table-cell">
            <p class="home-table-cell-title">Loại hồ sơ :</p>

            <select class="style-input" v-model="hoSo.loaiHoSo" @change="validateForm">
              <option value="" disabled>Chọn</option>
              <option v-for="loai in loaiHoSo"  :key="loai.id"  :value="loai.id"> {{loai.tenLoaiHoSo}}</option>
              <!-- <option>Kế hoạch năm </option>
              <option>Kế hoạch đột xuẩt</option> -->
            </select>
            <p v-if="hoSoErrorMsg.loaiHoSoErrorMsg" class="error-message">
              {{ hoSoErrorMsg.loaiHoSoErrorMsg }}
            </p>
          </td>
        </tr>
        <tr>
          <td class="home-table-cell" colspan="3">
            <p class="home-table-cell-title">Tên hồ sơ danh mục SCL :</p>
            <input type="text" class="style-input" v-model="hoSo.tenHoSo" @blur="validateForm" @keypress.enter="validateForm"/>
            <p v-if="hoSoErrorMsg.tenHoSoErrorMsg" class="error-message">
              {{ hoSoErrorMsg.tenHoSoErrorMsg }}
            </p>
          </td>
        </tr>
        <tr>
          <td class="home-table-cell">
            <p class="home-table-cell-title">Năm kế hoạch :</p>
            <div class="home-flex-box home-dropdown-years">
              <div class="w-45">
                <select class="style-input" v-model="hoSo.namKeHoachDau" @change="validateForm"> 
                  <option value="" disabled>Chọn</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                </select>
                <p
                  v-if="hoSoErrorMsg.namKeHoachDauErrorMsg"
                  class="error-message"
                >
                  {{ hoSoErrorMsg.namKeHoachDauErrorMsg }}
                </p>
              </div>
              <p>~</p>
              <div class="w-45">
                <select class="style-input" v-model="hoSo.namKeHoachCuoi" @change="validateForm">
                  <option value="" disabled>Chọn</option>
                  <option>2022</option>
                  <option>2024</option>
                  <option>2025</option>
                </select>
                <p
                  v-if="hoSoErrorMsg.namKeHoachCuoiErrorMsg"
                  class="error-message"
                >
                  {{ hoSoErrorMsg.namKeHoachCuoiErrorMsg }}
                </p>
              </div>
            </div>
          </td>
          <td class="home-table-cell">
            <p class="home-table-cell-title">Hạn thực hiện :</p>
            <input type="date" class="style-input" @change="validateForm" v-model="hoSo.hanThucHien"/>
            <p v-if="hoSoErrorMsg.hanThucHienErrorMsg" class="error-message">
              {{ hoSoErrorMsg.hanThucHienErrorMsg }}
            </p>
          </td>
        </tr>
        <tr>
          <td class="home-table-cell" colspan="3">
            <p class="home-table-cell-title">Nội dung hồ sơ :</p>
            <textarea class="style-input" v-model="hoSo.noiDungHoSo" @change="validateForm">
            </textarea>
            <p v-if="hoSoErrorMsg.noiDungHoSoErrorMsg" class="error-message">
              {{ hoSoErrorMsg.noiDungHoSoErrorMsg }}
            </p>
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
        Thêm mới
      </p>
    </button>

    <FormHSListHM />
  </div>
</template>

<script>
import FormHSListHM from "./FormHSListHM.vue";
import axios from "axios";
export default {
  name: "FormHS",
  components: { FormHSListHM },
  data() {
    return {
      loaiHoSo :[] ,
      fileToTrinh: [],
      errMessageFile: "Tệp đính kèm không được quá 2MB",
      filePhuLuc: [],
      errMessageFilePhuLuc: "Tệp đính kèm không được quá 2MB",
      hoSo: {
        donVi: "Công ty nhiệt điện Phú Mỹ",
        chuyenVien: "",
        loaiHoSo: 1,
        tenHoSo: "",
        namKeHoachDau: "",
        namKeHoachCuoi: "",
        hanThucHien: "",
        noiDungHoSo: ""
      },
      hoSoErrorMsg: {
        chuyenVienErrorMsg: "",
        loaiHoSoErrorMsg: "",
        tenHoSoErrorMsg: "",
        namKeHoachDauErrorMsg: "",
        namKeHoachCuoiErrorMsg: "",
        hanThucHienErrorMsg: "",
        noiDungHoSoErrorMsg: ""
      } ,
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
      console.log(this.hoSo.loaiHoSo);
      const hoSo = {
  tenHoSo:this.hoSo.tenHoSo,
  hanThucHien: this.hoSo.hanThucHien,
  noiDungHoSo: this.hoSo.noiDungHoSo,
  namKeHoachDau: this.hoSo.namKeHoachDau,
  namKeHoachCuoi: this.hoSo.namKeHoachCuoi,
  // loaiHoSoId: this.hoSo.,
  donViThucHienId: this.hoSo.tenHoSo,
  chuyenVienThucHienId: this.hoSo.tenHoSo
}
    
     if(this.validateForm){
      axios
        .post(`/HoSoScl`)
        .then(response => {
          this.listHs = response.data;
          console.log(response.data);             
        })
        .catch(e => {
          console.log(e);
        });
     }
      // axios
      //   .post(`/HoSoScl`)
      //   .then(response => {
      //     this.listHs = response.data;
      //     console.log(response.data);
      //   })
      //   .catch(e => {
      //     console.log(e);
      //   });
    },
    validateForm() {
      let isValid = true
      this.hoSoErrorMsg = {
        chuyenVienErrorMsg: "",
        loaiHoSoErrorMsg: "",
        tenHoSoErrorMsg: "",
        namKeHoachDauErrorMsg: "",
        namKeHoachCuoiErrorMsg: "",
        hanThucHienErrorMsg: "",
        noiDungHoSoErrorMsg: ""
      }
      if(this.hoSo.chuyenVien === "") {
        this.hoSoErrorMsg.chuyenVienErrorMsg = "Bạn chưa chọn Chuyên viên đơn vị" 
         isValid =false
      }
       if(this.hoSo.loaiHoSo === "") {
        this.hoSoErrorMsg.loaiHoSoErrorMsg = "Bạn chưa chọn Loại hồ sơ" 
         isValid =false
      }
       if(this.hoSo.tenHoSo === "") {
        this.hoSoErrorMsg.tenHoSoErrorMsg = "Bạn nhập Tên hồ sơ" 
         isValid =false
      }
      if(this.hoSo.namKeHoachDau === "") {
        this.hoSoErrorMsg.namKeHoachDauErrorMsg = "Bạn chưa chọn Năm kế hoạch đầu" 
         isValid =false
      }
      if(this.hoSo.namKeHoachCuoi === "") {
        this.hoSoErrorMsg.namKeHoachCuoiErrorMsg = "Bạn chưa chọn Năm kế hoạch cuối" 
         isValid =false
      }
      if(this.hoSo.hanThucHien === "") {
        this.hoSoErrorMsg.hanThucHienErrorMsg = "Bạn chưa chọn Hạn thực hiện" 
         isValid =false
      }
      if(this.hoSo.noiDungHoSo.length >255) {
        this.hoSoErrorMsg.noiDungHoSoErrorMsg = "Nội dung hồ sơ không được quá 255 kí tự" 
         isValid =false
      }
      return isValid
     
    }
  },
  created() {
      axios
        .get(`/LoaiHoSo`)
        .then(response => {
          this.loaiHoSo = response.data
          console.log( this.loaiHoSo);
        })
        .catch(e => {
          console.log(e);
        });
  }
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
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
  margin: 20px 30px;
}

.form-button-add:hover {
  background-color: red;
}
.form-button-add-icon {
  margin-right: 10px;
  display: block;
}
.error-message {
  color: red;
}
</style>
