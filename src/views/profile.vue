<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button text="Quay Lại"></ion-back-button>
            </ion-buttons>
            <ion-title>Rút gọn liên kết </ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="false">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Dịch tiếng Anh sang tiếng việt</ion-title>
          </ion-toolbar>
        </ion-header>
        <div
        class="
          antialiased
          bg-gradient-to-r
          from-pink-300
          via-purple-300
          to-indigo-400
        "
      >
        <ion-scroll direction="y" class="theroot">
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
            <a href="#"> <span
                    class="text-h1">{{ username }} </span></a>
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
    <div class="col mt-0">
        <div  class='mt-4 mx-2 items-center justify-center from-teal-100 via-teal-300 to-teal-500 '>
      
          <div  class='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl'>
             
              <div class='max-w-md mx-auto  space-y-6'>
             
                    <div class="col-lg-6">
                        <div class="form-group">
                          <label for="countries2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Chọn nền tảng</label>
          
                    <select  id="countries2" class="
                    selectpicker sp1 form-control"   @change="onChange()"   name="nhamang" v-model="chedomuaacc">
                        <option v-for="option in options" :key="option.value">
    {{ option.text }}
  </option>
                      </select>
                      <br>
                   
    
                  
                    
                        </div>
                      </div>
       
                 
            </div>
       
            </div>
            <br>
          </div>
        </div>
    <div
        class="grid rounded-2xl divide-y divide-dashed hover:divide-solid  justify-evenly bg-gray-50 dark:bg-gray-300 m-3 mt-10 grid-cols-3">
        <div class="col-span-1  p-3">
            <div class="flex flex-col items-center ">
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

                            <br> Tính năng chưa có
                        </span>
                    </button>
            </div>
        </div>
        <div class="col-span-1  p-3">
            <div class="flex flex-col items-center ">
                <a href="https://hust.media/profile/"> <button
                        class="tr-300">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-14 w-14 text-gray-500" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor"
                            stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        <span class="text-lg font-medium">Đổi mật khẩu</span>
                    </button></a>
            </div>
        </div>
        <div class="col-span-1  p-3">
            <div class="flex flex-col items-center ">
                <a href="https://hust.media/profile/"> <button
                        class="tr-300">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-14 w-14 text-gray-500" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor"
                            stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                        <span class="text-lg font-medium">Apikey</span>
                    </button></a>
            </div>
        </div>
        <div class="col-span-1  p-3">
            <div class="flex flex-col items-center ">
                <a href="https://hust.media/profile/">
                    <button class="tr-300">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-14 w-14 text-gray-500" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor"
                            stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span class="text-lg font-medium">Thống kê giới thiệu</span>
                    </button></a>
            </div>
        </div>
        <div class="col-span-1  p-3">
            <div class="flex flex-col items-center ">
                <router-link  to="/themsdt"> <button class="tr-300">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-14 w-14 text-gray-500" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor"
                            stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span class="text-lg font-medium">Kết nối telegram</span>
                    </button></router-link>
            </div>
        </div>
        <div class="col-span-1 bg-red-50 p-3">
            <div class="flex  flex-col items-center ">
                <a href="https://hust.media/dang-xuat/"> <button class="tr-300">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-14 w-14 text-gray-500" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor"
                            stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span class="text-lg font-medium">Đăng xuất</span>
                    </button></a>
            </div>
        </div>
    </div>
<br><br>
    <div class="flex mx-auto mt-3 w-100 ">
        <a href=""> <button
                class="p-2 shadow-lg rounded-2xl tr-300 w-100 font-medium  bg-green-500 rounded-md hover:bg-green-600 text-gray-50">
              Thăng cấp tài khoản </button></a>
    </div>
</ion-scroll>

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
  import { IonPage, IonHeader, IonToolbar,IonBackButton, IonTitle, IonContent } from '@ionic/vue';
  // import ExploreContainer from '@/components/ExploreContainer.vue';
 
  import '../../node_modules/bootstrap/dist/js/popper.min.js' ;
  import '../../node_modules/bootstrap/dist/js/bootstrap2.min.js' ;
  import '../../node_modules/bootstrap-select/dist/css/bootstrap-select.css' ;
    import '../../node_modules/bootstrap-select/dist/css/bootstrap-select.min.css' ;
    import '../../node_modules/bootstrap-select/js/bootstrap-select.js' ;
  export default {
    name: 'Tab2Page',
    components: {  IonHeader, IonToolbar,IonBackButton, IonTitle, IonContent, IonPage } ,
    data (){ return {
        clipboard: Clipboard ,
                name : '',
                age : '',
                optionprofile : '0',
                nutorder: 'Ấn đây để rút gọn' ,
                inputlienket: null ,
                apikey: null ,
                options: [
                    { text: 'Vui lòng chọn 1 nền tảng', value: 'vuilongchon1cai' } ,
        { text: 'Tiktok', value: 'tiktok' } , 
        { text: 'Facebook', value: 'facebook' } ,
        { text: 'Instagram', value: 'instagram' }
      ],
                lienketoutput: null ,
                thanhcong2: null ,
                inputmota: null ,
                nutxuly: 0 ,
                info : '',
                
                localStorage: new Storage(),
                thanhcong : '' ,
            }
        },
        created(){
            
            
            setTimeout(() => {    
                    $('.selectpicker').selectpicker('refresh');
                    setTimeout(() => {     
         $('.sp1').selectpicker('toggle');  }, 300)
                }, 300) ;
         




            this.localStorage.create();
        this.apikey = this.getLocalStorage('apikey') ;
        Promise.all([this.apikey]).then((arrayOfResults) => {
    this.apikey=arrayOfResults[0]; 
    console.log(this.apikey) ;
  });
  
        },
        methods : {
            
            onSubmit(e){
                this.nutxuly = 1 ;
            this.nutorder = 'chờ xíu nhé' ;
                e.preventDefault()
                if(!this.inputlienket){
                    alert('Please điền đầy đủ thông tin')
                    this.nutxuly = 0 ;
                    this.nutorder = 'điền đủ thông tin' 
                    return
                }
                axios
       .post('https://tuongtac.fun/ionic/addlink.php', {
        lienket: this.inputlienket ,
        apikey: this.apikey ,
        mota: this.inputmota ,
        chedo: 'shorturl'
  })
  .then(response => (this.testFunction(response  )))
  .catch(error => console.log(error) )
             
                             
            },
            saocheplienket()
            {
                
                this.clipboard.copy(this.lienketoutput);
                navigator.clipboard.writeText(this.lienketoutput);
                Swal.fire({
  title: 'Sao chép thành công' ,
  heightAuto : false,
 
})
            },
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
    }
        }
  };
  </script>
  