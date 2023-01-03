import { docClient } from "../../instances/aws";
import { NOTES_TABLE } from "../../constants";

export const dynamodbGetNotes = async () =>
  await docClient
    .scan({
      TableName: NOTES_TABLE,
    })
    .promise()
    .then((res) => res.Items);
