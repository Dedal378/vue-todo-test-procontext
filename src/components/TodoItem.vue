<template>
  <section class="card" draggable="true">
    <div class="card-text">
      <div class="cover">
        <strong class="strong" :class="{'done': this.todo.completed}"> {{ index + 1 }} </strong>
        <div class="back-image"></div>
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
  .card {
    position: relative;
    display: block;
    margin: 1rem;
    padding: 0.2rem;
    //noinspection CssInvalidFunction
    /*max-width: clamp(300px, 100%, 370px);*/
    width: 310px;
    text-align: left;
    background: #fff;
    border-radius: 25px;
    box-shadow: 0 5px 10px var(--color-shadow);
    overflow: hidden;

    &:hover {
      box-shadow: 0 15px 20px var(--color-shadow);
      transform: scale(1.01);
    }
  }

  .card h2 {
    height: 100px;
    margin: 0;
    padding: 0 0.5rem;
    overflow: auto;
    /*white-space: nowrap;*/
    text-overflow: ellipsis;
        //noinspection CssInvalidFunction
    font-size: clamp(0.5rem, 3vw, 1rem);
  }

  .cover {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 10px;
    margin-left: 10px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;

    .back-image {
      width: 150%;
      height: 150%;
      margin-top: -25px;
      /*margin-left: -10px;*/
      background: url(../assets/logo.png) -20px -20px / contain no-repeat;
      transform: rotate(-45deg);
      z-index: 0;
    }
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
      box-shadow: 0 1px 5px var(--color-shadow);
      z-index: 10;


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
    width: 30px;
    height: 30px;
    margin: 0 auto;
    z-index: 1;
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
