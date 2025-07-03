import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

export default async function Notes() {
  const initialQuery = "";
  const initialPage = 1;

  const initialData = await fetchNotes(initialQuery, initialPage);

  return (
    <NotesClient
      initialQuery={initialQuery}
      initialPage={initialPage}
      initialData={initialData}
    />
  );
}
