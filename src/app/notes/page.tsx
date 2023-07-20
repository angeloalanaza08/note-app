import Link from "next/link";
import CreateNote from "./[id]/CreateNote";

async function getNotes() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records",
    { cache: "no-store" }
  );

  const data = await res.json();
  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div className="m-6">
      <h1 className="m-6 text-center text-2xl font-semibold uppercase">
        Note Archive
      </h1>
      <CreateNote />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-auto">
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}

function Note({ note }: any) {
  const { id, Title, Content, Date_Created } = note || {};

  const truncate = (str: string, length: number) =>
    str.length > length ? str.substring(0, length) + "..." : str;

  return (
    <Link href={`/notes/${id}`}>
      <div className="bg-gray-900 p-6 rounded-md min-h-full">
        <h2 className="text-xl font-semibold">{Title}</h2>
        <h5 className="my-6 overflow-y-hidden break-words">
          {truncate(Content, 250)}
        </h5>
        <p>{Date_Created}</p>
      </div>
    </Link>
  );
}
