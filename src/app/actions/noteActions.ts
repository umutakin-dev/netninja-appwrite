import { ID } from "appwrite";
import { databases } from "@/utils/appwrite";

export async function addNote(content: string): Promise<Note> {
  const newNote = { content: content };
  const response = await databases.createDocument(
    "notesApp",
    "notes",
    ID.unique(),
    newNote
  );

  const note = {
    $id: response.$id,
    $createdAt: response.$createdAt,
    content: response.content,
  };

  return note;
}
