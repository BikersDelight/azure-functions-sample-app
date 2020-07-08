import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { v4 as uuidv4 } from "uuid";
import { EState } from "../general/types";

const createTodo: AzureFunction = async (
  context: Context,
  req: HttpRequest
) => {
  context.log("HTTP trigger createTodo processed a request.");
  const name = req.body && (req.body.name as String);
  if (name && name.length > 0) {
    const result = {
      id: uuidv4(),
      name,
      state: EState.todo,
    };
    context.bindings.outputDocument = result;
    context.res = {
      status: 201,
      body: result,
    };
  } else {
    context.res = {
      status: 400,
      body: { code: 400, message: "Please enter a valid todo name" },
    };
  }
  context.done();
};

export default createTodo;
