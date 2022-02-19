<script>
// @ is an alias to /src

// importer
import { Home } from '../libs/importer';
export default {
  name: 'Homee',
  components: {
    Home: Home(),
  },
};
</script>

<template>
  <div class="home">
    <Home></Home>
  </div>
</template>
