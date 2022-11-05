<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button text="Quay Lại"></ion-back-button>
            </ion-buttons>
          <ion-title> SignUp</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large"> SignUp </ion-title>
          </ion-toolbar>
        </ion-header>
        <body
      class="
        antialiased
        bg-gradient-to-r
        from-pink-300
        via-purple-300
        to-indigo-400
      "
    >
    <br>
    <div class="mx-20">
        <p  class=" text-center text-white text-2xl  ">
              Đăng ký tài khoản mới
            </p>
        </div>
        <div class="mx-1 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div class="mb-4">
              <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                Username
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username">
            </div>
            <div class="mb-6">
              <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                Password
              </label>
              <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************">
              <p class="text-red text-xs italic">Please choose a password.</p>
            </div>
            <div class="flex items-center justify-between">
             
                <button class="bg-dark hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
                Sign Up
              </button>
            </div>
        </div>
  </body>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  
  import axios from 'axios' 
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent , IonBackButton } from '@ionic/vue';
  // import ExploreContainer from '@/components/ExploreContainer.vue';
  
  export default {
    name: 'Tab2Page',
    components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage , IonBackButton} ,
    data (){ return {
                name : '',
                age : '',
                info : '',
                thanhcong : '' ,
            }
        },
        methods : {
            onSubmit(e){
                e.preventDefault()
                if(!this.name){
                    alert('Please điền đầy đủ thông tin')
                    return
                }
                const newInformation = {
                    id: Math.floor(Math.random() * 100000),
                    name : this.name,
                    age : this.age,
                    reminder : this.reminder
                }
                this.$emit('add-information', newInformation) ;
  
                
  
  
   const url = 'https://deep-translate1.p.rapidapi.com/language/translate/v2' ;
   const  headers = {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '2163a7c370msh7888978aa0a7eb7p1e4fd5jsn1170303e165b',
      'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
    } ;
    const data = {"q":this.name ,"source":"en","target":"vi"} ;
    let config = {
    headers: headers
  }
  
  axios.post(url ,data , config ).then(response =>{
    this.thanhcong = response.data.data.translations.translatedText ; 
    console.log(this.thanhcong);
  }).catch(function (error) {
      console.error(error);
  });
             
                             
            }
        }
  };
  </script>
  