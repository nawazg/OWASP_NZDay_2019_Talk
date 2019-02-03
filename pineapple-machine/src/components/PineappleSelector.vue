<template>
  <section class="section">
    <div class="container is-fluid">
      <h1 class="heading">The Pineapple Machine</h1>
      <hr>
      <div class="main-container">
        <div class="pineapple-form" v-if="!showSelection">
          <b-field label="Pineapple Type">
            <b-select placeholder="Select a pineapple" v-model="selectedPineapple">
              <option value="Abacaxi Pineapples">Abacaxi Pineapples</option>
              <option value="Queen Pineapples">Queen Pineapples</option>
              <option value="Red Spanish Pineapples">Red Spanish Pineapples</option>
              <option value="Smooth Cayenne Pineapples">Smooth Cayenne Pineapples</option>
            </b-select>
          </b-field>
          <b-field label="Quantity">
            <b-input type="number" v-model="quantity"></b-input>
          </b-field>
          <button class="button is-black" @click.stop="selectPineapple">Generate pineapples</button>
        </div>
        <div class="pineapple-selection" v-else>
          <h2>Your pineapple generation details:</h2>
          <p>
            <strong>Type:</strong>
            {{selectedPineapple}}
          </p>
          <p>
            <strong>Quantity:</strong>
            {{quantity}}
          </p>
          <button class="button is-black" @click.stop="resetSelection">Let me generate again</button>
        </div>
        <div class="show-me-the-money">
          <button class="button is-danger" @click.stop="getDirectory">Show me the dangerous stuff!!!</button>
          <p v-for="directory in directories" :key="directory">{{directory}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PineappleSelector",
  data() {
    return {
      selectedPineapple: "",
      quantity: 0,
      showSelection: false,
      directories: []
    };
  },
  methods: {
    selectPineapple() {
      this.showSelection = true;
    },
    resetSelection() {
      this.selectedPineapple = "";
      this.quantity = 0;
      this.showSelection = false;
    },
    getDirectory() {
      this.directories = window.fileSystem.readdirSync("/", {
        encoding: "utf8",
        withFileTypes: false
      });
    }
  }
};
</script>

<style scoped>
.heading {
  font-size: 20px;
  text-align: center;
}

.pineapple-form {
  width: 300px;
}

.main-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.show-me-the-money {
  width: 300px;
}
</style>
