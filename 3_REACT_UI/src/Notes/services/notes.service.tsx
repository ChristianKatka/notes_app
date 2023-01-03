import { environment } from "../../environments/environment";

export async function getNotes() {
  const response = await fetch(`${environment.apiBaseUrl}/note`).then((res) =>
    res.json()
  );
  console.log(response);

  return response;
}
