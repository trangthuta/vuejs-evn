<template>
  <div class="pop-up">
   <div class="pop-up-box">
    <p>
        <slot name="msg"/>
    </p>
    <div>
        <button class="popup-button">
            <slot name="button1"/> 
        </button>
        <button class="popup-button">
            <slot name="button2"/> 
        </button>
    </div>
   </div>
  </div>
</template>

<script>
export default {
    name :'ConfirmPopUp',
};
</script>

<style>
.pop-up {
    background-color: rgba(108, 117, 125,0.4);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0 ;
    left : 0;
    z-index : 1999;
     text-align: center;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     
}
.pop-up-box {
     background-color: #fff;
     padding : 40px 0;
      width : 360px
}
.popup-button {
    padding : 12px 20px;
    border: none ;
    border-radius : 4px;
    color : #fff;
    font-weight: 500;
    background-color: #0F0E9F;
}
.popup-button:first-child {
    background-color : #F35A22;
     margin-right : 20px
}
.popup-icon {
  font-size: 40px;
  color : #E63946
}
.popup-title {
  color : var(--bg-color-font);
  font-size: 18px;
  margin : 40px 56px;
  /* line-height: 21,09px */
}
.popup-button:hover {
    /* background-color :#E63946; */
    transform: scale(1.1,1.1);
    transition:  all 0.4;
}


</style>
