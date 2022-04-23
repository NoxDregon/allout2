<template>
  <div>
      
      <tr v-for="(lot, index) in lots" :key="index">
    <div id = "LotContainer">
        <img src = "assets/Favorite.png" id = "heart">
        <img src = "" id = "LotPreviev">
        <p id = "LotName">{{lotName}}</p> <!--Название лота-->
        <p id = "EndText">Окончание:</p>
        <p id = "TimeText">{}</p> <!--Время оставшееся-->
        <p id = "NowPriceText">Текущая цена:</p>
        <p id = "NowPrice">{{nowCost}} </p> <!--Нынешний прайс-->
    
  </div>
    </tr>
    
    </div>
  
  
</template>
<script>
import axios from 'axios';
export default {
   data() {
    return {
      lotName: '',
      duration: '',
      nowCost: '',
      lots:[]

    };
  },
  methods: {
    getBooks() {
      const path = 'http://localhost:5000/books';
      axios.get(path)
        .then((res) => {
          this.lotName = res.data.lotName;
          this.duration = res.data.Duration;

          this.nowCost = res.data.NowCost;
        })  
        .catch((error) => {
          // eslint-отключение следующей строки
          console.error(error);
        });
    },
  },
  created() {
    this.getBooks();
  },
};



</script>

<style lang="scss">
#LotContainer{
 
width: 270px;
height: 410px;
border-bottom: 1px;
border-color:#000000;
}
#LotPreviev{
position: relative;
width: 269px;
height: 270px;
}
#LotName{
    position: absolute;
width: 250px;
height: 46px;
left: 10px;
top: 277px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 130%;
text-align: center;

color: #000000;
}
#EndText{
    position: absolute;
width: 97px;
height: 21px;
left: 20px;
top: 324px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 130%;
color: rgba(0, 0, 0, 0.5);
}
#TimeText{
    position: absolute;
width: 70px;
height: 21px;
left: 720px;
top: 1522px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 130%;
text-align: right;
color: #000000;
}
#NowPriceText{
position: absolute;
width: 117px;
height: 21px;
left: 20px;
top: 373px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 130%;
color: rgba(0, 0, 0, 0.5);
}
#NowPrice{
    position: absolute;
width: 77px;
height: 21px;
left: 173px;
top: 373px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 130%;
text-align: right;

color: #000000;
}
#heart{
    position: relative;
top: 11px;
bottom: 240px;
background: #000000;
}
</style>