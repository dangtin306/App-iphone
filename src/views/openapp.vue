<template>
    <ion-page>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
       
      </ion-tabs>
    </ion-page>
  </template>
  
  <script>

  import { InAppBrowser  } from "@awesome-cordova-plugins/in-app-browser";
  import { Browser } from '@capacitor/browser';
  import { IonTabs, IonPage, IonRouterOutlet } from '@ionic/vue';
  import { Storage } from '@ionic/storage';
  export default {
    name: 'openappPage',
    components: { IonTabs, IonPage, IonRouterOutlet },
    data() {
      return {
        localStorage: new Storage(),
      }
    },
    methods:
    {
  //      beforeloadCallBack(params, callback) {
  //   console.log(">>> beforeload: " + params.url.toString());
  
  //   if (params.url.includes("https://hust.media")) {
  //     console.log(">>> beforeload: allowed");
  //     callback(params.url);
  //   }
  //   else if (params.url.includes("https://vip.hust.media")) {
  //     console.log(">>> beforeload: allowed");
  //     callback(params.url);
  //   }
  //   else {
  //     console.log(">>> beforeload: restricted");
  //     alert("The URL is restricted!");
  //   }
  // },
  gioithieu()
      {
        const linkopenapp = 'https://hust.media?=apple?=' + this.apikey + '?=keyapple' ;
        const options = {
                  location: 'yes',
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
                  beforeload: 'yes',
                  toolbarposition : 'bottom' 

              }
      const browser = InAppBrowser.create(
        linkopenapp ,
        '_self',
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
      browser.close();
      },
      getLocalStorage(index) {
      return this.localStorage.get(index);
    }} ,
  created()
      {
        this.localStorage.create();
        this.apikey = this.getLocalStorage('apikey') ;
        Promise.all([this.apikey]).then((arrayOfResults) => {
    this.apikey=arrayOfResults[0]; 
  });
        setTimeout( () => {
    console.log( this.gioithieu() );
      }, 500);
    
      }
    
  };
  </script>
  