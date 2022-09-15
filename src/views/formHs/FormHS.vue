<template>
  <div class="hoso space-left">
    <p class="title-page ">
      Thêm mới hồ sơ SCL
    </p>

    <form>
      <table class="home-table">
        <tr>
          <td>
            <p>
              Đơn vị thực hiện
            </p>
            <input type="text" value="Công ty nhiệt điện Phú Mỹ"/>
          </td>
          <td>
            <p>
              Chuyên viên thực hiện
            </p>
            <section>
              <option value="01">
                Nguyễn Văn A
              </option>
              <option>
                Nguyễn Văn B
              </option>
            </section>
          </td>
          <td>
            <input type="text" placeholder="Tìm kiếm..." />
          </td>
        </tr>
        <tr>
          <td>dd</td>
          <td>
            <input type="text" placeholder="Tìm kiếm......" />
          </td>
          <td>
            <input type="text" placeholder="Tìm kiếm..." />
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormHS"
};
</script>

<style scoped>
.hoso {
  background-color: #fff;
}
</style>
