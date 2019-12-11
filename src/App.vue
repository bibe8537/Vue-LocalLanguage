<template>
  <div id="app">
    <div>
    <ChangeLanguage></ChangeLanguage>
    <button
    v-for="entry in languages" 
    :key="entry.title" 
    @click="changeLocale(entry.language)">        
    <flag :iso="entry.flag" v-bind:squared=false /> 
    {{entry.title}}
    </button>
    </div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import i18n from '@/plugins/i18n';
import ChangeLanguage from './components/ChangeLanguage.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    ChangeLanguage
  },
  data() {
    return {
      languages: [ // used only to create buttons 
        { flag: 'us', language: 'en', title: 'English' },
        { flag: 'de', language: 'de', title: 'Deutsch' }       
      ],
      langs: ['en', 'de']    
    };
  },
  // This method will change the locale to the language on the button the user clicks
  methods: {
    changeLocale(localeLang) {
      i18n.locale = localeLang; 
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  padding: 15px;    
  border: 1px solid green;    
  font-size: 18px;    
  margin: 15px;
  }

</style>
