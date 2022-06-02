<template>
  <main>
    <section class="main">
      <div class="container">
        <div class="row">
          <div class="main__bg">
            <div class="main__bg-img"></div>
          </div>
          <div class="main__content">
            <div class="main__content-wrapper">
              <h1 class="main__content-title">Уборка квартир в Киеве</h1>
              <p class="main__content-text text">
                Мы уберем у вас дома или в офисе. Наведем чистоту после ремонта
                и проведем генеральную уборку.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="main__btn"
        :class="{ boom: scrolled, stick: IsStick }"
        @mouseover="stickyButtom"
      >
        <button class="main__button" :class="{ boomHigh: scrolledHigh }">
          <p class="main__button-text">Заказать уборку</p>
        </button>
      </div>
    </section>
  </main>

  <div class="cards scroll">
    <div class="container">
      <div class="cards__items">
        <div class="cards__item">
          <h4 class="cards__item-title">Тщательно отобранный персонал</h4>
          <img class="cards__item-img" src="../assets/img/cards-1.png" />
          <div class="cards__item-hover">
            <p class="text">
              Не нужно тратить время, силы и ресурсы на разме- щение вакансий,
              проведе- ние собеседований, про- верку кандидатов на должность
              уборщицы. За счет больших объемов мы можем сделать это
              эффективнее.
            </p>
          </div>
        </div>
        <div class="cards__item">
          <h4 class="cards__item-title">Качественная эко-химия</h4>
          <img class="cards__item-img" src="../assets/img/cards-2.png" />
          <div class="cards__item-hover">
            <p class="text">
              Не нужно тратить время, силы и ресурсы на разме- щение вакансий,
              проведе- ние собеседований, про- верку кандидатов на должность
              уборщицы. За счет больших объемов мы можем сделать это
              эффективнее.
            </p>
          </div>
        </div>
        <div class="cards__item">
          <h4 class="cards__item-title">Контролируем качество</h4>
          <img class="cards__item-img" src="../assets/img/cards-3.png" />
          <div class="cards__item-hover">
            <p class="text">
              Не нужно тратить время, силы и ресурсы на разме- щение вакансий,
              проведе- ние собеседований, про- верку кандидатов на должность
              уборщицы. За счет больших объемов мы можем сделать это
              эффективнее.
            </p>
          </div>
        </div>
        <div class="cards__item">
          <h4 class="cards__item-title">Работаем круглосуточно</h4>
          <img class="cards__item-img" src="../assets/img/cards-4.png" />
          <div class="cards__item-hover">
            <p class="text">
              Не нужно тратить время, силы и ресурсы на разме- щение вакансий,
              проведе- ние собеседований, про- верку кандидатов на должность
              уборщицы. За счет больших объемов мы можем сделать это
              эффективнее.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="slider">
    <div class="slider__top container">
      <h2 class="slider__top-title">Как мы убираем</h2>
      <p class="slider__top-text text">
        Клинер приезжает в назначенное время со всем необходимым и сразу
        приступает к делу. Вам остаётся только оценить результат.
      </p>
    </div>
    <div class="slider__bg">
      <div class="slider__sidebar">
        <h2
          class="slider__sidebar-title"
          id="0"
          v-on:click="getAnswer($event)"
          @mouseover="getAnswer($event)"
        >
          Кухня
        </h2>
        <h2
          class="slider__sidebar-title"
          id="1"
          v-on:click="getAnswer($event)"
          @mouseover="getAnswer($event)"
        >
          Комнаты
        </h2>
        <h2
          class="slider__sidebar-title"
          id="2"
          v-on:click="getAnswer($event)"
          @mouseover="getAnswer($event)"
        >
          Ванная
        </h2>
        <h2
          class="slider__sidebar-title"
          id="3"
          v-on:click="getAnswer($event)"
          @mouseover="getAnswer($event)"
        >
          Прихожая
        </h2>
      </div>
      <div class="slider__block">
        <img
          class="slider__bg-img"
          src="@/assets/img/how-clean.jpg"
          v-if="showImage"
          :class="{ showimage: showImage }"
        />
        <img
          class="slider__bg-img"
          v-else-if="!showImage"
          :src="img"
          name="slide-fade"
        />
        <div class="metka m1" @click="toggleClass">
          <div class="show__message" v-if="ShowMessage">
            <div class="show__message-content">Чистим фасад вытяжки</div>
          </div>
        </div>
        <div class="metka m2" @click="toggleClass">
          <div class="show__message" v-if="ShowMessage">
            <div class="show__message-content">Чистим фасад вытяжки</div>
          </div>
        </div>
        <div class="metka m3" @click="toggleClass">
          <div class="show__message" v-if="ShowMessage">
            <div class="show__message-content">Чистим фасад вытяжки</div>
          </div>
        </div>
        <div class="metka m4" @click="toggleClass">
          <div class="show__message" v-if="ShowMessage">
            <div class="show__message-content">Чистим фасад вытяжки</div>
          </div>
        </div>
        <div class="metka m5" @click="toggleClass">
          <div class="show__message" v-if="ShowMessage">
            <div class="show__message-content">Чистим фасад вытяжки</div>
          </div>
        </div>
        <div class="metka m6" @click="toggleClass">
          <div class="show__message" v-if="ShowMessage">
            <div class="show__message-content">Чистим фасад вытяжки</div>
          </div>
        </div>
        <div class="metka m7" @click="toggleClass">
          <div class="show__message" v-if="ShowMessage">
            <div class="show__message-content">Чистим фасад вытяжки</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false,
      scrolledHigh: false,
      IsStick: false,
      showImage: true,
      ShowMessage: false,
      AnimationSlider: false,
      activeImage: false,
      img: require("@/assets/img/how-clean-1.jpg"),
      imgs: [
        {
          img: require("@/assets/img/how-clean-1.jpg"),
        },
        {
          img: require("@/assets/img/how-clean-2.jpg"),
        },
        {
          img: require("@/assets/img/how-clean-1.jpg"),
        },
        {
          img: require("@/assets/img/how-clean-2.jpg"),
        },
      ],
      num: 0,
    };
  },

  methods: {
    handleScroll() {
      let obj = document.querySelector(".scroll");
      let { top } = obj.getBoundingClientRect();
      let height = document.documentElement.clientHeight;
      this.scrolled = top < height;
    },
    onscroll() {
      var scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );

      if (window.scrollY + 1 >= scrollHeight - innerHeight) {
        this.scrolledHigh = true;
      } else {
        this.scrolledHigh = false;
      }
    },
    mouseOver: function () {
      this.active = !this.active;
    },
    stickyButtom() {
      console.log("lalla");
    },
    reveal() {
      var reveals = document.querySelectorAll(".cards__items");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    },
    move() {
      var reveals = document.querySelectorAll(".slider");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = document.documentElement.clientHeight + +"300";
        if (elementTop < windowHeight - elementVisible + +"300") {
          reveals[i].classList.add("active");
          this.showImage = false;
        } else if (elementTop > windowHeight - elementVisible) {
          reveals[i].classList.remove("active");
          this.showImage = true;
        }
      }
    },
    getAnswer: function (event) {
      let targetId = event.currentTarget.id;
      this.img = this.imgs[targetId].img;
      this.num = targetId;
      this.showImage = !this.showImage;
      this.activeImage = true;
      document.body.classList.add("article");
    },
    toggleClass(event) {
      this.ShowMessage = true;
      event.target.classList.toggle("open");
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.reveal);
    window.addEventListener("scroll", this.move);
    window.addEventListener("scroll", this.onscroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
  }
  70% {
    -webkit-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgbargba(90, 48, 240, 0.2);
    box-shadow: 0px 0px 0px 0px rgba(90, 48, 240, 0.2);
  }
  70% {
    -moz-box-shadow: 0 0 0 10px rgba(90, 48, 240, 0.2);
    box-shadow: 0px 0px 0px 10px rgba(90, 48, 240, 0.2);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 rgba(90, 48, 240, 0.2);
    box-shadow: 0px 0px 0px 0 rgba(90, 48, 240, 0.2);
  }
}

@keyframes high-bottom {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: scale(0.4);
  }
  100% {
    transform: translateY(200px);
  }
}
@keyframes button-top {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100px);
    opacity: 1;
  }
}

@keyframes appear-block {
  0% {
    transform: translateX(-300px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-in-image-2 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fade-bottom {
  0% {
    transform: translateY(150px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes scale-bottom {
  0% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(0.7);
  }
}

@keyframes rot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes rot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
