<template>
  <div>
      <div id = "Contain">
          <p id = "LogIn">Войти</p>
          <p id = "Register"> Регестрация </p> 
            <input id = "EmailInput" name = "email" placeholder="Email">
          <input id = "Password" name = "password" placeholder="Пороль">
          <p id = "ForgotPassword">Я забыл пороль </p>
          <button id = "LoginButton">Войти</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600);
#Contain{
    position: absolute;
width: 368px;
height: 520px;
left: 282px;
top: 220px;

background: #ffffff;
}
#LogIn{
    position: absolute;
width: 58px;
height: 23px;
left: 45px;
top: 33px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 130%;
text-align: center;

color: #000000;
}
#Register{
    position: absolute;
width: 122px;
height: 23px;
left: 202px;
top: 33px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 130%;
text-align: center;
color: #000000;
}
#EmailInput{
   position: absolute;
    width: 270px;
height: 50px;
left: 48px;
top: 90px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 130%;
text-align: center;
background: #F1F1F1;
}
#Password{
  position: absolute;
width: 270px;
height: 50px;
left: 48px;
top: 155px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 130%;
text-align: center;

background: #F1F1F1;
}
#ForgotPassword{
  position: absolute;
width: 290px;
height: 18px;
left: 40px;
top: 215px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 130%;

text-align: center;
text-decoration-line: underline;
}
#LoginButton{
position: absolute;
width: 270px;
height: 50px;
left: 49px;
top: 250px;

background: #C4C4C4;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 130%;

text-align: center;
text-transform: uppercase;

}
</style>