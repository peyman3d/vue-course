<template>
  <div>
    <page-header />
    <nuxt />
    <page-footer />
  </div>
</template>

<script>
  import PageHeader from '@/components/layout/Header';
  import PageFooter from '@/components/layout/Footer';

  export default {
    name: 'DefaultLayout',

    components: {
      PageHeader,
      PageFooter,
    },
  }
</script>
