<template>
	<div class="description-lot">
		<div class="description-lot__container">
			<div class="description-lot__left-side">
				<div class="description-lot__top-side">
					<div class="description-lot__row">
						<div class="description-lot__column">
							<div class="description-lot__image"><img src="" alt=""></div>
						</div>
						<div class="description-lot__column description-lot__column_small">
							<div class="description-lot__img"><img src="" alt=""></div>
							<div class="description-lot__img"><img src="" alt=""></div>
							<div class="description-lot__img"><img src="" alt=""></div>
							<div class="description-lot__img"><img src="" alt=""></div>
						</div>
					</div>
					<div class="description-lot__row">
						<div class="description-lot__content">
							<div class="description-lot__line"></div>
							<div class="description-lot__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
							<div class="description-lot__line"></div>
							<div class="description-lot__text-box">
								<div class="description-lot__text-left">Название:</div>
								<div class="description-lot__text-right">{{lotName}}</div>
							</div>
							<div class="description-lot__text-box">
								<div class="description-lot__text-left">Текущая цена:</div>
								<div class="description-lot__text-right">{{nowCost}} руб.</div>
							</div>
							<div class="description-lot__text-box">
								<div class="description-lot__text-left">Лидер:</div>
								<div class="description-lot__text-right">Имя лидера</div>
							</div>
							<div class="description-lot__text-box">
								<div class="description-lot__text-left">Стартовая цена:</div>
								<div class="description-lot__text-right">{{startPrice}} руб.</div>
							</div>
							<div class="description-lot__text-box">
								<div class="description-lot__text-left">Шаг ставки:</div>
								<div class="description-lot__text-right">1 000 руб.</div>
							</div>
							<div class="description-lot__text-box">
								<div class="description-lot__text-left">Ставок:</div>
								<div class="description-lot__text-right">52</div>
							</div>
							<div class="description-lot__text-box">
								<div class="description-lot__text-left">Осталось до конца торгов:</div>
								<div class="description-lot__text-right">2 дня</div>
							</div>
							<div class="description-lot__text-box">
								<div class="description-lot__text-left">Состояние товара</div>
								<div class="description-lot__text-right">Есть царапины </div>
							</div>
							<div class="description-lot__text-box">
								<div class="description-lot__text-left">Начало торгов:</div>
								<div class="description-lot__text-right">26.04.2022 09:22</div>
							</div>
							<div class="description-lot__text-box">
								<div class="description-lot__text-left">Завершение торгов:</div>
								<div class="description-lot__text-right">28.04.2022 09:22</div>
							</div>
							<div class="description-lot__text-box">
								<div class="description-lot__text-left">Номер лота:</div>
								<div class="description-lot__text-right">h1321321</div>
							</div>
							<div class="description-lot__text-box">
								<div class="description-lot__text-left">Месторасположение:</div>
								<div class="description-lot__text-right">Тула</div>
							</div>
							<div class="description-lot__line"></div>
						</div>
					</div>
				</div>
				<div class="description-lot-bottom-side _tabs">
					<nav class="description-lot-bottom-side__button-box">
						<button class="description-lot-bottom-side__btn _tabs-item _active">Описание</button>
						<button class="description-lot-bottom-side__btn _tabs-item">Вопросы продовцу</button>
						<button class="description-lot-bottom-side__btn _tabs-item">История ставок</button>
					</nav>
					<div class="description-lot-bottom-side__screns">
						<div class="description-lot-bottom-side__first-screen _tabs-block _active">
							<div class="description-lot-bottom-side__footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis cursus ornare quisque aliquam etiam. Viverra egestas nam sed luctus. Dignissim diam sed nullam et et. Convallis viverra adipiscing posuere amet. Tellus facilisis sed molestie tortor ultrices duis at neque, in. Et id mauris ac, feugiat.</div>
							<div class="description-lot-bottom-side__footer-text">Et id vestibulum in tellus ut. Et ac velit orci volutpat aliquam lectus tortor, aenean fringilla. Proin mattis quam nibh praesent urna nunc, quis blandit iaculis. Imperdiet consectetur sit odio id. Amet sagittis, nulla semper vulputate tempor pellentesque tempus nisi, eu. Senectus tristique quis vitae at maecenas cras. Morbi tortor augue elit sit et risus, luctus lacinia. Volutpat, maecenas viverra vel habitant porta mattis mauris vitae. Blandit quam urna dolor, in leo. Est sit velit facilisis eget quis odio eleifend. Cursus scelerisque faucibus laoreet arcu dui feugiat quis tellus nisi. Nisl sit id laoreet curabitur dui nulla lorem dictum. Id egestas est auctor ut in sed ipsum sollicitudin tellus. Nec, rhoncus malesuada eleifend nibh aliquet.</div>
						</div>
						<div class="description-lot-bottom-side__second-screen _tabs-block _active">
							<div class="description-lot-bottom-side__question-box">
								<div class="description-lot-bottom-side__title-box">
									<div class="description-lot-bottom-side__title-name">Имя фамилия</div>
									<div class="description-lot-bottom-side__title-price">30.12.20</div>
								</div>
								<div class="description-lot-bottom-side__footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, suscipit porttitor eget fames nulla. Sollicitudin dignissim eu sit dictum. Quis lobortis tellus diam neque sit feugiat maecenas. Vehicula amet sodales sapien, faucibus sed scelerisque. Ornare amet, lacus turpis egestas magna nibh arcu. Diam lorem aliquet tellus cras. Ornare lobortis commodo, nisl, commodo sociis.</div>
							</div>
							<div class="description-lot-bottom-side__question-box">
								<div class="description-lot-bottom-side__title-box">
									<div class="description-lot-bottom-side__title-name">Имя фамилия</div>
									<div class="description-lot-bottom-side__title-price">30.12.20</div>
								</div>
								<div class="description-lot-bottom-side__footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, suscipit porttitor eget fames nulla. Sollicitudin dignissim eu sit dictum. Quis lobortis tellus diam neque sit feugiat maecenas. Vehicula amet sodales sapien, faucibus sed scelerisque. Ornare amet, lacus turpis egestas magna nibh arcu. Diam lorem aliquet tellus cras. Ornare lobortis commodo, nisl, commodo sociis.</div>
							</div>
							<div class="description-lot-bottom-side__question-box">
								<div class="description-lot-bottom-side__title-box">
									<div class="description-lot-bottom-side__title-name">Имя фамилия</div>
									<div class="description-lot-bottom-side__title-price">30.12.20</div>
								</div>
								<div class="description-lot-bottom-side__footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, suscipit porttitor eget fames nulla. Sollicitudin dignissim eu sit dictum. Quis lobortis tellus diam neque sit feugiat maecenas. Vehicula amet sodales sapien, faucibus sed scelerisque. Ornare amet, lacus turpis egestas magna nibh arcu. Diam lorem aliquet tellus cras. Ornare lobortis commodo, nisl, commodo sociis.</div>
							</div>
							<div class="description-lot-bottom-side__footer-button">
								<button class="description-lot-bottom-side__footer-btn">ЗАДАТЬ ВОПРОС</button>
							</div>
						</div>
						<div class="description-lot-bottom-side__third-screen _tabs-block _active">
							<div class="description-lot-bottom-side__box-title-history">
								<div class="description-lot-bottom-side__title-history description-lot-bottom-side__title-history_first">Время</div>
								<div class="description-lot-bottom-side__title-history description-lot-bottom-side__title-history_second">Логин</div>
								<div class="description-lot-bottom-side__title-history description-lot-bottom-side__title-history_third">Ставка</div>
								<div class="description-lot-bottom-side__title-history description-lot-bottom-side__title-history_fourth">Цена</div>
							</div>
							<div class="description-lot-bottom-side__line"></div>
							<div class="description-lot-bottom-side__history-box">
								<div class="description-lot-bottom-side__data">
									<div class="description-lot-bottom-side__month">28/04</div>
									<div class="description-lot-bottom-side__time">08:54</div>
								</div>
								<div class="description-lot-bottom-side__login description-lot-bottom-side__login_yellow">vladsm(50+)</div>
								<div class="description-lot-bottom-side__bid">260</div>
								<div class="description-lot-bottom-side__price">250</div>
								<div class="description-lot-bottom-side__cost description-lot-bottom-side__cost_yellow">250</div>
							</div>
							<div class="description-lot-bottom-side__line"></div>
							<div class="description-lot-bottom-side__history-box">
								<div class="description-lot-bottom-side__data">
									<div class="description-lot-bottom-side__month">28/04</div>
									<div class="description-lot-bottom-side__time">08:54</div>
								</div>
								<div class="description-lot-bottom-side__login description-lot-bottom-side__login_green">vl**ad**sm (2)</div>
								<div class="description-lot-bottom-side__bid">260</div>
								<div class="description-lot-bottom-side__price">250</div>
								<div class="description-lot-bottom-side__cost description-lot-bottom-side__cost_green">250</div>
							</div>
							<div class="description-lot-bottom-side__line"></div>
							<div class="description-lot-bottom-side__history-box">
								<div class="description-lot-bottom-side__data">
									<div class="description-lot-bottom-side__month">28/04</div>
									<div class="description-lot-bottom-side__time">06:54</div>
								</div>
								<div class="description-lot-bottom-side__start">Начало торгов</div>
								<div class="description-lot-bottom-side__price description-lot-bottom-side__price-bottom">250</div>
							</div>
							<div class="description-lot-bottom-side__line"></div>
							<div class="description-lot-bottom-side__history-box-sub-title">
								<div class="description-lot-bottom-side__history-sub-title">Всего ставок: 2</div>
								<div class="description-lot-bottom-side__history-sub-title">Всего участников торгов: 2</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="description-lot-right-side">
				<div class="description-lot-right-side__box">
					<div class="description-lot-right-side__title">Торги</div>
					<div class="description-lot-right-side__line"></div>
					<div class="description-lot-right-side__content">
						<div class="description-lot-right-side__content-box">
							<div class="description-lot-right-side__sub-title">Максимальная ставка:</div>
							<div class="description-lot-right-side__text">50 000 руб.</div>
						</div>
						<div class="description-lot-right-side__content-box">
							<div class="description-lot-right-side__sub-title">Ставка:</div>
							<input v-model="bet" type="text" class="description-lot-right-side__price">
							<div class="description-lot-right-side__text">руб.</div>
						</div>
						<div class="description-lot-right-side__content-box">
							<div class="description-lot-right-side__sub-title">Текущая цена:</div>
							<div class="description-lot-right-side__text">{{nowPrice}}</div>
						</div>
						<div class="description-lot-right-side__content-box">
							<div class="description-lot-right-side__sub-title">Отложенная ставка:</div>
							<input type="checkbox" class="description-lot-right-side__checkbox">
						</div>
						<div class="description-lot-right-side__button-box">
							<button @click="OnSubmit() " class="description-lot-right-side__btn">Сделать ставку</button>
						</div>
						<div class="description-lot-right-side__footer-title">Вы можете оставить комментарий к ставке на следующей странице</div>
					</div>
				</div>
				<div class="description-lot-right-side__box">
					<div class="description-lot-right-side__title description-lot-right-side__title-big">Информация по аукциону</div>
					<div class="description-lot-right-side__line"></div>
					<div class="description-lot-right-side__content">
						<div class="description-lot-right-side__content-box">
							<div class="description-lot-right-side__sub-title">Продавец: </div>
							<div class="description-lot-right-side__text">Продавец №1</div>
						</div>
						<div class="description-lot-right-side__content-box">
							<div class="description-lot-right-side__sub-title">Добавить продавца в избранное</div>
						</div>
						<div class="description-lot-right-side__content-box">
							<div class="description-lot-right-side__sub-title">Все лоты продавца</div>
						</div>
						<div class="description-lot-right-side__content-box">
							<div class="description-lot-right-side__bold-title">Рейтинг:</div>
							<div class="description-lot-right-side__bold-text">99 %</div>
						</div>
						<div class="description-lot-right-side__content-box">
							<div class="description-lot-right-side__sub-title">Автопродление:</div>
							<div class="description-lot-right-side__bold-text">включено</div>
						</div>
						<div class="description-lot-right-side__content-box">
							<div class="description-lot-right-side__sub-title">Досрочное завершение:</div>
							<div class="description-lot-right-side__bold-text">возможно</div>
						</div>
						<div class="description-lot-right-side__content-box">
							<div class="description-lot-right-side__sub-title">Убрать лот из Избранного</div>
						</div>
					</div>
				</div>
				<div class="description-lot-right-side__box">
					<div class="description-lot-right-side__title">Доставка</div>
					<div class="description-lot-right-side__line"></div>
					<div class="description-lot-right-side__content">
						<div class="description-lot-right-side__content-box">
							<div class="description-lot-right-side__sub-title">Доставка:</div>
							<div class="description-lot-right-side__text">Доставка по России</div>
						</div>
						<div class="description-lot-right-side__content-box">
							<div class="description-lot-right-side__sub-title">Способы доставки:</div>
							<div class="description-lot-right-side__text">Новая Почта</div>
						</div>
						<div class="description-lot-right-side__content-box">
							<div class="description-lot-right-side__sub-title">Доставку оплачивает</div>
							<div class="description-lot-right-side__text">Покупатель</div>
						</div>
					</div>
					<div class="description-lot-right-side__line"></div>
				</div>
				<div class="description-lot-right-side__box">
					<div class="description-lot-right-side__title">Лот № 2322</div>
					<div class="description-lot-right-side__line"></div>
					<div class="description-lot-right-side__content">
						<div class="description-lot-right-side__content-box">
							<div class="description-lot-right-side__sub-title">Ставка:</div>
							<input type="text" class="description-lot-right-side__price">
							<div class="description-lot-right-side__text">руб.</div>
						</div>
						<div class="description-lot-right-side__content-box">
							<div class="description-lot-right-side__sub-title">Перевод денег:</div>
							<div class="description-lot-right-side__text">0 руб.</div>
						</div>
						<div class="description-lot-right-side__content-box">
							<div class="description-lot-right-side__sub-title">Комиссия:</div>
							<div class="description-lot-right-side__text">10 руб</div>
						</div>
					</div>
					<div class="description-lot-right-side__line"></div>
					<div class="description-lot-right-side__footer-sub-title">Итого: 50 000 руб.</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
	let tab = tabs[index];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		tabs_item.addEventListener("click", function (e) {
			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];
				tabs_item.classList.remove('_active');
				tabs_blocks[index].classList.remove('_active');
			}
			tabs_item.classList.add('_active');
			tabs_blocks[index].classList.add('_active');
			e.preventDefault();
		});
	}
}
export default {
  data() {
    return {
      nowPrice:'',
      bet: ''
      }
      
    },
    methods: {
      getLot() {
      const path = 'http://localhost:5000/books';
      axios.get(path)
        .then((res) => {
          this.nowPrice = res.data.N=nowCost;
        })
        .catch((error) => {
          // eslint-отключение следующей строки
          console.error(error);
        });
      },
      
         addBet(payload) {
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
      this.nowPrice = '';
      this.bet = '';
      
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.$refs.addBookModal.hide();
      let read = false;
      if (this.addBookForm.read[0]) read = true;
      const payload = {
        nowCost: this.bet,
      
      };
      this.addBet(payload);
      this.initForm();
    },
      
    }
}
    
  

     


</script>

<style lang="scss">
* {
	padding: 0px;
	margin: 0px;
	border: 0px;
}
*,
*:before,
*:after {
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
:focus,
:active {
	outline: none;
}
a:focus,
a:active {
	outline: none;
}
aside,
nav,
footer,
header,
section {
	display: block;
}
html,
body {
	height: 100%;
}
body {
	line-height: 1;
	-ms-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}
input::-ms-clear {
	display: none;
}
button {
	cursor: pointer;
	background: none;
}
button::-moz-focus-inner {
	padding: 0;
	border: 0;
}
a,
a:visited {
	text-decoration: none;
}
a:hover {
	text-decoration: none;
}
ul li {
	list-style: none;
}
img {
	vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: inherit;
	font-size: inherit;
}
// =========================================================================================
@import url(https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600);
.description-lot {
	padding-top: 50px;
	background: #F2F2F2;
	&__container {
		display: flex;
		column-gap: 20px;
		max-width: 1390px;
		margin: 0px auto;
	}
	&__left-side {
		max-width: 1030px;
	}
	&__top-side {
		display: flex;
		column-gap: 20px;
		margin-bottom: 10px;
	}
	&__row {
		display: flex;
		flex-direction: column;
		row-gap: 10px;
	}
	&__column {
		&_small {
			display: flex;
			column-gap: 10px;
		}
	}
	&__image {
		width: 550px;
		height: 490px;
		background: #C4C4C4;
	}
	&__img {
		width: 130px;
		height: 100px;
		background: #C4C4C4;
	}
	&__content {
		max-width: 460px;
	}
	&__line {
		width: 100%;
		height: 1px;
		background: rgba(0, 0, 0, 0.25);
	}
	&__title {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 300;
		font-size: 24px;
		line-height: 31px;
		color: #000000;
			margin: 10px 0px;
	}
	&__text-box {
		display: flex;
		justify-content: space-between;
	}
	&__text-left {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 300;
		font-size: 18px;
		line-height: 23px;
		color: rgba(0, 0, 0, 0.75);
		margin: 10px 0px;
	}
	&__text-right {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 300;
		font-size: 18px;
		line-height: 23px;
		text-align: right;
		color: #000000;
		margin: 10px 0px;
	}
	&-bottom-side {
		background: #fff;
		&__button-box {
			display: flex;
			justify-content: center;
			align-items: center;
		}
		&__btn {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 400;
			font-size: 18px;
			line-height: 23px;
			color: #000000;
			width: 100%;
			height: 50px;
			border-bottom: 1px solid rgba(0, 0, 0, 0.25);
			&._active {
				border-bottom: 1px solid #000;
			}
		}
		&__first-screen {
			display: none;
			&._active {
				display: flex;
				flex-direction: column;
				row-gap: 20px;
				padding: 20px;
			}
		}
		&__second-screen {
			display: none;
			&._active {
				display: flex;
				flex-direction: column;
				row-gap: 10px;
				padding: 20px;
			}
		}
		&__third-screen {
			display: none;
			&._active {
				display: flex;
				flex-direction: column;
			}
		}
		&__line {
		width: 100%;
		height: 1px;
		background: rgba(0, 0, 0, 0.25);
		}
		&__footer-text {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 300;
			font-size: 16px;
			line-height: 21px;
			color: #000000;
		}
		&__question-box {
			padding: 25px 20px 0px 30px;
			border: 1px solid #E1E1E1;
		}
		&__title-box {
			display: flex;
			justify-content: space-between;
			margin-bottom: 7px;
		}
		&__title-name {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 400;
			font-size: 18px;
			line-height: 23px;
			text-transform: capitalize;
			color: #0E0E0E;
		}
		&__title-price {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 300;
			font-size: 14px;
			line-height: 17px;
			text-align: right;
			color: #909090;
		}
		&__footer-btn {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			line-height: 18px;
			text-transform: uppercase;
			color: #000000;
			width: 240px;
			height: 50px;
			background: #C4C4C4;
			margin-top: 10px;
		}
		&__box-title-history {
			display: flex;
		}
		&__title-history {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 400;
			font-size: 18px;
			line-height: 23px;
			color: rgba(0, 0, 0, 0.75);
			margin: 14px 0px;
			&_first {
				margin-left: 30px;
			}
			&_second {
				margin-left: 135px;
			}
			&_third {
				margin-left: 225px;
			}
			&_fourth {
				margin-left: 90px;
			}
		}
		&__history-box {
			display: flex;
			align-items: center;
			margin: 10px 0px;
		}
		&__data {
			display: flex;
			column-gap: 20px;
			margin-left: 30px;
		}
		&__month {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 300;
			font-size: 16px;
			line-height: 21px;
			color: rgba(0, 0, 0, 0.75);
		}
		&__time {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 300;
			font-size: 16px;
			line-height: 21px;
			color: rgba(0, 0, 0, 0.75);
		}
		&__login {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 300;
			font-size: 16px;
			line-height: 21px;
			color: rgba(0, 0, 0, 0.75);
			width: 250px;
			padding: 5px 10px;
			margin-left: 88px;
			&_yellow {
				background: #FFE680;
			}
			&_green {
				background: #D3F180;
			}
		}
		&__bid {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 300;
			font-size: 16px;
			line-height: 21px;
			color: rgba(0, 0, 0, 0.75);
			margin-left: 55px;
		}
		&__price {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 300;
			font-size: 16px;
			line-height: 21px;
			color: rgba(0, 0, 0, 0.75);
			margin-left: 116px;
			&-bottom {
				margin-left: 200px;
			}
		}
		&__cost {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 300;
			font-size: 16px;
			line-height: 21px;
			color: rgba(0, 0, 0, 0.75);
			width: 270px;
			padding: 5px 115px;
			margin-left: 20px;
			&_yellow {
				background: #FFE680;
			}
			&_green {
				background: #D3F180;
			}
		}
		&__start {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 300;
			font-size: 16px;
			line-height: 21px;
			color: rgba(0, 0, 0, 0.75);
			width: 250px;
			padding: 5px 10px;
			margin-left: 88px;
		}
		&__history-box-sub-title {
			display: flex;
			flex-direction: column;
			row-gap: 10px;
			margin: 14px 0px;
		}
		&__history-sub-title {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 300;
			font-size: 16px;
			line-height: 21px;
			color: rgba(0, 0, 0, 0.75);
			margin-left: 30px;
		}
	}
	&-right-side {
		display: flex;
		row-gap: 25px;
		flex-direction: column;
		&__box {
			padding: 15px 0px;
			background: #fff;
		}
		&__title {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 400;
			font-size: 24px;
			line-height: 31px;
			color: #000000;
			padding: 0px 20px;
			&-big {
				margin: 0px -16px;
			}
		}
		&__line {
			width: 100%;
			height: 1px;
			background: rgba(0, 0, 0, 0.15);
			margin: 16px 0px;
		}
		&__content {
			display: flex;
			row-gap: 14px;
			flex-direction: column;
		}
		&__content-box {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0px 20px;
		}
		&__sub-title {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 300;
			font-size: 16px;
			line-height: 21px;
			color: rgba(0, 0, 0, 0.75);
		}
		&__price {
			width: 170px;
			height: 40px;
      	font-family: 'Montserrat';
			font-style: normal;
			font-weight: 300;
			font-size: 16px;
			background: #F2F2F2;
		}
		&__text {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 300;
			font-size: 16px;
			line-height: 21px;
			text-align: right;
			color: #000000;
		}
		&__checkbox {
		}
		&__button-box {
			display: flex;
			justify-content: center;
		}
		&__btn {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 500;
			font-size: 14px;
			line-height: 18px;
			text-align: center;
			text-transform: uppercase;
			color: #000000;
			width: 300px;
			height: 50px;
			background: #C4C4C4;
		}
		&__footer-title {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 300;
			font-size: 14px;
			line-height: 18px;
			text-align: center;
			color: rgba(0, 0, 0, 0.75);
			padding: 0px 20px;
		}
		&__bold-title {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 600;
			font-size: 16px;
			line-height: 21px;
			color: rgba(0, 0, 0, 0.75);
		}
		&__bold-text {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 600;
			font-size: 16px;
			line-height: 21px;
			text-align: right;
			color: #000000;
		}
		&__footer-sub-title {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 400;
			font-size: 18px;
			line-height: 23px;
			color: #323C45;
			padding: 0px 20px;
		}
	}
}
</style>