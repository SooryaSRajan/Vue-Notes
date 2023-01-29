<template>
  <h1>
    Update Notes
  </h1>
  <div class="list">
    <h5 style="text-align: center" v-if="items.length === 0">No Notes yet</h5>
    <ListElement v-for="(item, index) in items" :key="index"
                 @click="updateNote(item.noteDate, item.noteTitle, item.note, item.id)" :id="item.id"
                 :note-title="item.noteTitle"
                 :date="item.noteDate"></ListElement>
  </div>
</template>

<script>
import ListElement from "@/components/ListElement";

export default {
  name: "UpdateNotes",
  components: {ListElement},
  mounted() {
    this.axios.get("/notes/getNotes").then((response) => {
      console.log(response.data)
      this.items = response.data
    })
  },
  data() {
    return {
      items: []
    }
  },
  methods: {
    updateNote(date, title, note, id) {
      console.log(date, title, note, id)
      this.$router.push({path: "/create", query: {noteTitle: title, note: note, date: date, id: id}})
    }
  }
}
</script>

<style scoped>
.list {
  margin-left: 18px;
  margin-right: 18px;
}

</style>