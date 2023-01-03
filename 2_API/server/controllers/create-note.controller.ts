import { Context, Next } from "koa";
import { v4 as uuidv4 } from "uuid";
import { Note } from "../models/note.model";

import { dynamodbCreateNote } from "../services/dynamodb/create-note.service";

export const createNote = async (ctx: Context, next: Next) => {
  const body = ctx.request.body as Note;

  const note = { ...body, id: uuidv4() };
  console.log(note);

  await dynamodbCreateNote(note);

  ctx.response.body = note;
  await next();
};
