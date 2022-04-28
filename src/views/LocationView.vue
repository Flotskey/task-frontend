<template>
  <div class="root">
    <div class="location-info">
      <div class="row">
        <h1>Work in Progress</h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LocationView",
};
</script>
<style scoped lang="scss">
.root {
  padding: 30px;
}

.location-info {
  display: flex;
  flex-direction: column;
}
.row {
  display: flex;
  align-items: center;
}

.title {
  margin-right: 15px;
}
</style>
