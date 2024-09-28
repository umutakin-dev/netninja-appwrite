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

export async function getNotes(): Promise<Note[]> {
  const response = await databases.listDocuments("notesApp", "notes");

  console.log(response.documents);

  const notes: Note[] = response.documents.map((doc) => ({
    $id: doc.$id,
    $createdAt: doc.$createdAt,
    content: doc.content,
  }));

  return notes;
}

export async function deleteNote(noteId: string) {
  await databases.deleteDocument("notesApp", "notes", noteId);
}
