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
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Timer</ion-title>
          </ion-toolbar>
        </ion-header>
        <label
        >Thời gian chạy:
        <br>
        <progress :value="elapsed / duration"></progress
      ></label>
    
      <div>{{ (elapsed / 1000).toFixed(1) }}s</div>
    
      <div>
        Cấu hình:  <br>
        <input type="range" v-model="duration" min="1" max="300000">
        {{ (duration / 1000).toFixed(1) }}s
      </div>
   
      <button class="btn btn-outline-danger" @click="elapsed = 0">Reset</button>
      </ion-content>
    </ion-page>
  </template>
  
  <script>

  import { IonPage, IonHeader,IonBackButton, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

  export default {
    name: 'Tab3Page',
    components: {  IonHeader,IonBackButton, IonToolbar, IonTitle, IonContent, IonPage }
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