<template>
  <span v-if="loading">Loading...</span>
  <div v-if="locations.length" class="locations-list">
    <div
      v-for="location in locations"
      :key="location.id"
      class="locations-list__item-wrapper"
    >
      <router-link
        class="link"
        :to="{ name: 'Location', params: { id: location.id } }"
      >
        <div class="locations-list__item">Floor № {{ location.floor }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocationsList",
  props: {
    locations: Array,
  },
};
</script>

<style scoped lang="scss">
.locations-list {
  display: flex;
  flex-direction: column;

  .link {
    text-decoration: none;
    color: black;
  }

  .locations-list__item {
    padding: 10px;
    border-radius: 10px;
    background-color: lightgray;
    cursor: pointer;
  }
}

.locations-list__item-wrapper {
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
}

.icon-button {
  margin-left: 20px;
  cursor: pointer;
  position: relative;
  top: -4px;
}
</style>
