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
      <button ref="page" id="addlink" expand="block" class="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        + Add to link
      </button> 
      <button ref="page2" id="Socials" class="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
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
         <div class="text-center">
          <button @click="luulink('addlink')" class=" bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Xác nhận
          </button> </div>
        </ion-content>
      </ion-modal>
      <p>
        Liên kết: {{ lienket }}<br>
       Mô tả: {{ mota }}
      </p>


    </ion-content>
  </ion-page>
</template>

<script >
import { doc, setDoc , onSnapshot   } from "firebase/firestore" ;
import db from '../firebase/init.js' ;
import { Storage } from '@ionic/storage';
import axios from 'axios' ;
import Swal from 'sweetalert2' ;
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
              lienket: null ,
              mota: null ,
              inputlienket: null ,
              addlink: '' ,
              info : '',
              thanhcong : '' ,
              localStorage: new Storage(),

          }
      },
      mounted() {
      this.presentingElement = this.$refs.page;
      this.presentingElement = this.$refs.page2;
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
    this.getCountry() 
      }, 500);
 
        },
      methods : {
        async getCountry() {

        onSnapshot(doc(db, this.apikey, 'biolink'), (snap) => {
        this.lienket = snap.data().lienket
        this.mota = snap.data().mota
      })
    },
        async addCountryCapital() {
       
await setDoc(doc(db, this.apikey, 'biolink' ), {
  
  // new data
  username: this.username ,
  lienket: this.inputlienket ,
  mota: this.inputmota
  // merge
}, { merge: true })
},
        dismiss() {
        this.$refs.addlink.$el.dismiss();
        this.$refs.Socials.$el.dismiss();
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

  this.addCountryCapital();
 this.dismiss() ;
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
