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
            <ion-title size="large">Learning</ion-title>
          </ion-toolbar>
        </ion-header>
        <button type="button"  
        @click="chay1" class="btn btn-primary">Nhiều hơn, ít hơn</button>
        <button type="button"  
         @click="chay2" class="btn btn-primary">Hình vuông, hình tròn, hình tam giác</button>
         <button type="button"  
         @click="chay3" class="btn btn-primary"> Phép cộng trong phạm vi 3</button>
   <div v-if="pro === 1 " >
    <p style="text-align:justify">- Con nhận biết được khái niệm nhiều hơn, ít hơn, hơn, kém thông qua hình ảnh và các đồ vật.</p>
    <p style="text-align:justify">- Cách so sánh 1-1 giữa hai đại lượng để xác định đại lượng nhiều hơn, ít hơn.</p>
    <p style="text-align:justify"><img src="https://i.vdoc.vn/data/image/2019/09/10/ly-thuyet-toan-lop-nhieu-hon-it-hon-2.jpg" alt="Lý thuyết về NHIỀU HƠN, ÍT HƠN." width="407" height="197" class="lazy loaded lightbox" data-src="https://i.vdoc.vn/data/image/2019/09/10/ly-thuyet-toan-lop-nhieu-hon-it-hon-2.jpg" data-was-processed="true" data-i="0" style="height: 197px; width: 407px;"></p>
    <h2 id="mcetoc_1dkcfk97f1" style="text-align:justify"><strong>2. CÁC DẠNG TOÁN </strong><strong>về NHIỀU HƠN, ÍT HƠN.</strong></h2>
    <h3 id="mcetoc_1dkcfk97f2" style="text-align:justify">
        <strong>Dạng 1: Xác định đại lượng nhiều hơn.</strong></h3><p style="text-align:justify">- 
            Khi so sánh, với mỗi đại lượng thứ nhất thì tương ứng với một đại lượng thứ hai.</p>
            <p style="text-align:justify">- Nếu đại lượng nào còn thừa ra thì ta nói đại lượng đó nhiều hơn.</p>
            <p style="text-align:justify"><strong>Ví dụ: </strong>Trong hình vẽ dưới đây, ta thấy số hình vuông 
                <strong>nhiều hơn</strong> số hình tròn.</p><p style="text-align:justify">
                    <img src="https://i.vdoc.vn/data/image/2019/09/10/ly-thuyet-toan-lop-1-nhieu-hon-it-hon-5.jpg" alt="Lý thuyết về NHIỀU HƠN, ÍT HƠN." width="140" height="85" class="lazy" data-src="https://i.vdoc.vn/data/image/2019/09/10/ly-thuyet-toan-lop-1-nhieu-hon-it-hon-5.jpg"></p><h3 id="mcetoc_1dkcfk97f3" style="text-align:justify"><strong>Dạng 2: Xác định đại lượng ít hơn.</strong></h3><p>- Khi so sánh, với mỗi đại lượng thứ nhất thì tương ứng với một đại lượng thứ hai.</p><p>- Nếu đại lượng nào bị thiếu (không đủ) thì ta nói đại lượng đó ít hơn.</p><p><strong>Ví dụ: </strong>Trong hình vẽ dưới đây, ta thấy số hình vuông <strong>ít hơn</strong> số hình tròn.</p><p>
                        
                        <img src="https://i.vdoc.vn/data/image/2019/09/10/ly-thuyet-toan-lop-1-nhieu-hon-it-hon-4.jpg" alt="Lý thuyết về NHIỀU HƠN, ÍT HƠN." width="238" height="78" class="lazy" 
        data-src="https://i.vdoc.vn/data/image/2019/09/10/ly-thuyet-toan-lop-1-nhieu-hon-it-hon-4.jpg"></p>
</div>
<div v-if="pro === 2 " >
    <h1 class="post-title">Lý thuyết Toán lớp 1: Hình vuông, hình tròn, hình tam giác</h1>
    <strong>I. Lý thuyết về Hình vuông, hình tròn, hình tam giác</strong>
    <p style="text-align:justify"><strong> KIẾN THỨC CẦN NHỚ</strong></p>
    <p style="text-align:justify">- Nhận biết và phân biệt được hình vuông, hình tròn, hình tam giác.</p>
    <p style="text-align:justify">- Đọc đúng tên với hình tương ứng.</p>
    <p style="text-align:justify"><img src="https://i.vdoc.vn/data/image/2019/09/10/ly-thuyet-toan-lop-1-hinh-vuong-hinh-tron-hinh-tam-giac-1.jpg" alt="Lý thuyết Toán lớp 1" width="504" height="305" class="lazy loaded lightbox" data-src="https://i.vdoc.vn/data/image/2019/09/10/ly-thuyet-toan-lop-1-hinh-vuong-hinh-tron-hinh-tam-giac-1.jpg" data-was-processed="true" style="height: 305px; width: 504px;" data-i="0"></p>
    <p style="text-align:justify">+) Biển báo giao thông, thước kẻ có hình tam giác:</p>
    <p style="text-align:justify"><img src="https://i.vdoc.vn/data/image/2019/09/10/ly-thuyet-toan-lop-1-hinh-vuong-hinh-tron-hinh-tam-giac-4.jpg" alt="Lý thuyết Toán lớp 1" width="453" height="117" class="lazy lightbox loaded" data-src="https://i.vdoc.vn/data/image/2019/09/10/ly-thuyet-toan-lop-1-hinh-vuong-hinh-tron-hinh-tam-giac-4.jpg" style="height: 117px; width: 453px;" data-i="3" data-was-processed="true"></p>
    <h2 id="mcetoc_1dkch2g731" style="text-align:justify"><strong>II. CÁC DẠNG TOÁN về Hình vuông, hình tròn, hình tam giác</strong></h2>
    <strong>1. Dạng 1: Đọc tên hình.</strong>
    <p style="text-align:justify">Xác định hình cho trước là hình gì.</p>
    <p style="text-align:justify"><strong>Ví dụ:</strong> Hình nào dưới đây là hình tam giác?</p>
    <p style="text-align:justify"><img src="https://i.vdoc.vn/data/image/2019/09/10/ly-thuyet-toan-lop-1-hinh-vuong-hinh-tron-hinh-tam-giac-5.jpg" alt="Lý thuyết Toán lớp 1" width="600" height="89" class="lazy lightbox loaded" data-src="https://i.vdoc.vn/data/image/2019/09/10/ly-thuyet-toan-lop-1-hinh-vuong-hinh-tron-hinh-tam-giac-5.jpg" style="height: 89px; width: 600px;" data-i="4" data-was-processed="true"></p>
    <p style="text-align:justify">Giải:</p>
    <h3 id="mcetoc_1dkch2g733" style="text-align:justify"><strong>2. Dạng 2: Đếm hình.</strong></h3>
    </div>
    <div v-if="pro === 3 " >
        <strong>I. KIẾN THỨC CẦN NHỚ</strong>
        <p style="text-align:justify">- Bảng cộng các số trong phạm vi 3</p>
        <p style="text-align:justify">- Cách làm tính cộng các số trong phạm vi 3 và vận dụng vào các tình huống thực tế.</p>
        <p style="text-align:justify"><img src="https://i.vdoc.vn/data/image/2019/11/19/ly-thuyet-toan-lop-1-phep-cong-trong-pham-vi-3-1.jpg" alt="Lý thuyết Toán lớp 1: Phép cộng trong phạm vi 3" width="472" height="334" class="lazy lightbox loaded" data-src="https://i.vdoc.vn/data/image/2019/11/19/ly-thuyet-toan-lop-1-phep-cong-trong-pham-vi-3-1.jpg" data-i="0" style="height: 334px; width: 472px;" data-was-processed="true"></p>
        <h2 id="mcetoc_1dq0m2vnc2" style="text-align:justify"><strong>B. Các dạng Toán trong Phép cộng trong phạm vi 3</strong></h2>

  <p style="text-align:justify">- Tính giá trị các phép cộng trong phạm vi \(3\) bằng cách nhẩm lại các phép toán đã học.</p>
  <p style="text-align:justify">Ví dụ: 2 + 1 = ?</p>
  <p style="text-align:justify">Giải: Nhẩm</p>
  <p style="text-align:justify"><img src="https://i.vdoc.vn/data/image/2019/11/19/ly-thuyet-toan-lop-1-phep-cong-trong-pham-vi-3-2.jpg" alt="Lý thuyết Toán lớp 1: Phép cộng trong phạm vi 3" width="424" height="142" class="lazy lightbox loaded" data-src="https://i.vdoc.vn/data/image/2019/11/19/ly-thuyet-toan-lop-1-phep-cong-trong-pham-vi-3-2.jpg" data-i="1" style="height: 142px; width: 424px;" data-was-processed="true"></p>
  <p style="text-align:justify">Số cần điền vào dấu hỏi chấm là 3</p>
  <h3 id="mcetoc_1dq0m2vnc4" style="text-align:justify"><strong>Dạng 2: Biểu diễn phép tính cho các hình vẽ.</strong></h3>
  <p style="text-align:justify">- Đếm số lượng đồ vật có trong mỗi hình.</p>
  <p style="text-align:justify">- Biểu diễn các số và phép tính tương ứng.</p>
  <p style="text-align:justify">Ví dụ: Điền số thích hợp vào ô trống:</p>
  <p style="text-align:justify"><img src="https://i.vdoc.vn/data/image/2019/11/19/ly-thuyet-toan-lop-1-phep-cong-trong-pham-vi-3-3.jpg" alt="Lý thuyết Toán lớp 1: Phép cộng trong phạm vi 3" width="373" height="205" class="lazy lightbox loaded" data-src="https://i.vdoc.vn/data/image/2019/11/19/ly-thuyet-toan-lop-1-phep-cong-trong-pham-vi-3-3.jpg" data-i="2" style="height: 205px; width: 373px;" data-was-processed="true"></p>
  <p style="text-align:justify">Ví dụ: Điền số thích hợp vào chỗ chấm:</p>

  <p style="text-align:justify">1 + ... = 3</p>
  <p style="text-align:justify">Giải:</p>

  <p style="text-align:justify">Ta có: 1 + 2 = 3 nên số cần điền vào chỗ trống là 2.</p>

  
    </div>
    </ion-content>
    </ion-page>
  </template>
  
  <script>

  import { IonPage, IonHeader,IonBackButton, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
 
  export default {
    name: 'Tab3Page',
    components: {  IonHeader,IonBackButton, IonToolbar, IonTitle, IonContent, IonPage },
    data() {
      return {
        pro: '' ,
      }} ,
    methods: {
        chay1() {
            this.pro = 1 
        },
        chay2() {
            this.pro = 2
        },
        chay3() {
            this.pro = 3
        }
}
};
 
  </script>
  