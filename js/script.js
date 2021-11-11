/*

Rifare l’esercizio dello slider come fatto assieme in classe.

Bonus:
Applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.

*/

// INIT APP VUE
const app = new Vue({

  el: '#app',

  data: {
    
    immagini: ['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg'],

    counter: 0
  },

  // MOUNTED
  mounted(){

    setInterval(this.nextImg, 3000);

  },

  methods: {

    // PREV IMG FUNCTION
    prevImg(){
      this.counter--
      console.log(this.counter);

      if(this.counter < 0){
        this.counter = this.immagini.length - 1;
      }
      
    },

    // NEXT IMG FUNCTION
    nextImg(){
      this.counter++
      console.log(this.counter);

      if(this.counter > this.immagini.length - 1){
        this.counter = 0;
      }
    }

  }

});