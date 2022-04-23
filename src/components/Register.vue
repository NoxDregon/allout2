<template>
  <div>
      <div id = "Contain">
          <p id = "LogIn">Войти</p>
          <p id = "Register"> Регестрация </p> 
          <input id = "NicknameInput" v-model="name" name = "nickname" placeholder="Имя пользователя">
          <input id = "EmailInput" v-model="email" name = "email" placeholder="Email">
          <input id = "Password" v-model="password" name = "password" placeholder="Пороль">
          <input id = "RepeatPassword" name = "repeatPassword" placeholder = "Повторите пароль"> 
          <input id = "Check" name = "check" type = "checkbox" >
          <p id = "CheckText">Согласен (согласена) с политикой конфиденциальности и правилами сайта.</p>
          <button id = "RegisterButton">РЕГИСТРАЦИЯ</button>
      </div>
  </div>
</template>

<script>
export default {
data() {
    return {
     name: '',
     email: '',
     password: '',
    
      }
    
},
 addUser(payload) {
      const path = 'http://localhost:5000/books';
      axios.post(path, payload)
        .then(() => {
         
        })
        .catch((error) => {
          // eslint-отключение следующей строки
          console.log(error);
        
        });
    },
    initForm() {
      this.name = '';
      this.email = '';
      this.password = ''
    },
    onSubmit(evt) {
      evt.preventDefault();
  
      const payload = {
        nickname: this.name,
        email: this.name,
        password: this.password,
      };
      this.addUser(payload);
      this.initForm();
    },
};



</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600);
#Contain{
    position: absolute;
width: 368px;
height: 520px;
left: 282px;
top: 220px;

}
#LogIn{
    position: absolute;
width: 58px;
height: 23px;
left: 45px;
top: 33px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
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
font-weight: 400;
font-size: 18px;
line-height: 130%;
text-align: center;
color: #000000;
}
#NicknameInput{
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
#EmailInput{
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
#Password{
  position: absolute;
width: 270px;
height: 50px;
left: 48px;
top: 220px;
background: #F1F1F1;
font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 130%;
text-align: center;
}
#RepeatPassword{
  position: absolute;
width: 270px;
height: 50px;
left: 48px;
top: 285px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 130%;
text-align: center;
background: #F1F1F1;
}
#Check { 
  position: absolute;
width: 18px;
height: 18px;
left: 48px;
top: 350px;

border: 1px solid #000000;
box-sizing: border-box;
}
#CheckText{
  position: absolute;
  width: 290px;
height: 54px;
left: 78px;
top: 336px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 130%;
}
#RegisterButton{
  position: absolute;
width: 270px;
height: 50px;
left: 52px;
top: 425px;
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