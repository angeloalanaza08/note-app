async function getNotes(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    { next: { revalidate: 10 } }
  );
  const data = await res.json();
  return data;
}

export default async function NotePage({ params }: any) {
  const note = await getNotes(params.id);
  return (
    <div>
      <h1>notes/{note.id}</h1>
      <div className={note}>
        <h3>{note.Title}</h3>
        <h5>{note.Content}</h5>
        <p>{note.Date_Created}</p>
      </div>
    </div>
  );
}
