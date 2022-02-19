<script>
import { Products } from '../libs/importer';

export default {
  name: 'Productss',
  components: {
    Products: Products(),
  },
};
</script>

<template>
  <div>
    <Products></Products>
  </div>
</template>
