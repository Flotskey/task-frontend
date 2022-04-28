<template>
  <div v-if="!building">Loading...</div>
  <div v-if="building && building.id" class="root">
    <div class="building-info">
      <div class="row">
        <h2 class="title">Id:</h2>
        <span :building="building">{{ building.id }}</span>
      </div>
      <div class="row">
        <h2 class="title">Name:</h2>
        <span :building="building">{{ building.name }}</span>
      </div>
      <div class="locations-block">
        <div class="special-row">
          <h2 class="locations-title">Locations:</h2>
          <div class="button">
            <router-link
              class="link"
              :to="{ name: 'AddLocationView', params: { id: building.id } }"
              >Add</router-link
            >
          </div>

          <div class="button" @click="deleteLocation(building.id)">
            Remove Last
          </div>
        </div>
        <div class="locations-list-wrapper">
          <locations-list :locations="building.locations" />
        </div>
      </div>
      <div class="special-row">
        <h2 class="locations-title">Faculties:</h2>
        <div class="item" :building="building">{{ building.faculties }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import LocationsList from "@/components/LocationsList.vue";
export default {
  name: "BuildingView",
  components: { LocationsList },
  computed: {
    building() {
      return this.$store.state.buildingsModule.buildings.building;
    },
    loading() {
      return this.$store.state.buildingsModule.buildings.loading;
    },
  },

  methods: {
    deleteLocation(id) {
      this.$store.dispatch("deleteLocation", id);
    },
  },

  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("fetchBuilding", id);
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

.button {
  padding: 10px;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  font-weight: 500;
  background-color: orange;
  border: none;
  width: 100%;
  max-width: 190px;
  height: 45px;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  margin-left: 20px;
}

.locations-block {
  display: flex;
  flex-direction: column;
}

.locations-list-wrapper {
  margin-top: 20px;
}

.link {
  color: white;
}
</style>
