<template lang="pug">
  .home
    .note(v-for="note, index in notes")
      .title(@click="note.show = !note.show") {{index+1}}) {{note.name}} 
        button(@click="deleteNote(note.id)") delete
      .desc(v-show="note.show") {{note.notes}}
        
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      notes: []
    }
  },
  methods: {
    async deleteNote(id) {
      const req = await window.fetch(`/api/delete?id=${id}`)
      const res = await req.json()
      await this.getNotes()
    },
    async getNotes() {
      const req = await window.fetch('/api')
      const res = await req.json()
      this.notes = res.map(note => {
        return {
          ...note,
          show: false
        }
      })
    }
  },
  mounted() {
    this.getNotes()
  }
}
</script>

<style lang="sass">
  .home
    max-width: 400px
    margin: 0 auto
    text-align: left

  .title
    font-weight: bold
    font-size: 20px
    cursor: pointer

    &:hover
      color: brown

  .note
    padding: 10px

</style>
