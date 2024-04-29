import { connectToDB } from "@utils/database";
import Note from "@models/note";

//GET
export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const notes = await Note.findById(params.id).populate("creator");

    if (!notes)
      return new Response(JSON.stringify("Notes not found.", { status: 404 }));

    return new Response(JSON.stringify(notes, { status: 200 }));
  } catch (error) {
    return new Response(
      JSON.stringify("Failed to fetch all notes", { status: 500 })
    );
  }
};

//PATCH
export const PATCH = async (request, { params }) => {
  const { note, tag } = await request.json();
  try {
    await connectToDB();

    const existingNote = await Note.findById(params.id);

    if (!existingNote) return new Response("Note not found.", { Status: 404 });

    existingNote.note = note;
    existingNote.tag = tag;

    await existingNote.save();

    return new Response(JSON.stringify(existingNote), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify("Failed to update the note."), {
      status: 500,
    });
  }
};

//DELETE

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    await Note.findByIdAndDelete(params.id);

    return new Response(JSON.stringify("Note is deleted succesffuly."), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify("Failed to delete the note."), {
      status: 500,
    });
  }
};
