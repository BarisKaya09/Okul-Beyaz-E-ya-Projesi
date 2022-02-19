<script>
export default {
  name: 'Home',

  created() {},

  mounted() {
    window.addEventListener('load', () => {
      const nav_links = document.querySelectorAll('#nav-links');
      nav_links.forEach(navlink => (navlink.style.animation = 'navLinks 2s'));

      const img = document.getElementById('img');
      img.classList.remove('hidden');
      img.style.animation = 'domLoading 2s';

      setTimeout(() => {
        const main_text = document.getElementById('main-text');
        main_text.classList.remove('hidden');
        main_text.style.animation = 'domLoading 2s';
      }, 1000);

      setTimeout(() => {
        const subtitle = document.getElementById('subtitle');
        subtitle.classList.remove('hidden');
        subtitle.style.animation = 'domLoading 2s';
      }, 2000);
    });
  },
};
</script>

<template>
  <div class="w-full px-20 bg-gradient-to-r from-gray-900 to-indigo-900">
    <div id="deneme"></div>
    <!-- <div class="w-full h-12 flex">
      <div class="w-1/2 m-5 p-1">
        <ul>
          <li
            id="nav-links"
            class="hover:bg-indigo-500 text-center p-1 rounded-full w-20 text-gray-300 select-none"
          >
            <router-link to="/">BemBeyaz</router-link>
          </li>
        </ul>
      </div>
      <div class="w-1/2 text-right">
        <ul class="flex ml-12">
          <li
            id="nav-links"
            class="m-5 hover:bg-indigo-500 text-center w-20 p-1 rounded-full text-gray-300 select-none"
          >
            <router-link to="/">Ana Sayfa</router-link>
          </li>
          <li
            id="nav-links"
            class="m-5 hover:bg-indigo-500 text-center w-20 p-1 rounded-full text-gray-300 select-none"
          >
            <router-link to="/products">Ürünler</router-link>
          </li>
          <li
            id="nav-links"
            class="m-5 hover:bg-indigo-500 text-center w-20 p-1 rounded-full text-gray-300 select-none"
          >
            <router-link to="/basket">Sepet</router-link>
          </li>
        </ul>
      </div>
    </div> -->

    <div class="flex">
      <div class="w-1/2 h-screen py-52">
        <h3 id="main-text" class="text-6xl text-indigo-500 select-none hidden">
          BemBeyaz,
        </h3>
        <p id="subtitle" class="mt-6 select-none text-xl text-purple-400 hidden">
          <span class="text-purple-500">Dünyanın</span> neresinde oturursanız oturun,
          ürünlerimiz dünyanın her yerine ulaşmaktadır.
        </p>
      </div>
      <div class="w-1/2 h-screen mt-16 select-none">
        <img
          class="bg-no-repeat bg-center hidden"
          id="img"
          src="../assets/19199531-removebg-preview.png"
        />
      </div>
    </div>
  </div>
</template>
