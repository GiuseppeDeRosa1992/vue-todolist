const { createApp } = Vue

  createApp({
    data() {
      return {
        title : "La tua lista comprende:",
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
        ]
        
      }
    },
    methods: {

    }
  }).mount('#app')