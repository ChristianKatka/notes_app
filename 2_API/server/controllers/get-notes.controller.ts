import { Context, Next } from "koa";
import { dynamodbGetNotes } from "../services/dynamodb/get-notes.service";

export const getNotes = async (ctx: Context, next: Next) => {
  const user = await dynamodbGetNotes();

  ctx.response.body = user;
  await next();
};
