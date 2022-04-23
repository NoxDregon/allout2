<template>
  <div class="container">
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
    <div class="setting">
      <span id="login">Логин:</span>
      <span id="login-user">Wladik</span>
      <img class="pen" id="pen_login" src="">
      <div class="line" id="line_1"></div>

      <span id="password">Пароль:</span>
      <span id="password-user"></span>
      <img class="pen" id="pen_password" src="">
      <div class="line" id="line_2"></div>
      
      <span id="surname">Фамилия:</span>
      <span id="surname-user">Лыков</span>
      <img class="pen" id="pen_surname" src="">
      <div class="line" id="line_3"></div>


      <span id="name">Имя:</span>
      <span id="name-user">Владислав</span>
      <img class="pen" id="pen_name" src="">
      <div  class="line" id="line_4"></div>


      <span id="email">Email:</span>
      <span id="email-user">test@gmail.com</span>
      <img class="pen" id="pen_email" src="">
      <div class="line" id="line_5"></div>


      <span id="phone">Телефон:</span>
      <span id="phone-user">8-800-555-35-35</span>
      <img class="pen" id="pen_phone" src="">
      <div class="line" id="line_6"></div>


      <span id="adress-user">Адреса</span>
      <div class="line" id="line_8"></div>
      <span id="town">Город:</span>
      <span id="town-user">Тула</span>
      <img class="pen" id="pen_phone" src="">
    </div>
  </div>
</template>
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

.setting{
  position: relative;
  width: 430px;
  height: 631;
  top: 200px;
  left: 940px;
}

.line{
  position: relative;
  width: 430px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  top: 15px;
}

.setting span{
position: relative;
font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 130%;
/* identical to box height, or 21px */

color: #000000;
margin-bottom: 30px;
}


.pen{
  position: absolute;
  height: 16px;
}

</style>