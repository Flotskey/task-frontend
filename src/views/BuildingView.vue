<template>
  <div v-if="!building.id">Loading...</div>
  <div v-if="!!building.id" class="root">
    <div class="building-info">
      <div class="row">
        <h2 class="title">Id:</h2>
        <span :building="building">{{ building.id }}</span>
      </div>
      <div class="row">
        <h2 class="title">Name:</h2>
        <span :building="building">{{ building.name }}</span>
      </div>
      <div class="special-row">
        <h2 class="locations-title">Locations:</h2>
        <div class="item" :building="building">{{ building.locations }}</div>
      </div>
      <div class="special-row">
        <h2 class="locations-title">Faculties:</h2>
        <div class="item" :building="building">{{ building.faculties }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { requests } from "../api";
export default {
  name: "BuildingView",
  data() {
    return {
      building: {
        id: null,
        name: "",
        locations: [],
        faculties: [],
      },
    };
  },

  methods: {
    async fetchBuilding() {
      const id = this.$route.params.id;
      const response = await requests.buildings.getById(id);
      if (response.success) {
        this.building = response.data;
      } else {
        alert(response.errorMessage);
      }
    },
  },

  mounted() {
    this.fetchBuilding();
  },
};
</script>
<style scoped lang="scss">
.root {
  width: 100%;
  height: 100%;
  padding: 50px;
}
.row {
  display: flex;
  align-items: center;
}

.title {
  margin-right: 15px;
}

.special-row {
  display: flex;
  align-items: center;
  margin-top: 25px;
}

.building-info {
  display: flex;
  flex-direction: column;
}

.item {
  margin-left: 25px;
}
</style>
