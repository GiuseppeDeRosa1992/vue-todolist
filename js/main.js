const { createApp } = Vue

  createApp({
    data() {
      return {
        title : "La tua lista comprende:",
        userInput : "",
        array : [
          "Pane",
          "Acqua",
          "Sale",
          "Pasta",
          "Pomodoro",
          "Paella",
          "Pan Gocciole",
          "Cioccolata",
          "Farina",
          "Pizza",
        ],       
      }
    },
    methods: {
      addedElement() {
        if(this.userInput != "") {
          this.array.push(this.userInput)
          console.log("Elemento da aggiungere alla lista dato da valore di input", this.userInput)
          this.userInput = ""
        }
      },
      deleteElement(index) {
        this.array[index] = ""
      }
    },
    mounted() {
      console.log(this.array)
    }
  }).mount('#app')

  