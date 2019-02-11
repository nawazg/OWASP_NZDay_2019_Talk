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
            <img v-if="selectedPineapple === 'Abacaxi Pineapples'" class="pineapple-picture" src="../assets/abacaxi.jpg" />
            <img v-if="selectedPineapple === 'Smooth Cayenne Pineapples'" class="pineapple-picture" src="../assets/smooth-cayenne.jpg" />
            <img v-if="selectedPineapple === 'Queen Pineapples'" class="pineapple-picture" src="../assets/queen.jpg" />
            <img v-if="selectedPineapple === 'Red Spanish Pineapples'" class="pineapple-picture" src="../assets/spanish-red.jpg" />
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
        <div class="show-me-the-money">
          <button class="button is-success" @click.stop="getGoodContent">Get good content</button>
          <p>{{goodContent}}</p>
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
      goodContent: "",
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
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          var notification = new Notification("Reading your directory!");
        }
      });
      this.directories = window.fileSystem.readdirSync("/", {
        encoding: "utf8",
        withFileTypes: false
      });

    },
    getGoodContent() {
      if(window.interopAPI){
        this.goodContent =  window.interopAPI.getApprovedContent();
      }
      this.goodContent = 'Preload API not available';
    }
  }
};
</script>

<style scoped>
.heading {
  font-size: 20px;
  text-align: center;
}

.main-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.pineapple-selection {
  width: 500px;
}

.pineapple-form {
  width: 500px;
}

.show-me-the-money {
  width: 200px;
}
</style>
