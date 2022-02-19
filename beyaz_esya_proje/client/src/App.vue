<template>
  <div class="w-full h-12 flex px-20 bg-gradient-to-r from-gray-900 to-indigo-900">
    <div class="fixed h-full w-56 right-0 top-14" id="message-box-wrapper"></div>

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
  </div>

  <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  <router-view />
</template>

<style>
#app {
  font-family: 'Roboto', sans-serif;
}
</style>
