<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
          <ion-buttons slot="start">
              <ion-back-button text="Quay Lại"></ion-back-button>
          </ion-buttons>
          <ion-title>Timer</ion-title>
      </ion-toolbar>
  </ion-header>
    <ion-content :fullscreen="true">
      <b-container class="bv-example-row" fluid>
        <b-row class="justify-content-md-center" align-h="center">
          <TodoItem></TodoItem>
        </b-row>
      </b-container>
    </ion-content>
  </ion-page>
</template>

<script>
import TodoItem from './components/Game.vue'

import { IonPage, IonHeader,IonBackButton, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default {
  name: 'Tab3Page',
  components: { TodoItem, IonHeader,IonBackButton, IonToolbar, IonTitle, IonContent, IonPage }
,
data() {
  return {
    duration: 15 * 1000,
    elapsed: 0
  }
},
created() {
  let lastTime = performance.now()
  const update = () => {
    const time = performance.now()
    this.elapsed += Math.min(time - lastTime, this.duration - this.elapsed)
    lastTime = time
    this.handle = requestAnimationFrame(update)
  }
  update()
},
unmounted() {
  cancelAnimationFrame(this.handle)
}
};
</script>
<style>
  .elapsed-container {
    width: 300px;
  }
  
  .elapsed-bar {
    background-color: red;
    height: 10px;
  }
  </style>