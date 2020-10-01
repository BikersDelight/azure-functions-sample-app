import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { CosmosClient } from "@azure/cosmos";

const deleteTodo: AzureFunction = async (
  context: Context,
  req: HttpRequest
) => {
  context.log("HTTP trigger deleteTodo processed a request.");

  const todoId = context.bindingData.id as string;
  if (todoId && todoId.length > 0) {
    try {
      const client = new CosmosClient({
        endpoint: process.env.cosmos_endpoint,
        key: process.env.cosmos_key,
      });
      const container = client
        .database("todossampleapp")
        .container("todoColletion");
      const item = container.item(todoId, todoId);
      await item.delete();
      context.res = {
        status: 200,
      };
    } catch {
      context.res = {
        status: 404,
        body: {
          code: 404,
          message: `No todo's with id "${todoId}" found`,
        },
      };
    }
  } else {
    context.res = {
      status: 400,
      body: {
        code: 400,
        message: `Please pass a valid todo id`,
      },
    };
  }
  context.done();
};

export default deleteTodo;
