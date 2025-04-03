import { useSelector } from "react-redux";
import NoteCalendar from "../features/freeNote/NoteCalendar";
import TextEditor from "../features/freeNote/TextEditor";
import { formatDate } from "../utils/helper";

function NotesPage() {
  const { selectedDate } = useSelector((store) => store.freeNote);

  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold">Daily Free-Note</h1>
      <div className="flex gap-10">
        <div className="w-full">
          <span className="mb-1 inline-block text-sm font-bold">
            {formatDate(selectedDate)} Free-note:
          </span>
          <TextEditor />
        </div>
        <div className="mt-6 w-full max-w-80">
          <NoteCalendar />
        </div>
      </div>
    </div>
  );
}

export default NotesPage;
