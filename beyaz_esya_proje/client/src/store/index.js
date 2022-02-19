import { createStore } from 'vuex';

const state = {
  products: {
    fridge: [
      { name: 'BemBeyaz Hl-932ha', price: 5000, img: 'bzdlb1.png' },
      { name: 'BemBeyaz Hl-900ha', price: 4500, img: 'bzdlb3.png' },
      { name: 'BemBeyaz Hl-950ca', price: 6500, img: 'bzdlb4.png' },
      { name: 'BemBeyaz K-450a', price: 6300, img: 'bzdlb2.png' },
      { name: 'BemBeyaz K-500b', price: 6000, img: 'bzdlb5.png' },
      { name: 'BemBeyaz Z-800z', price: 10000, img: 'bzdlb6.png' },
    ],

    washing_machine: [
      { name: 'BemBeyaz P-500ea', price: 5500, img: 'cmsrmkn1.png' },
      { name: 'BemBeyaz P-600ea', price: 10500, img: 'cmsrmkn2.png' },
      { name: 'BemBeyaz Aı-700i', price: 9000, img: 'cmsrmkn3.png' },
      { name: 'BemBeyaz Aı-800i', price: 10500, img: 'cmsrmkn4.png' },
      { name: 'BemBeyaz Np-300z', price: 3500, img: 'cmsrmkn5.png' },
      { name: 'BemBeyaz Np-350z', price: 4500, img: 'cmsrmkn6.png' },
    ],

    dishwasher: [
      { name: 'BemBeyaz Pq-400cc', price: 4000, img: 'blskmkn1.png' },
      { name: 'BemBeyaz Pq-600cc', price: 9500, img: 'blskmkn2.png' },
      { name: 'BemBeyaz Z-350x', price: 3500, img: 'blskmkn3.png' },
      { name: 'BemBeyaz Z-400x', price: 4100, img: 'blskmkn4.png' },
      { name: 'BemBeyaz L-400u', price: 4250, img: 'blskmkn5.png' },
      { name: 'BemBeyaz L-600cc', price: 10000, img: 'blskmkn6.png' },
    ],
  },

  basket: [],
};
const getters = {
  getProducts: function (state) {
    return state.products;
  },

  getBasket: function (state) {
    return state.basket;
  },
};
const mutations = {
  setBasket: function (state, product) {
    if (typeof product === 'object' || !Array.isArray(product)) {
      state.basket.push(product);
    }
  },

  setProductInBasket: function (state, new_basket) {
    // eğer new_basket bir array ise
    if (Array.isArray(new_basket)) {
      // state deki basket propertisinin değerini gönderilen new_basket arrayine eşitle
      state.basket = new_basket;
    }
  },
};
const actions = {
  updateBasket: function ({ commit }, product) {
    if (typeof product === 'object' || !Array.isArray(product)) {
      commit('setBasket', product);
    }
  },

  removeProductInBasket: function ({ commit }, new_basket) {
    commit('setProductInBasket', new_basket);
  },
};

const store = createStore({
  state,
  getters,
  mutations,
  actions,
});

export default store;
