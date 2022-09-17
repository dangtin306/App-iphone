<template>
  <in-app-browser></in-app-browser>
</template>

<script>
  import { defineComponent } from 'vue'
import { InAppBrowser  } from "@ionic-native/in-app-browser";
// import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

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
  name: 'WebViewer',
  components: {
  
  },
  setup() {
    // const browser = InAppBrowserObject ;
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
   
  },
  methods: {
    chay1() {
      
    }
  }
});
</script>