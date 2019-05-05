import pkg from './package'

export default {
  mode: 'spa',
  router: {
    base: '/BlownAwayFrontEnd/'
  },
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
      { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/bootstrap/dist/css/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css' },
      
    ],
    script: [
      { src: "//polyfill.io/v3/polyfill.min.js?features=es2015%2CMutationObserver", crossorigin: "anonymous"},
      { src: "//unpkg.com/vue@latest/dist/vue.min.js"},
      { src: "//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.js"}
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
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/app.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
  ],

  bootstrapVue: {
    bootstrapCSS: true,
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
  }
}
