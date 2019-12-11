  <template>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}.title`" :value="lang.language">
        <flag :iso="lang.flag" v-bind:squared=false /> {{ lang.title }}
      </option>
    </select>
  </div>
</template>
<script>

export default {
  data() {
    return {
      langs: [{ flag: 'us', language: 'en', title: 'English' },
        { flag: 'de', language: 'de', title: 'Deutsch' }  ]    
    };
  },
}
</script>

<style>

</style>


