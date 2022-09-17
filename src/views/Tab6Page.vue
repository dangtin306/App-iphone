<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button text="Quay Lại"></ion-back-button>
            </ion-buttons>
            <ion-title>Tìm hiểu 1 con số</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Tìm hiểu 1 con số</ion-title>
          </ion-toolbar>
        </ion-header>
        
        <form @submit="onSubmit" class="add-form">
          <div class="form-control">
            <label>Fill in the numbers</label>
            <br>
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">Number</span>
              <input type="text" class="form-control"
               placeholder="Điền 1 con số bất kỳ" aria-label="Username" v-model="name" name="name" aria-describedby="addon-wrapping">
            </div>
        
          </div>
       <br>
           <button type='submit'
        class='w-100 flex break-inside bg-black rounded-3xl px-8 py-3 mb-3 w-full dark:bg-slate-800 dark:text-white'>
        <div class='flex items-center justify-between flex-1'>
          <span class='text-lg font-medium text-white'>Xác nhận</span>
          <svg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path fillRule='evenodd' clipRule='evenodd'
              d='M0 8.71423C0 8.47852 0.094421 8.25246 0.262491 8.08578C0.430562 7.91911 0.658514 7.82547 0.896201 7.82547H13.9388L8.29808 2.23337C8.12979 2.06648 8.03525 1.84013 8.03525 1.60412C8.03525 1.36811 8.12979 1.14176 8.29808 0.974875C8.46636 0.807989 8.6946 0.714233 8.93259 0.714233C9.17057 0.714233 9.39882 0.807989 9.5671 0.974875L16.7367 8.08499C16.8202 8.16755 16.8864 8.26562 16.9316 8.3736C16.9767 8.48158 17 8.59733 17 8.71423C17 8.83114 16.9767 8.94689 16.9316 9.05487C16.8864 9.16284 16.8202 9.26092 16.7367 9.34348L9.5671 16.4536C9.39882 16.6205 9.17057 16.7142 8.93259 16.7142C8.6946 16.7142 8.46636 16.6205 8.29808 16.4536C8.12979 16.2867 8.03525 16.0604 8.03525 15.8243C8.03525 15.5883 8.12979 15.362 8.29808 15.1951L13.9388 9.603H0.896201C0.658514 9.603 0.430562 9.50936 0.262491 9.34268C0.094421 9.17601 0 8.94995 0 8.71423Z'
              fill='white' />
          </svg>
        </div>
      </button>
      <div v-if="thanhcong">  
   
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
          <div class="flex flex-col items-center justify-center py-2">
            <div class="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-600 shadow-lg transform rotate-6 rounded-3xl">
    
            </div>
            <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
             <h2 class="text-3xl text-break font-bold">
              kết quả {{ thanhcong }}.</h2></div></div></div>
  </div>
    </form>
  
  
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  
  import axios from 'axios' 
  import { IonPage, IonHeader, IonToolbar,IonBackButton, IonTitle, IonContent } from '@ionic/vue';
  // import ExploreContainer from '@/components/ExploreContainer.vue';
  
  export default {
    name: 'Tab2Page',
    components: {  IonHeader, IonToolbar,IonBackButton, IonTitle, IonContent, IonPage } ,
    data (){ return {
                name : '',
                age : '',
                info : '',
                thanhcong : '' ,
            }
        },
        methods : {
            onSubmit(e){
                e.preventDefault()
                if(!this.name){
                    alert('Please điền đầy đủ thông tin')
                    return
                }
                const newInformation = {
                    id: Math.floor(Math.random() * 100000),
                    name : this.name,
                    age : this.age,
                    reminder : this.reminder
                }
                this.$emit('add-information', newInformation) ;
  
                
  
                const url = 'https://numbersapi.p.rapidapi.com/' + this.name + '/math' ;

    let config = {
        params: {fragment: 'true', json: 'true'},
  headers: {
    'X-RapidAPI-Key': '2163a7c370msh7888978aa0a7eb7p1e4fd5jsn1170303e165b',
    'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
  }
  }
  
  axios.get(url  , config ).then(response =>{
    this.thanhcong = response.data.text ; 
    console.log(this.thanhcong);
  }).catch(function (error) {
      console.error(error);
  });
             
                             
            }
        }
  };
  </script>
  