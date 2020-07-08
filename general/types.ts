export enum EState {
  done = "done",
  todo = "todo",
}

export type TTodo = {
  id: string;
  name: string;
  state: EState;
};
