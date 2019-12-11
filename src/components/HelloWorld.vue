<template>
  <div class="hello">
    <div>
      <button v-on:click="showComponent = !showComponent">
        Load Greetings
      </button>
      <div v-show="showComponent">
        <greetings></greetings>
      </div>
    </div>
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <h1>{{ $t("welcomeMsg") }}</h1>
    <p>{{ $t("guide") }}<br /></p>
    <p>{{ $t("checkout") }}</p>
    <h3>{{ $t("ecosystem") }}</h3> -->

    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import Greetings from "./Greetings.vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    'greetings': Greetings
  },
  data() {
    return {
      showComponent: false
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
