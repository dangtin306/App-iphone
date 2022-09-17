<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <input type="radio" class="btn-check"   value="1" v-model="picked" id="chay1" autocomplete="off">
      <label class="btn rounded-pill btn-outline-primary btn-lg" @click="chay1" for="chay1">One</label>

      <input type="radio" class="btn-check"   value="2" v-model="picked" id="chay2" autocomplete="off">
      <label class="btn rounded-pill btn-outline-primary btn-lg" @click="chay1" for="chay2">Two</label>

      <input type="radio" class="btn-check"   value="3" v-model="picked" id="chay3" autocomplete="off">
      <label class="btn rounded-pill btn-outline-primary btn-lg" @click="chay1" for="chay3">Three</label>

      <input type="radio" class="btn-check"   value="4" v-model="picked" id="chay4" autocomplete="off">
      <label class="btn rounded-pill btn-outline-primary btn-lg" @click="chay1" for="chay4">Four</label>

      <input type="radio" class="btn-check"   value="5" v-model="picked" id="chay5" autocomplete="off">
      <label class="btn rounded-pill btn-outline-primary btn-lg" @click="chay1" for="chay5">Five</label>

      <input type="radio" class="btn-check"   value="6" v-model="picked" id="chay6" autocomplete="off">
      <label class="btn rounded-pill btn-outline-primary btn-lg" @click="chay1" for="chay6">Six</label>

      <input type="radio" class="btn-check"   value="7" v-model="picked" id="chay7" autocomplete="off">
      <label class="btn rounded-pill btn-outline-primary btn-lg" @click="chay1" for="chay7">Seven</label>

      <input type="radio" class="btn-check"   value="8" v-model="picked" id="chay8" autocomplete="off">
      <label class="btn rounded-pill btn-outline-primary btn-lg" @click="chay1" for="chay8">Eight</label>

      <input type="radio" class="btn-check"   value="9" v-model="picked" id="chay9" autocomplete="off">
      <label class="btn rounded-pill btn-outline-primary btn-lg" @click="chay1" for="chay9">Nine</label>

      <input type="radio" class="btn-check"   value="10" v-model="picked" id="chay10" autocomplete="off">
      <label class="btn rounded-pill btn-outline-primary btn-lg" @click="chay1" for="chay10">Ten</label>

      
      {{ thanhcong }}

<p id="demo"> </p>
 
    </ion-content>
  </ion-page>
</template>

<script>

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import axios from 'axios' 
export default {
  name: 'Tab1Page',
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage } ,
  data() {
      return {
        picked: '' ,
      }} ,
      methods: 
    {
        chay1() {
          
        
          setTimeout( () => {
            this.chay2()
      }, 100);
        },
        chay2()
        {
          if(!this.picked){
                    alert('Please Add a Number')
                    return
                }
                else
                {
                  
                  this.url = 'https://numbersapi.p.rapidapi.com/' + this.picked + '/math' ;
               
                  const options = {
  method: 'GET',
  url: this.url ,
  params: {fragment: 'true', json: 'true'},
  headers: {
    'X-RapidAPI-Key': '2163a7c370msh7888978aa0a7eb7p1e4fd5jsn1170303e165b',
    'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
  }
};

axios.request(options).then(response => {
  console.log(response.data);
this.thanhcong = response.data.text ; 
console.log(this.thanhcong);

document.getElementById("demo").innerHTML = this.thanhcong ;
        console.log('Text: %o', this.myHtmlCode );
  
}

).catch(function (error) {
	console.error(error);
  
})

;

                }

        }
      },
      watch: {
            thanhcong(e) {
              e.preventDefault()
                console.log('message changed')
            } }
};
 
</script>
