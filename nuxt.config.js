const pkg = require('./package')


module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/linearicons.css',
    '@/assets/css/bootstrap.css',
    '@/assets/css/font-awesome.min.css',
    '@/assets/css/animate.min.css',
    '@/assets/css/main.css',
    '@/assets/css/custom.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/markdownit',
  ],

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },

  router: {
    base: '/vue-course/',
  },

  generate: {
    dir: 'docs',
    routes: () => {
      return [
        '/blog/single/diary',
      ]
    }
  },
}
