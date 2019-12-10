<template>
  <div class="greet">
    <div class="body">
    <p>This is good service</p>
    </div>
    <div class="footer">
    <button type="button">{{ $t('buttons.save') }}</button>
    </div>
    <h3>Welcome to our online Shop</h3>
    <button>Explore</button>
    </div>
</template>

<script>
export default {
  name: 'Greetings',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
