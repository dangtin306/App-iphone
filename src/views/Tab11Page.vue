<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Trang chủ</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        
        <div
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
  <div v-if="openappleok == 'ok'">
  <div style="text-decoration: none" @click="openapppro3" >
    <button type='button'
    class='flex break-inside bg-white text-black border-2 border-black rounded-3xl px-6 py-3 mb-4 w-full dark:bg-slate-800 dark:text-white'>
    <div class='m-auto'>
      <div class='flex items-center justify-start flex-1 space-x-4'>
        
        <span class='font-medium mb-[-2px]'>
          <p class="mr-4 ml-4 text-center text-black text-3xl underline decoration-pink-500/30">  Ấn đây để tiếp tục truy cập vô App
          </p>
        </span>
        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
          <path d='M5 12h13M12 5l7 7-7 7' />
          </svg>
      </div>
    </div>
  </button>
  </div>     </div> 
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
           </div>
      </ion-content>
      
    </ion-page>
  </template>
  
  <script>

   import { InAppBrowser  } from "@awesome-cordova-plugins/in-app-browser";
    import { Browser } from '@capacitor/browser';

  import { Storage } from '@ionic/storage';
  
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import axios from 'axios' 
  export default {
    name: 'Tab11Page',
    components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage } ,
    data() {
        return {
          localStorage: new Storage(),
          picked: '' ,
          apikey: null ,
          openappleok: null ,
          apikeyokluon: '' ,
          traloiso: null ,
          aka: '',
        name: '',
        capital: ''
        }} ,
       
    
        created(){
          // alert(this.foo) ;
   
          this.localStorage.create();
          this.username = this.getLocalStorage('username') ;
          this.apikey = this.getLocalStorage('apikey') ;
          Promise.all([this.apikey]).then((arrayOfResults) => {
      this.apikey=arrayOfResults[0]; 
      console.log(this.apikey);
      if ( this.apikey == null )
          {
            this.$router.push('authentication') ;
           }   
         else if ( this.apikey == '' )
          {
            this.$router.push('authentication') ;
           }
           else
           {
            setTimeout( () => {
      this.openapppro2() ;
        }, 500);
     
           }   
    });
    Promise.all([this.username]).then((arrayOfResults) => {
      this.username=arrayOfResults[0]; 
      console.log(this.username);
      if ( this.username == null )
          {
            this.$router.push('authentication') ;
           }   
         else if ( this.username == '' )
          {
            this.$router.push('authentication') ;
           }   
           else
           {
            setTimeout( () => {
      this.openapppro2() ;

        }, 500);
     
           }
    });
   
        },
        
        methods: 
      {
        openapppro2()
        {
          const  headers = {
      'content-type': 'application/json' 
    } ;
    let config = {
    headers: headers
  };
                  axios
         .post('https://tuongtac.fun/api/appleapp.php', {
          apikey: this.apikey ,
          chedo: 'apple' 
    }, config)
    .then(response => (this.testFunction7(response  )))
    .catch(error => console.log(error) )
        },
        testFunction7(response)
              {
                  this.info = response.data ,
      this.apikey = this.info.apikey ,
      this.username = this.info.username ,
      this.message = this.info.message ,
      this.status = this.info.status 
      if ( this.status == 0 )
      {  
        this.openappleok = 'no' ;
        this.apikeyokluon = '' ;
      }
      else if ( this.status == 1 )
  {
    if ( this.message == 'mothoi' )
      {  
        this.openappleok = 'ok' ;
        this.apikeyokluon = '?=apple?=' +  this.apikey + '?=keyapple' ;
      }
      else{
        this.openappleok = 'no' ;
        this.apikeyokluon = '' ;
      }
  
  }
              },
     
    
  openapppro3()
  {
    this.localStorage.create();
          this.username = this.getLocalStorage('username') ;
          this.apikey = this.getLocalStorage('apikey') ;
          Promise.all([this.apikey]).then((arrayOfResults) => {
      this.apikey=arrayOfResults[0]; 
      console.log(this.apikey);
      if ( this.apikey == null )
          {
            this.$router.push('authentication') ;
           }   
         else if ( this.apikey == '' )
          {
            this.$router.push('authentication') ;
           }   
           else{
            this.gioithieu() ;
           }
    });
     
  },
  gioithieu()
      {
    
       
          const linkopenapp = 'https://tuongtac.fun/aboutus2.php?=apple?=' + this.apikey + '?=keyapple' ;
        const options = {
                    location: 'no',
                    usewkwebview: 'yes',
                    zoom : 'yes',
                    mediaPlaybackRequiresUserAction : 'yes',
                    hidespinner : 'yes',
                    hidenavigationbuttons : 'no' ,
                    hideurlbar : 'yes' ,
                    toolbar: 'yes' ,
                    toolbartranslucent: 'no' ,
                    enableViewportScale: 'yes' ,
                    fullscreen: 'no' ,
                    beforeload: 'get',
                    toolbarposition : 'bottom' 
  
                }
        const browser = InAppBrowser.create(
          linkopenapp ,
          '_blank',
          options
        );
        browser.on("loadstop").subscribe((event) => {
          console.log(">>> onLoadStop:" + event.url.toString());
        
        });
        browser.on("loadstart").subscribe((event) => {
          console.log(">>> onLoadStart:" + event.url.toString());
          
        });
        browser.on("beforeload").subscribe((event) =>
        {
          const mourlbrowser = event.url.toString() ;
      if( event.url.includes("hust.media") == true ){
        browser._loadAfterBeforeload(event.url);
      } 
      else if( event.url.includes("tecom.pro") == true ){
        browser._loadAfterBeforeload(event.url);
      } 
      else if( event.url.includes("tecom.media") == true ){
        browser._loadAfterBeforeload(event.url);
      } 
      else if( event.url.includes("tuongtac.fun") == true ){
        browser._loadAfterBeforeload(event.url);
      } 
      else if( event.url.includes("payeer.com") == true ){
        browser._loadAfterBeforeload(event.url);
      } 
      else if( event.url.includes("perfectmoney") == true ){
        browser._loadAfterBeforeload(event.url);
      } 
      else if( event.url.includes("paypal.com") == true ){
        browser._loadAfterBeforeload(event.url);
      } 
      else  if( event.url.includes("adclick.g.doubleclick.net") == true ){
        Browser.open({ url: mourlbrowser });
      } 
      else  if( event.url.includes("?gclid=") == true ){
        Browser.open({ url: mourlbrowser });
      } 
      else  if( event.url.includes("adroll") == true ){
        Browser.open({ url: mourlbrowser });
      } 
      else  if( event.url.includes("googleadservices") == true ){
        Browser.open({ url: mourlbrowser });
      } 
      else  if( event.url.includes("adroll.com") == true ){
        Browser.open({ url: mourlbrowser });
      } 
      else {
  window.open(mourlbrowser ,"_blank" ) ;
      }
  }
        );
       
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
        
        },
      
  };
   
  </script>
  