import { docClient } from "../../instances/aws";
import { NOTES_TABLE } from "../../constants";

export const dynamodbCreateNote = (note) =>
  docClient
    .put({
      TableName: NOTES_TABLE,
      Item: note,
    })
    .promise();
