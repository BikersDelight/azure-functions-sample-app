import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { TTodo, EState } from "../general/types";

const getTodos: AzureFunction = async (context: Context, req: HttpRequest) => {
  context.log("HTTP trigger getTodos processed a request.");

  if (
    context.bindings.inputDocuments &&
    context.bindings.inputDocuments.length > 0
  ) {
    const todos = context.bindings.inputDocuments;
    let resultArray = todos.map((todo: TTodo) => {
      return {
        id: todo.id,
        name: todo.name,
        state: todo.state,
      };
    });
    const state = req.query.state as EState;
    if (state && state.length > 0) {
      resultArray = resultArray.filter((todo: TTodo) => todo.state === state);
    }
    context.res = {
      body: {
        data: resultArray,
      },
    };
  } else {
    context.res = {
      status: 404,
      body: { code: 404, message: "No todo's found" },
    };
  }
  context.done();
};

export default getTodos;
