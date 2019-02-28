export interface IState {
  list: (ITodo)[];
}

export interface ITodo {
  id: number;
  text: string;
  done: boolean;
}

export const state = (): IState => ({
  list: []
})

let counter = 0;

export const mutations = {
  add (state: IState, text: string) {
    state.list.push({
      id: counter++,
      text: text,
      done: false
    })
  },
  remove (state: IState, { todo }: { todo: ITodo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  // @ts-ignore
  toggle (state: IState, todo: ITodo) {
    todo.done = !todo.done
  }
}
