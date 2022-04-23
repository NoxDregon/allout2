<template>
  <div>
      <div>
           <span id="title">Личный кабинет</span>
    <div class="tabs">
      <span id="mydata">Мои данные</span>
      <span id="personalscore">Личный счёт</span>
      <span id="mytovarsbuy">Мои товар покупка</span>
      <span id="mytovarssale">Мои товары продажа</span>
      <span id="mybits">Мои ставки</span>
      <span id="folowers">Избранное</span>
      <span id="question">Вопросы</span>
      <span id="support">Поддержка</span>
    </div>
    <div class="mydata">
      <span id="setting">Настройки</span>
      <span id="adress">Адреса</span>
      <span id="password">Пароли</span>
      <span id="notification">Уведомления</span>
    </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#title{
position: absolute;
width: 361px;
height: 50px;
left: 42%;
top:  87px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 130%;
/* or 47px */

text-align: center;

color: #000000;
}

.tabs{
  position: relative;
  width: 1070px;
  height: 50px;
  top: 170px;
  left: 25%;
  border-top: 1px solid  rgba(0, 0, 0, 0.25);
  border-bottom: 1px solid  rgba(0, 0, 0, 0.25);
}
.tabs span{
  position: relative;
  top: 15px;
  margin: 0 20px;

  font-family: 'Montserrat' sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 130%;
/* identical to box height, or 21px */


color: rgba(0, 0, 0, 0.5);

}
.mydata{
  position: relative;
  width: 430px;;
  height: 50px;
  top: 170px;
  left: 45%;
  border-bottom: 1px solid  rgba(0, 0, 0, 0.25);
}

.mydata span{
    position: relative;
  top: 15px;
  margin: 0 20px;

  font-family: 'Montserrat' sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 130%;
/* identical to box height, or 21px */


color: rgba(0, 0, 0, 0.5);
}
