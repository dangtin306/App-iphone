<template>
  <in-app-browser></in-app-browser>
</template>

<script>
import { InAppBrowser } from "@ionic-native/in-app-browser";

function beforeloadCallBack(params, callback) {
  console.log(">>> beforeload: " + params.url.toString());

  if (params.url.includes("https://hust.media?=app")) {
    console.log(">>> beforeload: allowed");
    callback(params.url);
  } else {
    console.log(">>> beforeload: restricted");
    alert("The URL is restricted!");
  }
}

export default {
  components: {
    InAppBrowser,
  },
  setup() {
    const options = {
      location: "no",
      usewkwebview: "yes"
    };
    let browser = InAppBrowser.create(
      "https://hust.media?=app",
      "_blank",
      options
    );
    browser.on("loadstop").subscribe((event) => {
      console.log(">>> onLoadStop:" + event.url.toString());
      browser.show() ;
    });
    browser.on("loadstart").subscribe((event) => {
      console.log(">>> onLoadStart:" + event.url.toString());
      browser.show() ;
    });
    browser.on("beforeload").subscribe((params) =>
      beforeloadCallBack(params, () => {
        return params.url;
      })
    );
  },
};
</script>