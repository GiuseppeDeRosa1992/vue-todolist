// const { createApp } = Vue

//   createApp({
//     data() {
//       return {
//         title : "La tua lista comprende:",
//         userInput : "",
//         array : [
//           "Pane",
//           "Acqua",
//           "Sale",
//           "Pasta",
//           "Pomodoro",
//           "Paella",
//           "Pan Gocciole",
//           "Cioccolata",
//           "Farina",
//           "Pizza",
//         ],       
//       }
//     },
//     methods: {
//       addedElement() {
//         if(this.userInput != "") {
//           this.array.push(this.userInput)
//           console.log("Elemento da aggiungere alla lista dato da valore di input", this.userInput)
//           this.userInput = ""
//         }
//       },
//       deleteElement(index) {
//         this.array[index] = ""
//       }
//     },
//     mounted() {
//       console.log(this.array)
//     }
//   }).mount('#app')


  const { createApp } = Vue

  createApp({
    data() {
      return {
        title : "La tua lista comprende:",
        array : [
          {
            elemento: "Pane",
            booleano: false
          },
          {
            elemento: "Acqua",
            booleano: true
          },
          {
            elemento: "Sale",
            booleano: true
          },
          {
            elemento: "Pasta",
            booleano: false
          },
          {
            elemento: "Paella",
            booleano: true
          },
          {
            elemento: "Pan Gocciole",
            booleano: true
          },
          {
            elemento: "Cioccolata",
            booleano: false
          },
          {
            elemento: "Farina",
            booleano: true
          },
          {
            elemento: "Pizza",
            booleano: false
          },
        ],
        userInput : "",
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
      },
      color(index) {
        return (this.array[index].booleano == true) ? "green" : "red"
      }
    },
    mounted() {
      console.log(this.array)
    }
  }).mount('#app')
  