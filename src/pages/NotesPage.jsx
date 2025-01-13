import TextEditor from "../features/freeNote/TextEditor";

function NotesPage() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold">Daily Free-Note</h1>
      <div className="w-2/3">
        <span className="mb-1 inline-block text-sm font-bold">
          Today Free-note:
        </span>
        <TextEditor />
      </div>
    </div>
  );
}

export default NotesPage;
