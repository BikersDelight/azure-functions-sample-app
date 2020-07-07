import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async (context: Context, _: HttpRequest) => {
  context.log("HTTP trigger getData processed a request.");

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: { data: ["test1", "test2", "test3", "test4", "test5"] },
  };
};

export default httpTrigger;
