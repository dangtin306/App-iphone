<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button text="Quay Lại"></ion-back-button>
                </ion-buttons>
                <ion-title>Xem link bio</ion-title>
            </ion-toolbar>
          </ion-header>
      <ion-content :fullscreen="true">
        
        <body
        class="
          antialiased
          bg-gradient-to-r
          from-pink-300
          via-purple-300
          to-indigo-400
        "
      >
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Xem link bio</ion-title>
        </ion-toolbar>
      </ion-header>
   <br>

    <button type='button' @click="click2" 
    class='flex break-inside bg-white text-black border-2 border-black rounded-3xl px-6 py-3 mb-4 w-full dark:bg-slate-800 dark:text-white'>
    <div class='m-auto'>
      <div class='flex items-center justify-start flex-1 space-x-4'>
        <span class='font-medium mb-[-2px]'>Xem bio link ở webview </span>
        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
          <path d='M5 12h13M12 5l7 7-7 7' />
      </svg>
      </div>
    </div>
  </button>


        <button @click="click1" type='button'
        class='flex break-inside bg-white text-black border-2 border-black rounded-3xl px-6 py-3 mb-4 w-full dark:bg-slate-800 dark:text-white'>
        <div class='m-auto'>
          <div class='flex items-center justify-start flex-1 space-x-4'>
            <span class='font-medium mb-[-2px]'>Xem bio link ở trình duyệt mới </span>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
              <path d='M5 12h13M12 5l7 7-7 7' />
          </svg>
          </div>
        </div>
      </button>

    <router-link style="text-decoration: none"  to="/tabs/biolink">
      <button type='button'
      class='flex break-inside bg-white text-black border-2 border-black rounded-3xl px-6 py-3 mb-4 w-full dark:bg-slate-800 dark:text-white'>
      <div class='m-auto'>
        <div class='flex items-center justify-start flex-1 space-x-4'>
          <span class='font-medium mb-[-2px]'>Xem bio ngay trong ứng dụng </span>
          <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
            <path d='M5 12h13M12 5l7 7-7 7' />
        </svg>
        </div>
      </div>
    </button>
  </router-link> 
 
   
           </body>
      </ion-content>
      
    </ion-page>
  </template>
  
  <script>
   import { Browser } from '@capacitor/browser';
  import { Storage } from '@ionic/storage';
  import { IonPage, IonHeader, IonToolbar,IonBackButton, IonTitle, IonContent } from '@ionic/vue';
  import axios from 'axios' 
  export default {
    name: 'chedoxembioPage',
    components: {  IonHeader, IonToolbar,IonBackButton, IonTitle, IonContent, IonPage } ,
    data() {
        return {
          localStorage: new Storage(),
          picked: '' ,
          apikey: null ,
          lienket: null ,
          traloiso: null ,
          aka: '',
        name: '',
        capital: ''
        }} ,
        created(){
          this.localStorage.create();
          this.username = this.getLocalStorage('username') ;
          this.apikey = this.getLocalStorage('apikey') ;
          Promise.all([this.apikey]).then((arrayOfResults) => {
      this.apikey=arrayOfResults[0]; 
    });
    Promise.all([this.username]).then((arrayOfResults) => {
      this.username=arrayOfResults[0]; 
      this.fetchData();
    });
          
        },
        methods: 
      {
        click2()
        {
            Browser.open({ url: this.lienket });
        },
        click1(){
            window.open(this.lienket ,"_blank" ) ;
        },
        fetchData() {
          
          this.lienket = 'https://vip.hust.media/webapp/' + this.username ;
        } ,
       
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
  