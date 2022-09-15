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
        <select>
          <option v-for="option in trangThaiOptions " :key="option.index" :value="option.value"> {{option.text}}</option>
        </select>
      </td>
      <td>
        <input type="text" placeholder="Tìm kiếm..." />
      </td>
      <td>
        <input type="text" placeholder="Tìm kiếm..." />
      </td>
    </tr>

    <!-- <tr key={HoSo.Id}>
                <td className="home-table-function">{HoSo.ThaoTac}</td>
                <td>{HoSo.MaHS}</td>
                <td>{HoSo.TenHS}</td>
                <td>{HoSo.DVTH}</td>
                <td>{HoSo.CVTH}</td>
                <td>{HoSo.HanThucHien}</td>
                <td>{HoSo.TrangThai}</td>
                <td>{HoSo.DVTD}</td>
                <td>{HoSo.CVTD}</td>
              </tr> -->
  </table>
 </template>
 
 <script>
 export default {
 name : 'HomePageListHS',
 props : ['trangThaiOptions']
 }
 </script>
 
 <style scoped>
 table {
  border-collapse: collapse;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  margin-top: 12px;
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
 </style>