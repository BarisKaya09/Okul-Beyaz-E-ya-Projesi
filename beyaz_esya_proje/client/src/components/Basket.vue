<script>
import { mapGetters, mapActions } from 'vuex';
import MessageBox from '../libs/MessageBox';

export default {
  name: 'Basket',
  data() {
    return {
      totalPrice: 0,
    };
  },

  computed: {
    ...mapGetters(['getBasket']),
  },

  mounted() {
    this.calculate_total_price();
  },

  methods: {
    ...mapActions(['removeProductInBasket']),
    // dinamik olarak resim almak için
    get_basket_bg: pic => {
      const img = require('../assets/' + pic);
      return `background-image: url('${img}')`;
    },

    add_border: () => {
      const basket_wrapper = document.getElementById('basket-wrapper');
      basket_wrapper.style.borderLeft = '5px solid deeppink';
    },

    remove_border: () => {
      const basket_wrapper = document.getElementById('basket-wrapper');
      basket_wrapper.style.borderLeft = 'none';
    },

    calculate_total_price: function () {
      // eğer sepette 1 ve ya 1 den fazla ürün varsa
      if (this.getBasket.length > 0) {
        this.getBasket.forEach(item => (this.totalPrice += item.price));
      }
    },

    // kaldıra basıldığında ürünü sepetten kaldırma fonksiyonu
    remove_product: function (e) {
      if (this.getBasket.length != 0) {
        new MessageBox(
          'Ürün Kaldırıldı!',
          'remove-item-message',
          document.getElementById('message-box-wrapper')
        );
        const target = e.target;
        const parentEl = target.parentNode.parentNode;
        // kaldır tuşunun temsil ettiği ürün
        const removed_product_name = parentEl.children[0].textContent;

        // storedaki basketi removed_product_name in içinde bulunmamasına göre filtrele
        // dana sonra bunu new_basket değişkenine eşitle
        // ve action daki removeProductInBasket fonksiyonunu çağırrıp parametre olarak
        // new_basket i gönder
        const new_basket = this.getBasket.filter(
          item => item.name != removed_product_name
        );
        this.removeProductInBasket(new_basket);

        // yeni basket e göre totalPrice ı hesapla
        this.totalPrice = 0;
        this.getBasket.forEach(item => (this.totalPrice += item.price));
      }
    },
  },
};
</script>

<template>
  <div
    id="page-wrapper"
    class="w-full h-full bg-gradient-to-r from-gray-900 to-indigo-900"
  >
    <div class="flex w-full h-full">
      <div class="w-1/2 px-20 py-20">
        <h3 class="text-4xl text-indigo-500 select-none">
          Bilgileriniz başkalarıyla paylaşılmayacak,
        </h3>
      </div>

      <div
        id="basket-wrapper"
        class="w-1/2 mt-10 bg-cover rounded-l-lg duration-300 text-center align-middle justify-center text-gray-400"
        @mousemove="add_border"
        @mouseout="remove_border"
        :style="get_basket_bg('basket-bg.jpg')"
      >
        <div v-for="(item, index) in getBasket" :key="index">
          <div
            class="w-96 h-40 py-5 m-auto text-center border-dashed border-b-2 border-gray-500"
          >
            <h3 class="text-3xl">{{ item.name }}</h3>
            <div class="flex m-auto py-10">
              <div class="m-auto">{{ item.price }}</div>
              <button
                @click="remove_product"
                class="w-20 rounded m-auto border-2 border-pink-600 hover:bg-pink-600 duration-300"
              >
                Kaldır
              </button>
            </div>
          </div>
        </div>

        <div class="w-96 mt-32 m-auto text-center">
          <h3 class="text-3xl">Alışveriş Özeti</h3>
          <div class="flex w-96 py-10">
            <h3 class="m-auto">Toplam Fiyat</h3>
            <h3 class="m-auto">{{ totalPrice }} Tl</h3>
          </div>

          <button
            v-if="this.getBasket.length != 0"
            id="buy-btn"
            class="w-full rounded m-auto border-2 border-pink-600 hover:bg-pink-600 duration-300"
          >
            <router-link to="/purchaseform"> Satın Al </router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
