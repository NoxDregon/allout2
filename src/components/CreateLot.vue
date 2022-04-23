
<template>
<div>
    <p id = "NewLotText">Новое объявление</p>
      <p id = "LocationUpText">Город:</p>
      <input id = "Location" v-model="city" name="location" type="text" >
      <p id = "NameUpText">Название лота:</p>
      <input type="text" v-model="name" name="login" id = "Name" />
      <p id = "PhotoUpText">Фото:</p>
      <input name = "photo" ref="photo" type="file" id = "Photo">
      <p id = "DiscriptionUpText">Описание:</p> 
    <input v-model="description" type = "text" id = "Discription">
    <p id = "StartPriceUpText">Начальная цена:</p>
    <input type = "text" v-model="startPrice" name="StartPrice" id = "StartPrice" />
    <button id = "SumbitButton">Выставить</button>

    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
    
    city: '',
    name: '',
    startPrice: '',
    imageUrl: '',
    description: '',
    
 
    
    
      }
      
  
  },


addLot(payload) {
      const path = 'http://localhost:5000/books';
      axios.post(path, payload)
      
        .catch((error) => {
          // eslint-отключение следующей строки
          console.log(error);
    
        });
    },
    initForm() {
      this.city = '';
      this.name = '';
      this.startPrice = '';
      this.imageUrl = '';
      this.description = '';
      
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.$refs.addBookModal.hide();
      let read = false;
      
      const payload = {
      location: this.city = '',
      lotName: this.name = '',
      startCost: this.startPrice = '',
      imageUrl: this.imageUrl = '',
      description: this.description = ''
      };
      this.addLot(payload);
      this.initForm();
    },
    
  
}
    
  


</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600);
#NewLotText{
    
position: absolute;
width: 369px;
height: 43px;
left: 640px;
top: 117px;


font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 120%;
text-align: center;


color: #000000;
}
#LocationUpText{
    position: absolute;
width: 155.72px;
height: 19px;
left: 560px;
top: 196px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 130%;
}
#Location{
    position: absolute;
width: 550px;
height: 40px;
left: 540px;
top: 230px;
 font-family: inherit;
  font-size: var(--inputFontSize);
  font-weight: inherit;
  line-height: var(--inputLineHeight);
  border-radius: 0.4rem;
  font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 130%;
}
#NameUpText{
    position: absolute;
width: 242.93px;
height: 19px;
left: 560.24px;
top: 275px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 130%;
}
#Name{
    position: absolute;
width: 550px;
height: 40px;
left: 540px;
top: 309px;
display: block;
 font-family: inherit;
  font-size: var(--inputFontSize);
  font-weight: inherit;
  line-height: var(--inputLineHeight);
  border-radius: 0.4rem;
 font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 130%;
}
#PhotoUpText{
    position: absolute;
width: 155.72px;
height: 19px;
left: 560px;
top: 349px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 130%;


}
#Photo{
      position: absolute;
width: 550px;
height: 40px;
left: 540px;
top: 383px;
display: block;
 font-family: inherit;
  font-size: var(--inputFontSize);
  font-weight: inherit;
  line-height: var(--inputLineHeight);

  font-size: 20px;
  font-family: 'Montserrat';
  font-style: normal;
}
#StartPriceUpText{
    position: absolute;
width: 155.72px;
height: 19px;
left: 560px;
top: 408px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 130%;
}
#StartPrice{
   position: absolute;
width: 550px;
height: 40px;
left: 540px;
top: 443px; 
 font-family: inherit;
  font-size: var(--inputFontSize);
  font-weight: inherit;
  line-height: var(--inputLineHeight);
  border-radius: 0.4rem;
  font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 130%;
}
#SumbitButton{
position: absolute;
width: 263px;
height: 50px;
left: 690px;
top: 583px;

background: #C4C4C4;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 130%;
 border-radius: 0.4rem;


text-align: center;
}
#DiscriptionUpText{
   position: absolute;
width: 155.72px;
height: 19px;
left: 560px;
top: 478px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 130%;
}
#Discription{
  position: absolute;
width: 550px;
height: 40px;
left: 540px;
top: 510px; 
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 130%;
 border-radius: 0.4rem;
}
</style>