import Router from "koa-router";
import { createNote } from "../controllers/create-note.controller";
import { getNotes } from "../controllers/get-notes.controller";

const noteRouter = new Router({ prefix: "/note" });
noteRouter.get("/", getNotes);
noteRouter.post('/', createNote);

export { noteRouter };
