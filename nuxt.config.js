export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'timepicker',
    htmlAttrs: {
      lang: 'en'
    },
    script: [{
      src: "https://telegram.org/js/telegram-web-app.js"
    }, ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    'static/fonts/ALS-hauss/stylesheet.css',
    'static/fonts/Rubik/stylesheet.css',
    'static/fonts/icomoon/style.css',
    'static/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    {
      src: "@/plugins/VueScroll.js",
      ssr: false
    },
    { src: "./plugins/telegram.js", mode: "client" },
    {
      src: "@/plugins/error.js",
      mode: "client"
    },
    {
      src: "./plugins/grafik.js",
      mode: 'client'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/dayjs'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://m.bot-marketing.com/api/public/tunnelSessions',
  },
  toast: {
    position: 'top-center',
    duration: 3000,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
