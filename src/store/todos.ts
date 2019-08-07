export interface TodoInterface {
  id: number
  text: string
  done: boolean
}

export interface StateInterface {
  list: (TodoInterface)[]
}

export const state = (): StateInterface => ({
  list: []
})

let counter = 0

export const mutations = {
  add(state: StateInterface, text: string): void {
    state.list.push({
      id: counter++,
      text,
      done: false
    })
  },
  remove(state: StateInterface, { todo }: { todo: TodoInterface }): void {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  // @ts-ignore
  toggle(state: StateInterface, todo: TodoInterface): void {
    todo.done = !todo.done
  }
}
