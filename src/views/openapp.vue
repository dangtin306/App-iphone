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

  export default {
    name: 'openappPage',
    components: { IonTabs, IonPage, IonRouterOutlet },
    data() {
      return {
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
        const options = {
                  location: 'no',
                  usewkwebview: 'yes',
                  zoom : 'yes',
                  mediaPlaybackRequiresUserAction : 'no',
                  hidespinner : 'yes',
                  allowInlineMediaPlayback : 'no',
              }
      const browser = InAppBrowser.create(
        'https://hust.media?=app',
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
      }} ,
  created()
      {
        this.gioithieu();
      }
    
  };
  </script>
  