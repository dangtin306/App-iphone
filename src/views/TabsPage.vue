<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="home" />
          <ion-label>Con số</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="text" />
          <ion-label>Từ điển</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab3" href="/tabs/tab7">
          <ion-icon :icon="ellipse" />
          <ion-label>Lời giải</ion-label>
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
import { ellipse, square, home ,text } from 'ionicons/icons';
function beforeloadCallBack(params, callback) {
  console.log(">>> beforeload: " + params.url.toString());

  if (params.url.includes("https://google.com")) {
    console.log(">>> beforeload: allowed");
    callback(params.url);
  } else {
    console.log(">>> beforeload: restricted");
    alert("The URL is restricted!");
  }
}
export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      ellipse, 
      square, 
      text,
      home,
    }
  },
  methods:
  {
    gioithieu()
    {
      const options = {
                location: 'no',
                usewkwebview: 'yes',
            }
    const browser = InAppBrowser.create(
      'https://hust.media?=app',
      '_blank',
      options
    );
    browser.on("loadstop").subscribe((event) => {
      console.log(">>> onLoadStop:" + event.url.toString());
    
    });
    browser.on("loadstart").subscribe((event) => {
      console.log(">>> onLoadStart:" + event.url.toString());
      
    });
    browser.on("beforeload").subscribe((params) =>
      beforeloadCallBack(params, () => {
        return params.url;
      })
    );
    }
  }
});
</script>
