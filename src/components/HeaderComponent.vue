<template>
  <nav class="header">
    <router-link class="header__link" to="/">Home</router-link>
  </nav>
</template>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0 50px;
  border-bottom: gray 1px solid;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  .header__link {
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
}
</style>
