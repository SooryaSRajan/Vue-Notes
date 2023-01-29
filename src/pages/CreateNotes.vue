<template>
  <div class="root">
    <h1>
      Create Note
    </h1>
    <span>
    </span>
    <form @submit="pushNote"
          action="/<URL>"
          method="post"
          :novalidate="true">
      <input type="text" placeholder="Note Title" :value="noteTitle"/>
      <textarea placeholder="Note" :value="note"/>
      <button type="submit">
        {{ updateNote ? "Update Note" : "Create Note" }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateNotes",
  data() {
    return {
      updateNote: false,
      noteTitle: this.$route["query"].noteTitle ?? "",
      note: this.$route["query"].note ?? "",
      id: this.$route["query"].id ?? "",
    }
  },
  mounted() {
    if (this.id !== "") {
      this.updateNote = true
    }
  },
  methods: {
    pushNote(e) {
      e.preventDefault();
      let noteTitle = e.target[0].value;
      let note = e.target[1].value;

      let error = false

      if (noteTitle === "") {
        e.target[0].style.border = "1px solid #ff0000";
        error = true
      } else {
        e.target[0].style.border = "none";
      }


      if (note === "") {
        //border you idiot, not backgorund color
        e.target[1].style.border = "1px solid #ff0000";
        error = true
      } else {
        e.target[1].style.border = "none";
      }

      console.log(new Date().toLocaleDateString())

      if (!error) {

        if (this.updateNote) {
          this.axios.put("/notes/updateNote", {
            noteTitle: noteTitle,
            note: note,
            id: this.id
          }).then(() => {
            alert("Note Updated")
            this.$router.push({path: "/"})
          }).catch((err) => {
            alert("Error updating note: " + err)
          })

        } else {

          let date = new Date().toLocaleDateString()
          date = date.split("/")
          date = date[1] + "-" + date[0] + "-" + date[2]

          this.axios.post("/notes/addNote", {
            noteTitle: noteTitle,
            note: note,
            noteDate: date,
          }).then(() => {
            alert("Note Created")
            this.$router.push({path: "/"})
          }).catch((err) => {
            alert("Error creating note: " + err)
          })

        }

        return true
      } else {
        return false
      }

    }
  }
}
</script>

<style scoped>

.root {
  width: 100%;
  height: 70%;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

input, textarea {
  box-shadow: rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0 3px 7px -3px;
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  border: none;
  border-radius: 10px;
}

button {
  box-shadow: rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0 3px 7px -3px;
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  border: none;
  border-radius: 10px;
  background-color: #5b5b5b;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

button:hover {
  background-color: #4d4d4d;
  opacity: 0.8;
}

textarea {
  flex: 1;
}

</style>