<template>
  <li>
    <span :class="{ done: todo.completed }">
      <input
          type="checkbox"
          @change="todo.completed = !todo.completed"
      >
      <strong> {{ index + 1 }} </strong>
      {{ todo.title | upperCase }}
    </span>
    <button
        class="button__delete"
        @click="$emit('remove-todo', todo.id)"
    >
      &times;
    </button>
  </li>
</template>

<script>
  export default {
    name: "TodoItem",
    props: {
      todo: {
        type: Object,
        required: true,
      },
      index: Number,
    },
    filters: {
      upperCase(val){
        return val.toUpperCase()
      },
    }
  }
</script>

<style scoped lang="scss">
  li {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;

    &:hover {
      color: var(--color-grey-blue);
      cursor: pointer;
    }
  }

  .button__delete {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    background-color: red;
    color: #fff;
    border-radius: 50%;
    font-weight: bold;
  }

  .done {
    text-decoration: line-through;
  }
</style>
