<template>
    <ion-page>
        <ion-header>
          <ion-toolbar>
         
              <ion-title>Hust Media </ion-title>
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
      <ion-title size="large">Hust Media </ion-title>
    </ion-toolbar>
  </ion-header>
 
    <div class='flex items-center py-2 flex-col min-h-screen '>
        <p class="mr-10 ml-10 text-center text-black text-3xl underline decoration-pink-500/30">Hust Media
        </p>
        <div class="mx-20">
        <p  class=" text-center text-white text-2xl  ">
              Link to everywhere from your bio link
            </p>
        </div>
       
        <div @click="loginapp"  class="max-w-7xl w-full text-center mx-2 py-2 mb-2">
            <div to="/tabs/auth" style="text-decoration: none">
            <div class="relative group ">
              <div class="absolute -inset-1 bg-gradient-to-r 
              from-purple-600 to-pink-600 rounded-lg blur opacity-25 
              group-hover:opacity-100 transition duration-1000 
              group-hover:duration-200"></div>
              <div class="relative px-3 py-3 bg-gradient-to-r from-blue-100 to-pink-200 hover:from-pink-400 hover:to-yellow-300 ring-1 ring-gray-900/5 
             rounded-2xl leading-none  items-top justify-start space-x-3">
             
             
             
                <div class="space-y-2">
                  
                  <p class="text-lg text-slate-1000">
                    <!-- <img src="https://inkythuatso.com/uploads/images/2021/11/mb-bank-logo-inkythuatso-01-10-09-01-10.jpg"    class="h-7 w-7 cananh"> -->
                  
                Đăng nhập App Hust Media
                  </p>
                  <div class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank">
                 ( Login App )  ->   </div>
    
                    <span class="absolute  rounded-2xl inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
                </div>
              
              </div>
           
            </div>
        </div>
          </div>
          <div  class="max-w-7xl w-full text-center mx-2 py-2 mb-2">
            <router-link to="/tabs/signup" style="text-decoration: none">
            <div class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-r 
              from-purple-600 to-pink-600 rounded-lg blur opacity-25 
              group-hover:opacity-100 transition duration-1000 
              group-hover:duration-200"></div>
              <div class="relative px-3 py-3 bg-gradient-to-r from-blue-100 to-pink-200 hover:from-pink-400 hover:to-yellow-300 ring-1 ring-gray-900/5 
             rounded-2xl leading-none  items-top justify-start space-x-3">
             
             
             
                <div class="space-y-2">
                  
                  <p class="text-lg text-slate-1000">
                    <!-- <img src="https://inkythuatso.com/uploads/images/2021/11/mb-bank-logo-inkythuatso-01-10-09-01-10.jpg"    class="h-7 w-7 cananh"> -->
                  
               Đăng ký tài khoản
                  </p>
                  <div class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank">
                Sign Up ->   </div>
    
                    <span class="absolute  rounded-2xl inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
                </div>
              
              </div>
           
            </div>
        </router-link>
          </div>
          <div  class="max-w-7xl w-full text-center mx-2 py-2 mb-2">
            <div  @click="random" style="text-decoration: none">
            <div class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-r 
              from-purple-600 to-pink-600 rounded-lg blur opacity-25 
              group-hover:opacity-100 transition duration-1000 
              group-hover:duration-200"></div>
              <div class="relative px-3 py-3 bg-gradient-to-r from-blue-100 to-pink-200 hover:from-pink-400 hover:to-yellow-300 ring-1 ring-gray-900/5 
             rounded-2xl leading-none  items-top justify-start space-x-3">
             
             
             
                <div class="space-y-2">
                  
                  <p class="text-lg text-slate-1000">
                    <!-- <img src="https://inkythuatso.com/uploads/images/2021/11/mb-bank-logo-inkythuatso-01-10-09-01-10.jpg"    class="h-7 w-7 cananh"> -->
                  
                    Đăng ký nhanh 
                 bằng một lần nhấp ( Pro )
                  </p>
                  <div class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank">
                Fast Sign Up Pro ->   </div>
    
                    <span class="absolute  rounded-2xl inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
                </div>
              
              </div>
           
            </div>
        </div>
          </div>
          <p class="mr-7 ml-7 text-center text-black text-base underline decoration-pink-500/30">
            Bằng cách ấn đăng ký và đăng nhập, bạn đã đồng ý với điều khoản của chúng tôi 
        </p>
      
    </div> </div>
</ion-content>
</ion-page>
    </template>
    <script>
 import { IonPage, IonHeader, IonTitle, IonContent , IonToolbar } from '@ionic/vue';
 import axios from 'axios' ;
 import { Browser } from '@capacitor/browser';
 import { InAppBrowser  } from "@awesome-cordova-plugins/in-app-browser";
 import { Storage } from '@ionic/storage';
 import Swal from 'sweetalert2' ;
         export default {
            components: {  IonHeader , IonTitle, IonContent, IonPage , IonToolbar } ,
            name: 'authenticationPage',
              data() {
                  return {
                      loading: false,
                      users: null,
                      userss: null,
                      localStorage: new Storage(),
                      size: null ,
                      ketqua: null ,
                      usernamebio: null,
                      mota: null ,
                      hientruyen: null ,
                      usersocial: null ,
                      error: null,
                      infoBox: null,
                      width:0,
                      height:0
                  };
              },
              created() {
                //   this.fetchData();
             
                this.localStorage.create();
              },
              methods: {
                loginapp()
                {
                  const linkopenapp = 'https://tuongtac.fun/dang-nhap-app.php' ;
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
   else if( event.url.includes("?apikey=") == true ){
 
// use the function:

this.apikey = event.url.split('?apikey=')[1];
this.apikey = this.apikey.split("?username=")[0]; 
this.username =   event.url.split('?username=')[1];
console.log ( this.apikey);
console.log ( this.username);
this.setLocalStorage( 'username' , this.username  ) ;
    this.setLocalStorage('apikey' , this.apikey  ) ;
    browser.close();
    this.$router.push('tab11') ;
    } 
    else if( event.url.includes("tecom.pro") == true ){
      browser._loadAfterBeforeload(event.url);
    } 
    else if( event.url.includes("?=thoatwebview") == true ){
      browser.close();
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
                testFunction(response)
            {
                this.info = response.data ,
    this.apikey = this.info.apikey ,
    this.username = this.info.username ,
    this.message = this.info.message ,
    this.status = this.info.status 
    if ( this.status == 0 )
    {  
      Swal.fire({
  title: this.info.message ,
  heightAuto : false,
 
})

    }
    else if ( this.status == 1 )
{
  this.setLocalStorage( 'username' , this.username  ) ;
    this.setLocalStorage('apikey' , this.apikey  ) ;
    this.$router.push('tab11') ;
}
            },
                random(){
                    const  headers = {
    'content-type': 'application/json' 
  } ;
  let config = {
  headers: headers
};
                axios
       .post('https://tuongtac.fun/ionic/dangky.php', {
        chedo: 'random' ,
  }, config)
  .then(response => (this.testFunction(response  )))
  .catch(error => console.log(error) )
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
    }
//                   fetchData() {
          
//                     var url = location.href  ;
//         var splitter = 'webapp/' ;
        
        
//         var urlsplit = url.split(splitter)[1];
//         this.usernamebio = urlsplit ;
//         console.log(urlsplit) ;
//     } ,

// saochep(urlsplit) {
//         Swal.fire({
//   title: 'Sao chép thành công' 
 
// })
// urlsplit = 'https://vip.hust.media'+'/webapp/'+ urlsplit ;
//                 navigator.clipboard.writeText(urlsplit);
               
//       },
//     molienket(){
//         window.location.href = this.lienket ;
//     }
    
    }}
              
    </script>