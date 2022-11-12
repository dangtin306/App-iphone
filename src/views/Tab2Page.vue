<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Add Links</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title >Add Links</ion-title>
        </ion-toolbar>
      </ion-header>
       <div class="text-center">
      <button 
      ref="addlink"  id="addlink" expand="block" class="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        + Add to link
      </button> 
      <button @click="click" 
      ref="Socials" id="Socials" expand="block" class="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        + Add a social
      </button></div>

      <ion-modal ref="addlink" trigger="addlink" :can-dismiss="canDismiss" :presenting-element="presentingElement">
        <ion-header>
          <ion-toolbar>
            <ion-title>Add link</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="dismiss()">Đóng</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <br>
          <label class="block text-grey-darker text-sm font-bold mb-2" for="inputlienket">
            Điền liên kết bạn muốn thêm nhé 
          </label>
          <input v-model="inputlienket" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="inputlienket" type="text" placeholder="Nhập liên kết">
          <br>
          <label class="Mô tả liên kết" for="inputmota">
            Mô tả liên kết
          </label>
          <input v-model="inputmota" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="inputmota"  type="text" placeholder="Nhập mô tả">

           <br> <br> <div class="text-center">
          <button @click="luulink('addlink')" class=" bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Xác nhận
          </button> </div>
        </ion-content>
      </ion-modal>
      <ion-modal ref="Socials" trigger="Socials" :can-dismiss="canDismiss" :presenting-element="presentingElement">
        <ion-header>
          <ion-toolbar>
            <ion-title>Socials</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="dismiss()">Đóng</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <br>
          <label for="countries2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Chọn nền tảng</label>
          
          <select  id="countries2" class="
          selectpicker sp1 form-control"    name="nhamang" v-model="inputmota">
              <option v-for="option in options" :key="option.value" :value="option.value">
{{ option.text }}
</option>
            </select>
            <label class="block text-grey-darker text-sm font-bold mb-2" for="inputlienket">
              Điền liên kết bạn muốn thêm nhé 
            </label>
            <input v-model="inputlienket" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="inputlienket" type="text" placeholder="Nhập liên kết">
            <br>    <div class="text-center">
          <button @click="luulink('addsocial')" class=" bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Xác nhận
          </button> </div>
        </ion-content>
      </ion-modal>

      <div class="max-w-7xl mx-2 py-2 mb-2">
        <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r 
          from-purple-600 to-pink-600 rounded-lg blur opacity-25 
          group-hover:opacity-100 transition duration-1000 
          group-hover:duration-200"></div>
          <div class="relative px-3 py-3 bg-gradient-to-r from-blue-100 to-pink-200 hover:from-pink-400 hover:to-yellow-300 ring-1 ring-gray-900/5 
         rounded-2xl leading-none flex items-top justify-start space-x-3">
         
         
         
            <div class="space-y-2">
              
              <p class="text-lg text-slate-1000">
                <!-- <img src="https://inkythuatso.com/uploads/images/2021/11/mb-bank-logo-inkythuatso-01-10-09-01-10.jpg"    class="h-7 w-7 cananh"> -->
              
                Liên kết: {{ lienket }}
              </p>
              <div class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank">
                Mô tả: {{ mota }}   </div>

                <span class="absolute  rounded-2xl inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
            </div>
          
          </div>
       
        </div>
      </div>
      <div class="max-w-7xl mx-2 py-2 mb-2">
        <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r 
          from-purple-600 to-pink-600 rounded-lg blur opacity-25 
          group-hover:opacity-100 transition duration-1000 
          group-hover:duration-200"></div>
          <div class="relative px-3 py-3 bg-gradient-to-r from-blue-100 to-pink-200 hover:from-pink-400 hover:to-yellow-300 ring-1 ring-gray-900/5 
         rounded-2xl leading-none flex items-top justify-start space-x-3">
         
         
         
            <div class="space-y-2">
              
              <p class="text-lg text-slate-1000">
                <!-- <img src="https://inkythuatso.com/uploads/images/2021/11/mb-bank-logo-inkythuatso-01-10-09-01-10.jpg"    class="h-7 w-7 cananh"> -->
              
               Social
              </p>
              <div class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank">
                 </div>
                <li v-for="(value, key) in usersocial"  :key="value">
                  {{ key }} :  {{ value }}
                </li>
                <span class="absolute  rounded-2xl inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
            </div>
          
          </div>
       
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script >
import * as $ from 'jquery' ;
import {    doc, setDoc , onSnapshot   } from "firebase/firestore" ;
import db from '../firebase/init.js' ;
import { Storage } from '@ionic/storage';
import axios from 'axios' ;
import Swal from 'sweetalert2' ;
import './bootstrap2.min.js' ;
  import './bootstrap-select.css' ;
    import './bootstrap-select.min.css' ;
    import './bootstrap-select.js' ;
import {
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonPage,
} from '@ionic/vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';

export default {
  name: 'Tab2Page',
  components: {  
    IonButtons,
      IonButton,
      IonModal,
      IonHeader,
      IonContent,
      IonToolbar,
      IonTitle,
      IonPage,
  } ,
  data (){ return {
    message: 'This modal example uses triggers to automatically open a modal when the button is clicked.',
              name : '',
              age : '',
              countries: [],
              lienket: null ,
              usersocial: null ,
              options: [
                    { text: 'Vui lòng chọn 1 lựa chọn', value: 'null' } ,
        { text: 'Facebook', value: 'facebook' } , 
        { text: 'TikTok', value: 'tiktok' } ,
        { text: 'Instagram', value: 'instagram' }
      ],
              mota: null ,
              inputlienket: null ,
              addlink: '' ,
              info : '',
              thanhcong : '' ,
              localStorage: new Storage(),

          }
      },
      mounted() {
      this.presentingElement = this.$refs.addlink;
      this.presentingElement = this.$refs.Socials;
    },
    created(){
     

      this.localStorage.create();
        this.apikey = this.getLocalStorage('apikey') ;
        Promise.all([this.apikey]).then((arrayOfResults) => {
    this.apikey=arrayOfResults[0]; 
  });
  
  this.username = this.getLocalStorage('username') ;
        Promise.all([this.username]).then((arrayOfResults) => {
    this.username=arrayOfResults[0]; 
  });
  setTimeout( () => {
    this.biolinklienket() ;
    this.biolinksocial() ;
      }, 500);
 
        },
      methods : {
        click()
            {
                setTimeout(() => {    
                    $('.selectpicker').selectpicker('refresh');
                    setTimeout(() => {     
         $('.sp1').selectpicker('toggle');  }, 300)
                }, 300) ;


            } ,
        async biolinklienket() {

        onSnapshot(doc(db, this.username, 'biolink'), (snap) => {
        this.lienket = snap.data().lienket
        this.mota = snap.data().mota
      })
    },
    async biolinksocial() {
       onSnapshot(doc(db, this.username, 'social'), (snap) => {
        this.usersocial = snap.data() ;
console.log( this.usersocial );
      })

},
        async addbiolinklienket() {
       
await setDoc(doc(db, this.username , 'biolink' ), {
  
  // new data
  apikey: this.apikey ,
  lienket: this.inputlienket ,
  mota: this.inputmota
  // merge
}, { merge: true })
},
        dismiss() {
        this.$refs.addlink.$el.dismiss();
        this.$refs.Socials.$el.dismiss();
      },
      async addbiolinksocial() {
       
       await setDoc(doc(db, this.username , 'social' ), {
         
         // new data
         [this.inputmota]: this.username 
       }, { merge: true })
       },
      onTermsChanged() {
      
      },
      luulink(addlink)
            {
                const  headers = {
    'content-type': 'application/json' 
  } ;
  let config = {
  headers: headers
};
                axios
       .post('https://tuongtac.fun/ionic/addlink.php', {
        lienket: this.inputlienket ,
        apikey: this.apikey ,
        mota: this.inputmota ,
        chedo: addlink 
  }, config)
  .then(response => (this.testFunction(response  )))
  .catch(error => console.log(error) )

},
testFunction(response)
            {
                this.info = response.data ,
    this.message = this.info.message ,
    this.status = this.info.status 
    if ( this.status == 0 )
    {  
      Swal.fire({
  title: this.info.message ,
  heightAuto : false,
 
})

    }
    else if ( this.status == 1 )
{
if ( this.message == 'addlink'  )
{
  this.addbiolinklienket();
 this.dismiss() ;
}
else if ( this.message == 'addsocial' )
{
  this.addbiolinksocial();
 this.dismiss() ;
}
 
}
            },
            async setLocalStorage(index, value) {
      await this.localStorage.set(index, value);
    },
    async removeLocalStorage(index) {
      await this.localStorage.remove(index);
    },
    async clearLocalStorage() {
      await this.localStorage.clear();
    },
    getLocalStorage(index) {
      return this.localStorage.get(index);
    }
      }
};
</script>
