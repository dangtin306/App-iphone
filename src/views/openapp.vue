<template>
    <ion-page>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
       
      </ion-tabs>
    </ion-page>
  </template>
  
  <script>

  import { InAppBrowser  } from "@ionic-native/in-app-browser";
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
       beforeloadCallBack(params, callback) {
    console.log(">>> beforeload: " + params.url.toString());
  
    if (params.url.includes("https://hust.media")) {
      console.log(">>> beforeload: allowed");
      callback(params.url);
    }
    else if (params.url.includes("https://vip.hust.media")) {
      console.log(">>> beforeload: allowed");
      callback(params.url);
    }
    else {
      console.log(">>> beforeload: restricted");
      alert("The URL is restricted!");
    }
  },
  gioithieu()
      {
        const linkopenapp = 'https://hust.media?=apple?=' + this.apikey + '?=keyapple' ;
        const options = {
                  location: 'no',
                  usewkwebview: 'yes',
                  zoom : 'yes',
                  mediaPlaybackRequiresUserAction : 'yes',
                  hidespinner : 'yes',
                  footer : 'yes',
                  hidenavigationbuttons : 'no' ,
                  hideurlbar : 'yes' ,
                  toolbar: 'yes' ,
                  toolbartranslucent: 'no' ,
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
      browser.on("beforeload").subscribe((params) =>
        this.beforeloadCallBack(params, () => {
          return params.url;
        })
      );
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
  