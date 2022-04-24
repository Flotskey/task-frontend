<template>
  <div class="root">
    <div class="row">
      <span class="span">New Name:</span>
      <input
        minLength="4"
        class="input"
        v-model="name"
        type="text"
        name="name"
        id="name"
      />
      <button @click="editBuilding" class="edit-button">Edit</button>
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
    async editBuilding() {
      this.$store.dispatch("updateBuilding", {
        name: this.name,
        id: this.$route.params.id,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.row {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 395px;
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

.edit-button {
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
