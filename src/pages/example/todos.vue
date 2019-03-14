<template lang="pug">
  section
    h1.title
      | todos
    ul
      li(v-for='todo in todos', :key='todo.id')
        input(type='checkbox', :checked='todo.done', @change='toggle(todo)')
        span(:class='{ done: todo.done }') {{ todo.text }}
      li
        input(placeholder='What needs to be done?', @keyup.enter='addTodo')
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { StateInterface, TodoInterface } from '@/store/todos'
import { HTMLElementEvent } from '@/interface/HTMLElementEvent'

@Component
export default class extends Vue {
  get todos(): StateInterface {
    return this!.$store.state.todos.list
  }

  addTodo(e: HTMLElementEvent<HTMLInputElement>) {
    this!.$store.commit('todos/add', e.target.value)
    e.target.value = ''
  }

  toggle(todo: TodoInterface) {
    this!.$store.commit('todos/toggle', todo)
  }

  public head() {
    return {
      title: 'todos'
    }
  }
}
</script>

<style lang="scss" scoped>
.done {
  text-decoration: line-through;
}
</style>
