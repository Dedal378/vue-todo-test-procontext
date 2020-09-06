<template>
  <div>
    <label>
      <span>Status Filter</span>
      <select v-model="filter">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not Completed</option>
      </select>
    </label>

    <label for="search">Find your note
      <input v-model.trim="search" id="search" type="text" placeholder="text here">
    </label>
  </div>
</template>

<script>
  export default {
    name: "Filters",
    props: {
      filter: {
        type: String,
        default: 'all'
      },
      search: {
        type: String
      }
    },
  }
</script>

<style scoped lang="scss">
  label {
    width: 100%;
    margin-bottom: 2rem;

    & span {
      margin: 0 10px;
    }
  }
</style>
