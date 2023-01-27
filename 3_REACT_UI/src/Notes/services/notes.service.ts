import { environment } from "../../environments/environment";

// export async function getNotes() {
//   const notes = await fetch(`${environment.apiBaseUrl}/note`).then((res) =>
//     res.json()
//   );

//   return notes;
// }

export class NotesService {
  static getNotes() {
    const notes = fetch(`${environment.apiBaseUrl}/note`).then((res) =>
      res.json()
    );

    return notes;
  }
}
