<template>
  <!--    <label
          :class="{ done: todo.completed }"
          @change="todo.completed = !todo.completed"
      >
        <input
            type="checkbox"
        >
        <strong> {{ index + 1 }} </strong>
        {{ todo.title | upperCase }}
      </label>
      <button
          class="button__delete"
          @click="$emit('remove-todo', todo.id)"
      >
        &times;
      </button>-->

  <section class="card">
    <div class="card-text">
      <div class="cover">
        <strong class="strong" :class="{'done': this.todo.completed}"> {{ index + 1 }} </strong>
      </div>

      <div class="title-total">
        <h2>{{ todo.title | upperCase }}</h2>
        <div class="actions">
          <div class="icon-status">
            <small>{{ statusTodo }}</small>
            <svg @click="changedStatus" class="svg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" version="1.1" viewBox="0 0 32 32">
              <g transform="scale(2)">
                <circle :class="{ disable: !todo.completed}" class="circle__done" style="" cx="8" cy="8" r="7" />
                <path class="path__yes" style="fill: #fff" d="M 11.535,4.4 7.2928,8.6 4.4647,5.8 3.0506,7.2 5.8787,10.1 7.2928,11.5 12.949,5.8 Z" />
              </g>
            </svg>
          </div>
          <div class="icon-status">
            <small>delete</small>
            <svg @click="$emit('remove-todo', todo.id)" class="svg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" version="1.1" viewBox="0 0 32 32">
              <g transform="scale(2)">
                <circle class="circle__del disable" style="" cx="8" cy="8" r="7" />
                <rect style="fill:#fff" width="2" height="10" x="-.98" y="-16.29" transform="rotate(135)" />
                <rect style="fill:#fff" width="2" height="10" x="-12.29" y="-5.01" transform="rotate(-135)" />
              </g>
            </svg>
          </div>
          <div class="icon-status">
            <small>edit</small>
            <svg class="svg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" version="1.1" viewBox="0 0 32 32">
              <g transform="scale(2)">
                <circle class="circle__edit disable" cx="8" cy="8" r="7" />
                <path style="fill:#fff" d="M 13,8 H 11 A 3,3 0 0 1 8,11 3,3 0 0 1 5,8 3,3 0 0 1 8,5 V 6 L 11,4 8,2 V 3 A 5,5 0 0 0 3,8 5,5 0 0 0 8,13 5,5 0 0 0 13,8 Z" />
              </g>
            </svg>
          </div>
        </div>
      </div>

    </div>
  </section>
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
    methods: {
      changedStatus () {
        return this.todo.completed = !this.todo.completed
      },
      editTodo () {

      }
    },
    computed: {
      statusTodo () {
        if (this.todo.completed) {
          return 'done'
        } else {
          return 'undone'
        }
      }
    },
    filters: {
      upperCase (val) {
        return val.toUpperCase()
      },
    }
  }
</script>

<style scoped lang="scss">
  /*  div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      min-width: 10rem;
      min-height: 10rem;
      padding: .5rem;
      margin-bottom: 1rem;
      color: var(--color-green);
      border: 2px solid #e2e2e2;
      border-radius: 7px;
      box-shadow: 0 1px 5px var(--color-shadow);

      &:hover {
        color: var(--color-grey-blue);
        cursor: pointer;
      }

      & label {
        display: flex;
        align-items: center;
        margin-right: 0.5rem;
        text-align: left;
        cursor: pointer;

        & input, strong {
          margin-right: 1rem;
        }
      }
    }

    .button__delete {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: red;
      color: #fff;
      border-radius: 50%;
      font-weight: bold;
    }

    .done {
      text-decoration: line-through;
    }*/

  .card {
    margin: 0.5rem;
    //noinspection CssInvalidFunction
    max-width: clamp(300px, 100%, 370px);
    text-align: left;
    background: #fff;
    border-radius: 25px;
    box-shadow: 0 5px 10px var(--color-shadow);
  }

  .card h2 {
    margin: 0;
    padding: 0 1rem;
    //noinspection CssInvalidFunction
    font-size: clamp(0.5rem, 3vw, 1rem);
  }

  .cover {
    width: 100%;
    height: 100%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-image: url("https://m.media-amazon.com/images/S/aplus-media/vc/cab6b08a-dd8f-4534-b845-e33489e91240._CR75,0,300,300_PT0_SX300__.jpg");
    background-position: bottom center;
    background-size: cover;
    /*opacity: 0.7;*/

    .strong {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;
      margin: -5px;
      padding: 25px;
      font-size: 1.3rem;
      border-radius: 50%;
      background: #fff;

      &.done {
        color: #ffffff;
        background: red;
      }
    }
  }

  .title-total {
    display: grid;
    align-content: space-between;
    padding: 1em;
  }

  .card-text {
    display: grid;
    grid-template-columns: 1fr 2fr;
    min-height: 250px;
  }

  .card .desc {
    padding: 0.5rem 1rem;
    font-size: 12px;
  }

  .card .actions {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    padding: 0.5rem 1rem;
  }

  .card svg {
    width: 25px;
    height: 25px;
    margin: 0 auto;
  }

  .icon-status {
    display: flex;
    flex-direction: column;
    align-items: center;

    & small {
      font-size: 0.7rem;
    }
  }

  svg {
    cursor: pointer;

    & .circle__done.disable,
    .circle__del.disable,
    .circle__edit.disable,
    {
      fill: #ccc;
    }

    & .circle__done {
      fill: #4caf50;
    }

    & .circle__done.disable:hover {
      fill: #4caf50;
    }

    & .circle__del.disable:hover {
      fill: #f44336;
    }

    & .circle__edit.disable:hover {
      fill: #4c76af;
    }

  }
</style>
