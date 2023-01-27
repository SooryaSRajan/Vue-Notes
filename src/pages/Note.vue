<template>
  <h1>
    {{ noteTitle }}
  </h1>
  <span>
    Date: {{ date }}
  </span>
  <p>
    {{ note }}
  </p>
</template>

<script>
export default {
  name: "ShowNote",
  data() {
    return {
      noteTitle: this.$route["query"].noteTitle,
      date: this.$route["query"].date,
      note: this.$route["query"].note,
    }
  },
}
</script>

<style scoped>

p {
  margin-left: 18px;
  margin-right: 18px;
  text-align: justify;
}

span {
  margin-left: 18px;
  margin-right: 18px;
  text-align: left;
  color: #7f8c8d;
  font-size: 12px;
}

</style>