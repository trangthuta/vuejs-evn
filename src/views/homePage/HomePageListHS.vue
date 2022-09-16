<template>
  <table class="home-table">
    <tr>
      <th>Thao Tác</th>
      <th>Mã hồ sơ</th>
      <th>Tên hồ sơ danh mục SCL</th>
      <th>Đơn vị thực hiện</th>
      <th>Chuyên viên thực hiện</th>
      <th>Hạn thực hiện</th>
      <th>Trạng thái</th>
      <th>Đơn vị thẩm định</th>
      <th>Chuyên viên thẩm định</th>
    </tr>

    <tr>
      <td></td>
      <td>
        <input type="text" placeholder="Tìm kiếm......" />
      </td>
      <td>
        <input type="text" placeholder="Tìm kiếm..." />
      </td>
      <td>
        <input type="text" placeholder="Tìm kiếm..." />
      </td>
      <td>
        <input type="text" placeholder="Tìm kiếm..." />
      </td>
      <td>
        <input type="date" />
      </td>
      <td>
        <select v-model="status" @change="filterHoSo">
          <option disabled value="">Chọn</option>
          <option>Tất cả</option>
          <option>Khởi tạo</option>
          <option>Đã hủy</option>
        </select>
      </td>
      <td>
        <input type="text" placeholder="Tìm kiếm..." />
      </td>
      <td>
        <input type="text" placeholder="Tìm kiếm..." />
      </td>
    </tr>

    <tr v-for="hoso in listHs" :key="hoso.id">
      <td>
        <i
          class="fa-solid fa-trash home-table-icon"
          @click="seletedHoSoDeleted(hoso)"
        ></i>
        <i class="fa-solid fa-pen-to-square home-table-icon"></i>
      </td>
      <td>
        {{ hoso.id }}
      </td>
      <td>
        {{ hoso.tenHoSo }}
      </td>
      <td>
        {{ hoso.donViThucHien }}
      </td>
      <td>
        {{ hoso.chuyenVienThucHien }}
      </td>
      <td>
        {{ formatTime(hoso.hanThucHien) }}
      </td>
      <td>
        {{ hoso.trangThai }}
      </td>
      <td>
        {{ hoso.donViThucHien }}
      </td>
      <td>
        {{ hoso.chuyenVienThucHien }}
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "HomePageListHS",
  props: ["trangThaiOptions", "listHs"],
  data() {
    return {
      status: ""
    };
  },
  methods: {
    seletedHoSoDeleted(e) {
      this.$emit("seletedHoSoDeleted", e);
    },
    formatTime(e) {
      const date = new Date(e).toLocaleDateString("vi-VI");
      return `${date}`;
    },
    filterHoSo() {
      this.$emit('filterHoSo' , this.status)
    
    
    }
  }
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  margin-top: 12px;
  text-align: center;
}

th,
td {
  border: solid 1px #e2e8f0;
  padding: 16px 5px;
  color: #344061;
}
td > input {
  width: 100%;
  border: none;
  outline: none;
  background-color: #f9fafd;
}
tr:nth-child(2) > td {
  margin: 8px 16px;
}
select {
  width: 100%;
  border: none;
  outline: none;
  background-color: #f9fafd;
}
.home-table-icon {
  font-size: 15px;
}
.home-table-icon:first-child {
  margin-right: 5px;
}
.home-table-icon:hover {
  color: red;
}
</style>
