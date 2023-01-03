import { DocumentClient } from "aws-sdk/clients/dynamodb";

export const docClient = new DocumentClient({
  region: "eu-west-1",
});
