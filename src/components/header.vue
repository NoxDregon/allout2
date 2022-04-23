<template>
    <div class="container">
        <img id="logo" src="">
        <span id="title">Allout</span>
        <button id="button" ><span>Добавить объявление</span><div id="line-btn"></div><img id="plus" src=""></button>
        <div id="line"></div>
        <span id="login">Вход для клиента /</span> 
        <span id="register">Регистрация</span>
        <div iud="auth"></div>
        <input id="search" placeholder="Поиск">
        <button id="search-button" ><img id="icon" src=""></button>
    </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    .container{
      position: relative;
      width: 1417px;
      height: 212px;
      top: 8px;
      left: 30%;
    }
    #title {
    position: relative;
    height: 36px;
    left: 30%;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 36px;
    color: #000000;
    }
    #text {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    color: #000;
    }
    #button{
      position: relative;
      width: 270px;
      height: 50px;
      top: 60px;
      left: 45%;
    }
    #button span{
      position: absolute;
      top: 30%;
      left: 15px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 130%;
      /* or 18px */

      text-transform: uppercase;

      color: #000000;
    }

    #line-btn{
      position: relative;
      border: 1px solid white;
      width: 1px;
      height: 48px;
      left: 215px;
    }
    #plus{
      position: relative;
      top: -38px;
      height: 18px;
      left: 112px;
    }
    #line{
      position: absolute;
      border: 1px solid black;
      width: 1000px;
      height: 1px;
      left: 0px;
      top: 130px;
      color: #000000;
    }
    #login{
      position: relative;
      height: 21px;
      top: 90px;
      left: 30.5%;
      cursor: pointer;
    }
    #register{
      position: relative;
      top: 90px;
      left: 31%;
      cursor: pointer;
    }
    #search{
      position: relative;
      width: 250px;
      height: 51px;
      top: 70px;
      left: 0%;
      font-size: 18px;
    }
    #search-button{
      position: relative;
      top: 73px;
      left: -50px;
      width: 51px;
      height: 55px;
      background: black;
      z-index:2;
    }

</style>