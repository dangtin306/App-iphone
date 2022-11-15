<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Trang chủ</ion-title>
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
        <ion-title size="large">Trang chủ</ion-title>
      </ion-toolbar>
    </ion-header>
 <br>
 <router-link style="text-decoration: none"  to="/tabs/tab2">
  <button type='button'
  class='flex break-inside bg-white text-black border-2 border-black rounded-3xl px-6 py-3 mb-4 w-full dark:bg-slate-800 dark:text-white'>
  <div class='m-auto'>
    <div class='flex items-center justify-start flex-1 space-x-4'>
      <span class='font-medium mb-[-2px]'>Chỉnh sửa bio link của bạn</span>
      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M5 12h13M12 5l7 7-7 7' />
    </svg>
    </div>
  </div>
</button>
</router-link> 
    <router-link style="text-decoration: none"  to="/tabs/chedoxembio">
      <button type='button'
      class='flex break-inside bg-white text-black border-2 border-black rounded-3xl px-6 py-3 mb-4 w-full dark:bg-slate-800 dark:text-white'>
      <div class='m-auto'>
        <div class='flex items-center justify-start flex-1 space-x-4'>
          <span class='font-medium mb-[-2px]'>Xem bio link của bạn</span>
          <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
            <path d='M5 12h13M12 5l7 7-7 7' />
        </svg>
        </div>
      </div>
    </button>
  </router-link> 
  <router-link style="text-decoration: none"  to="/tabs/shorturl">
    <button type='button'
    class='flex break-inside bg-white text-black border-2 border-black rounded-3xl px-6 py-3 mb-4 w-full dark:bg-slate-800 dark:text-white'>
    <div class='m-auto'>
      <div class='flex items-center justify-start flex-1 space-x-4'>
        <span class='font-medium mb-[-2px]'>rút gọn liên kết ngắn hơn</span>
        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
          <path d='M5 12h13M12 5l7 7-7 7' />
      </svg>
      </div>
    </div>
  </button>
</router-link> 
<router-link style="text-decoration: none"  to="/tabs/contact">
  <button type='button'
  class='flex break-inside bg-white text-black border-2 border-black rounded-3xl px-6 py-3 mb-4 w-full dark:bg-slate-800 dark:text-white'>
  <div class='m-auto'>
    <div class='flex items-center justify-start flex-1 space-x-4'>
      
      <span class='font-medium mb-[-2px]'>Liên hệ đội ngũ phát triển</span>
      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M5 12h13M12 5l7 7-7 7' />
        </svg>
    </div>
  </div>
</button>
</router-link>      
          <router-link style="text-decoration: none"  to="/tabs/tab10">
              <button type='button'
              class='flex break-inside bg-white text-black border-2 border-black rounded-3xl px-6 py-3 mb-4 w-full dark:bg-slate-800 dark:text-white'>
              <div class='m-auto'>
                <div class='flex items-center justify-start flex-1 space-x-4'>
                  
                  <span class='font-medium mb-[-2px]'>Game vui cùng các con số</span>
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
import { doc, setDoc } from "firebase/firestore"
import db from '../firebase/init.js'
import { Storage } from '@ionic/storage';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import axios from 'axios' 
export default {
  name: 'Tab1Page',
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage } ,
  data() {
      return {
        localStorage: new Storage(),
        picked: '' ,
        apikey: null ,
        traloiso: null ,
        aka: '',
      name: '',
      capital: ''
      }} ,
      created(){
        this.addCountryCapital();
        this.localStorage.create();
        this.username = this.getLocalStorage('username') ;
        this.apikey = this.getLocalStorage('apikey') ;
        Promise.all([this.apikey]).then((arrayOfResults) => {
    this.apikey=arrayOfResults[0]; 
    console.log(this.apikey);
    if ( this.apikey == null )
        {
          this.$router.push('auth') ;
         }   
       else if ( this.apikey == '' )
        {
          this.$router.push('auth') ;
         }   
  });
  Promise.all([this.username]).then((arrayOfResults) => {
    this.username=arrayOfResults[0]; 
    console.log(this.username);
    if ( this.username == null )
        {
          this.$router.push('auth') ;
         }   
       else if ( this.username == '' )
        {
          this.$router.push('auth') ;
         }   
  });
        
      },
      methods: 
    {
      async addCountryCapital() {

await setDoc(doc(db, 'countries', 'ss'), {
  // new data
  capital: 'Londossn'
  // merge
}, { merge: true })
},
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
