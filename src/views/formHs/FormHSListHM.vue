<template>
    <div class="container-add">
      <h3>Năm kế hoạch: 2023</h3>
      <div class="table-content">
          <table class="home-table">
        <tr>
          <th>Thao Tác</th>
          <th>Đơn vị quản lí</th>
          <th>Hạng mục</th>
          <th>Loại hình</th>
          <th>Từ ngày</th>
          <th>Đến ngày</th>
          <th>Số lượng ngày</th>
          <th>Nội dung thực hiện</th>
          <th>Ghi chú</th>
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
              <input type="date" />
          </td>
          <td>
            <input type="date" />
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
      </div>
      <!-- <div class="list-button">
          <button class="btn" id="luu">Lưu</button>
          <button class="btn" id="dong">Đóng</button>
      </div> -->
    </div>
  </template>
  
  <script>
  export default {
      name:"FormHSListHM"
  }
  </script>
  
  <style scoped>
      
      *{
          margin: 0px;
          padding:0px;
          box-sizing: border-box;
      }
      .container-add{
          margin: 0 30px;
      }
      .themmoi{
          margin: 15px 0;
      }
      .Add-Hoso{
          padding: 8px 20px;
          border-radius: 8px;
          background: #0F0E9F;
          color: white;
          border: none;
          font-size: 14px;
          font-family: "Roboto";
          
      }
      .stick{
          margin-top: 5px;
          border-bottom: 1px solid #0065D8;
      }
      h3{
          font-family: 'Roboto';
          font-weight: 700;
          color: #3D5586;
          font-size: 20px;
          padding-left: 20px;
      }
      table{
          border-collapse: collapse;
          width: 100%;
          background-color: rgba(255, 255, 255, 0.7);
          padding-bottom: 50px;
          margin: 15px 0;
      }
      th,
      td {
          border: 0.5px solid #4990EF;
          padding: 16px 5px;
          color: #344061;
          font-family: "Roboto";
      }
      td > input {
          width: 100%;
          border: none;
          outline: none;
          background-color: white;
      }
      tr:nth-child(2) > td {
          margin: 8px 16px;
      }
      .list-button{
          display: flex;
          justify-content: flex-end;
          background: #F9FAFF;;
          margin-top: 20px;
          margin-bottom: 20px;
          padding: 10px 0;
      }
      .btn{
          padding: 10px 30px;
          margin-left: 20px;
          border-radius: 6px;
      }
      #dong{
          color: white;
          background: #F35A22;
          border: none;
      }
      #luu{
          color: white;
          background:#0F0E9F;
          border: none;
      }
  </style>