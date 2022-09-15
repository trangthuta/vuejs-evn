<template>
  <header class="header flex-box padding" 
  >
    <div class="header-left flex-box">
      <i class="fa-solid fa-bars icon-size"></i>
      <p class="header-title">
        quy tắc phê duyệt danh mục sửa chữa lớn
      </p>
    </div>
    <div class="header-right flex-box">
      <i class="fa-regular fa-envelope icon-size"></i>
      <i class="fa-regular fa-user icon-size"></i>
      <div>
        <p class="header-username">
          Nguyễn Văn A
        </p>
        <p>
          Chuyên viên
        </p>
      </div>
      <i class="fa-solid fa-chevron-down "></i>
    </div>
  </header>
</template>

<script>
import { boolean } from 'is2';

export default {
  name: "TheHeader" ,
  props : {
    show : boolean
  },
};
</script>

<style scoped>
.header {
  padding: 7px 30px;
}
.header-left {
     gap : 0 16px
}
.header-right {
    gap : 0 10px
}
.flex-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* gap: 0 10px; */
}
.header-title {
text-transform: uppercase;
font-size: 20px;
color : #3D5586;
font-weight: 500;
}
.icon-size {

  font-size: 22px;
}

.fa-bars:hover,
.header-title:hover {
 color : var(--bg-color-font)
}
.header-username {
     font-size: 16px;
     color : var(--bg-color-font) ;
    font-weight : 500
}
 .fa-envelope {
     color : #bdc3c7
 }
 .padding {
     padding-left: 280px;
 }
</style>
