<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button text="Quay Lại"></ion-back-button>
            </ion-buttons>
          <ion-title> Signin</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large"> Signin </ion-title>
          </ion-toolbar>
        </ion-header>
        <body
      class="
        antialiased
        bg-gradient-to-r
        from-pink-300
        via-purple-300
        to-indigo-400
      "
    >
    <br>
    <div class="mx-20">
        <p  class=" text-center text-white text-2xl  ">
            Login with phone number in Telegram
            </p>
        </div>
        <div class="mx-1 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div v-if="openinputma == null" class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="phonenumber">
              Phone Number 
            </label>
            <input v-model="phonenumber" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="phonenumber" type="text" placeholder="Nhập Số điện thoại">
          </div>
          <div v-if="openinputma == 1" class="mb-6">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="madangnhap">
                Mã đăng nhập
            </label>
            <input v-model="madangnhap"  class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="madangnhap" type="madangnhap" placeholder="Vui lòng điền mã đã gửi tới Tele của bạn">
            <p class="text-red text-xs italic">Please choose a password.</p>
          </div>
          <ion-button v-if="openinputma == null" expand="block" @click="signup('phonenumber')"  >
            <div v-if="nutxuly == '1'" class="spinner-border" role="status">
                       
            </div> {{ nutorder }}
          </ion-button>

          <ion-button v-if="openinputma == 1" expand="block" @click="signup('signin')"  >
            <div v-if="nutxuly == '1'" class="spinner-border" role="status">
                       
            </div> {{ nutorder }}
          </ion-button>
            <div class="flex items-center justify-between">
             
               
              <br>
              <ion-button v-if="openinputma == 1" @click="nhaplaisdt()"  >
                Nhập lại sdt
              </ion-button>
                            <router-link to="/tabs/signup" class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                Ấn đăng ký<br>Nếu bạn chưa có tài khoản nhé
                </router-link>
            </div>
        </div>
  </body>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
import { Storage } from '@ionic/storage';
  import axios from 'axios' 
  import { IonPage, IonButtons , IonButton  , IonHeader, IonToolbar, IonTitle, IonContent , IonBackButton } from '@ionic/vue';
  // import ExploreContainer from '@/components/ExploreContainer.vue';
  import Swal from 'sweetalert2' ;
  export default {
    name: 'Tab2Page',
    components: {  IonHeader, IonButtons ,IonButton  ,IonToolbar, IonTitle, IonContent, IonPage , IonBackButton} ,
    data (){ return {
                name : '',
                localStorage: new Storage(),
                age : '',
                nutorder: 'Sign In ( đăng nhập )' ,
                nutxuly: 0 ,
                phonenumber : null,
                madangnhap : null ,
                openinputma: null ,
                info : '',
                thanhcong : '' ,
            }
        },
        created(){

          this.localStorage.create();
        },
        methods : {
            nhaplaisdt()
            {
                this.openinputma = null ;
            },
          error(error)
          {
            console.log(error.name) ;
            if (error.name) 
            {
              Swal.fire({
  title: 'Please try again with a different username' ,
  heightAuto : false,
 
})
this.nutorder = 'Sign In ( đăng nhập )' ;
              this.nutxuly = 0 ;
            }
          },
          testFunction(response)
            {
                this.info = response.data ,
    this.apikey = this.info.apikey ,
    this.username = this.info.username ,
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
    this.openinputma = 1 ;
    Swal.fire({
  title: this.info.message ,
  heightAuto : false,
 
})
}
    else if ( this.status == 2 )
{
  this.setLocalStorage( 'username' , this.username  ) ;
    this.setLocalStorage('apikey' , this.apikey  ) ;
    this.$router.push('tab11') ;
}
else
    {  
      Swal.fire({
  title: 'Please try again with a different username' ,
  heightAuto : false,
 
})

    }
    this.nutorder = 'Sign In ( đăng nhập )' ;
              this.nutxuly = 0 ;
            },
          signup(chedo)
            {
              this.nutorder = 'chờ xíu nhé' ;
              this.nutxuly = 1 ;
                const  headers = {
    'content-type': 'application/json' 
  } ;
  let config = {
    timeout: 5000,
  headers: headers
};
                axios
       .post('https://php.tecom.pro/ionic/dangnhap.php', {
        phonenumber: this.phonenumber ,
        madangnhap: this.madangnhap ,
        chedo: chedo ,
  }, config)
  .then(response => (this.testFunction(response  )))
  .catch(error => ( this.error(error  ))   )

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
  