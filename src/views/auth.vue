<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Login </ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Login SignUp </ion-title>
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
    <p class="mr-10 ml-10 text-center text-black text-3xl underline decoration-pink-500/30">Hust Media
</p>
<div class="mx-20">
<p  class=" text-center text-white text-2xl  ">
      Link to everywhere from your bio link
    </p>
</div>
        <div class="mx-1 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div class="mb-4">
              <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                Username 
              </label>
              <input v-model="Username" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username">
            </div>
            <div class="mb-6">
              <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                Password
              </label>
              <input v-model="Password"  class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************">
              <p class="text-red text-xs italic">Please choose a password.</p>
            </div>
            <div class="flex items-center justify-between">
             
                <button @click="signin" class="bg-dark hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
                Sign In
              </button>
              <router-link to="/tabs/sginup" class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
              Ấn đăng ký <br>Nếu chưa có tài khoản nhé
              </router-link>
            </div>
        </div>
        <p class="mr-7 ml-7 text-center text-black text-base underline decoration-pink-500/30">
            Bằng cách ấn đăng ký và đăng nhập, bạn đã đồng ý với điều khoản của chúng tôi 
        </p>
    </body>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { Storage } from '@ionic/storage';
   import Swal from 'sweetalert2' ;
  import axios from 'axios'  ;
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent  } from '@ionic/vue';
  // import ExploreContainer from '@/components/ExploreContainer.vue';
  
  export default {
    name: 'Tab2Page',
    components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage  } ,
    data (){ return {
        localStorage: new Storage(),
        Username : null,
        Password : null ,
                info : '',
                thanhcong : '' ,
            }
        },
        created(){
            this.localStorage.create()
        },
        methods : {
            testFunction(response)
            {
                this.info = response.data ,
    this.apikey = this.info.apikey ,
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
    
    this.setLocalStorage('apikey' , this.apikey  ) ;
    this.$router.push('/') ;
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
    },
            signin()
            {
                const  headers = {
    'content-type': 'application/json' 
  } ;
  let config = {
  headers: headers
};
                axios
       .post('https://tuongtac.fun/dangnhapapi.php', {
        Username: this.Username ,
        Password: this.Password 
  }, config)
  .then(response => (this.testFunction(response  )))
  .catch(error => console.log(error) )

}
            }
             
                             
            }


  </script>
  