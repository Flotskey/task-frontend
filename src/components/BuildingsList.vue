<template>
  <span v-if="loading">Loading...</span>
  <div v-if="buildings.length" class="buildings-list">
    <div
      v-for="building in buildings"
      :key="building.id"
      class="buildings-list__item-wrapper"
    >
      <router-link
        class="link"
        :to="{ name: 'Building', params: { id: building.id } }"
      >
        <div class="buildings-list__item">
          {{ building.name }}
        </div>
      </router-link>
      <router-link
        :to="{ name: 'EditBuildingView', params: { id: building.id } }"
        ><img
          class="icon-button"
          width="30"
          height="30"
          src="../assets/icons/EditIcon.svg"
          alt="Edit Icon"
      /></router-link>

      <img
        @click="deleteBuilding(building.id)"
        class="icon-button"
        width="30"
        height="30"
        src="../assets/icons/DeleteIcon.svg"
        alt="Delete Icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "BuildingsList",
  computed: {
    buildings() {
      return this.$store.state.buildings.data;
    },
    loading() {
      return this.$store.state.buildings.loading;
    },
  },

  methods: {
    deleteBuilding(id) {
      this.$store.dispatch("deleteBuilding", id);
    },
  },

  mounted() {
    this.$store.dispatch("fetchBuildings");
  },
};
</script>

<style scoped lang="scss">
.buildings-list {
  display: flex;
  flex-direction: column;

  .link {
    text-decoration: none;
    color: black;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  .buildings-list__item {
    padding: 10px;
    border-radius: 10px;
    background-color: lightgray;
    cursor: pointer;
  }
}

.buildings-list__item-wrapper {
  display: flex;
  align-items: center;
}

.icon-button {
  margin-left: 20px;
  cursor: pointer;
  position: relative;
  top: -4px;
}
</style>
