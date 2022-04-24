<template>
  <div class="root">
    <div class="row">
      <span class="span">Name:</span>
      <input
        minLength="4"
        class="input"
        v-model="name"
        type="text"
        name="name"
        id="name"
      />
      <button @click="addBuilding" class="add-button">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddBuildingVue",
  data() {
    return {
      name: "",
    };
  },

  methods: {
    async addBuilding() {
      this.$store.dispatch("addBuilding", { name: this.name });
    },
  },
};
</script>

<style scoped lang="scss">
.row {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 260px;
  height: 50px;
  border-radius: 5px;
  padding: 10px;
}

.input {
  width: 120px;
  height: 35px;
}

.span {
  margin-right: 20px;
}

.root {
  padding: 20px;
  width: 100%;
  height: 100%;
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
  text-decoration: none;
}
</style>
