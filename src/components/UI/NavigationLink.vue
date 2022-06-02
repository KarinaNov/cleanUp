<template>
  <a class="header-link" href="#">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "navigation-link",
};
</script>

<style scoped>
.header-link {
  font-weight: normal;
  font-size: 18px;
  line-height: 120%;
  letter-spacing: 0.2px;
  padding: 4px;
  color: #404040;
  text-decoration: none;
  cursor: pointer;
  z-index: 9999;
}
.header-link:hover {
  color: #453b70;
}
.header-link:not(:last-child) {
  margin: 0 56px 0 0;
}
</style>
