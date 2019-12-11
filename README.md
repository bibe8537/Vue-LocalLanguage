# vue-international

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Vue-i18n Plugin for local languages 
npm install vue-i18n --save

--Create a folder called plugins in your src folder. Create a file called i18n.js inside the plugins folder(ref: https://www.freecodecamp.org/news/how-to-add-internationalization-to-a-vue-application-d9cfdcabb03b/)
--The first step is to tell Vue to use the plugin. In the i18n.js file enter the following:
import Vue from 'vue';import VueI18n from 'vue-i18n';Vue.use(VueI18n);

--In main.js write-
import i18n from '@/plugins/i18n';

### The vue-flag-icon package provides a collection of all country flags in SVG.
npm install vue-flag-icon --save
-- In main.js include
import FlagIcon from 'vue-flag-icon'; Vue.use(FlagIcon)





