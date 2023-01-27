<template>
  <div class="list-root">
    <div class="list-element" @click="openNote(date, noteTitle, note)">
      <div class="col">
        {{ noteTitle }}
      </div>
      <div v-if="id" class="col">
        ID:{{ id }}
      </div>
      <div class="col">
        {{ date }}
      </div>
    </div>
    <div v-if="deleteFunction" class="button-wrapper">
      <button @click="deleteFunction(id)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash"
             viewBox="0 0 16 16">
          <path
              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
      </button>
    </div>
  </div>

</template>

<script>
export default {
  name: "ListElement",
  props: {
    noteTitle: String,
    date: String,
    id: String,
    note: String,
    deleteFunction: Function
  },
  methods: {
    openNote(date, title, note) {
      console.log(date, title, note)
      this.$router.push({path: "/note", query: {noteTitle: title, note: note, date: date}})
    },
  }
}
</script>

<style scoped>

.list-element {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0 3px 7px -3px;
  padding: 15px;
  border-radius: 15px;
  cursor: pointer;
}

.list-element:hover {
  background-color: #f1f2f6;
}

.list-root {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
}

button {
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0 3px 7px -3px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 100%;
}

button:hover {
  opacity: 0.8;
  background-color: #f1f2f6;
}

.button-wrapper {
  margin-left: 10px;
  text-align: center;
  justify-self: center;
  height: 50px;
}


</style>