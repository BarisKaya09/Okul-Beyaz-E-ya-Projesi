<script>
import { mapGetters, mapActions } from 'vuex';
import MessageBox from '../libs/MessageBox';

export default {
  name: 'Products',
  components: {},

  computed: {
    ...mapGetters(['getProducts', 'getBasket']),
  },

  methods: {
    ...mapActions(['updateBasket']),
    // resmi dinamik olarak olmak için
    get_img_url: pic => {
      return require('../assets/' + pic);
    },

    addProductInBasket: function (e) {
      new MessageBox(
        'Ürün Eklendi',
        'products-message',
        document.getElementById('message-box-wrapper')
      );

      const target = e.target;
      // en üst kapsayıcı
      const parent_element = target.parentElement.parentElement;

      // tıklanan butonun ürün ismi
      const product_name = parent_element.children[0].textContent;
      // products da product_name ile eşleşen ürünü alarak sepete eklenen ürünün
      // bilgilerini basket e kaydedilecek
      let filteredProduct = null;
      for (const key of Object.keys(this.getProducts)) {
        /**
         * products: {
         *   fridge: {},
         *   washing_machine: {},
         *   dishwasher: {},
         * }
         *
         * Object.keys(this.getProducts) = [fridge, washing_machine ,dishwasher]
         * key her döngüde sırasıyla fridge, washing_machine, dishwasher a eşit oluyor
         *
         */
        filteredProduct = this.getProducts[key].filter(
          // product içerisindeki key değerine eşit olan (fridge, washing_machine ,dishwasher)
          // array içerisinde gezer ve product_name göre filtreler daha sonra filteredProduct
          // filtrelenen değere sahip olur
          item => item.name == product_name
        );

        // eğer filtelenmişse döngüyü kır
        // eğer kırmassan döngü devam eder ve filter fonksiyonu product_name eşit olan değeri bulsa bile
        // döngü devam ettiği için arraydeki son elemana gelir ve product_name ona eşit olmadığı için
        // filteredProduct boş bir arraye eşit olur
        if (filteredProduct.length > 0) break;
      }
      // daha sonra store da ki basket arrayine dönen ürünü ekle
      this.updateBasket(
        Array.isArray(filteredProduct) ? filteredProduct[0] : filteredProduct
      );
      console.log(this.getBasket);
    },
  },
};
</script>

<template>
  <div class="w-full px-12 py-20 bg-gradient-to-r from-gray-900 to-indigo-900">
    <!-- Buzdolapları-->
    <div class="w-full">
      <div
        style="border-bottom: 1px solid white"
        class="text-white text-4xl mb-3 py-1 select-none"
      >
        Buzdolapları
      </div>

      <div class="w-full h-full flex flex-wrap">
        <!--cards-->
        <div
          style="width: 45%"
          class="h-40 rounded flex bg-gradient-to-r m-3 from-indigo-700 to-indigo-800"
          v-for="(fridge, index) in getProducts.fridge"
          :key="index"
        >
          <div class="h-full bg-no-repeat rounded">
            <img
              class="w-full h-full rounded-l bg-white"
              :src="get_img_url(fridge.img)"
            />
          </div>

          <div class="w-2/4 h-full text-center text-gray-400">
            <h3 class="w-full text-2xl h-1/4">{{ fridge.name }}</h3>
            <div class="w-full h-1/4 flex px-8 leading-10">
              <div class="w-1/3 text-left">Fiyat</div>
              <div class="w-1/3 text-center select-none">~~</div>
              <div class="w-1/3 text-right">{{ fridge.price }} Tl</div>
            </div>
            <div class="w-full h-2/4">
              <button
                @click="addProductInBasket"
                class="w-full h-1/2 mt-10 rounded hover:bg-indigo-700 duration-1000"
              >
                Sepete Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full">
      <div
        style="border-bottom: 1px solid white"
        class="text-white text-4xl mb-3 py-1 select-none"
      >
        Çamaşır Makineleri
      </div>

      <div class="w-full h-full flex flex-wrap">
        <!--cards-->
        <div
          style="width: 45%"
          class="h-40 rounded flex bg-gradient-to-r m-3 from-indigo-700 to-indigo-800"
          v-for="(washing_machine, index) in getProducts.washing_machine"
          :key="index"
        >
          <div class="h-full bg-no-repeat rounded">
            <img
              class="w-full h-full rounded-l bg-white"
              :src="get_img_url(washing_machine.img)"
            />
          </div>

          <div class="w-2/4 h-full text-center text-gray-400">
            <h3 class="w-full text-2xl h-1/4">{{ washing_machine.name }}</h3>
            <div class="w-full h-1/4 flex px-8 leading-10">
              <div class="w-1/3 text-left">Fiyat</div>
              <div class="w-1/3 text-center select-none">~~</div>
              <div class="w-1/3 text-right">{{ washing_machine.price }} Tl</div>
            </div>
            <div class="w-full h-2/4">
              <button
                @click="addProductInBasket"
                class="w-full h-1/2 mt-10 rounded hover:bg-indigo-700 duration-1000"
              >
                Sepete Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full">
      <div
        style="border-bottom: 1px solid white"
        class="text-white text-4xl mb-3 py-1 select-none"
      >
        Bulaşık Makineleri
      </div>

      <div class="w-full h-full flex flex-wrap">
        <!--cards-->
        <div
          style="width: 45%"
          class="h-40 rounded flex bg-gradient-to-r m-3 from-indigo-700 to-indigo-800"
          v-for="(dishwasher, index) in getProducts.dishwasher"
          :key="index"
        >
          <div class="h-full bg-no-repeat rounded">
            <img
              class="w-full h-full rounded-l bg-white"
              :src="get_img_url(dishwasher.img)"
            />
          </div>

          <div class="w-2/4 h-full text-center text-gray-400">
            <h3 class="w-full text-2xl h-1/4">{{ dishwasher.name }}</h3>
            <div class="w-full h-1/4 flex px-8 leading-10">
              <div class="w-1/3 text-left">Fiyat</div>
              <div class="w-1/3 text-center select-none">~~</div>
              <div class="w-1/3 text-right">{{ dishwasher.price }} Tl</div>
            </div>
            <div class="w-full h-2/4">
              <button
                @click="addProductInBasket"
                class="w-full h-1/2 mt-10 rounded hover:bg-indigo-700 duration-1000"
              >
                Sepete Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
