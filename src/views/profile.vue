<style>
.webkit-center {
text-align: -webkit-center; 
}
</style>
<template>
  <ion-page ref="page">
      <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button text="Quay Lại"></ion-back-button>
            </ion-buttons>
            <ion-title>Cài đặt tài khoản </ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <div
        class="
          antialiased
          bg-gradient-to-r
          from-pink-300
          via-purple-300
          to-indigo-400
        "
      >
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Tài khoản </ion-title>
          </ion-toolbar>
        </ion-header>
       
        <!-- <ion-scroll direction="y" class="theroot"> -->
      <div class="ml-3 h-7 flex justify-end items-center">
        <!-- <button type="button"
            class="bg-gray-100 dark:bg-gray-700 m-1 p-3 justify-end rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500">
        
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button> -->
        <br>
    </div>
    <div class="bg-green-300 shadow-lg pb-3 rounded-b-3xl">
        <div 
            class="flex  rounded-b-3xl bg-gray-100 dark:bg-gray-700 space-y-5 flex-col items-center py-7">
          <span @click="saochep(username)"
                    class="text-h1">{{ username }} </span>
        </div>
        <div
            class="grid px-7 py-2  items-center justify-around grid-cols-4 gap-4 divide-x divide-solid ">
            <div class="col-span-1 flex flex-col items-center ">
                <span class="text-2xl font-bold dark:text-gray-500">{{ money }} </span>
                <span class="text-lg font-medium 0">Số dư</span>
            </div>
            <div class="col-span-1 px-3 flex flex-col items-center ">
                <span class="text-2xl font-bold dark:text-gray-500">
                   Cao Cấp</span>
                <span class="text-lg font-medium">Cấp độ</span>
            </div>
            <div class="col-span-1 px-3 flex flex-col items-center ">
                <span class="text-2xl font-bold dark:text-gray-500">
           {{ total_nap }}        </span>
                <span class="text-lg font-medium">Tổng xu kiếm được</span>
            </div>
            <div class="col-span-1 px-3 flex flex-col items-center ">
                <span class="text-2xl font-bold dark:text-gray-500">
                    {{ experience }}</span>
                <span class="text-lg font-medium">Điểm kinh nghiệm</span>
            </div>
        </div>

    </div>
    <div v-if="optionprofile != null" class="col mt-0">
        
        <div  class='mt-4 mx-2 items-center justify-center from-teal-100 via-teal-300 to-teal-500 '>
            <div class="ml-3 h-7 flex justify-end items-center">
                <button @click="tatprofile"  type="button"
                    class="bg-gray-100 dark:bg-gray-700 m-1 p-3 justify-end rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500">
                
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
             
            </div>
          <div  class='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl'>
             
              <div class='max-w-md mx-auto  space-y-6'>
             
                    <div class="col-lg-6">
                        <div class="form-group">
                        
                          <label for="countries2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Chọn lựa chọn</label>
          
                    <select  id="countries2" class="
                    selectpicker sp1 form-control"  @change="onChange()"   name="nhamang" v-model="chedoprofile">
                        <option v-for="option in options" :key="option.value" :value="option.value">
    {{ option.text }}
  </option>
                      </select>
    
                  
                    
                        </div>
                      </div>
       <div v-if="chedoappleprofile != 1 ">

        <p>Tên tài khoản hoặc mật khẩu cần thay</p>
        <input class="form-control form-control-alternative" v-model="lienketchay" placeholder="Nhập cái bạn cần nhé =)))" />
       
       </div>
                   
                      <div v-if="thanhcong">  
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="flex flex-col items-center justify-center py-2">
        <div class="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-600 shadow-lg transform rotate-6 rounded-3xl">

        </div>
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
         <h2 class="text-3xl text-break font-bold">
          kết quả {{ thanhcong }}</h2>
          <div style="text-decoration: none" >
            <button @click="saochep(thanhcong)" type='button'
            class='flex break-inside bg-white text-black border border-dark rounded-3xl px-6 py-3 mb-4 w-full dark:bg-slate-800 dark:text-white'>
            <div class='m-auto'>
              <div class='flex items-center justify-start flex-1 space-x-4'>
                <span class='font-medium mb-[-2px]'>Sao chép ( Copy ) </span>
                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                  <path d='M5 12h13M12 5l7 7-7 7' />
              </svg>
              </div>
            </div>
          </button>
        </div></div></div></div>
    </div>
                      <button  @click="xacnhan"
                      class='flex break-inside bg-purple-400 hover:bg-purple-300 rounded-3xl px-8 py-2 mb-3 w-full dark:bg-slate-800 dark:text-white'>
                      <div class='flex items-center justify-between flex-1'>
                        <div v-if="nutxuly == '1'" class="spinner-border" role="status">
                       
                        </div>
                     
                        <span class='text-lg font-medium text-white'> {{ nutorder }} </span>
                        <svg  width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path fillRule='evenodd' clipRule='evenodd'
                            d='M0 8.71423C0 8.47852 0.094421 8.25246 0.262491 8.08578C0.430562 7.91911 0.658514 7.82547 0.896201 7.82547H13.9388L8.29808 2.23337C8.12979 2.06648 8.03525 1.84013 8.03525 1.60412C8.03525 1.36811 8.12979 1.14176 8.29808 0.974875C8.46636 0.807989 8.6946 0.714233 8.93259 0.714233C9.17057 0.714233 9.39882 0.807989 9.5671 0.974875L16.7367 8.08499C16.8202 8.16755 16.8864 8.26562 16.9316 8.3736C16.9767 8.48158 17 8.59733 17 8.71423C17 8.83114 16.9767 8.94689 16.9316 9.05487C16.8864 9.16284 16.8202 9.26092 16.7367 9.34348L9.5671 16.4536C9.39882 16.6205 9.17057 16.7142 8.93259 16.7142C8.6946 16.7142 8.46636 16.6205 8.29808 16.4536C8.12979 16.2867 8.03525 16.0604 8.03525 15.8243C8.03525 15.5883 8.12979 15.362 8.29808 15.1951L13.9388 9.603H0.896201C0.658514 9.603 0.430562 9.50936 0.262491 9.34268C0.094421 9.17601 0 8.94995 0 8.71423Z'
                            fill='white' />
                        </svg>
                      </div>
                    </button>
            </div>
       
            </div>
            <br>
          </div>
        </div>
    <div
        class="grid rounded-2xl divide-y divide-dashed hover:divide-solid  justify-evenly bg-gray-50 dark:bg-gray-300 m-3 mt-10 grid-cols-3">
        <div class="col-span-1  p-3">
            <div @click="click('username')" class="flex flex-col items-center ">
               <button
                        class="tr-300">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-14 w-14 text-gray-500" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor"
                            stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span class="text-lg font-medium">Đổi tên tài khoản
                        </span>
                    </button>
            </div>
        </div>
        <div class="col-span-1  p-3">
            <div class="flex flex-col items-center ">
                <div @click="click('password')"> <button
                        class="tr-300">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-14 w-14 text-gray-500" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor"
                            stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        <span class="text-lg font-medium">Đổi mật khẩu</span>
                    </button></div>
            </div>
        </div>
        <div class="col-span-1  p-3">
            <div class="flex flex-col items-center ">
                <div @click="click('aoikey')"><button
                        class="tr-300">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-14 w-14 text-gray-500" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor"
                            stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                        <span class="text-lg font-medium">Apikey</span>
                    </button></div> 
            </div>
        </div>
   
        <div class="col-span-1  p-3">
            <div class="flex flex-col items-center ">
             
                    <button @click="click('xoatk')" class="tr-300">
                      <div class="webkit-center">

                        <img
                        src="https://cdn-icons-png.flaticon.com/512/2807/2807980.png"
                        class=" h-14 w-14 text-gray-500">
                      </div>
                     
                        <span class="text-lg font-medium">Xóa tài khoản (delete account)</span>
                    </button>
            </div>
        </div>
        <div @click="click3" class="col-span-1  p-3">
            <div class="flex flex-col items-center ">
                <!-- <a :href="'https://vip.hust.media/themsdt?=key=' + apikey" >-->
                   <button class="tr-300"> 
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-14 w-14 text-gray-500" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor"
                            stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span class="text-lg font-medium">Kết nối telegram</span>
                    </button>
            </div>
        </div>
        <div class="col-span-1 bg-red-50 p-3">
            <div class="flex  flex-col items-center ">
              <div @click="logout"> <button class="tr-300">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-14 w-14 text-gray-500" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor"
                            stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span class="text-lg font-medium">Đăng xuất</span>
                    </button></div>
            </div>
        </div>
    </div>
<br><br>
    <div class="flex mx-auto mt-3 w-100 ">
       <!-- <button
                class="p-2 shadow-lg rounded-2xl tr-300 w-100 font-medium  bg-green-500 rounded-md hover:bg-green-600 text-gray-50">
              Thăng cấp tài khoản </button> -->
    </div>
<!-- </ion-scroll> -->

</div>

      </ion-content>
    </ion-page>
  </template>
  <style>
  .theroot {
    height: 100px;
    background-color: yellow;
  }</style>
  <script>
import * as $ from 'jquery' ;



  import axios from 'axios' ;
  import { Storage } from '@ionic/storage';
  import { Clipboard } from '@capacitor/clipboard';
  import Swal from 'sweetalert2' ;
  import { IonPage, IonHeader,IonButtons, IonToolbar,IonBackButton, IonTitle, IonContent } from '@ionic/vue';
  // import ExploreContainer from '@/components/ExploreContainer.vue';
  import { Browser } from '@capacitor/browser';
  import './bootstrap2.min.js' ;
  import './bootstrap-select.css' ;
    import './bootstrap-select.min.css' ;
    import './bootstrap-select.js' ;
  export default {
    name: 'Tab2Page',
    components: {  IonHeader, IonButtons ,IonToolbar,IonBackButton, IonTitle, IonContent, IonPage } ,
    data (){ return {
        optionprofile: null ,
        clipboard: Clipboard ,
                name : '',
                age : '',
                username: null ,
                nutorder: 'Ấn đây để xác nhận' ,
                inputlienket: null ,
                apikey: null ,
                total_nap: null ,
                chedoappleprofile: null ,
                options: [
                    { text: 'Vui lòng chọn 1 lựa chọn', value: 'vuilongchon1cai' } ,
        { text: 'Thay mật khẩu', value: 'password' } , 
        { text: 'Lấy api key', value: 'apikey' } ,
        { text: 'Thay tên tài khoản', value: 'username' } ,
        { text: 'Xóa tài khoản (delete account)', value: 'xoataikhoan' } ,
        { text: 'Xem mật khẩu', value: 'laymatkhau' }
      ],
                lienketoutput: null ,
                thanhcong2: null ,
                inputmota: null ,
                money: null ,
                experience: null ,
                nutxuly: 0 ,
                info : '',
                ádasdasd: '' ,
                
                localStorage: new Storage(),
                thanhcong : '' 
            }
        },
        updated() {
        
          setTimeout(() => {  
            this.ádasdasd = this.getLocalStorage('ádasdasd') ;
            console.log(this.ádasdasd) ;
            Promise.all([this.ádasdasd]).then((arrayOfResults) => {
    this.ádasdasd=arrayOfResults[0]; 
    console.log(this.ádasdasd) ;
    setTimeout(() => {  
    if (this.ádasdasd == '/tabs/profile') 
{
  console.log('1') ;
  

        this.apikey = this.getLocalStorage('apikey') ;
        Promise.all([this.apikey]).then((arrayOfResults) => {
    this.apikey=arrayOfResults[0]; 
    console.log(this.apikey) ;
    this.chedo = 'checkprofile' ;
    axios    
                  .post('https://vip.hust.media/checkmomo', {
          apikey: this.apikey ,
      chedo: this.chedo 
    })  
                  .then(response => (this.testFunction4(response  ))  )  
                  .catch(error => console.log(error) ,
  
                  console.log(this.btctrk) 
                  )  
  });

            
}  }, 200) ;
  });
        
                }, 200) ;
},
    
        created(){
         
           
          this.localStorage.create();

           

        },
        methods : {
          onChange() {

    if ( this.chedoprofile == 'xoataikhoan' || this.chedoprofile == 'apikey' || this.chedoprofile == 'laymatkhau' )
    {
this.chedoappleprofile = 1 ;
this.thanhcong = null ;
    }
    else{
      this.chedoappleprofile = 0 ;
      this.thanhcong = null ;
    }
    },
          click3()
          {
            this.mowebapitelegram = 'https://vip.hust.media/themsdt?=key=' + this.apikey ;
            Browser.open({ url: this.mowebapitelegram });
          },
            logout()
            {
                this.removeLocalStorage('username');
                this.removeLocalStorage('apikey');
                this.$router.push('/tabs/authentication') ;
            },
            tatprofile()
        {
            this.optionprofile = null ;
        },
            click(optionprofile)
            {
                setTimeout(() => {    
                    $('.selectpicker').selectpicker('refresh');
                    setTimeout(() => {     
         $('.sp1').selectpicker('toggle');  }, 300)
                }, 300) ;
this.optionprofile = optionprofile ;

            } ,
          
      saochep(urlsplit)
            {
                
              navigator.clipboard.writeText(urlsplit);
                Swal.fire({
  title: 'Sao chép thành công' ,
  heightAuto : false,
 
})
            },
            xacnhan(){
            this.nutxuly = 1 ;
            this.nutorder = 'chờ xíu nhé' ;
            if ( this.chedoprofile  == null  ||  this.chedoprofile  == 'vuilongchon1cai')
        {
            this.nutxuly = 0 ,
            this.nutorder = 'Xác nhận' ,
            Swal.fire({
  title: 'Vui lòng chọn lựa chọn của bạn' ,
  heightAuto : false,
 
})
        } 
        else if ( this.chedoprofile  == 'apikey' )
        {this.nutxuly = 0 ,
            this.nutorder = 'Xác nhận' ,
this.thanhcong =  this.apikey ;
        }
        else
        {
            axios
         .post('https://tuongtac.fun/api/profile.php', {
          apikey: this.apikey ,
          chedo: 'profile' ,
          option: this.chedoprofile ,
      lienketchay: this.lienketchay
    })
    .then( response => (
    console.log(response.data ) ,
    this.dathang(response )
    ))
    .catch(error => console.log(error) , ) ;
        }
  
  
          },
          dathang(response){
this.nutorder = 'xác nhận' ,
this.nutxuly = 0 ,
this.info = response.data ,
      this.status = this.info.status     ,
      this.message = this.info.message  
      if ( this.message == 'deleteaccount'  )
      {
      this.logout();
      }
  else    if ( this.status == 0  )
      {
        Swal.fire({
  title: this.message ,
  heightAuto : false,
 
});
      }
      else
      {
        this.thanhcong =  this.message ;
      }
       

          } ,
            testFunction(response)
            {
                this.info = response.data ,
                this.status = this.info.status ,
                this.message = this.info.message ,
                this.lienketoutput = this.info.lienket ,
                this.nutorder = 'đặt tiếp luôn nào' ,
this.nutxuly = 0
if ( this.status == 0 )
    {  
      Swal.fire({
  title: this.info.message ,
  heightAuto : false,
 
})

    }
    else if ( this.status == 1 )
    {
        this.thanhcong2 = this.lienketoutput
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
    testFunction4(response)
  {
   
    this.info = response.data ,
    this.chietkhau = this.info.chietkhau ,
    this.money = this.info.money  ,
    this.experience = this.info.experience , 
    this.total_nap = this.info.total_nap ,
    this.username = this.info.username
  }
        }
  };
  </script>
  