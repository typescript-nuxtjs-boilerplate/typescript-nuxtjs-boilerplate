<template lang="pug">
  section
    ul
      li(v-for='todo in todos', :key='todo.id')
        input(type='checkbox', :checked='todo.done', @change='toggle(todo)')
        span(:class='{ done: todo.done }') {{ todo.text }}
      li
        input(placeholder='What needs to be done?', @keyup.enter='addTodo')
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { IState, ITodo } from '@/store/todos'
import { HTMLElementEvent } from '@/interface/HTMLElementEvent'

@Component
export default class extends Vue {
  get todos(): IState {
    return this.$store.state.todos.list
  }
  addTodo(e: HTMLElementEvent<HTMLInputElement>) {
    this.$store.commit('todos/add', e.target.value)
    e.target.value = ''
  }
  toggle(todo: ITodo) {
    this.$store.commit('todos/toggle', todo)
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
