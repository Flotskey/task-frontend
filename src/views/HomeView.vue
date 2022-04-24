<template>
  <div class="root">
    <div class="title-wrapper">
      <h1 class="title">Buildings</h1>
      <router-link to="/add-building" class="add-button">Add</router-link>
    </div>
    <div class="buildings-list-wrapper">
      <buildings-list />
    </div>
  </div>
</template>

<script>
import BuildingsList from "@/components/BuildingsList.vue";
export default {
  name: "HomeView",
  components: { BuildingsList },
  methods: {
    addBuilding(addBuildingDTO) {
      this.$store.dispatch("addBuilding", addBuildingDTO);
    },
  },
};
</script>

<style scoped lang="scss">
.root {
  padding: 30px;
}
.title-wrapper {
  display: flex;
}

.title {
  margin-bottom: 20px;
  width: max-content;
}

.buildings-list-wrapper {
  max-width: 400px;
  width: 100%;
}

.add-button {
  padding: 10px;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  font-weight: 500;
  background-color: orange;
  border: none;
  width: 100%;
  max-width: 120px;
  height: 45px;
  margin-left: 20px;
  cursor: pointer;
}
</style>
