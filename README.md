# TODO's API

[Postman Collection](postman.collection.json)

## Get up and running

First set up a cosmos db in Azure with name `todossampleapp` and in there a container with name `todoCollection`.

Create a file named `local.settings.json` in the root folder of the project with following contents:

```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "cosmos_connection_string": "Add cosmos db connection string here",
    "cosmos_endpoint": "Add cosmos db endpoint here",
    "cosmos_key": "Add cosmos db key here"
  }
}
```

Then perform following commands in terminal

```bash
yarn
yarn start

or

npm install
npm start
```
