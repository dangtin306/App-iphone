<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
          <ion-buttons slot="start">
              <ion-back-button text="Quay Lại"></ion-back-button>
          </ion-buttons>
          <ion-title>Learning</ion-title>
      </ion-toolbar>
  </ion-header>
  
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="calWrap">
        <div class="top">
            <input type="text" v-model="total" />
        </div>
        <div id="keys">
            <div v-on:click="key(7)">7</div>
            <div v-on:click="key(8)">8</div>
            <div v-on:click="key(9)">9</div>
            <div v-on:click="key('+')">+</div>
            <div v-on:click="key(4)">4</div>
            <div v-on:click="key(5)">5</div>
            <div v-on:click="key(6)">6</div>
            <div v-on:click="key('-')">-</div>
            <div v-on:click="key(1)">1</div>
            <div v-on:click="key(2)">2</div>
            <div v-on:click="key(3)">3</div>
            <div v-on:click="key('*')">*</div>
            <div v-on:click="key(0)">0</div>
            <div v-on:click="clear()" class="clear">c</div>
            <div v-on:click="equal()">=</div>
            <div v-on:click="key('/')">/</div>
        </div></div>
    </ion-content>
  </ion-page>
</template>

<script>

import { IonPage, IonHeader, IonBackButton ,IonToolbar,IonButtons, IonTitle, IonContent } from '@ionic/vue';

export default {
  data() {
        return {
          total: 0
        }
      },
  name: 'Tab4Page',
  components: {  IonHeader,IonButtons, IonBackButton ,IonToolbar, IonTitle, IonContent, IonPage },
  methods: {
            key: function(num) {
            return this.total += num;
            },
            clear: function() {
            return this.total = 0;
            },
            equal: function() {
             let equal = this.total;
             return this.total = eval(equal);
            }         
        }
};
</script>
<style>
  /* ------------------------------------------------------------------
Google Fonts:
------------------------------------------------------------------ */
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);
/***********************************************************************************************/
/* =Common Styles */
/***********************************************************************************************/
body {
  font-family: 'Open Sans', sans-serif;
  background-color: #4894D6;
}
body #calWrap {
  background-color: #77889a;
  border-radius: 23px;
  padding: -1em 1em 1em 1em;
  margin: auto;
  width: 292px;
  clear: both;
  display: table;
}
body .top input {
  height: 36px;
  width: 90%;
  font-size: 13px;
  font-weight: bold;
  border-radius: 4px;
  margin: 0 0 14px 0;
  border: 0;
  padding: 0 1em;
  box-shadow: 0px 4px rgba(0, 0, 0, 0.2);
}
body #keys div {
  cursor: pointer;
  width: 66px;
  height: 36px;
  font-weight: bold;
  text-align: center;
  line-height: 2em;
  background: white;
  border-radius: 3px;
  box-shadow: 0px 4px rgba(0, 0, 0, 0.2);
  margin: 0 7px 11px 0;
  float: left;
  transition: all 0.2s ease;
}
body #keys div:hover {
  background-color: #D6D6D6;
}
body #keys .zero {
  width: 138px !important;
}
body #keys .clear {
  background-color: #ffd900 !important;
}

</style>
