export enum EState {
  done = "done",
  todo = "todo",
}

export type TTodo = {
  id: String;
  name: String;
  state: EState;
};
