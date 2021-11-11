/*

Rifare l’esercizio dello slider come fatto assieme in classe.

Bonus:
Applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.

*/

const app = new Vue({

  el: '#app',

  data: {
    
    immagini: ['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg'],

    counter: 0
  },

  methods: {

    prevImg(){
      this.counter--
      console.log(counter);

      
    },

    nextImg(){
      this.counter++
      console.log(counter);
    }

  }

})