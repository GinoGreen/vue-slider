const app = new Vue({

   el: '#app',

   data: {
      images: [
         'img/01.jpg',
         'img/02.jpg',
         'img/03.jpg',
         'img/04.jpg',
         'img/05.jpg'
      ],
      titles: [
         'Svezia',
         'Svizzera',
         'Gran Bretagna',
         'Germania',
         'Paradise'
      ],
      texts: [
         'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
         'Lorem ipsum',
         'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
         'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
         'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
      ],

      //contatore posizione array immagini
      counter: 0
   },

   mounted(){

      setInterval(this.sliderDown, 2000)
   },

   methods: {

      sliderDown(){
         this.counter++;
         if(this.counter > this.images.length - 1){
            this.counter = 0;
         }
      },

      sliderUp(){
         this.counter--;
         if(this.counter < 0){
            this.counter = this.images.length - 1;
         }
      }

   }

});