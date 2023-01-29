<template>
  <h1>
    Notes
  </h1>
  <div class="list">
    <h5 style="text-align: center" v-if="items.length === 0">No Notes yet</h5>
    <ListElement v-for="(item, index) in items" :delete-function="deleteNote" :key="index" :note="item.note"
                 :id="item.id" :note-title="item.noteTitle"
                 :date="item.noteDate"></ListElement>
  </div>
</template>

<script>
import ListElement from "@/components/ListElement";

export default {
  name: "ViewNotes",
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
    deleteNote(id) {
      console.log("delete", id)
      if (confirm("Are you sure you want to delete this note?")) {
        this.axios.delete(`/notes/deleteNote/${id}`).then(() => {
          this.items = this.items.filter(note => note.id !== id)
        }).catch((err) => {
          alert("Error deleting note: " + err)
        });
      }

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