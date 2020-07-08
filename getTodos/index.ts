import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { TTodo } from "../general/types";

const getTodos: AzureFunction = async (context: Context, _: HttpRequest) => {
  context.log("HTTP trigger getData processed a request.");

  if (
    context.bindings.inputDocuments &&
    context.bindings.inputDocuments.length > 0
  ) {
    const todos = context.bindings.inputDocuments;
    context.res = {
      body: todos.map((todo: TTodo) => {
        return {
          id: todo.id,
          name: todo.name,
          state: todo.state,
        };
      }),
    };
  } else {
    context.res = {
      status: 404,
      body: { code: 404, message: "No todo's found" },
    };
  }
};

export default getTodos;
