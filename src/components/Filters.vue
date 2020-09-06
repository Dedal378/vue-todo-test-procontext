<template>
  <label>
    <span>Status Filter</span>
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>
  </label>
</template>

<script>
  export default {
    name: "Filters",
    props: {
      filter: {
        type: String,
        default: 'all'
      },
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
