import Calendar from "react-calendar";
import { useDispatch } from "react-redux";
import { setSelectedDate } from "./freeNoteSlice";
import { formatLocalDate } from "../../utils/helper";

function NoteCalendar() {
  const dispatch = useDispatch();
  return (
    <Calendar
      calendarType="islamic"
      className="habit-calendar"
      onClickDay={(date) => dispatch(setSelectedDate(formatLocalDate(date)))}
    />
  );
}

export default NoteCalendar;
