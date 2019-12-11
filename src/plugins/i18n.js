// this file tells Vue to use the vue-i18n plugin and 
// provides Vue with a message object. this object has the translation for every language
import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

// const messages = { // The translation for each language in the message object is an object.
//     'en': {
//         welcomeMsg: 'Welcome to Your Vue.js App',
//         guide: 'For a guide and recipes on how to configure / customize this project,',        
//         checkout: 'check out the',        
//         plugins: 'Installed CLI Plugins',        
//         links: 'Essential Links',        
//         ecosystem: 'Ecosystem' 
//     },
//     'es': {
//         welcomeMsg: 'Bienvenido a tu aplicación Vue.js',
//         guide: 'Para una guía y recetas sobre cómo configurar / personalizar este proyecto,',   
//         checkout: 'revisar la',        
//         plugins: 'Plugins de CLI instalados',        
//         links: 'Enlaces esenciales',        
//         ecosystem: 'Ecosistema'  
//     }
// };

// // create a new localization object and tell Vue to use it. 
// const i18n = new VueI18n({
//     locale: 'en', // set locale  -- default  
//     fallbackLocale: 'es', // set fallback locale if there is problem showing selected language
//     messages, // set locale messages , it has our translations
// });

// export default i18n;

function loadLocaleMessages () {
    const locales = require.context('@/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages = {}
    locales.keys().forEach(key => {
      const matched = key.match(/([A-Za-z0-9-_]+)\./i)
      if (matched && matched.length > 1) {
        const locale = matched[1]
        messages[locale] = locales(key)
      }
    })
    return messages
  }
  
  export default new VueI18n({
    locale: process.env.VUE_APP_I18N_LOCALE || 'en',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'de',
    messages: loadLocaleMessages()
  })
