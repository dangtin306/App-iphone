<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="home" />
          <ion-label>Trang chủ</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="link" />
          <ion-label>Liên Kết</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="profile" href="/tabs/profile">
          <ion-icon :icon="analytics" />
          <ion-label>Cài đặt</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab4" @click="gioithieu">
          <ion-icon :icon="square" />
          <ion-label>Giới thiệu</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { InAppBrowser  } from "@ionic-native/in-app-browser";
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { analytics, square, home ,link } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      analytics, 
      square, 
      link,
      home,
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
    }
  }
});
</script>
