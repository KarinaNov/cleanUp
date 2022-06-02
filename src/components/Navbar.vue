<template>
  <div class="header" ref="header">
    <div class="header-container">
      <div class="header-row">
        <div class="header-logo" @click="$router.push('/')">
          <div class="header-logo__img">
            <img src="../assets/img/Union.png" />
          </div>
          <div class="switch-button">
            <input class="switch-button-checkbox" type="checkbox" />
            <label class="switch-button-label" for="">
              <span class="switch-button-label-span">Дом</span>
            </label>
            <div class="switch-button-name"></div>
          </div>
        </div>

        <div class="header-links" :class="{ navbaropen: opened }">
          <navigation-link @click="$router.push('/')">
            После ремонта
          </navigation-link>
          <navigation-link @click="$router.push('/')">
            Генеральная уборка
          </navigation-link>
          <navigation-link @click="$router.push('/')">
            Регулярная уборка
          </navigation-link>
          <navigation-link @click="$router.push('/')">
            Мойка окон
          </navigation-link>
        </div>
        <div id="side-menu" class="side-nav" :class="{ sidenavopen: opened }">
          <a href="#">После ремонта</a>
          <a href="#">Генеральная уборка</a>
          <a href="#">Регулярная уборка</a>
          <a href="#"> Мойка окон</a>
        </div>
        <div class="header-menu">
          <div class="number">
            <a class="number__item" href="tel:+380674016977"
              >+380 67 401 69 77</a
            >
            <span class="number__item">|</span
            ><span class="number__item">24/7</span>
          </div>
          <div class="menu" :class="{ active: isActive }" @click="myFilter()">
            <div class="menu__item1"></div>
            <div class="menu__item2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationLink from "./UI/NavigationLink.vue";
export default {
  components: { NavigationLink },
  data() {
    return {
      isActive: false,
      opened: false,
      scrollY: 0,
      elY: 0,
    };
  },
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    myFilter: function () {
      this.isActive = !this.isActive;
      this.opened = !this.opened;
    },
    onScroll() {
      const el = this.$refs.header;
      const height = el.getBoundingClientRect().height;
      const pos = window.pageYOffset;
      const diff = this.scrollY - pos;

      this.elY = Math.min(0, Math.max(-height, this.elY + diff));
      el.style.position =
        pos >= height ? "fixed" : pos === 0 ? "absolute" : el.style.position;
      el.style.transform = `translateY(${
        el.style.position === "fixed" ? this.elY : 0
      }px)`;
      el.style.backgroundColor = pos >= height ? "#ffffff" : "transparent";
      this.scrollY = pos;
    },
  },
};
</script>

<style>
.header {
  height: 70px;
  position: absolute;
  top: 0;
  width: 100%;
}
.header-container {
  padding: 0 40px;
  margin: 0 auto;
}
.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
}
.header-logo {
  display: flex;
  align-items: center;
}
.switch-button {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 48px;
  overflow: hidden;
  width: 131px;
  height: 37px;
  font-size: 14px;
  letter-spacing: 1px;
  color: #ffffff;
  position: relative;
  margin-left: 21px;
  padding: 2px;
}
.switch-button-name:before {
  content: "Офис";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  pointer-events: none;
  color: #636c81;
}

.switch-button-checkbox {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 131px;
  height: 37px;
  opacity: 0;
  z-index: 2;
}
.switch-button-checkbox:checked + .switch-button-label:before {
  transform: translateX(69px);
  transition: transform 300ms linear;
}
.switch-button-checkbox:checked + .switch-button-label {
  color: #636c81;
}

.switch-button-checkbox + .switch-button-label {
  position: relative;
  padding: 8px 12px;
  display: block;
  user-select: none;
  pointer-events: none;
}
.switch-button-label:before {
  content: "";
  background: #5a30f0;
  width: 55px;
  height: 31px;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 34px;
  transform: translateX(0);
  transition: transform 300ms;
}

.switch-button-label-span {
  position: relative;
}
.number__item {
  font-family: "TT Travels Regular", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  letter-spacing: 0.2px;
  color: #404040 !important;
  padding-left: 15px;
  text-decoration: none !important;
}
.header-menu {
  display: flex;
  align-items: center;
}
.menu {
  cursor: pointer;
  margin-left: 31px;
}
.menu__item1,
.menu__item2 {
  width: 20px;
  height: 2px;
  background-color: #333;
  transition: 0.4s;
}
.menu__item2 {
  margin-top: 8px;
}
.active .menu__item1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-6px, 2px);
}
.active .menu__item2 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-5px, -1px);
}

.side-nav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  opacity: 0.9;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.3s;
}

.sidenavopen {
  height: 100vh;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #5a30f0;
  opacity: 0.9;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.3s;
}

.side-nav a {
  padding: 10px 10px 10px 30px;
  text-decoration: none;
  font-size: 22px;
  color: #ccc;
  display: block;
  transition: 0.3s;
}

.side-nav a:hover {
  color: #fff;
}

.side-nav .btn-close {
  position: absolute;
  top: 0;
  right: 22px;
  font-size: 36px;
  margin-left: 50px;
}
.bar {
  display: block;
  height: 5px;
  width: 35px;
  background: #000;
  margin: 5px auto;
}
.midopen {
  width: 0;
}
.bar {
  transition: all 0.3s ease;
}
.topopen {
  transform: translateY(10px) rotateZ(45deg);
}
.botopen {
  transform: translateY(-10px) rotateZ(-45deg);
}
</style>
