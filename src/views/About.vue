<template lang="pug">
  div
    form(@submit.prevent="submit")
      .input
        input(type="text" placeholder="name" v-model="name")
      .input
        textarea(v-model="notes" placeholder="notes" rows="10")
      .input
        button(type="submit") SUBMIT

</template>
<script>
// @ is an alias to /src

export default {
  name: 'about',
  data() {
    return {
      name: '',
      notes: ''
    }
  },
  methods: {
    async submit() {
      const req = await window.fetch('/api/insert', {
        headers: {
          'Content-Type': 'application/json',
        },        
        method: 'POST',
        body: JSON.stringify({
          name: this.name,
          notes: this.notes
        }),
      })


    }
  },
}
</script>
<style lang="sass">
  .input
    padding-top: 20px
    font-size: 20px
    max-width: 800px
    margin: 0 auto
    
    input,textarea
      font-size: 20px
      width: 100%

</style>