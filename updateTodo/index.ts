import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { TTodo, EState } from "../general/types";

const updateTodo: AzureFunction = async (
  context: Context,
  req: HttpRequest
) => {
  context.log("HTTP trigger updateTodo processed a request.");

  const todoObject = context.bindings.inputDocuments[0] as TTodo;
  if (todoObject) {
    const state = req.body.state as EState;
    if (
      state &&
      state.length > 0 &&
      (state == EState.todo || state == EState.done)
    ) {
      todoObject.state = state;
    }
    context.bindings.outputDocument = todoObject;
    context.res = {
      body: {
        id: todoObject.id,
        name: todoObject.name,
        state: todoObject.state,
      },
    };
  } else {
    context.res = {
      status: 404,
      body: {
        code: 404,
        message: `No todo's with id "${context.bindings.id}" found`,
      },
    };
  }
  context.done();
};

export default updateTodo;
