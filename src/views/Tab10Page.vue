<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button text="Quay Lại"></ion-back-button>
            </ion-buttons>
            <ion-title>Giải trí với toán học</ion-title>
        </ion-toolbar>
    </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
            <ion-toolbar>
              <ion-title size="large">Giải trí</ion-title>
            </ion-toolbar>
          </ion-header>
          <!-- {{ name }} -->
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
  
  
        <div v-if="traloiso == 'ok' " class="relative py-3 sm:max-w-xl sm:mx-auto">
          <div class="flex flex-col items-center justify-center py-2">
            <div class="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-600 shadow-lg transform rotate-6 rounded-3xl">
    
            </div>
            <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
             <h2 class="text-3xl text-break font-bold">
              <p id="demo"> </p></h2></div></div></div>
  
              
                <br><br>
             
        <router-link style="text-decoration: none"  to="/tabs/tab6">

            <button type="button"  class="btn btn-outline-danger w-100">Lấy ý nghĩa của 1 con số bất kỳ</button>
          </router-link>
<br><br>
            <router-link style="text-decoration: none"  to="/tabs/tab4">

              <button type="button"  
              class="btn btn-outline-danger w-100">Máy tính </button>
            </router-link>
            <br><br>
            <router-link style="text-decoration: none"  to="/tabs/tab7">

              <button type="button"  
              class="btn btn-outline-danger w-100">Học Lý Thuyết Phép toán<br>cơ bản </button>
            </router-link>  
            <br><br>
            <router-link style="text-decoration: none"  to="/tabs/tab9">

              <button type="button"  
              class="btn btn-outline-danger w-100">Game vui Toán học</button>
            </router-link>
      </ion-content>
    </ion-page>
  </template>
  
<script>
import { Storage } from '@ionic/storage';
import { IonPage,  IonHeader, IonToolbar, IonTitle, IonContent , IonBackButton } from '@ionic/vue';
import axios from 'axios' 
export default {
  name: 'Tab10Page',
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage , IonBackButton} ,
  data() {
      return {
        localStorage: new Storage(),
        picked: '' ,
        name: null ,
        traloiso: null 
      }} ,
      created(){
        this.localStorage.create();

        this.name = this.getLocalStorage('name') ;
        Promise.all([this.name]).then((arrayOfResults) => {
    this.name=arrayOfResults[0]; 

  });
      },
      mounted() {


 
  },
      methods: 
    {
        async setLocalStorage(index, value) {
      await this.localStorage.set(index, value);
    },
    async removeLocalStorage(index) {
      await this.localStorage.remove(index);
    },
    async clearLocalStorage() {
      await this.localStorage.clear();
    },
    getLocalStorage(index) {
      return this.localStorage.get(index);
    },
        chay1() {
          
        
          setTimeout( () => {
     
          
                   console.log(this.name) ;
                   console.log(this.flag );
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
this.traloiso = 'ok' ;
document.getElementById("demo").innerHTML = this.thanhcong ;
        console.log('Text: %o', this.myHtmlCode );
        this.setLocalStorage('name', this.thanhcong );
        this.name = this.getLocalStorage('name') ;
        Promise.all([this.name]).then((arrayOfResults) => {
    this.name=arrayOfResults[0]; 

  });
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
