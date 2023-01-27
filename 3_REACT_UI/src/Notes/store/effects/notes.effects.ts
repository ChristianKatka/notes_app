import { put, takeEvery, call } from "redux-saga/effects";
import { ResponseGenerator } from "../../models/response-generator.model";
import { NotesService } from "../../services/notes.service";
import {
  notesGet,
  notesGetSuccess,
  notesGetFailed,
} from "../reducers/notes.reducer";

function* notesGetEffect() {
  try {
    const notes: ResponseGenerator = yield call(NotesService.getNotes);
    yield put(
      notesGetSuccess({
        notes,
      })
    );
  } catch (errorMessage) {
    yield put(notesGetFailed({ errorMessage }));
  }
}

function* watchNotesActions() {
  yield takeEvery(notesGet, notesGetEffect);
  // yield takeEvery(todosDelete, todosDeleteEffect);
}

export default watchNotesActions;
